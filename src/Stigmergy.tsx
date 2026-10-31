import { useEffect, useRef } from 'react';

/* A physarum-style stigmergy simulation.
   Agents sense a shared trail map, steer toward stronger trails, and deposit
   their own. Trails diffuse and decay, so the network keeps re-forming.
   Rendered in greyscale on a low-resolution grid and scaled up. */

const SCALE = 2; // one sim cell = 3 css px
const SENSOR_ANGLE = 0.4;
const SENSOR_DIST = 12;
const TURN = 0.4;
const STEP = 1;
const DEPOSIT = 1;
const DECAY = 0.82;

export default function Stigmergy() {
	const ref = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = ref.current!;
		const ctx = canvas.getContext('2d')!;
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		let w = 0, h = 0, trail = new Float32Array(0), next = new Float32Array(0);
		let ax = new Float32Array(0), ay = new Float32Array(0), ah = new Float32Array(0);
		let img: ImageData;
		let raf = 0;
		const mouse = { x: -1, y: -1 };

		function setup() {
			w = Math.max(1, Math.floor(window.innerWidth / SCALE));
			h = Math.max(1, Math.floor(window.innerHeight / SCALE));
			canvas.width = w;
			canvas.height = h;
			trail = new Float32Array(w * h);
			next = new Float32Array(w * h);
			const n = Math.min(45000, Math.floor(w * h * 0.12));
			ax = new Float32Array(n); ay = new Float32Array(n); ah = new Float32Array(n);
			// scatter agents; the network emerges within a second or two
			for (let i = 0; i < n; i++) {
				ax[i] = Math.random() * w;
				ay[i] = Math.random() * h;
				ah[i] = Math.random() * Math.PI * 2;
			}
			img = ctx.createImageData(w, h);
		}

		const sense = (x: number, y: number) => {
			const xi = ((x | 0) + w) % w, yi = ((y | 0) + h) % h;
			return trail[yi * w + xi];
		};

		function step() {
			const n = ax.length;
			for (let i = 0; i < n; i++) {
				const x = ax[i], y = ay[i], a = ah[i];
				const f = sense(x + Math.cos(a) * SENSOR_DIST, y + Math.sin(a) * SENSOR_DIST);
				const l = sense(x + Math.cos(a - SENSOR_ANGLE) * SENSOR_DIST, y + Math.sin(a - SENSOR_ANGLE) * SENSOR_DIST);
				const r = sense(x + Math.cos(a + SENSOR_ANGLE) * SENSOR_DIST, y + Math.sin(a + SENSOR_ANGLE) * SENSOR_DIST);
				let na = a;
				if (f < l && f < r) na += (Math.random() - 0.5) * 2 * TURN;
				else if (l > r) na -= TURN;
				else if (r > l) na += TURN;
				// the cursor acts as a food source the agents drift toward
				if (mouse.x >= 0) {
					const dx = mouse.x - x, dy = mouse.y - y;
					if (dx * dx + dy * dy < 900) na += Math.sin(Math.atan2(dy, dx) - na) * 0.2;
				}
				let nx = x + Math.cos(na) * STEP, ny = y + Math.sin(na) * STEP;
				if (nx < 0) nx += w; else if (nx >= w) nx -= w;
				if (ny < 0) ny += h; else if (ny >= h) ny -= h;
				ax[i] = nx; ay[i] = ny; ah[i] = na;
				trail[(ny | 0) * w + (nx | 0)] += DEPOSIT;
			}
			// 3x3 blur + decay
			for (let y = 0; y < h; y++) {
				const ym = ((y - 1 + h) % h) * w, y0 = y * w, yp = ((y + 1) % h) * w;
				for (let x = 0; x < w; x++) {
					const xm = (x - 1 + w) % w, xp = (x + 1) % w;
					const s = trail[ym + xm] + trail[ym + x] + trail[ym + xp] + trail[y0 + xm] + trail[y0 + x] + trail[y0 + xp] + trail[yp + xm] + trail[yp + x] + trail[yp + xp];
					next[y0 + x] = (s / 9) * DECAY;
				}
			}
			const t = trail; trail = next; next = t;
		}

		function draw() {
			const d = img.data;
			for (let i = 0; i < trail.length; i++) {
				const v = (150 * (1 - Math.exp(-trail[i] * 0.5))) | 0;
				const j = i * 4;
				d[j] = d[j + 1] = d[j + 2] = v;
				d[j + 3] = 255;
			}
			ctx.putImageData(img, 0, 0);
		}

		function loop() {
			step();
			draw();
			raf = requestAnimationFrame(loop);
		}

		setup();
		if (reduce) {
			for (let k = 0; k < 220; k++) step();
			draw();
		} else {
			loop();
		}

		const onResize = () => { cancelAnimationFrame(raf); setup(); reduce ? (Array.from({ length: 220 }).forEach(step), draw()) : loop(); };
		const onMove = (e: PointerEvent) => { mouse.x = e.clientX / SCALE; mouse.y = e.clientY / SCALE; };
		const onLeave = () => { mouse.x = -1; };
		const onVis = () => { if (document.hidden) cancelAnimationFrame(raf); else if (!reduce) loop(); };
		let rt = 0;
		const debounced = () => { clearTimeout(rt); rt = window.setTimeout(onResize, 200); };
		window.addEventListener('resize', debounced);
		window.addEventListener('pointermove', onMove);
		document.addEventListener('pointerleave', onLeave);
		document.addEventListener('visibilitychange', onVis);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('resize', debounced);
			window.removeEventListener('pointermove', onMove);
			document.removeEventListener('pointerleave', onLeave);
			document.removeEventListener('visibilitychange', onVis);
		};
	}, []);

	return <canvas ref={ref} className="field" aria-hidden="true" />;
}

import { useState } from 'react';
import portrait from './assets/dp.jpg';
import {
	links,
	wins,
	hackathons,
	papers,
	talks,
	projects,
	experience,
	education,
	community,
	certifications,
} from './data';

/* The hero canvas: Prince's path drawn as a workflow graph,
   the way a pipeline looks in n8n or Breadth. */
const nodes = [
	{ id: 'mat', x: 24, y: 40, title: 'Materials engineering', sub: 'Nsukka, 2021' },
	{ id: 'cloud', x: 24, y: 190, title: 'Cloud and backend', sub: 'Lagos, remote' },
	{ id: 'wl', x: 270, y: 115, title: 'Platform engineering', sub: 'Worldline, Stockholm' },
	{ id: 'msc', x: 270, y: 255, title: 'MSc research', sub: 'Stockholm University' },
	{ id: 'iidp', x: 516, y: 185, title: 'IIDP', sub: 'CENTERIS 2026' },
];
const wires: [string, string][] = [
	['mat', 'wl'],
	['cloud', 'wl'],
	['wl', 'iidp'],
	['msc', 'iidp'],
	['cloud', 'msc'],
];
const W = 196;
const H = 64;

function PathCanvas() {
	const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
	return (
		<svg
			className="canvas"
			viewBox="0 0 736 350"
			role="img"
			aria-label="Career path drawn as a workflow: materials engineering and cloud work feed into platform engineering at Worldline and MSc research, which both feed into IIDP research."
		>
			<defs>
				<pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse">
					<circle cx="1.5" cy="1.5" r="1.2" className="dot" />
				</pattern>
			</defs>
			<rect width="736" height="350" fill="url(#dots)" />
			{wires.map(([a, b], i) => {
				const s = byId[a];
				const t = byId[b];
				const x1 = s.x + W;
				const y1 = s.y + H / 2;
				const x2 = t.x;
				const y2 = t.y + H / 2;
				const mid = (x1 + x2) / 2;
				return (
					<path
						key={a + b}
						className="wire"
						style={{ animationDelay: `${0.15 * i}s` }}
						d={`M${x1},${y1} C${mid},${y1} ${mid},${y2} ${x2},${y2}`}
					/>
				);
			})}
			{nodes.map((n) => (
				<g key={n.id} transform={`translate(${n.x},${n.y})`} className={n.id === 'iidp' ? 'node node-key' : 'node'}>
					<rect width={W} height={H} rx="10" />
					<circle cx="0" cy={H / 2} r="5" className="port" />
					<circle cx={W} cy={H / 2} r="5" className="port" />
					<text x="16" y="28" className="node-title">
						{n.title}
					</text>
					<text x="16" y="47" className="node-sub">
						{n.sub}
					</text>
				</g>
			))}
		</svg>
	);
}

const nav = [
	['wins', 'Wins'],
	['research', 'Research'],
	['talks', 'Talks'],
	['projects', 'Projects'],
	['hackathons', 'Hackathons'],
	['work', 'Work'],
	['community', 'Community'],
];

function Header() {
	const [open, setOpen] = useState(false);
	return (
		<header className="top">
			<a href="#top" className="mark">
				Prince Victor Orjiugo
			</a>
			<button className="menu-btn" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
				{open ? 'Close' : 'Menu'}
			</button>
			<nav id="site-nav" className={open ? 'open' : ''} aria-label="Sections">
				{nav.map(([id, label]) => (
					<a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
						{label}
					</a>
				))}
				<a className="nav-cv" href={links.cv}>
					CV (PDF)
				</a>
			</nav>
		</header>
	);
}

export default function App() {
	const [showAllHacks, setShowAllHacks] = useState(false);
	const hacks = showAllHacks ? hackathons : hackathons.slice(0, 7);

	return (
		<>
			<a className="skip" href="#main">
				Skip to content
			</a>
			<Header />
			<main id="main">
				<section id="top" className="hero wrap">
					<div className="hero-text">
						<h1>
							I build platforms that help engineers understand the systems they run.
						</h1>
						<p className="lede">
							Platform engineer at Worldline in Stockholm. My research on Intelligent Internal Developer Platforms is
							accepted at CENTERIS 2026, and I&rsquo;ve won the Epiminds &times; Google and Ericsson hackathons. I trained as a
							metallurgical engineer in Nigeria before moving into cloud.
						</p>
						<div className="actions">
							<a className="btn btn-solid" href={links.email}>
								Email me
							</a>
							<a className="btn" href={links.cv}>
								Download CV
							</a>
							<a className="btn btn-plain" href={links.linkedin}>
								LinkedIn
							</a>
							<a className="btn btn-plain" href={links.github}>
								GitHub
							</a>
						</div>
					</div>
					<div className="hero-canvas">
						<PathCanvas />
					</div>
				</section>

				<section id="wins" className="wrap section">
					<h2>Wins and recognition</h2>
					<ol className="wins">
						{wins.map((w) => (
							<li key={w.event + w.year} className={`win win-${w.tier}`}>
								<span className="win-year">{w.year}</span>
								<div>
									<p className="win-head">
										<strong>{w.result}</strong>, {w.event}
									</p>
									<p className="win-note">{w.note}</p>
								</div>
							</li>
						))}
					</ol>
				</section>

				<section id="research" className="wrap section split">
					<div className="split-side">
						<h2>Research and papers</h2>
						<p className="side-note">
							The thread through my work: software organisations don&rsquo;t lack code, they lack understanding of what
							they already have.
						</p>
					</div>
					<ul className="papers">
						{papers.map((p) => (
							<li key={p.title}>
								<span className="paper-year">{p.year}</span>
								<div>
									<p className="paper-title">{p.title}</p>
									<p className="paper-venue">{p.venue}</p>
									{p.status && <p className="paper-status">{p.status}</p>}
								</div>
							</li>
						))}
					</ul>
				</section>

				<section id="talks" className="wrap section split">
					<div className="split-side">
						<h2>Talks and teaching</h2>
					</div>
					<ul className="talks">
						{talks.map((t) => (
							<li key={t.title}>
								<span className="talk-when">{t.when}</span>
								<span className="talk-title">{t.title}</span>
								<span className="talk-where">{t.where}</span>
							</li>
						))}
					</ul>
				</section>

				<section id="projects" className="wrap section">
					<h2>Projects</h2>
					<div className="projects">
						{projects.map((p, i) => (
							<article key={p.name} className={i < 2 ? 'project project-lead' : 'project'}>
								<h3>{p.name}</h3>
								<p className="project-line">{p.line}</p>
								<p className="project-detail">{p.detail}</p>
								<p className="project-stack">{p.stack}</p>
								{p.href && (
									<a href={p.href} className="project-link">
										{p.linkText}
									</a>
								)}
							</article>
						))}
					</div>
				</section>

				<section id="hackathons" className="wrap section">
					<h2>Hackathon log</h2>
					<p className="section-intro">
						I learn fastest by shipping something in a weekend. Every hackathon I&rsquo;ve entered since 2024, wins
						or not.
					</p>
					<div className="table-scroll">
						<table className="hacks">
							<thead>
								<tr>
									<th scope="col">When</th>
									<th scope="col">Event</th>
									<th scope="col">What I built</th>
									<th scope="col">Result</th>
								</tr>
							</thead>
							<tbody>
								{hacks.map((h) => (
									<tr key={h.event + h.date}>
										<td className="nowrap">{h.date}</td>
										<td>{h.event}</td>
										<td>{h.built}</td>
										<td className={/1st|Winner|3rd|Finalist/.test(h.result) ? 'res res-hit' : 'res'}>{h.result}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					{hackathons.length > 7 && (
						<button className="btn more" onClick={() => setShowAllHacks(!showAllHacks)} aria-expanded={showAllHacks}>
							{showAllHacks ? 'Show fewer' : `Show all ${hackathons.length}`}
						</button>
					)}
				</section>

				<section id="work" className="wrap section split">
					<div className="split-side">
						<h2>Work</h2>
						<img className="portrait" src={portrait} alt="Portrait of Prince Victor Orjiugo" width="873" height="1309" />
					</div>
					<div>
						<ol className="roles">
							{experience.map((r) => (
								<li key={r.org}>
									<p className="role-when">{r.when}</p>
									<h3>
										{r.title}, {r.org}
									</h3>
									<p className="role-place">{r.place}</p>
									<ul>
										{r.points.map((pt) => (
											<li key={pt}>{pt}</li>
										))}
									</ul>
								</li>
							))}
						</ol>
						<h3 className="sub-h">Education</h3>
						<ul className="plain">
							{education.map((e) => (
								<li key={e.title}>
									<strong>{e.title}</strong>, {e.org} ({e.when})
								</li>
							))}
						</ul>
						<h3 className="sub-h">Certifications</h3>
						<ul className="plain">
							{certifications.map((c) => (
								<li key={c}>{c}</li>
							))}
						</ul>
					</div>
				</section>

				<section id="community" className="wrap section">
					<h2>Community</h2>
					<div className="community">
						{community.map((c) => (
							<div key={c.org} className="comm">
								<p className="comm-org">{c.org}</p>
								<p className="comm-role">{c.role}</p>
								<p className="comm-note">{c.note}</p>
							</div>
						))}
					</div>
				</section>

				<section id="contact" className="wrap section contact">
					<h2>Get in touch</h2>
					<p>
						For speaking, collaboration or platform work, email{' '}
						<a href={links.email}>{links.emailText}</a>. I also write about cloud engineering at{' '}
						<a href={links.substack}>Cloud Devs Daily</a>.
					</p>
				</section>
			</main>
			<footer className="wrap foot">
				<p>Prince Victor Orjiugo, Stockholm. Updated October 2026.</p>
			</footer>
		</>
	);
}

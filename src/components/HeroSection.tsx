import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownCircle, Cloud, Code, Database, Server } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const isMobile = useIsMobile();

	// Animation for metrics
	const metrics = [
		{ label: 'Uptime Delivered', value: '99.99%', delay: 100 },
		{ label: 'Deployment Time Reduction', value: '50%', delay: 300 },
		{ label: 'Annual Cloud Cost Savings', value: '$1.2M', delay: 500 },
	];

	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center pt-16"
		>
			{/* Background animation elements */}
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-cloud-bright-blue/10 animate-pulse-slow"></div>
				<div className="absolute bottom-1/3 right-10 w-48 h-48 rounded-full bg-cloud-azure/10 animate-pulse-slow animation-delay-1000"></div>

				{/* Network lines */}
				<svg
					className="absolute inset-0 w-full h-full"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0,100 Q400,50 800,300 T1600,200"
						fill="none"
						stroke="rgba(0, 166, 251, 0.1)"
						strokeWidth="3"
						strokeDasharray="10"
						className="animate-network-flow"
					/>
					<path
						d="M0,300 Q600,450 1200,200"
						fill="none"
						stroke="rgba(0, 98, 163, 0.1)"
						strokeWidth="2"
						strokeDasharray="15"
						className="animate-network-flow"
					/>
				</svg>
			</div>

			<div ref={containerRef} className="container mx-auto px-4 md:px-8">
				<div className="flex flex-col md:flex-row gap-12 items-center">
					<div className="flex-1 space-y-6 text-center md:text-left">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-inter animate-fade-in">
							<span className="text-cloud-dark-blue dark:text-white">
								Prince Victor
							</span>
							<br />
							<span className="text-cloud-bright-blue">Cloud & DevOps</span>
							<br />
							<span className="text-cloud-azure">Engineer</span>
						</h1>

						<p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 animate-fade-in [animation-delay:200ms] w-full">
							I like figuring out how things work, especially when they break
							that's usually when they tell the most interesting stories. I
							build cloud systems, automate whatever I can, and explain tech
							like I'm talking to my past self who had no clue what an API was.
							Most days, I'm just chasing problems worth solving and trying to
							make things a little smoother, a little smarter, and a lot more
							fun.
						</p>

						<div className="flex flex-wrap gap-8 justify-center md:justify-start animate-fade-in [animation-delay:400ms]">
							{metrics.map((metric, index) => (
								<div
									key={index}
									className="flex flex-col items-center md:items-start"
								>
									<span className="text-3xl font-bold text-cloud-bright-blue">
										{metric.value}
									</span>
									<span className="text-sm text-gray-500 dark:text-gray-400">
										{metric.label}
									</span>
								</div>
							))}
						</div>

						<div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in [animation-delay:600ms]">
							<Button
								className="cloud-button"
								onClick={() =>
									window.open('https://github.com/theorjiugovictor', '_blank')
								}
							>
								View Projects
							</Button>
							<Button
								variant="outline"
								className="font-inter"
								onClick={() =>
									(window.location.href = 'mailto:orjiugo.victor@gmail.com')
								}
							>
								Contact Me
							</Button>
						</div>

						<div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
							<a href="#about" aria-label="Scroll to About section">
								<ArrowDownCircle className="w-10 h-10 text-cloud-azure opacity-70 hover:opacity-100 transition-opacity" />
							</a>
						</div>
					</div>

					<div className="flex-1 relative animate-fade-in [animation-delay:800ms]">
						<div className="relative w-full aspect-square max-w-md mx-auto">
							{/* Cloud architecture illustration */}
							<div className="absolute inset-0 flex items-center justify-center">
								{/* Central cloud */}
								<div className="relative">
									<Cloud className="w-32 h-32 text-cloud-azure animate-pulse-slow" />

									{/* Connected elements */}
									<div className="absolute -top-20 -left-20 p-4 rounded-full bg-white/90 dark:bg-card shadow-lg animate-float">
										<Server className="w-8 h-8 text-cloud-dark-blue dark:text-cloud-bright-blue" />
									</div>

									<div className="absolute top-20 -right-24 p-4 rounded-full bg-white/90 dark:bg-card shadow-lg animate-float [animation-delay:1000ms]">
										<Database className="w-8 h-8 text-cloud-dark-blue dark:text-cloud-bright-blue" />
									</div>

									<div className="absolute -bottom-12 left-0 p-4 rounded-full bg-white/90 dark:bg-card shadow-lg animate-float [animation-delay:1500ms]">
										<Code className="w-8 h-8 text-cloud-dark-blue dark:text-cloud-bright-blue" />
									</div>

									{/* Connection lines */}
									<svg
										className="absolute inset-0 w-full h-full -z-10"
										xmlns="http://www.w3.org/2000/svg"
									>
										<line
											x1="32"
											y1="32"
											x2="128"
											y2="128"
											stroke="rgba(0, 98, 163, 0.5)"
											strokeWidth="2"
											strokeDasharray="5,5"
										/>
										<line
											x1="224"
											y1="148"
											x2="160"
											y2="128"
											stroke="rgba(0, 98, 163, 0.5)"
											strokeWidth="2"
											strokeDasharray="5,5"
										/>
										<line
											x1="128"
											y1="224"
											x2="128"
											y2="160"
											stroke="rgba(0, 98, 163, 0.5)"
											strokeWidth="2"
											strokeDasharray="5,5"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;

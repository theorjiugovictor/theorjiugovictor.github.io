// All site content lives here. Edit this file to update the site.

export const links = {
	email: 'mailto:orjiugo.victor@gmail.com',
	emailText: 'orjiugo.victor@gmail.com',
	linkedin: 'https://www.linkedin.com/in/theorjiugovictor',
	github: 'https://github.com/theorjiugovictor',
	substack: 'https://theorjiugovictor.substack.com',
	cv: '/Prince-Victor-Orjiugo-CV.pdf',
};

export type Win = {
	year: string;
	result: string;
	event: string;
	note: string;
	tier: 'gold' | 'podium' | 'finalist';
};

export const wins: Win[] = [
	{
		year: '2026',
		result: 'Winner',
		event: 'Epiminds × Google Hackathon, Stockholm',
		note: 'SWARM RELIEF: a stigmergic multi-agent system for humanitarian incident response. Agents coordinate through an append-only bulletin board, with no central coordinator.',
		tier: 'gold',
	},
	{
		year: '2025',
		result: '1st place',
		event: 'Ericsson AI + Low-Code Hackathon',
		note: 'First place, followed by a session with Ericsson Learning & Development on the team’s solution.',
		tier: 'gold',
	},
	{
		year: '2026',
		result: '3rd place',
		event: 'Embedded Finance Build Day, Stockholm',
		note: 'Team Titan: a real-time, agent-negotiated B2B settlement network with signed audit trails and MCP integration, built on live Zwapgrid and Open Payments APIs in six hours.',
		tier: 'podium',
	},
	{
		year: '2026',
		result: 'Finalist',
		event: 'Saab Smart Air Base Hackathon, Linköping',
		note: 'Team SU Heroes: MACS, a multi-agent command system for Swedish Air Force road-base operations, presented at the grand finale.',
		tier: 'finalist',
	},
	{
		year: '2022',
		result: 'Finalist',
		event: 'SPE Africa Regional Student Paper Contest',
		note: 'Curbing CO₂ emissions from gas flares with lithium hydroxide carbon scrubbing.',
		tier: 'finalist',
	},
	{
		year: '2022',
		result: 'Winner',
		event: 'ISDC Regional Competition on Green Technologies for Rural Development',
		note: 'Green building and materials: recycled plastic and resin composites to make bamboo viable for ceiling and roofing sheets.',
		tier: 'gold',
	},
	{
		year: '2022',
		result: '1st runner-up',
		event: 'SPE Nigeria STSE Energy Challenge',
		note: 'Prototype of a lithium hydroxide carbon scrubber.',
		tier: 'podium',
	},
	{
		year: '2021',
		result: '2nd runner-up',
		event: 'SPE Nigeria STSE Student Paper Contest',
		note: 'Nano sensors for wireless industrial applications in oil and gas.',
		tier: 'podium',
	},
	{
		year: '2018',
		result: '2nd runner-up',
		event: 'IMMME Student Paper Contest, Abuja',
		note: 'Preventing failures in buildings and structures: a materials engineering view.',
		tier: 'podium',
	},
];

export type Hack = { date: string; event: string; built: string; result: string };

export const hackathons: Hack[] = [
	{ date: 'Oct 2026', event: 'Nebius × NVIDIA Global AI Hackathon', built: 'On Behalf, an agent negotiation protocol (solo)', result: 'Submitted' },
	{ date: 'Aug 2026', event: 'Embedded Finance Build Day', built: 'Agent-negotiated settlement network (Team Titan)', result: '3rd place' },
	{ date: 'May 2026', event: 'Cline AI-Assisted Enterprise Coding Hackathon, HiQ', built: 'Team Husqvarna challenge', result: 'Participant' },
	{ date: 'Mar 2026', event: 'Saab Smart Air Base Hackathon', built: 'MACS multi-agent command system', result: 'Finalist' },
	{ date: 'Mar 2026', event: 'Epiminds × Google Hackathon', built: 'SWARM RELIEF', result: 'Winner' },
	{ date: 'Feb 2026', event: 'Airia AI Agents Hackathon with Atlassian Williams F1', built: '', result: 'Participant' },
	{ date: 'Feb 2026', event: 'Google Gemini 3 Hackathon (global, online)', built: '', result: 'Participant' },
	{ date: 'Dec 2025', event: 'Proxify AI Business Value Hackathon', built: '', result: 'Participant' },
	{ date: 'Nov 2025', event: 'AI-Powered Observability Hackathon, HiQ', built: '', result: 'Participant' },
	{ date: 'Jun 2025', event: 'Google Cloud Sweden Region Launch AI Hackathon', built: '', result: 'Participant' },
	{ date: 'Apr 2025', event: 'Ericsson AI + Low-Code Hackathon', built: '', result: '1st place' },
	{ date: 'Apr 2025', event: 'Kong AI + API Gateway Hackathon, AWS Sweden', built: '', result: 'Participant' },
	{ date: '2025', event: 'EPO CodeFest: classifying patent data for sustainable development', built: 'Patent classification proposal', result: 'Advanced to next stage' },
	{ date: 'Nov 2024', event: 'Huawei Sweden Tech Arena', built: '', result: 'Participant' },
];

export type Paper = { year: string; title: string; venue: string; status?: string; href?: string };

export const papers: Paper[] = [
	{
		year: '2026',
		title: 'Intelligent Internal Developer Platforms: An AI-Native Approach to Strategic Software Delivery and Governance',
		venue: 'CENTERIS 2026, International Conference on ENTERprise Information Systems. Full paper, with Gideon Mekonnen Jonathan and colleagues at DSV, Stockholm University.',
		status: 'Accepted; presenting November 2026',
	},
	{
		year: '2026',
		title: 'Intelligent Internal Developer Platforms: an AI-native approach to software delivery and governance',
		venue: "Master's thesis, Strategic Information Systems Management, Stockholm University (DSV).",
	},
	{
		year: '2022',
		title: 'Curbing CO₂ emissions from gas flares using lithium hydroxide carbon scrubbing technology',
		venue: 'SPE Africa Regional Student Paper Contest (finalist).',
	},
	{
		year: '2021',
		title: 'First-principles studies of phase stability and electronic properties of new titanium-based high entropy alloys for petrochemical applications',
		venue: 'Royal Academy of Engineering International Conference, University of Nigeria Nsukka. Sole student paper presenter.',
	},
	{
		year: '2021',
		title: 'Computational modelling of Ti50[Al, Cr, Ta, Zr, X(Co, Ni)]50 high entropy alloys: effects of Co and Ni addition',
		venue: "Bachelor's thesis, Metallurgical and Materials Engineering, University of Nigeria.",
	},
	{
		year: '2021',
		title: 'Utilising nano sensors in the oil and gas industry for enhanced wireless industrial applications',
		venue: 'SPE Nigeria Student Technical Symposium and Exhibition (2nd runner-up).',
	},
];

export type Talk = { when: string; title: string; where: string };

export const talks: Talk[] = [
	{ when: 'Nov 2026', title: 'Intelligent Internal Developer Platforms (paper presentation)', where: 'CENTERIS 2026, virtual' },
	{ when: '2026', title: 'Beyond copilot: what an intelligent internal developer platform actually looks like', where: 'TechForum Nordic, 40-minute talk' },
	{ when: 'Oct 2026', title: 'Agents 101', where: 'Worldline Elevate Learnings AI programme, session 5' },
	{ when: '2026', title: 'LibreChat training series, including a session on Artifacts', where: 'Worldline' },
	{ when: '2026', title: 'rootOps: a shortage of understanding, not a shortage of code', where: 'Internal platform talk, Worldline' },
	{ when: '2026', title: 'Automating with n8n: hands-on workshop for about 50 participants', where: 'Pink Programming, Stockholm' },
	{ when: '2026', title: 'Build a voice agent in n8n (co-host)', where: 'n8n Workshop Stockholm' },
	{ when: 'Nov 2025', title: 'DevOps final presentation', where: 'HNG13 internship' },
	{ when: 'Feb 2025', title: 'Hackathon demo', where: 'AI Saloon, Stockholm' },
];

export type Project = {
	name: string;
	line: string;
	detail: string;
	stack: string;
	href?: string;
	linkText?: string;
};

export const projects: Project[] = [
	{
		name: 'IIDP and rootOps',
		line: 'An engineering understanding layer for software organisations.',
		detail:
			'rootOps is the reference implementation of the Intelligent Internal Developer Platform idea from the research above: semantic memory over code and telemetry, OTLP ingestion with relevance filtering, log-to-code correlation, PR risk scoring and an auto-heal pipeline that diagnoses an issue and opens a pull request for a human to review.',
		stack: 'pgvector, OpenTelemetry, hybrid RAG',
		href: 'https://github.com/Intelligent-IDP/rootops',
		linkText: 'Source on GitHub',
	},
	{
		name: 'Breadth',
		line: 'A canvas that maps codebases and whole distributed systems.',
		detail:
			'An n8n-style node canvas where every service, repo and team is a node with real inputs and outputs, so you can see how an organisation actually fits together.',
		stack: 'Graph modelling, codebase mapping',
		href: 'https://github.com/theorjiugovictor/breadth',
		linkText: 'Source on GitHub',
	},
	{
		name: 'CORE',
		line: 'Conversational bookkeeping for small businesses in Nigeria.',
		detail:
			'Traders log sales and expenses by chatting, and CORE turns that into clean records, streaks and reports. In beta with registered users, built with a small team across Stockholm and Lagos under Oji Labs.',
		stack: 'Conversational AI, Firebase',
	},
	{
		name: 'On Behalf',
		line: 'A protocol for AI agents to negotiate for the people they represent.',
		detail: 'Built solo for the Nebius × NVIDIA Global AI Hackathon.',
		stack: 'Agents, protocols',
		href: 'https://github.com/theorjiugovictor/on-behalf-net',
		linkText: 'Source on GitHub',
	},
	{
		name: 'MACS',
		line: 'Multi-agent command system for air base operations.',
		detail:
			'A stigmergic agent swarm that coordinates road-base operations for the Swedish Air Force scenario at the Saab Smart Air Base Hackathon. Finalist.',
		stack: 'Multi-agent systems',
		href: 'https://github.com/theorjiugovictor/macs-airbase',
		linkText: 'Source on GitHub',
	},
	{
		name: 'Self-service GitOps on AWS',
		line: 'A deployment control plane for a multi-account cloud.',
		detail:
			'At Worldline: an OpenTofu and GitOps model where teams request infrastructure through reviewed configuration, plus an SSM Session Manager approach to replace bastion hosts across accounts.',
		stack: 'AWS, OpenTofu/Terraform, GitHub Actions',
	},
];

export type Role = { when: string; title: string; org: string; place: string; points: string[] };

export const experience: Role[] = [
	{
		when: 'Jul 2025 to now',
		title: 'Senior Platform / DevOps Engineer',
		org: 'Worldline (formerly Bambora)',
		place: 'Stockholm',
		points: [
			'Engineer and run a multi-account AWS platform that FinTech teams build and deploy payment services on.',
			'Drive infrastructure as code with Terraform and OpenTofu across VPCs, IAM and security groups, cutting technical debt and tightening security.',
			'Centralised logging and monitoring with CloudWatch and the ELK stack for mission-critical payment services.',
			'AI Catalyst in Worldline’s internal AI programme; teach LibreChat and agent sessions to colleagues.',
		],
	},
	{
		when: 'Feb 2024 to Jun 2025',
		title: 'Cloud DevOps Engineer',
		org: 'Alvonant Limited',
		place: 'Remote',
		points: [
			'Led cloud migrations for five clients across GCP, AWS and Azure, reducing infrastructure costs by an average of 42%.',
			'Built HIPAA-compliant GCP infrastructure for a healthcare enterprise using GKE, BigQuery and strict IAM.',
			'Designed a real-time outage data platform for a telecom operator, giving NOC analysts tower uptime within seconds.',
			'Cut deployment time by 50% with CI/CD on Jenkins, Azure DevOps and GitHub Actions; reduced MTTD and MTTR by 40% with Prometheus and Grafana.',
		],
	},
	{
		when: 'May 2022 to Jan 2024',
		title: 'Cloud and Backend Engineer',
		org: 'EntaMarket',
		place: 'Lagos',
		points: [
			'Deployed a cloud-native e-commerce platform on AWS for 150,000+ users at 99.99% uptime.',
			'Led the move from a monolith to microservices on Kubernetes and serverless.',
			'Cut incident response time by 60% with CloudWatch and ELK monitoring.',
		],
	},
	{
		when: 'Jan 2018 to Apr 2022',
		title: 'Software Engineer',
		org: 'Nexbuy District Limited',
		place: 'Remote',
		points: [
			'Built backend services in Python and Go on Google Cloud, with automated CI/CD, testing and security checks.',
			'Authored three internal whitepapers on cloud-native development and performance tuning.',
		],
	},
];

export const education = [
	{ when: '2026', title: 'MSc, Strategic Information Systems Management (120 hp)', org: 'Stockholm University, DSV' },
	{ when: '2021', title: 'BEng, Metallurgical and Materials Engineering; minor in special materials and nanotechnology', org: 'University of Nigeria, Nsukka' },
];

export const community = [
	{ role: 'Head of IT and board member', org: 'Stockholm AI', note: 'Run the community’s infrastructure and its weekly newsletter. Organised the AI for Meta-Science Hackathon (winners go to NeurIPS Paris) and co-organise Hack4good with n8n for Stockholm NGOs in Nobel Week.' },
	{ role: 'n8n Ambassador', org: 'n8n', note: 'Organise n8n Node Nights Stockholm and run hands-on automation workshops.' },
	{ role: 'Senior DevOps mentor', org: 'Emerj', note: 'Mentor a community of 400+ junior developers.' },
	{ role: 'Fellow', org: 'beVisioneers', note: 'Foundation Year 2026, building Oji Grows, a farming knowledge library with AI.' },
	{ role: 'Nigeria lead', org: 'Tree++ Global10', note: 'Delivered the Nigeria leg of a ten-country tree-planting campaign.' },
	{ role: 'Founder', org: 'Not Too Young to Code', note: 'A summer coding boot camp for children in Abule-Ado, Lagos (2023).' },
];

export const certifications = [
	'KCNA: Kubernetes and Cloud Native Associate (CNCF, 2025)',
	'Microsoft Certified: Azure Developer Associate (2025)',
	'AWS Certified Developer, Associate (2025)',
	'AWS Certified Solutions Architect, Associate (2022)',
	'Google Cloud Associate Cloud Engineer training (2022)',
	'Foundations of Generative AI (Udacity, 2025)',
	'AWS Certified Cloud Practitioner (2020)',
];

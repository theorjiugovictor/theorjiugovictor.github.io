import React from 'react';
import {
	Server,
	Cloud,
	Code,
	GitBranch,
	Lock,
	LineChart,
	Shield,
	Database,
	Workflow,
	Network,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

interface SkillCategoryProps {
	title: string;
	icon: React.ReactNode;
	skills: Array<{ name: string; level: number }>;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
	title,
	icon,
	skills,
}) => {
	return (
		<Card className="cloud-card">
			<CardContent className="p-6">
				<div className="flex items-center mb-4">
					<div className="mr-3 text-cloud-bright-blue">{icon}</div>
					<h3 className="text-xl font-bold">{title}</h3>
				</div>
				<div className="space-y-3">
					{skills.map((skill, index) => (
						<div key={index} className="space-y-1">
							<div className="flex justify-between text-sm">
								<span>{skill.name}</span>
								<span className="text-cloud-azure">{skill.level * 20}%</span>
							</div>
							<div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
								<div
									className="h-full bg-gradient-to-r from-cloud-azure to-cloud-bright-blue rounded-full"
									style={{ width: `${skill.level * 20}%` }}
								></div>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};

const AboutSection: React.FC = () => {
	const cloudSkills = [
		{ name: 'AWS', level: 5 },
		{ name: 'Azure', level: 4 },
		{ name: 'GCP', level: 4 },
		{ name: 'Multi-Cloud Architecture', level: 5 },
	];

	const infrastructureSkills = [
		{ name: 'Terraform', level: 5 },
		{ name: 'CloudFormation', level: 4 },
		{ name: 'Pulumi', level: 3 },
		{ name: 'Ansible', level: 4 },
	];

	const containerSkills = [
		{ name: 'Kubernetes', level: 5 },
		{ name: 'Docker', level: 5 },
		{ name: 'Helm', level: 4 },
		{ name: 'Service Mesh', level: 3 },
	];

	const cicdSkills = [
		{ name: 'GitHub Actions', level: 5 },
		{ name: 'Jenkins', level: 4 },
		{ name: 'CircleCI', level: 4 },
		{ name: 'ArgoCD', level: 3 },
	];

	const securitySkills = [
		{ name: 'DevSecOps', level: 4 },
		{ name: 'IAM', level: 5 },
		{ name: 'Compliance Automation', level: 4 },
		{ name: 'Secret Management', level: 4 },
	];

	const monitoringSkills = [
		{ name: 'Prometheus', level: 5 },
		{ name: 'Grafana', level: 5 },
		{ name: 'ELK Stack', level: 4 },
		{ name: 'Datadog', level: 3 },
	];

	const competencies = [
		{ name: 'Infrastructure as Code', icon: <Code size={20} /> },
		{ name: 'CI/CD Pipelines', icon: <Workflow size={20} /> },
		{ name: 'Containerization', icon: <Database size={20} /> },
		{ name: 'Cloud Architecture', icon: <Cloud size={20} /> },
		{ name: 'High Availability', icon: <Network size={20} /> },
		{ name: 'Disaster Recovery', icon: <Shield size={20} /> },
		{ name: 'Cost Optimization', icon: <LineChart size={20} /> },
		{ name: 'Security Compliance', icon: <Lock size={20} /> },
	];

	return (
		<section id="about" className="py-20 bg-gray-50 dark:bg-cloud-dark-blue/30">
			<div className="container mx-auto">
				<h2 className="section-title text-center">About Me</h2>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
					<div className="lg:col-span-2">
						<h3 className="text-2xl font-bold mb-4 text-cloud-azure">
							Cloud Infrastructure Architect & DevOps Engineer
						</h3>
						<div className="space-y-4 text-gray-700 dark:text-gray-300">
							<p>
								I never planned to be a Cloud Architect. One day, I just wanted
								to get a script running, and ten thousand lines of YAML later
								(6+ years), I was managing infrastructure for companies I'd only
								read about.
							</p>
							<p>
								My approach combines technical excellence with business acumen,
								ensuring that infrastructure solutions not only meet technical
								requirements but also align with organizational goals for
								scalability, cost-efficiency, and reliability.
							</p>
							<p>
								I specialize in modernizing legacy infrastructure, implementing
								robust CI/CD pipelines, and establishing cloud-native
								architectures that leverage the best of container orchestration,
								serverless computing, and infrastructure as code.
							</p>
						</div>

						<div className="mt-8">
							<h4 className="text-xl font-bold mb-4">Core Competencies</h4>
							<div className="flex flex-wrap gap-3">
								{competencies.map((item, idx) => (
									<TooltipProvider key={idx}>
										<Tooltip>
											<TooltipTrigger asChild>
												<div className="flex items-center bg-white dark:bg-card px-3 py-2 rounded-full shadow-sm border border-gray-100 dark:border-gray-700">
													<span className="mr-2 text-cloud-bright-blue">
														{item.icon}
													</span>
													<span className="text-sm font-medium">
														{item.name}
													</span>
												</div>
											</TooltipTrigger>
											<TooltipContent>
												<p>Expert in {item.name}</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								))}
							</div>
						</div>
					</div>

					<div className="relative">
						<div className="aspect-square max-w-md mx-auto rounded-xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
							<img
								src="/src/assets/dp.jpg"
								alt="Profile Picture"
								className="w-full h-full object-cover"
							/>
						</div>

						{/* Decorative elements */}
						<div className="absolute -top-4 -right-4 w-24 h-24 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center transform rotate-12">
							<Cloud className="w-12 h-12 text-cloud-bright-blue" />
						</div>
						<div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center transform -rotate-6">
							<Code className="w-8 h-8 text-cloud-azure" />
						</div>
					</div>
				</div>

				<h3 className="text-2xl font-bold mb-8 text-center">
					Technical Expertise
				</h3>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<SkillCategory
						title="Cloud Platforms"
						icon={<Cloud size={24} />}
						skills={cloudSkills}
					/>
					<SkillCategory
						title="Infrastructure as Code"
						icon={<Code size={24} />}
						skills={infrastructureSkills}
					/>
					<SkillCategory
						title="Container Orchestration"
						icon={<Database size={24} />}
						skills={containerSkills}
					/>
					<SkillCategory
						title="CI/CD Pipelines"
						icon={<GitBranch size={24} />}
						skills={cicdSkills}
					/>
					<SkillCategory
						title="Security & Compliance"
						icon={<Lock size={24} />}
						skills={securitySkills}
					/>
					<SkillCategory
						title="Monitoring & Observability"
						icon={<LineChart size={24} />}
						skills={monitoringSkills}
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;

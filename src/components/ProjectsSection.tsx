
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, ArrowUpRight, Server, Database, Cloud, FileCode } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  technologies: string[];
  imageUrl: string;
  category: "infrastructure" | "migration" | "automation";
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: "enterprise-k8s",
      title: "Enterprise Kubernetes Platform",
      description: "A secure, scalable Kubernetes platform for a Fortune 500 financial services company",
      challenge: "The client needed to modernize their application deployment infrastructure while maintaining strict compliance and security standards.",
      solution: "Designed and implemented a multi-cloud Kubernetes platform using Terraform and GitOps principles, with comprehensive security controls and CI/CD automation.",
      outcome: "Reduced deployment time by 85%, improved resource utilization by 40%, and enabled development teams to securely self-service their infrastructure needs.",
      technologies: ["Kubernetes", "Terraform", "ArgoCD", "Istio", "AWS", "Azure"],
      imageUrl: "https://images.unsplash.com/photo-1610915546149-9cac0e382b79?q=80&w=2069&auto=format&fit=crop",
      category: "infrastructure"
    },
    {
      id: "cloud-migration",
      title: "Legacy to Cloud Migration",
      description: "Migration of mission-critical applications from on-premises to AWS",
      challenge: "A retail organization needed to migrate 50+ legacy applications from aging data centers to AWS while minimizing downtime and risk.",
      solution: "Created a comprehensive migration factory approach using AWS Cloud Migration Factory, automated environment creation with Terraform, and implemented automated testing.",
      outcome: "Completed migration 2 months ahead of schedule with zero critical incidents, achieving 30% cost reduction and improved performance.",
      technologies: ["AWS", "Terraform", "CloudEndure", "Jenkins", "Python", "DMS"],
      imageUrl: "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=2070&auto=format&fit=crop",
      category: "migration"
    },
    {
      id: "cicd-platform",
      title: "CI/CD Automation Platform",
      description: "End-to-end CI/CD platform leveraging GitHub Actions and AWS services",
      challenge: "A software company struggled with inconsistent deployment processes across teams, causing release delays and quality issues.",
      solution: "Built a standardized CI/CD platform using GitHub Actions, AWS CDK, and containerization, with integrated security scanning and compliance checks.",
      outcome: "Deployment frequency increased by 300%, mean time to recovery reduced by 70%, and significant reduction in production defects.",
      technologies: ["GitHub Actions", "AWS CDK", "Docker", "Terraform", "SonarQube", "Artifactory"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      category: "automation"
    },
    {
      id: "cost-optimization",
      title: "Cloud Cost Optimization",
      description: "Comprehensive cost optimization initiative for a multinational enterprise",
      challenge: "A large enterprise was experiencing out-of-control cloud costs with limited visibility and governance across multiple business units.",
      solution: "Implemented FinOps practices, right-sizing automation, spot instance integration, and custom monitoring dashboards to track spending and resource utilization.",
      outcome: "Achieved 42% cost reduction within 6 months while improving performance and reliability metrics.",
      technologies: ["AWS Cost Explorer", "Terraform", "Lambda", "Kubecost", "CloudHealth", "Python"],
      imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop",
      category: "infrastructure"
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Projects & Case Studies</h2>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
              <TabsTrigger value="migration">Migration</TabsTrigger>
              <TabsTrigger value="automation">Automation</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="infrastructure" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects
                .filter((project) => project.category === "infrastructure")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="migration" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects
                .filter((project) => project.category === "migration")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="automation" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects
                .filter((project) => project.category === "automation")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const categoryIcon = () => {
    switch (project.category) {
      case "infrastructure":
        return <Server className="h-5 w-5" />;
      case "migration":
        return <Cloud className="h-5 w-5" />;
      case "automation":
        return <FileCode className="h-5 w-5" />;
      default:
        return <Database className="h-5 w-5" />;
    }
  };

  const categoryLabel = () => {
    switch (project.category) {
      case "infrastructure":
        return "Infrastructure";
      case "migration":
        return "Cloud Migration";
      case "automation":
        return "Automation";
      default:
        return project.category;
    }
  };

  return (
    <Card className="cloud-card overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 to-transparent"></div>
        <Badge 
          className="absolute top-4 left-4 bg-cloud-bright-blue hover:bg-cloud-bright-blue/90 text-white flex items-center gap-1"
        >
          {categoryIcon()}
          {categoryLabel()}
        </Badge>
      </div>
      
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-cloud-azure mb-1">Challenge:</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">{project.challenge}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-cloud-azure mb-1">Solution:</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">{project.solution}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-cloud-azure mb-1">Outcome:</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">{project.outcome}</p>
          </div>
          
          <div className="pt-2">
            <h4 className="font-semibold text-cloud-azure mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-4">
        <Button className="w-full flex items-center justify-center gap-2 bg-cloud-azure hover:bg-cloud-dark-blue">
          View Case Study <ArrowUpRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectsSection;

import { ReactNode } from "react";

export type JobTabKey =
  | "humai"
  | "codification"
  | "wsoPlatform"
  | "wsoSRE"
  | "wsoTL";

export type JobEntry = {
  key: JobTabKey;
  label: string;
  sub?: string;
  componentProps: {
    title: string;
    company: string;
    companyIcon?: ReactNode;
    dates: string;
    intro: string;
    bullets: {
      heading: string;
      content: string;
    }[];
  };
};

const jobEntries: JobEntry[] = [
  {
    key: "humai",
    label: "Humai FZCO",
    sub: "DevOps Manager",
    componentProps: {
      title: "DevOps Manager",
      company: "Humai FZCO",
      dates: "Nov 2025 - Present",
      intro:
        "Leading SOC 2 Type II compliance and platform engineering initiatives for a 7-person engineering team. Architecting cloud infrastructure on GCP with Infrastructure as Code and automated CI/CD pipelines.",
      bullets: [
        {
          heading: "SOC 2 Compliance Leadership",
          content:
            "Leading SOC 2 Type II program with Sprinto, implementing 100+ security controls across infrastructure, access management, and change workflows to enable enterprise readiness.",
        },
        {
          heading: "IaC & Infrastructure Automation",
          content:
            "Architected Terraform-based IaC foundation for GCP resources, reducing environment provisioning time by 80% and establishing version-controlled, reproducible infrastructure.",
        },
        {
          heading: "CI/CD Pipeline Development",
          content:
            "Built automated CI/CD pipelines and release workflows with embedded security gates and rollback capabilities, enabling controlled and reliable production deployments.",
        },
        {
          heading: "Security Hardening",
          content:
            "Integrated Cloudflare WAF and DDoS protection for GCP workloads, reducing attack surface and improving overall application security posture against modern threats.",
        },
        {
          heading: "Team Enablement",
          content:
            "Enabled full-stack, mobile, and AI engineering teams through platform engineering, DevOps automation, and security best practices training.",
        },
      ],
    },
  },
  {
    key: "codification",
    label: "Codification LLC-FZ",
    sub: "Associate Director",
    componentProps: {
      title: "Associate Director – Professional Services",
      company: "Codification LLC-FZ",
      dates: "Jun 2024 - Jul 2025",
      intro:
        "Drove end-to-end delivery of enterprise-scale projects across real estate and sustainability sectors. Led cross-functional teams of 20+ engineers and managed $2M+ in client engagements.",
      bullets: [
        {
          heading: "Enterprise Delivery & Presales",
          content:
            "Owned end-to-end delivery from inception through execution, including presales activities (demos, PoCs), solution architecture, and effort estimation for enterprise clients.",
        },
        {
          heading: "Project Leadership & Agile Execution",
          content:
            "Directed Agile project execution with sprint planning, ceremonies, and backlog grooming, achieving 100% on-time and within-budget delivery while decreasing technical debt by 40%.",
        },
        {
          heading: "Team Leadership & Mentorship",
          content:
            "Managed cross-functional team of 20+ engineers (UI/UX, React, Node.js, DevOps), mentoring team leads and guiding 5+ promotions to senior roles through continuous feedback.",
        },
        {
          heading: "Stakeholder & Client Management",
          content:
            "Partnered with C-level stakeholders and technical leads to ensure smooth delivery, cross-functional alignment, and 15% improvement in delivery satisfaction scores.",
        },
        {
          heading: "Knowledge Leadership",
          content:
            "Led internal engineering guilds, delivering 6+ quarterly knowledge-sharing sessions and improving DevOps maturity scores by 25% across the organization.",
        },
      ],
    },
  },
  {
    key: "wsoPlatform",
    label: "WSO2 Lanka",
    sub: "Architect & Associate Director",
    componentProps: {
      title: "Architect & Associate Director – Cloud Platform and SRE",
      company: "WSO2 Lanka",
      dates: "Apr 2023 - Jun 2024",
      intro:
        "Oversaw $3M cloud infrastructure budget for production Kubernetes deployments (Choreo & Asgardeo) across 3 continents. Led 75+ microservices achieving 99.99% uptime.",
      bullets: [
        {
          heading: "Multi-Region Cloud Architecture",
          content:
            "Collaborated with Microsoft architects to embed Azure Well-Architected Framework, achieving 25% cost savings, 40% reliability uplift, and secure deployment across 3 regions.",
        },
        {
          heading: "Kubernetes & Infrastructure at Scale",
          content:
            "Designed and deployed 75+ microservices across 100+ Kubernetes nodes (AKS), enabling 99.99% uptime and automated rollouts via CI/CD pipelines with daily production releases.",
        },
        {
          heading: "Disaster Recovery & High Availability",
          content:
            "Designed multi-region DR/HA architectures with warm standby, reducing RTO/RPO from 24h to <1h and ensuring business continuity across critical systems.",
        },
        {
          heading: "SOC 2 Compliance & ITSM Integration",
          content:
            "Integrated SOC 2-compliant ITSM policies (change, incident, problem management) in ServiceNow; passed external audits with zero major findings.",
        },
        {
          heading: "Team Building & Development",
          content:
            "Hired 10+ DevOps/SRE engineers; led 15+ appraisals, enabled 3 promotions, and maintained 100% team retention through mentorship and career development.",
        },
      ],
    },
  },
  {
    key: "wsoSRE",
    label: "WSO2 Lanka",
    sub: "Senior Technical Lead – SRE",
    componentProps: {
      title: "Senior Technical Lead – Site Reliability Engineering",
      company: "WSO2 Lanka",
      dates: "Nov 2020 - Apr 2023",
      intro:
        "Defined SRE practices and SLOs/SLIs across 75+ microservices. Rolled out fully automated CI/CD pipelines and test automation platform reducing manual QA by 90%.",
      bullets: [
        {
          heading: "SRE & Observability",
          content:
            "Defined SLAs, SLOs, and SLIs across 75+ microservices, improving system observability and aligning reliability goals with product teams for continuous improvement.",
        },
        {
          heading: "CI/CD & Automation",
          content:
            "Designed and rolled out fully automated CI/CD pipelines (Azure DevOps, Jenkins), enabling daily production deployments and reducing release cycle time by 60%.",
        },
        {
          heading: "Test Automation Platform",
          content:
            "Developed next-gen test automation platform using AWS, CloudFormation, and Puppet, reducing manual QA cycles by 90% and improving release quality.",
        },
        {
          heading: "Cost Optimization",
          content:
            "Partnered with finance and ops to deliver cloud cost optimizations, achieving 20-30% savings through reserved instances, right-sizing, and autoscaling strategies.",
        },
        {
          heading: "Security & Compliance Coordination",
          content:
            "Coordinated with 100+ engineer teams on security hardening, version upgrades, and DR testing, ensuring compliance and stability across all live systems.",
        },
      ],
    },
  },
  {
    key: "wsoTL",
    label: "WSO2 Lanka",
    sub: "Technical Lead / Senior Engineer",
    componentProps: {
      title: "Technical Lead / Senior Software Engineer",
      company: "WSO2 Lanka",
      dates: "Jul 2010 - Nov 2020",
      intro:
        "Initiated and scaled SRE practice from ground up. Built IaC-driven CI/CD pipelines for 20+ cloud deployments. Scaled API platform to 1M+ TPS with 99.95% uptime.",
      bullets: [
        {
          heading: "SRE Practice Initiation",
          content:
            "Initiated and scaled SRE practice; built IaC-driven CI/CD pipelines using Terraform, Ansible, and Azure DevOps for 20+ cloud deployments.",
        },
        {
          heading: "Multi-Region API Platform Scaling",
          content:
            "Scaled multi-region API Cloud platform to 1M+ TPS with 99.95% uptime on AWS (EC2, RDS); optimized API execution time from 90s to <10s through database and software optimization.",
        },
        {
          heading: "Service Mesh & Security",
          content:
            "Advocated for observability and zero-trust principles; introduced LinkerD service mesh with mTLS, increasing platform security posture and service resilience.",
        },
        {
          heading: "Microservices Architecture",
          content:
            "Architected and deployed microservices-based platforms supporting 100+ services, establishing patterns and practices for scalability, reliability, and team autonomy.",
        },
      ],
    },
  },
];

export default jobEntries;

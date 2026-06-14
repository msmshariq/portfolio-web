"use client";

import React from "react";
import Image from "next/image";
import {
  profileImgCircle,
  Docker,
  Kubernetes,
  Terraform,
  Ansible,
  AWS,
  Azure,
  GCP,
  Cloudflare,
  Helm,
  Rancher,
  ArgoCD,
  Linkerd,
  Prometheus,
  Grafana,
  ELK,
  Logstash,
  Python,
  AzureDevOps,
  GitHub,
  Java,
  Jenkins,
  MongoDB,
  MySQL,
  Redis,
} from "@/public/assets";
import SectionTitle from "../common/SectionTitle";
import { personal } from "@/constants/personal";

type Skill = {
  src: any;
  alt: string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
};

// SkillIcon component
const SkillIcon = ({
  src,
  alt,
  title,
  className = "w-12 max-md:w-6 rounded-full",
  style,
}: {
  src: any;
  alt: string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <li className="group relative flex flex-col items-center transition-all duration-300 hover:-translate-y-2">
    <Image
      className={`${className} hover:animate-pulse hover:contrast-150`}
      src={src}
      alt={alt}
      loading="lazy"
      style={style}
    />
    <span className="pointer-events-none absolute -bottom-6 whitespace-nowrap rounded bg-bodyColor px-2 py-0.5 font-codeFont text-xs text-textGreen opacity-0 shadow transition-opacity duration-200 group-hover:opacity-100">
      {title}
    </span>
  </li>
);

const skillGroups: Array<{ title: string; skills: Skill[] }> = [
  {
    title: "Cloud & Infrastructure",
    skills: [
      { src: Docker, alt: "Docker", title: "Docker", className: "w-12 max-md:w-6" },
      { src: Kubernetes, alt: "Kubernetes", title: "Kubernetes", className: "w-12 max-md:w-6" },
      { src: Terraform, alt: "Terraform", title: "Terraform", className: "w-12 max-md:w-6" },
      { src: Ansible, alt: "Ansible", title: "Ansible", className: "w-12 max-md:w-6", style: { filter: "invert(1) brightness(2)" } },
    ],
  },
  {
    title: "Cloud Platforms",
    skills: [
      { src: AWS, alt: "AWS", title: "AWS", className: "w-12 max-md:w-6" },
      { src: Azure, alt: "Azure", title: "Azure", className: "w-12 max-md:w-6" },
      { src: GCP, alt: "GCP", title: "GCP", className: "w-12 max-md:w-6" },
      { src: Cloudflare, alt: "Cloudflare", title: "Cloudflare", className: "w-12 max-md:w-6" },
    ],
  },
  {
    title: "Orchestration & Service Mesh",
    skills: [
      { src: Helm, alt: "Helm", title: "Helm", className: "w-12 max-md:w-6" },
      { src: Rancher, alt: "Rancher", title: "Rancher", className: "w-12 h-12 max-md:w-6 max-md:h-6 object-contain" },
      { src: Linkerd, alt: "Linkerd", title: "Linkerd", className: "w-12 max-md:w-6" },
    ],
  },
  {
    title: "CI/CD & Version Control",
    skills: [
      { src: AzureDevOps, alt: "Azure DevOps", title: "Azure DevOps", className: "w-12 max-md:w-6" },
      { src: ArgoCD, alt: "ArgoCD", title: "ArgoCD", className: "w-12 max-md:w-6" },
      { src: Jenkins, alt: "Jenkins", title: "Jenkins", className: "w-12 max-md:w-6" },
      { src: GitHub, alt: "GitHub", title: "GitHub", className: "w-12 max-md:w-6", style: { filter: "invert(1) brightness(2)" } },
    ],
  },
  {
    title: "Monitoring & Observability",
    skills: [
      { src: Prometheus, alt: "Prometheus", title: "Prometheus", className: "w-12 max-md:w-6" },
      { src: Grafana, alt: "Grafana", title: "Grafana", className: "w-12 max-md:w-6" },
      { src: ELK, alt: "Elasticsearch", title: "Elasticsearch", className: "w-12 max-md:w-6" },
      { src: Logstash, alt: "Logstash", title: "Logstash", className: "w-12 max-md:w-6" },
    ],
  },
  {
    title: "Languages & Databases",
    skills: [
      { src: Python, alt: "Python", title: "Python", className: "w-12 max-md:w-6" },
      { src: Java, alt: "Java", title: "Java", className: "w-12 max-md:w-6" },
      { src: MongoDB, alt: "MongoDB", title: "MongoDB", className: "w-12 max-md:w-6" },
      { src: MySQL, alt: "MySQL", title: "MySQL", className: "w-12 max-md:w-6" },
      { src: Redis, alt: "Redis", title: "Redis", className: "w-12 max-md:w-6" },
    ],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto flex h-screen max-w-containerSmall flex-col justify-center gap-8 py-96 mdl:px-10 lgl:py-32"
    >
      <div className="flex items-center gap-10 pt-20 sml:pt-5">
        <SectionTitle titleNumber="0.1" titleName="About me" />
      </div>

      {/* CONTENT CONTAINER - GRID */}
      <div className="grid auto-rows-auto grid-cols-6">
        {/* Text block + mobile profile image */}
        <div className="col-start-1 col-end-5 row-span-2 text-base font-medium text-textDark max-mdl:col-span-full">
          <div className="text-xs sm:text-sm sml:text-base mdl:w-11/12">
            <div className="float-right py-6 pl-5">
              <div className="relative">
                <Image
                  className="left-0 top-0 w-24 rounded-full border-2 border-textGreen object-cover object-[center_15%] sm:w-32 sml:w-40 md:w-48 mdl:hidden"
                  src={profileImgCircle}
                  alt="profilepicture"
                />
                <div className="absolute left-0 top-0 h-24 w-24 rounded-full bg-textGreen/20 duration-300 hover:bg-transparent sm:h-32 sm:w-32 sml:h-40 sml:w-40 md:h-48 md:w-48 mdl:hidden" />
              </div>
            </div>
            <p>
              Hello, I&apos;m a <span className="text-textGreen">Cloud Platform Engineering Leader</span> with
              <span className="text-textGreen"> 15+ years</span> of experience in cloud-native architecture,
              reliability engineering, and DevSecOps. Based in <span className="text-textGreen">Dubai, UAE</span>, I
              specialize in designing and scaling <span className="text-textGreen">Kubernetes clusters</span>, driving{" "}
              <span className="text-textGreen">SRE practices</span>, and building high-performing engineering teams.
              <br />
              <br />
              Throughout my career, I&apos;ve architected production systems supporting <span className="text-textGreen">99.99% uptime</span>, automated
              deployments across <span className="text-textGreen">75+ microservices</span>, and led cross-functional teams
              up to <span className="text-textGreen">40 engineers</span>. My expertise spans <span className="text-textGreen">Azure, AWS, GCP</span>, and
              modern infrastructure practices including Terraform, service meshes, and observability.
              <br />
              <br />
              Currently at <span className="text-textGreen">Humai FZCO</span>, leading cloud platform and DevOps initiatives while
              enabling startup teams through automation and security best practices.
              <br />
              <br />
            </p>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="group relative col-start-5 col-end-7 row-start-1 row-end-3 grid place-items-center max-mdl:hidden">
          <div className="absolute -left-6 -top-6 h-52 w-52 rounded-full lgl:h-80 lgl:w-80">
            <Image
              className="fill absolute z-30 h-52 w-52 rounded-full border-2 border-textGreen object-cover object-[center_15%] lgl:h-80 lgl:w-80"
              src={profileImgCircle}
              alt={`${personal.name} - Profile picture`}
            />
            <div className="absolute left-0 top-0 z-30 hidden h-52 w-52 rounded-full bg-textGreen/20 duration-300 group-hover:bg-transparent mdl:inline-block lgl:h-80 lgl:w-80" />
            <div className="absolute left-6 top-6 z-10 hidden h-52 w-52 rounded-full border-2 border-textGreen transition-transform duration-100 group-hover:-translate-x-6 group-hover:-translate-y-6 mdl:inline-block lgl:h-80 lgl:w-80" />
          </div>
        </div>

        {/* Skills Section (Hard Skills + Exploring) */}
        <div className="col-span-full row-start-3 pt-5">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {skillGroups.map(({ title, skills }) => (
              <div key={title}>
                <p className="pb-5 text-center font-codeFont text-sm font-bold text-textDark lg:text-base">
                  {title}:
                </p>
                <ul className="flex flex-row flex-wrap justify-center gap-5 md:gap-10">
                  {skills.map(({ src, alt, title, className, style }) => (
                    <SkillIcon
                      key={title}
                      src={src}
                      alt={alt}
                      title={title}
                      className={className}
                      style={style}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

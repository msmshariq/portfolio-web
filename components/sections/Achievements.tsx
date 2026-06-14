"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

const fadeInUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
});

const achievements = [
  {
    title: "99.99% Uptime at Scale",
    description:
      "Improved platform reliability to 99.99% uptime for Choreo and Asgardeo through resilience design, automation, and observability practices across 75+ microservices on Kubernetes.",
    metrics: "99.99% Uptime",
  },
  {
    title: "DevOps Transformation",
    description:
      "Automated deployments across 75+ microservices, reduced environment setup time by 70%, and enabled daily production releases through full CI/CD pipeline automation.",
    metrics: "70% Time Reduction",
  },
  {
    title: "Investor-Ready Architecture",
    description:
      "Presented cloud platform architecture and strategy to Goldman Sachs, playing a key role in WSO2's $90M capital raise through demonstrating scalable, reliable infrastructure.",
    metrics: "$90M Investment",
  },
  {
    title: "Cloud Cost Optimization",
    description:
      "Achieved 25% cloud cost savings through reserved instances, autoscaling strategies, right-sizing, and continuous optimization across multi-region deployments.",
    metrics: "25% Cost Savings",
  },
  {
    title: "Team Leadership & Scaling",
    description:
      "Built and led cross-functional teams up to 40 engineers, conducting 10+ strategic hires and 15+ performance appraisals while maintaining 100% team retention.",
    metrics: "40+ Engineers Led",
  },
  {
    title: "Enterprise Security & Compliance",
    description:
      "Implemented 100+ SOC 2 compliance controls, integrated ITSM practices with ServiceNow, and led cloud hardening efforts across infrastructure.",
    metrics: "100+ Controls",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="mx-auto flex min-h-screen max-w-containerSmall flex-col justify-center gap-10 py-96 lgl:py-32"
    >
      <SectionTitle titleName="Key Technical Achievements" titleNumber="03" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            {...fadeInUp(index * 0.1)}
            className="group relative rounded-lg border border-textGreen/20 bg-[#112240] p-6 transition-all duration-300 hover:border-textGreen hover:bg-[#0a1929] hover:shadow-lg"
          >
            {/* Corner accent */}
            <div className="absolute left-0 top-0 h-1 w-0 bg-textGreen transition-all duration-300 group-hover:w-full" />

            {/* Metric badge */}
            <div className="mb-4 inline-block rounded-full bg-textGreen/10 px-3 py-1">
              <span className="text-xs font-semibold text-textGreen">{achievement.metrics}</span>
            </div>

            {/* Title */}
            <h3 className="mb-3 text-lg font-semibold text-textLight group-hover:text-textGreen">
              {achievement.title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-textDark">{achievement.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

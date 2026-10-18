import React from "react";
import { inter, firaCode, montserrat } from "./fonts";
import type { Metadata } from "next";
import { personal } from "@/constants/personal";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://msmshariq.com"),
  title: {
    default: "Muhammed Shariq – Freelance Cloud, DevOps & SRE Consultant",
    template: "%s | Muhammed Shariq",
  },
  description:
    "Freelance Azure, AWS & GCP cloud consultant and DevOps/SRE architect based in Dubai, UAE, serving the GCC and remote clients worldwide. Specialist in Kubernetes, Docker, containers, and WSO2 API integration & management.",
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://msmshariq.com/#person",
      name: personal.name,
      jobTitle: "Cloud Platform Engineering Leader & SRE Architect",
      url: "https://msmshariq.com",
      image: "https://msmshariq.com/assets/mages/shariq.png",
      email: `mailto:${personal.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      sameAs: [personal.socials.linkedin, personal.socials.github, personal.socials.twitter],
      knowsAbout: [
        "Microsoft Azure",
        "Amazon Web Services (AWS)",
        "Google Cloud Platform (GCP)",
        "Kubernetes",
        "Docker",
        "Site Reliability Engineering (SRE)",
        "DevOps",
        "DevSecOps",
        "Terraform",
        "Infrastructure as Code",
        "WSO2",
        "API Integration & Management",
        "FinOps",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://msmshariq.com/#service",
      name: "Muhammed Shariq – Cloud, DevOps & SRE Consulting",
      provider: { "@id": "https://msmshariq.com/#person" },
      areaServed: ["United Arab Emirates", "GCC", "Worldwide"],
      serviceType: [
        "Cloud Consulting (Azure, AWS, GCP)",
        "DevOps Consulting",
        "Site Reliability Engineering (SRE)",
        "Kubernetes & Docker Container Consulting",
        "API Integration & Management (WSO2)",
      ],
      url: "https://msmshariq.com",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} ${montserrat.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

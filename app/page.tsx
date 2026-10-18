import Header from "@/components/layout/Header";
import LeftSide from "@/components/layout/LeftSide";
import Banner from "@/components/sections/Banner";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Recommendations from "@/components/sections/Recommendations";
import Footer from "@/components/layout/Footer";
import RightSide from "@/components/layout/RightSide";
import ChatBubble from "@/components/chat/ChatBubble";

import type { Metadata } from "next";
import Achievements from "@/components/sections/Achievements";

export const metadata: Metadata = {
  title: "Azure & Cloud DevOps/SRE Consultant",
  description:
    "Azure, AWS & GCP cloud consultant and DevOps/SRE architect based in Dubai, UAE. Specializing in Kubernetes, Docker, containers, and WSO2 API integration & management for clients across the GCC and worldwide.",
  openGraph: {
    title: "Muhammed Shariq – Cloud, DevOps & SRE Consultant",
    description:
      "Azure, AWS & GCP cloud consultant and DevOps/SRE architect based in Dubai, UAE. Kubernetes, Docker, and WSO2 API integration & management specialist.",
    url: "https://msmshariq.com",
    siteName: "Muhammed Shariq",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Shariq – Cloud, DevOps & SRE Consultant",
    description:
      "Azure, AWS & GCP cloud consultant and DevOps/SRE architect based in Dubai, UAE.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function HomePage() {
  return (
    <main className="h-screen w-full overflow-x-hidden overflow-y-scroll bg-bodyColor font-bodyFont text-textLight scrollbar-thin scrollbar-track-textDark/5 scrollbar-thumb-textDark/70">
      <Header />
      <div className="h-[88vh] w-full items-center justify-between gap-10 lg:flex">
        <div className="fixed bottom-0 left-0 hidden h-full w-32 xl:inline-flex">
          <LeftSide />
        </div>
        <div className="mx-auto h-[88vh] w-full p-4">
          <Banner />
          <About />
          <Experience />
          <Achievements />
          <Recommendations />
          <Contact />
          <Footer />
        </div>
        <div className="fixed bottom-0 right-0 hidden h-full w-32 xl:inline-flex">
          <RightSide />
        </div>
      </div>
      <ChatBubble />
    </main>
  );
}

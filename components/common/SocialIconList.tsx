"use client";

import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import SocialIcon from "./SocialIcon";
import { personal } from "@/constants/personal";

export default function SocialIconList({ className }: { className?: string }) {
  const baseClass = "border-zinc-700 bg-bodyColor text-zinc-200";

  return (
    <div className={`flex gap-4 ${className}`}>
      <SocialIcon href={personal.socials.github} externalClassName={baseClass}>
        <SiGithub />
      </SocialIcon>
      <SocialIcon href={personal.socials.linkedin} externalClassName={baseClass}>
        <BsLinkedin />
      </SocialIcon>
      <SocialIcon href={personal.socials.twitter} externalClassName={baseClass}>
        <TiSocialTwitter />
      </SocialIcon>
    </div>
  );
}

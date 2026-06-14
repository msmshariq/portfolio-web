"use client";

import React from "react";
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import SocialIcon from "../common/SocialIcon";
import { personal } from "@/constants/personal";

const Footer = () => {
  return (
    <div>
      <div className="inline-flex w-full items-center justify-center gap-4 xl:hidden">
        <SocialIcon
          href={personal.socials.github}
          externalClassName="bg-bodyColor text-zinc-200 border-zinc-700"
        >
          <SiGithub />
        </SocialIcon>

        <SocialIcon
          href={personal.socials.linkedin}
          externalClassName="bg-bodyColor text-zinc-200 border-zinc-700"
        >
          <BsLinkedin />
        </SocialIcon>

        <SocialIcon
          href={personal.socials.twitter}
          externalClassName="bg-bodyColor text-zinc-200 border-zinc-700"
        >
          <TiSocialTwitter />
        </SocialIcon>
      </div>
      <p className="justify-center py-3 text-center text-xs">
        Based on{" "}
        <a
          href="https://github.com/DevonGifford/Portfolio_v2"
          target="_blank"
          className="text-textGreen"
          rel="noreferrer"
        >
          Devon Gifford
        </a>
        &apos;s portfolio · Inspired by{" "}
        <a
          href="https://brittanychiang.com/"
          target="_blank"
          className="text-textGreen"
          rel="noreferrer"
        >
          Brittany Chiang
        </a>
      </p>
    </div>
  );
};

export default Footer;

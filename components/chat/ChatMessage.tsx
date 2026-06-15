"use client";

import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { profileImgCircle } from "@/public/assets";

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
};

const ChatMessage = ({ message }: { message: Message }) => {
  const isAssistant = message.role === "assistant";

  return (
    <div className={`flex gap-3 ${isAssistant ? "" : "flex-row-reverse"}`}>
      {isAssistant && (
        <div className="relative flex-shrink-0">
          <Image
            src={profileImgCircle}
            alt="Digital Shariq"
            className="h-8 w-8 rounded-full border border-textGreen/30 object-cover object-[center_15%]"
          />
          <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-textGreen" />
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isAssistant
            ? "rounded-tl-sm bg-[#112240] text-textLight"
            : "rounded-tr-sm border border-textGreen/30 bg-textGreen/10 text-textLight"
        }`}
      >
        {message.isStreaming && !message.content ? (
          <div className="flex gap-1 py-1">
            <span className="h-2 w-2 animate-bounce rounded-full bg-textGreen/60 [animation-delay:0ms]" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-textGreen/60 [animation-delay:150ms]" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-textGreen/60 [animation-delay:300ms]" />
          </div>
        ) : (
          <ReactMarkdown className="prose prose-invert prose-sm max-w-none">
            {message.content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;

"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChatbubbleEllipses, IoClose, IoSend } from "react-icons/io5";
import Image from "next/image";
import { profileImgCircle } from "@/public/assets";
import ChatMessage, { Message } from "./ChatMessage";

const CHAT_API_URL = process.env.NEXT_PUBLIC_CHAT_API_URL ?? "";

const INTRO_MESSAGE: Message = {
  id: "intro",
  role: "assistant",
  content:
    "Hi! I'm Digital Shariq — a virtual twin trained on my career, experience, and background. Ask me anything!",
};

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INTRO_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sessionId = useRef(crypto.randomUUID());

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowPrompt(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShowPrompt(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const callAPI = async (userMessage: string) => {
    const typingId = `assistant-${Date.now()}`;

    setMessages((prev) => [
      ...prev,
      { id: typingId, role: "assistant", content: "", isStreaming: true },
    ]);
    setIsTyping(true);

    try {
      const history = messages
        .filter((m) => m.id !== "intro")
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch(`${CHAT_API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          sessionId: sessionId.current,
          history,
        }),
      });

      if (!res.ok || !res.body) throw new Error("API error");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const parts = buffer.split("\n\n");
        buffer = parts.pop() ?? "";

        for (const part of parts) {
          if (!part.startsWith("data: ")) continue;
          const data = part.slice(6);
          if (data === "[DONE]") {
            setMessages((prev) =>
              prev.map((m) =>
                m.id === typingId ? { ...m, isStreaming: false } : m
              )
            );
            setIsTyping(false);

            return;
          }
          try {
            const token = JSON.parse(data) as string;
            setMessages((prev) =>
              prev.map((m) =>
                m.id === typingId
                  ? { ...m, content: m.content + token }
                  : m
              )
            );
          } catch (_e) {
            // ignore malformed SSE token
          }
        }
      }
    } catch {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === typingId
            ? {
                ...m,
                content: "Sorry, I couldn't connect right now. Please try again.",
                isStreaming: false,
              }
            : m
        )
      );
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = () => {
    if (!input.trim() || isTyping) return;
    const text = input.trim();
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    callAPI(text);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex h-[520px] w-[360px] flex-col overflow-hidden rounded-2xl border border-textGreen/20 bg-bodyColor shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-textGreen/10 bg-[#0d1f3c] px-4 py-3">
              <div className="relative flex-shrink-0">
                <Image
                  src={profileImgCircle}
                  alt="Digital Shariq"
                  className="h-10 w-10 rounded-full border border-textGreen/40 object-cover object-[center_15%]"
                />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#0d1f3c] bg-textGreen" />
              </div>
              <div className="flex-1">
                <h3 className="font-titleFont text-sm font-semibold text-textLight">
                  Digital Shariq
                </h3>
                <p className="font-codeFont text-xs text-textGreen">
                  Online · Replies instantly
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 text-textDark transition-colors hover:bg-textGreen/10 hover:text-textGreen"
              >
                <IoClose size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-textDark/20 flex-1 space-y-4 overflow-y-auto px-4 py-4">
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-textGreen/10 bg-[#0d1f3c] px-3 py-3">
              <div className="flex items-center gap-2 rounded-xl border border-textGreen/20 bg-bodyColor px-3 py-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent font-bodyFont text-sm text-textLight placeholder-textDark/60 outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="rounded-lg p-1.5 text-textGreen transition-all hover:bg-textGreen/10 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <IoSend size={16} />
                </button>
              </div>
              <p className="mt-1.5 text-center font-codeFont text-[10px] text-textDark/40">
                AI-generated · May not always be accurate
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Proactive prompt bubble */}
      <AnimatePresence>
        {showPrompt && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.3 }}
            className="relative mr-2 max-w-[220px] cursor-pointer rounded-2xl rounded-br-sm border border-textGreen/20 bg-[#0d1f3c] px-4 py-2.5 shadow-lg"
            onClick={() => setIsOpen(true)}
          >
            <p className="font-bodyFont text-xs text-textLight">
              Ask me about my experience, skills, or background 👋
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowPrompt(false);
              }}
              className="absolute -right-1.5 -top-1.5 rounded-full border border-textGreen/20 bg-[#0d1f3c] p-0.5 text-textDark hover:text-textGreen"
            >
              <IoClose size={10} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bubble button */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2.5 rounded-full border border-textGreen/30 bg-[#0d1f3c] px-4 py-3 shadow-lg transition-colors hover:border-textGreen hover:bg-textGreen/10"
      >
        <div className="relative">
          <IoChatbubbleEllipses size={20} className="text-textGreen" />
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-textGreen" />
        </div>
        <span className="font-titleFont text-sm font-medium text-textLight">
          Chat with Digital Shariq
        </span>
      </motion.button>
    </div>
  );
};

export default ChatBubble;

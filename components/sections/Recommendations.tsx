"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaQuoteLeft } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import SectionTitle from "../common/SectionTitle";
import recommendations from "./recommendations/recommendationEntries";

const SHARIQ_LINKEDIN = "https://www.linkedin.com/in/msmshariq/details/recommendations/";

const Recommendations = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % recommendations.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + recommendations.length) % recommendations.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 7000);

    return () => clearInterval(timer);
  }, [isPaused, next]);

  const rec = recommendations[current];

  return (
    <section
      id="recommendations"
      className="mx-auto flex min-h-screen max-w-containerSmall flex-col justify-center gap-10 py-96 lgl:py-32"
    >
      <SectionTitle titleName="What People Say" titleNumber="04" />

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Card */}
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={{
              enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="rounded-2xl border border-textGreen/20 bg-[#112240] p-8 lgl:p-10"
          >
            {/* Quote icon */}
            <FaQuoteLeft className="mb-5 text-3xl text-textGreen/30" />

            {/* Recommendation text */}
            <div className="mb-8 space-y-3 text-sm leading-relaxed text-textDark lgl:text-base">
              {rec.text.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Recommender info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full font-titleFont text-sm font-bold text-bodyColor"
                  style={{ backgroundColor: rec.avatarColor }}
                >
                  {rec.initials}
                </div>
                <div>
                  {rec.linkedinUrl ? (
                    <a
                      href={rec.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-titleFont text-sm font-semibold text-textLight hover:text-textGreen transition-colors duration-200"
                    >
                      {rec.firstName} {rec.lastName}
                    </a>
                  ) : (
                    <p className="font-titleFont text-sm font-semibold text-textLight">
                      {rec.firstName} {rec.lastName}
                    </p>
                  )}
                  <p className="font-codeFont text-xs text-textDark">
                    {rec.title} · {rec.company}
                  </p>
                </div>
              </div>
              <a href={SHARIQ_LINKEDIN} target="_blank" rel="noreferrer">
                <FaLinkedin className="text-2xl text-[#0A66C2] opacity-80 hover:opacity-100 transition-opacity duration-200" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-between">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {recommendations.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 bg-textGreen"
                    : "w-1.5 bg-textDark/30 hover:bg-textDark/60"
                }`}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="rounded-full border border-textGreen/20 p-2 text-textDark transition-all hover:border-textGreen hover:text-textGreen"
            >
              <MdChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="rounded-full border border-textGreen/20 p-2 text-textDark transition-all hover:border-textGreen hover:text-textGreen"
            >
              <MdChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;

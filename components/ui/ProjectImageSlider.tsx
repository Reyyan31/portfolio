"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectImageSliderProps {
  images: string[];
}

export function ProjectImageSlider({ images }: ProjectImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left
  const [isHovered, setIsHovered] = useState(false);

  const safeImages = images.filter((image): image is string => typeof image === "string" && image.trim().length > 0);

  const nextSlide = () => {
    if (safeImages.length === 0) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % safeImages.length);
  };

  const prevSlide = () => {
    if (safeImages.length === 0) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length);
  };

  useEffect(() => {
    if (safeImages.length === 0) {
      setCurrentIndex(0);
      return;
    }

    setCurrentIndex((prev) => (prev >= safeImages.length ? 0 : prev));
  }, [safeImages.length]);

  useEffect(() => {
    if (isHovered || safeImages.length <= 1) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, safeImages.length]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9,
    }),
  };

  if (safeImages.length === 0) {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 border border-white/10 bg-white/[0.03] flex items-center justify-center text-sm text-white/50">
        No project imagery available
      </div>
    );
  }

  return (
    <div
      className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 },
          }}
          className="absolute inset-0"
        >
          <Image
            src={safeImages[currentIndex]}
            alt={`Project screenshot ${currentIndex + 1}`}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            priority={currentIndex === 0}
            quality={95}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          />
          {/* subtle overlay to make the UI pop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            prevSlide();
          }}
          className="p-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-black/60 transition-all hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            nextSlide();
          }}
          className="p-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-black/60 transition-all hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {safeImages.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-all duration-300",
              currentIndex === index
                ? "bg-white w-4 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                : "bg-white/40 hover:bg-white/60"
            )}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import React, { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";

/* ─── Preset animation variants ─── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const variantMap = {
  "fade-up": fadeUp,
  "fade-in": fadeIn,
  "slide-left": slideLeft,
  "slide-right": slideRight,
  "scale-up": scaleUp,
} as const;

type AnimationType = keyof typeof variantMap;

/* ─── ScrollReveal: animates children when they scroll into view ─── */

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
  as?: "div" | "section" | "article" | "span";
}

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration,
  className,
  threshold = 0.15,
  once = true,
  as = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    amount: threshold,
  });

  const baseVariants = variantMap[animation];

  // Override duration/delay if provided
  const variants: Variants = {
    hidden: baseVariants.hidden,
    visible: {
      ...(baseVariants.visible as Record<string, unknown>),
      transition: {
        ...((baseVariants.visible as Record<string, unknown>)
          .transition as Record<string, unknown>),
        ...(delay ? { delay } : {}),
        ...(duration ? { duration } : {}),
      },
    },
  };

  const Component = motion.create(as);

  return (
    <Component
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </Component>
  );
}

/* ─── StaggerReveal: staggers children animations ─── */

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  threshold?: number;
  once?: boolean;
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export function StaggerReveal({
  children,
  className,
  stagger = 0.12,
  threshold = 0.1,
  once = true,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        ...staggerContainer,
        visible: {
          transition: { staggerChildren: stagger },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── StaggerItem: child of StaggerReveal ─── */

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
}

export function StaggerItem({
  children,
  className,
  animation = "fade-up",
}: StaggerItemProps) {
  return (
    <motion.div variants={variantMap[animation]} className={className}>
      {children}
    </motion.div>
  );
}

/* ─── ParallaxReveal: subtle parallax effect on scroll ─── */

interface ParallaxRevealProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

export function ParallaxReveal({
  children,
  className,
  speed = 0.15,
  direction = "up",
}: ParallaxRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const factor = direction === "up" ? -1 : 1;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [factor * speed * 100, factor * speed * -100]
  );

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/* ─── TextReveal: word-by-word reveal animation ─── */

interface TextRevealProps {
  text: string;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export function TextReveal({
  text,
  className,
  threshold = 0.3,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={
              isInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }
            }
            transition={{
              duration: 0.5,
              delay: i * 0.04,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  );
}

/* ─── HorizontalLine: animated horizontal line that draws in on scroll ─── */

interface HorizontalLineProps {
  className?: string;
  color?: string;
  thickness?: number;
  once?: boolean;
}

export function HorizontalLine({
  className,
  color = "currentColor",
  thickness = 1,
  once = true,
}: HorizontalLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.5 });

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{
          height: thickness,
          backgroundColor: color,
          transformOrigin: "left center",
        }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
    </div>
  );
}

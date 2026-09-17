import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { useReducedMotion } from "../../hooks/use-reduced-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Renders as a different element when composing inside headings etc. */
  as?: "div" | "span";
}

/** Fades + lifts content into place once it enters the viewport. Skips motion when reduced-motion is on. */
export function Reveal({ children, className, delay = 0, y = 24, as = "div" }: RevealProps) {
  const reducedMotion = useReducedMotion();
  const Component = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0.01 : 0.9,
        delay: reducedMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={variants}
    >
      {children}
    </Component>
  );
}

/** Splits text into words and reveals each with a clipped upward slide, staggered — for headline lines. */
export function RevealWords({ text, className }: { text: string; className?: string }) {
  const reducedMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          aria-hidden="true"
          className="inline-block overflow-hidden"
        >
          <motion.span
            className="inline-block"
            initial={{ y: reducedMotion ? 0 : "110%", opacity: reducedMotion ? 1 : 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: reducedMotion ? 0.01 : 0.8,
              delay: reducedMotion ? 0 : 0.15 + 0.04 * i,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </motion.span>
      ))}
    </span>
  );
}

import { motion } from "motion/react";
import { useReducedMotion } from "../../hooks/use-reduced-motion";

/**
 * Small floating status card — availability + base — inspired by the
 * reference sites' sidebar info panels, but kept to a single hairline card
 * instead of a stat-block grid. Purely factual, no fabricated numbers.
 */
export function StatusPanel({ className = "" }: { className?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reducedMotion ? 0 : 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reducedMotion ? 0.01 : 0.9, delay: reducedMotion ? 0 : 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`flex w-fit items-center gap-4 border border-hair bg-navy/60 px-5 py-3 backdrop-blur-sm ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-electric opacity-75 motion-safe:animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-electric" />
      </span>
      <div className="font-body text-[12px] leading-tight">
        <p className="uppercase tracking-[0.1em] text-fg-primary">Disponível para novos projetos</p>
        <p className="mt-0.5 text-fg-muted">Goiânia, Brasil · CLT · PJ · Freelance</p>
      </div>
    </motion.div>
  );
}

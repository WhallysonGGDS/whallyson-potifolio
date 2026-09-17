import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "../../hooks/use-reduced-motion";

/**
 * A single soft, low-opacity radial glow that trails the pointer inside its
 * container, plus a very slow ambient drift. Purely decorative depth cue —
 * never interactive, never competes with content. Disabled under reduced-motion.
 */
export function CursorGlow() {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 40, stiffness: 60, mass: 1 });
  const springY = useSpring(y, { damping: 40, stiffness: 60, mass: 1 });

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [reducedMotion, x, y]);

  if (reducedMotion) {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 30%, rgba(45,107,255,0.10), transparent 70%)",
        }}
      />
    );
  }

  return (
    <div ref={ref} aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute h-[36rem] w-[36rem] rounded-full"
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, rgba(45,107,255,0.16) 0%, rgba(45,107,255,0.05) 45%, transparent 75%)",
          filter: "blur(10px)",
        }}
      />
    </div>
  );
}

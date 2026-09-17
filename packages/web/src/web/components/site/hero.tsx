import { motion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { CursorGlow } from "./cursor-glow";
import { RevealWords } from "./reveal";
import { StatusPanel } from "./status-panel";
import { useReducedMotion } from "../../hooks/use-reduced-motion";

/** Opening statement — cinematic name reveal, authorial line, and the two entry paths through the site. */
export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100vh] flex-col justify-between overflow-hidden bg-void px-6 pt-32 pb-10 md:px-12"
    >
      <CursorGlow />
      <div className="grain absolute inset-0" />

      <StatusPanel className="absolute right-6 top-28 z-10 hidden md:right-12 lg:flex" />

      <div className="relative z-10 flex flex-1 flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: reducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0.01 : 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 font-body text-[13px] uppercase tracking-[0.2em] text-fg-secondary"
        >
          Creative Developer · UI Engineer · Digital Product Creator
        </motion.p>

        <h1 className="font-display leading-[0.92] text-fg-primary">
          <span className="block text-[clamp(3rem,11vw,8.5rem)] font-extrabold tracking-tight">
            <RevealWords text="Whallyson" />
          </span>
          <span className="block text-[clamp(3rem,11vw,8.5rem)] font-extrabold tracking-tight text-fg-secondary">
            <RevealWords text="Gabriel" />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0.01 : 0.9, delay: reducedMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-md font-body text-lg leading-relaxed text-fg-secondary md:text-xl"
        >
          Construo interfaces de alto impacto visual — do design ao código, em produção.
        </motion.p>

        <StatusPanel className="mt-8 lg:hidden" />

        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0.01 : 0.9, delay: reducedMotion ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4"
        >
          <a
            href="#sobre"
            className="group inline-flex items-center gap-2 font-body text-[15px] font-medium text-fg-primary"
          >
            <span className="border-b border-transparent pb-1 transition-colors duration-200 group-hover:border-electric">
              Ver perfil profissional
            </span>
            <ArrowRight className="h-4 w-4 text-electric transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 font-body text-[15px] text-fg-secondary transition-colors duration-200 hover:text-fg-primary"
          >
            <span className="border-b border-transparent pb-1 group-hover:border-fg-secondary">
              Entrar em contato
            </span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reducedMotion ? 0.01 : 1, delay: reducedMotion ? 0 : 1.2 }}
        className="relative z-10 flex items-center justify-between border-t border-hair pt-6 font-body text-[12px] uppercase tracking-[0.14em] text-fg-muted"
      >
        <span>Goiânia, Brasil</span>
        <span className="hidden md:inline">CLT · PJ · Freelance</span>
        <span className="inline-flex items-center gap-2">
          Scroll
          <ArrowDown className="h-3.5 w-3.5" />
        </span>
      </motion.div>
    </section>
  );
}

import { motion, useScroll } from "motion/react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];

/** Slim fixed header: wordmark, section links, and a scroll-progress hairline that ties navigation to the reading position. */
export function Nav() {
  const { scrollYProgress } = useScroll();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className="h-px origin-left bg-electric"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="flex items-center justify-between px-6 py-5 md:px-12">
        <a
          href="#top"
          className="font-display text-[13px] font-semibold uppercase tracking-[0.18em] text-fg-primary"
        >
          W.G.
        </a>
        <nav aria-label="Seções" className="hidden gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[13px] uppercase tracking-[0.12em] text-fg-secondary transition-colors duration-200 hover:text-fg-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="font-body text-[13px] uppercase tracking-[0.12em] text-fg-secondary transition-colors duration-200 hover:text-electric md:hidden"
        >
          Contato
        </a>
      </div>
    </header>
  );
}

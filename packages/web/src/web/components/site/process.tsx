import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Fragment, useRef } from "react";
import { processSteps } from "../../lib/site-data";
import { Reveal } from "./reveal";
import { useReducedMotion } from "../../hooks/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

/**
 * A single continuous narrative connected to scroll — numbered nodes on a
 * vertical spine, a progress line that fills as the reader moves through
 * Direção → UX → UI → Code, and each node lighting up when it becomes
 * active. Not four isolated cards.
 */
export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !containerRef.current || !lineRef.current) return;

      gsap.set(lineRef.current, { scaleY: 0, transformOrigin: "top" });
      gsap.to(lineRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      const contents = gsap.utils.toArray<HTMLElement>(".process-content");
      contents.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => el.parentElement?.classList.toggle("is-active", self.isActive),
        });
      });
    },
    { scope: containerRef, dependencies: [reducedMotion] },
  );

  return (
    <section id="processo" className="relative bg-navy px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 max-w-2xl md:mb-28">
          <Reveal>
            <span className="mb-8 block font-body text-[13px] uppercase tracking-[0.2em] text-electric">
              04 — Processo
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-[clamp(2rem,4.6vw,3.6rem)] font-extrabold leading-[1.08] tracking-tight text-fg-primary">
              Design com intenção. Tecnologia com propósito.
            </h2>
          </Reveal>
        </div>

        <div ref={containerRef} className="relative">
          <div className="absolute left-5 top-5 bottom-5 w-px bg-hair md:left-6" />
          <div
            ref={lineRef}
            className="absolute left-5 top-5 bottom-5 w-px bg-electric md:left-6"
            style={reducedMotion ? undefined : { transform: "scaleY(0)" }}
          />

          <div className="grid grid-cols-[40px_1fr] gap-x-8 gap-y-16 md:grid-cols-[48px_1fr] md:gap-x-12 md:gap-y-24">
            {processSteps.map((step) => (
              <Fragment key={step.index}>
                <div
                  className={`process-step contents ${reducedMotion ? "is-active" : ""}`}
                >
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center justify-self-center rounded-full border border-hair bg-navy font-display text-[13px] font-semibold text-fg-muted transition-all duration-500 [.is-active_&]:border-electric [.is-active_&]:text-electric md:h-12 md:w-12 md:text-[14px]">
                    {step.index}
                  </div>
                  <div className="process-content max-w-lg opacity-40 transition-opacity duration-500 [.is-active_&]:opacity-100">
                    <span className="font-body text-[13px] uppercase tracking-[0.16em] text-fg-muted">
                      {step.label}
                    </span>
                    <h3 className="mt-2 font-display text-[clamp(1.4rem,2.4vw,1.9rem)] font-bold leading-tight text-fg-primary">
                      {step.title}
                    </h3>
                    <p className="mt-4 font-body text-[16px] leading-relaxed text-fg-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

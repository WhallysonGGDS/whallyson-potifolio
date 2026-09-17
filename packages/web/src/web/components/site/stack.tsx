import type { CSSProperties } from "react";
import { stackCategories } from "../../lib/site-data";
import { stackIconColor, stackIconMap } from "../../lib/stack-icons";
import { Reveal } from "./reveal";

/** Hierarchical, non-grid presentation of the toolset — weighted by category rather than an even inventory grid. */
export function Stack() {
  return (
    <section id="stack" className="relative bg-void px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl md:mb-24">
          <Reveal>
            <span className="mb-8 block font-body text-[13px] uppercase tracking-[0.2em] text-electric">
              03 — Stack
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-[clamp(2rem,4.6vw,3.6rem)] font-extrabold leading-[1.08] tracking-tight text-fg-primary">
              As ferramentas são parte do processo. Não o objetivo.
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col">
          {stackCategories.map((category, i) => (
            <Reveal key={category.label} delay={0.05 * i}>
              <div className="grid grid-cols-1 gap-6 border-t border-hair py-9 md:grid-cols-[220px_1fr] md:gap-10">
                <span
                  className={
                    category.weight === "primary"
                      ? "font-display text-[15px] font-semibold text-fg-primary"
                      : "font-body text-[14px] text-fg-muted"
                  }
                >
                  {category.label}
                </span>
                <ul className="flex flex-wrap gap-2.5">
                  {category.items.map((item) => {
                    const Icon = stackIconMap[item];
                    const color = stackIconColor[item];
                    return (
                      <li
                        key={item}
                        className="group flex items-center gap-2 border border-hair px-3.5 py-2 font-body text-fg-secondary transition-all duration-200 hover:border-electric/40 hover:text-fg-primary"
                      >
                        {Icon ? (
                          <Icon
                            aria-hidden="true"
                            className="h-3.5 w-3.5 text-fg-muted transition-colors duration-200 group-hover:[color:var(--icon-color)]"
                            style={{ "--icon-color": color } as CSSProperties}
                          />
                        ) : null}
                        <span
                          className={
                            category.weight === "primary" ? "text-[14px]" : "text-[13.5px]"
                          }
                        >
                          {item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

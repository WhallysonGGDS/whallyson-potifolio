import { Reveal } from "./reveal";

const meta = [
  { label: "Base", value: "Goiânia, Brasil" },
  { label: "Formação", value: "ADS — Estácio, 2024" },
  { label: "Disponibilidade", value: "CLT · PJ · Freelance" },
];

/** Professional positioning statement — design + engineering as one practice, written for someone evaluating a hire. */
export function About() {
  return (
    <section id="sobre" className="relative bg-navy px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
        <div>
          <Reveal>
            <span className="mb-8 block font-body text-[13px] uppercase tracking-[0.2em] text-electric">
              02 — Sobre
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-fg-primary">
              Eu não crio
              <br />
              apenas interfaces.
            </h2>
          </Reveal>

          <div className="mt-10 max-w-xl space-y-6 font-body text-[17px] leading-relaxed text-fg-secondary">
            <Reveal delay={0.1}>
              <p>
                Sou desenvolvedor front-end e UI Engineer, com foco em construir
                interfaces de alto impacto visual — unindo design, interação e
                engenharia numa mesma entrega, do zero à produção.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Trabalho com Next.js, React, TypeScript e Tailwind CSS no
                front-end, motion com GSAP e Motion, e integrações de backend
                com Supabase, PostgreSQL e Drizzle ORM quando o produto exige.
                Cada decisão de UI é pensada em função do que o usuário
                precisa entender e conseguir fazer.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Formado em Análise e Desenvolvimento de Sistemas (Estácio de
                Sá, 2024), com base técnica em lógica, estrutura de dados e
                arquitetura de software — o que sustenta decisões de produto
                mais consistentes, não só visuais.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <dl className="mt-14 grid grid-cols-1 gap-6 border-t border-hair pt-8 sm:grid-cols-3">
              {meta.map((item) => (
                <div key={item.label}>
                  <dt className="font-body text-[11px] uppercase tracking-[0.18em] text-fg-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-2 font-display text-[15px] font-medium text-fg-primary">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative">
          <Portrait />
        </Reveal>
      </div>
    </section>
  );
}

/** Plain, unfiltered portrait — framed like a printed plate (hairline border, caption strip) rather than a decorated avatar. */
function Portrait() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden border border-hair bg-ink md:ml-auto">
      <img
        src="/images/whallyson.jpg"
        alt="Retrato de Whallyson Gabriel Garcia da Silva"
        className="h-full w-full object-cover object-top"
        loading="lazy"
        width={640}
        height={800}
      />
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-hair bg-void/40 px-5 py-4 font-body text-[11px] uppercase tracking-[0.14em] text-fg-muted backdrop-blur-sm">
        <span>Whallyson Gabriel</span>
        <span>Goiânia, BR</span>
      </div>
    </div>
  );
}

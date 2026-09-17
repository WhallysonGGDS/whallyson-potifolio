import { ArrowRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import { contactLinks } from "../../lib/site-data";
import { Reveal } from "./reveal";

const socials = [
  { label: "WhatsApp", href: contactLinks.whatsapp, Icon: SiWhatsapp },
  { label: "GitHub", href: contactLinks.github, Icon: SiGithub },
  { label: "LinkedIn", href: contactLinks.linkedin, Icon: FaLinkedin },
];

/** Closing statement — deliberately spare, ending on the single CTA rather than a busy footer. */
export function Contact() {
  return (
    <section id="contato" className="relative flex min-h-[90vh] flex-col bg-void px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center">
        <Reveal>
          <span className="mb-10 block font-body text-[13px] uppercase tracking-[0.2em] text-electric">
            05 — Contato
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="max-w-3xl font-display text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-fg-primary">
            Tem um projeto ou
            <br />
            uma vaga em aberto?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-md font-body text-lg leading-relaxed text-fg-secondary">
            Disponível para CLT, PJ e freelance. Vamos conversar sobre como posso ajudar.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href={`mailto:${contactLinks.email}`}
            className="group mt-14 inline-flex items-center gap-3 font-display text-[clamp(1.5rem,3vw,2.2rem)] font-bold text-fg-primary"
          >
            <span className="border-b border-transparent pb-1 transition-colors duration-200 group-hover:border-electric">
              Vamos conversar
            </span>
            <ArrowRight className="h-7 w-7 text-electric transition-transform duration-200 group-hover:translate-x-2" />
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-20 flex w-full max-w-6xl flex-col gap-8 border-t border-hair pt-8 md:flex-row md:items-center md:justify-between">
          <a
            href={`mailto:${contactLinks.email}`}
            className="font-body text-[14px] text-fg-secondary transition-colors duration-200 hover:text-fg-primary"
          >
            {contactLinks.email}
          </a>

          <nav aria-label="Redes sociais" className="flex items-center gap-7">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group flex items-center gap-2 font-body text-[13px] uppercase tracking-[0.1em] text-fg-muted transition-colors duration-200 hover:text-electric"
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
              </a>
            ))}
          </nav>

          <span className="font-body text-[12px] text-fg-muted">
            Whallyson Gabriel Garcia da Silva
          </span>
        </div>
      </Reveal>
    </section>
  );
}

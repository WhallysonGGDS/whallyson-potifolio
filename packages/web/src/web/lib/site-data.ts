/** Central content for the portfolio — kept out of components so copy stays easy to audit. */

export const contactLinks = {
  whatsapp: "https://wa.me/qr/FZFAAGJ62DEHP1",
  github: "https://github.com/WhallysonGGDS",
  linkedin:
    "https://www.linkedin.com/in/whallyson-gabriel-garcia-da-silva-914765235",
  email: "whallysongab@gmail.com",
};

export type StackCategory = {
  label: string;
  weight: "primary" | "secondary";
  items: string[];
};

export const stackCategories: StackCategory[] = [
  {
    label: "Core / Frontend",
    weight: "primary",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    label: "UI / Design System",
    weight: "secondary",
    items: ["shadcn/ui", "Base UI", "Lucide React"],
  },
  {
    label: "Motion",
    weight: "primary",
    items: ["GSAP", "@gsap/react", "Motion", "ScrollTrigger", "Three.js"],
  },
  {
    label: "Backend / Data",
    weight: "secondary",
    items: ["Supabase", "PostgreSQL", "Drizzle ORM", "Better Auth"],
  },
  {
    label: "Infra",
    weight: "secondary",
    items: ["Vercel", "Analytics", "Blob", "Sharp", "SWR", "Git", "GitHub"],
  },
  {
    label: "Criação",
    weight: "secondary",
    items: ["Figma", "Canva", "Higgsfield"],
  },
];

export type ProcessStep = {
  index: string;
  label: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    label: "Direção",
    title: "Entender antes de construir",
    description:
      "Investigo o problema real, o contexto do negócio e o objetivo por trás do pedido — antes de qualquer decisão visual ou técnica.",
  },
  {
    index: "02",
    label: "UX",
    title: "Organizar a experiência",
    description:
      "Estruturo fluxo, hierarquia e arquitetura de informação para que a navegação seja óbvia e sem fricção.",
  },
  {
    index: "03",
    label: "UI",
    title: "Traduzir estratégia em linguagem visual",
    description:
      "Transformo a estratégia em identidade visual coerente — tipografia, espaço, ritmo e detalhe com intenção.",
  },
  {
    index: "04",
    label: "Code",
    title: "Construir com precisão",
    description:
      "Engenho a interface com engenharia real: performance, acessibilidade e código sustentável a longo prazo.",
  },
];

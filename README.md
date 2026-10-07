# Whallyson Gabriel — Portfólio / Currículo virtual

Meu site pessoal: quem sou, stack, processo de trabalho e contato. Direção visual escura, editorial e cinematográfica, com um único azul elétrico de destaque.

🔗 **Ao vivo:** [whallyson-of-web.vercel.app](https://whallyson-of-web.vercel.app)

## Stack

**Front-end:** React · TypeScript · Vite · Tailwind CSS 4 · GSAP + ScrollTrigger · Motion · TanStack Query · React Hook Form · Zod · wouter
**Back-end:** Hono · oRPC · Drizzle ORM · libSQL
**Monorepo:** Bun · Turborepo

## Destaques

- **Design system documentado** em [`design.md`](./design.md): paleta, tipografia (Manrope + Inter Tight), grid assimétrico e regras de motion
- Reveals de texto com Motion e progressão ligada ao scroll com GSAP na seção Processo
- Respeita `prefers-reduced-motion` (hook `use-reduced-motion`)
- API tipada de ponta a ponta com oRPC + TanStack Query
- Seções como componentes: Hero, About, Stack, Process, Contact, Status Panel

## Estrutura

```
packages/web/src/web/   front-end (páginas, componentes, hooks, queries)
packages/web/src/api/   API (Hono + oRPC) e banco (Drizzle)
design.md               design system do site
```

## Rodar localmente

```bash
bun install
bun run dev
```

---

**Whallyson Gabriel Garcia da Silva** · Desenvolvedor Front-end · [LinkedIn](https://www.linkedin.com/in/whallyson-gabriel-garcia-da-silva-914765235) · whallysongab@gmail.com

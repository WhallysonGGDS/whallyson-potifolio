# Design System — Whallyson Gabriel Portfolio

## Direção
Dark, minimalista, futurista, premium, cinematográfico, editorial. Referências (sem copiar): Apple, Awwwards/Godly, estúdios digitais premium, arquitetura contemporânea, campanhas cinematográficas. Nenhuma aparência de template ou de "site feito por IA": sem excesso de cards, gradientes decorativos, glassmorphism, sombras pesadas, badges, bordas arredondadas genéricas ou ícones clichê. Composição assimétrica, editorial, tipografia grande, muito espaço negativo, ritmo cinematográfico no scroll.

## Paleta
- `--bg-void: #05060A` — preto quase absoluto, base de tudo.
- `--bg-navy: #0A0E1A` — azul-marinho muito escuro, camada secundária (seções alternadas, glows sutis).
- `--fg-primary: #F5F6F8` — branco levemente quebrado para títulos.
- `--fg-secondary: #8A8F9C` — cinza para corpo de texto/legendas.
- `--fg-muted: #52565f` — cinza mais escuro, textos terciários/labels.
- `--accent: #2D6BFF` — azul elétrico, ÚNICO destaque. Usado só em: CTA principal, hover states, sublinhados finos, cursor/glow sutil, pontos de progresso. Nunca em blocos grandes de cor.
- `--accent-dim: rgba(45,107,255,0.12)` — glow/halo muito sutil atrás de elementos-chave.
- `--line: rgba(255,255,255,0.08)` — divisores finos de 1px, nunca bordas de "card".

## Tipografia
- Display/títulos: **Manrope** (700/800), tracking levemente negativo, tamanhos grandes (clamp entre ~40px e ~120px no hero).
- Corpo/legendas: **Inter Tight** (400/500), line-height generoso (1.6+), tamanho moderado (16–18px).
- Hierarquia só por tamanho/peso/espaçamento — nunca cor para hierarquia (cor é só para o accent).
- Self-hosted via `@font-face` em `public/fonts/` ou Google Fonts `<link>` no `index.html` (usar Google Fonts CDN para simplicidade: Manrope + Inter Tight).

## Layout & Espaçamento
- Grid assimétrico: conteúdo nunca perfeitamente centralizado; usar offsets, colunas desiguais, texto alinhado à esquerda com margens generosas.
- Espaçamento vertical entre seções: mínimo 8–12rem no desktop, para dar ar cinematográfico.
- Largura máxima de leitura para parágrafos: ~640px, mesmo em telas largas.
- Divisores: linha 1px `--line`, nunca sombras/cards para separar conteúdo.

## Motion
- **Motion (Framer Motion)**: reveals de texto/elementos no viewport (fade + translateY sutil, stagger por palavra/linha no Hero).
- **GSAP + ScrollTrigger**: parallax extremamente sutil em elementos de fundo, progressão conectada ao scroll na seção Processo (linha/indicador que avança conforme o usuário rola).
- Toda animação tem propósito narrativo/funcional — nada decorativo sem função.
- Respeitar `prefers-reduced-motion: reduce` — desativar parallax e reduzir/eliminar stagger, manter apenas fade instantâneo.
- Hover: transições rápidas (150–250ms), sutis (opacity, translateX pequeno, underline accent) — nunca scale exagerado ou shadow.

## Componentes
- **Sem shadcn "card" genérico** — usar composição customizada (divisores, tipografia, espaço) em vez de `<Card>` com borda/sombra.
- Botões/CTAs: texto + seta (`→`), sublinhado accent no hover, sem fundo preenchido pesado (outline mínimo ou apenas texto).
- Ícones: `react-icons` (Simple Icons para stack tech) e `lucide-react` (setas, elementos de UI), sempre monocromáticos (cinza, acendem para accent no hover).
- Foto de perfil: tratamento editorial em preto-e-branco/duotone azul via CSS filter (`grayscale` + `contrast` + overlay `--accent` sutil), nunca em card com borda arredondada padrão.

## Seções (ordem)
1. Hero — nome, posicionamento, frase autoral, CTA duplo, elemento abstrato sutil reativo a mouse/scroll.
2. Sobre — narrativa editorial "Eu não crio apenas interfaces.", meta-infos BASE/FOCO/DISCIPLINA.
3. Stack — hierarquia por categoria, não grid comum.
4. Processo — 4 etapas conectadas por progressão de scroll (Direção → UX → UI → Code).
5. Contato — encerramento com espaço negativo generoso, CTA final, links reais (WhatsApp, GitHub, LinkedIn, e-mail).

## Acessibilidade / SEO
- HTML semântico (`<header>`, `<main>`, `<section>`, `<footer>`), foco visível customizado (outline accent), navegação por teclado completa, alt text em todas as imagens, metadata + Open Graph.

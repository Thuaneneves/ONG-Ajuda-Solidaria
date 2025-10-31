# ONG Ajuda Solidária 🧡

Website responsivo para a ONG Ajuda Solidária, dedicado à promoção de projetos sociais, voluntariado e doações para comunidades carentes. Nossa missão é transformar vidas através da solidariedade em áreas como alimentação, educação e saúde.

## 🔗 Acesse o site  
[https://thuaneneves.github.io/ONG‑Ajuda‑Solidaria/](https://thuaneneves.github.io/ONG-Ajuda-Solidaria/)

## 🎯 Objetivo do Projeto  
O projeto visa oferecer uma presença digital acessível, clara e responsiva para a ONG Ajuda Solidária, facilitando a divulgação das iniciativas, o cadastro de voluntários e doações, além de criar uma interface inclusiva, com foco em acessibilidade (WCAG 2.1 AA) e usabilidade.

## 🧰 Tecnologias Utilizadas  
- **HTML5** — Estrutura semântica moderna (uso de `<header>`, `<main>`, `<footer>`, etc).  
- **CSS3** — Layout responsivo (Flexbox e Grid), Design System com variáveis CSS, modo escuro, fontes e espaçamento definidos.  
- **JavaScript (ES6+)** — Funcionalidades dinâmicas: alternação de tema (modo escuro), roteamento (SPA), manipulação do `localStorage`, validação de formulários.  
- **Git & GitHub** — Controle de versão, fluxo de branches, Pull Requests e commits semânticos.  
- **GitHub Pages** — Deploy e publicação do site para acesso público.

## 🚀 Funcionalidades Principais  
- Navegação por teclado (Tab) — todo o site é navegável usando apenas a tecla Tab.  
- Suporte a leitores de tela — uso correto de tags semânticas, `lang="pt‑BR"`, uso de `role`, `aria-label`, `aria-expanded`.  
- Modo escuro (Dark Mode) — botão no cabeçalho alterna o tema e salva a preferência do usuário no `localStorage`.  
- Menu hambúrguer acessível para dispositivos móveis, com foco em inclusão.  
- SPA (Single Page Application) — navegação dinâmica entre “páginas” sem recarregar a página (via roteamento em JS).  
- Versionamento eficiente — branch principal `main`, branches de feature, commits semânticos, revisão via Pull Requests.  
- Deploy automático via GitHub Pages — o site está disponível publicamente.

## 📂 Estrutura de Pastas  
- /  
  - package.json — Configuração do projeto – dependências, scripts, etc  
  - .gitignore — Arquivos/padrões que o Git ignora  
  - LICENSE — Licença do projeto  
  - README.md — Esta documentação  
  - index.html — Página Inicial  
  - projetos.html — Página de Projetos  
  - cadastro.html — Página de Cadastro  
  - css/  
    - base.css — Estilos básicos / reset  
    - variables.css — Design System: cores, fontes, espaçamento  
    - layout.css — Grid, container, breakpoints  
    - responsive.css — Ajustes responsivos para dispositivos menores  
    - header.css — Estilos específicos para o cabeçalho  
    - components.css — Componentes reutilizáveis – botões, cards, etc  
    - style.css — Arquivo principal que importa ou contém estilos finais  
  - js/  
    - app.js — Arquivo principal da lógica da aplicação: acessibilidade, modo escuro, etc  
    - formValidation.js — Validação de formulários: regras, exibição de erros em tempo real  
    - router.js — Lógica de roteamento para SPA: navegação entre “páginas” sem reload  
    - templates.js — Templates dinâmicos: geração de conteúdo com JS a partir de dados  
  - images/  
    - contato.png — Ícone ou imagem relacionada à página de contato  
    - doacao.png — Ícone ou imagem para seção de doações  
    - formulario.jpg — Imagem ilustrativa para o formulário de cadastro ou contato  
    - logo.jpg — Logo da ONG “Ajuda Solidária”  
    - voluntariado.jpg — Imagem ilustrativa de voluntariado / ação social)

## 🛠️ Como Rodar o Projeto Localmente  
Como este site utiliza JavaScript para funcionalidades que requerem execução via servidor (por exemplo, roteamento, `fetch()`, tema via `localStorage`), abrir diretamente o `index.html` **não garante funcionamento correto** (por causa de políticas de segurança do navegador, CORS etc).

**Recomendado:**  
- No VS Code: instale a extensão “Live Server” → clique com o botão direito em `index.html` → “Open with Live Server”. O endereço tipicamente será `http://localhost:5500`.  
- Alternativa via Python: abra o terminal na pasta do projeto e execute:  
  ```bash
  python -m http.server

  Em seguida, acesse http://localhost:8000 no navegador.

🧭 Fluxo de Versionamento & Deploy

Branch principal: main (produção).

Branches de funcionalidade: por exemplo feature/acessibilidade‑e‑darkmode.

Commits seguem convenção semântica: feat: implementar dark mode, fix: corrigir contraste no modo escuro.

Pull Requests (PRs) para revisão de código antes da mesclagem.

Deploy automático pelo GitHub Pages ao mergear na branch main.

✅ Acessibilidade

Navegação completa usando teclado (Tab, Enter, Esc).

Leitores de tela compatíveis: cabeçalhos, landmarks, roles e descrições (aria‑…).

Suporte a modo escuro com preferência salva no localStorage.

Menu hambúrguer acessível em dispositivos móveis, com foco em usabilidade e inclusão.


📝 Licença

Este projeto está licenciado sob a [inserir aqui a licença, ex: MIT]. Consulte o arquivo LICENSE para mais detalhes.

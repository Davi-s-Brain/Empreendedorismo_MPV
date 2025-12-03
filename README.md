# QuiroTalks - Landing Page

Landing page para o projeto de tecnologia assistiva QuiroTalks.

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (geralmente vem com o Node.js)

## 🐳 Como rodar com Docker (Recomendado)

A maneira mais fácil de rodar tudo integrado (Site + MVP + Backend + Nginx) é usando Docker.

1.  **Certifique-se de ter o Docker e Docker Compose instalados.**
2.  **Execute:**
    ```bash
    docker-compose up --build
    ```

Acesse:
-   **Aplicação Unificada**: [http://localhost:8080](http://localhost:8080)
    -   Landing Page: `/`
    -   MVP Interface: `/app`
    -   API Backend: `/api`

---

## 🚀 Guia de Deploy

### 1. Frontend (Landing Page + MVP) - Vercel
O jeito mais fácil é fazer deploy da Landing Page na Vercel e configurar um "Rewrite" para o MVP (se ele estiver hospedado separadamente) ou integrar o código.

**Opção Simples (Apenas Landing Page):**
1.  Crie um repo no GitHub e suba este código.
2.  Conecte na Vercel.
3.  O deploy será automático.

**Opção Integrada (Monorepo):**
Para hospedar o MVP (Gatsby) junto, recomendo usar a funcionalidade de "Monorepo" da Vercel ou Netlify, configurando dois projetos a partir do mesmo repositório:
-   **Projeto 1 (Site)**: Root Directory: `.`
-   **Projeto 2 (MVP)**: Root Directory: `app-mvp/libras-ML`

### 2. Backend (Python) - Render / Railway
Como o backend controla uma lâmpada **local** (na sua rede Wi-Fi), fazer deploy dele na nuvem (AWS, Render, etc.) fará com que ele **perca o acesso à lâmpada**, a menos que você configure uma VPN ou túnel (como Ngrok).

**Solução Recomendada para Apresentação:**
-   Mantenha o **Backend rodando localmente** no seu computador.
-   Use o **Ngrok** para expor a porta 5000 para a internet:
    ```bash
    ngrok http 5000
    ```
-   Atualize a URL da API no frontend do MVP para usar a URL do Ngrok.

## Estrutura do Projeto

-   `/src`: Código fonte da Landing Page (React + Vite).
-   `/app-mvp/libras-ML`: Interface do MVP (Gatsby + TensorFlow.js).
-   `/app-mvp/servidor`: Backend Python para controle IoT.

## Requisitos

-   Node.js & npm
-   Python 3 & pip

i
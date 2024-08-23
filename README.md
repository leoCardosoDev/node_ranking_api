Este `README.md` fornece uma visão geral do projeto, seus requisitos, como configurá-lo e como usar os diferentes scripts disponíveis no `package.json`. Além disso, menciona as ferramentas de qualidade de código e testes configuradas no projeto.

---

# Node.js Bootstrap Project

Este repositório contém um projeto inicial de Node.js já configurado com TypeScript, ESLint, Prettier, Jest, Husky, lint-staged e Commitlint. O projeto tem como objetivo facilitar a configuração inicial de novos projetos com todas essas ferramentas de qualidade de código e testes automatizados.

## Estrutura do Projeto

```bash
.
├── .husky
├── coverage
├── node_modules
├── src
├── tests
├── .editorconfig
├── .gitignore
├── .lintstagedrc.json
├── .prettierrc
├── .prettierignore
├── commitlint.config.js
├── eslint.config.mjs
├── jest.config.ts
├── jest.integration.config.ts
├── jest.unit.config.ts
├── package-lock.json
├── package.json
├── tsconfig.build.json
└── tsconfig.json
```

## Requisitos

- Node.js e npm instalados na máquina.

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/node_js_bootstrap_project.git
   cd node_js_bootstrap_project
   ```

2. **Instale as dependências do projeto:**

   ```bash
   npm install
   ```

## Scripts Disponíveis

- **Formatar código:**

  ```bash
  npm run format
  ```

- **Analisar o código com ESLint:**

  ```bash
  npm run lint
  ```

- **Corrigir problemas de formatação e ESLint:**

  ```bash
  npm run lint:fix
  ```

- **Executar todos os testes:**

  ```bash
  npm test
  ```

- **Executar testes unitários:**

  ```bash
  npm run test:unit
  ```

- **Executar testes de integração:**

  ```bash
  npm run test:integration
  ```

- **Executar testes em arquivos modificados no commit:**

  ```bash
  npm run test:staged
  ```

- **Executar testes com cobertura:**

  ```bash
  npm run test:ci
  ```

- **Enviar cobertura para o Coveralls:**

  ```bash
  npm run test:coveralls
  ```

## Configurações e Integrações

- **Husky:** Configurado para executar scripts de lint e testes antes de commits e push.
- **lint-staged:** Configurado para executar o ESLint nos arquivos TypeScript antes do commit.
- **Commitlint:** Configurado para validar mensagens de commit de acordo com o padrão convencional.

## Contribuindo

Contribuições são bem-vindas! Por favor, abra um pull request ou issue para sugestões de melhorias ou correções.

## Licença

[MIT](https://choosealicense.com/licenses/mit/)

---

# Projeto Angular com Tailwind CSS: Paletas de Cores Dinâmicas

Este projeto é uma aplicação **Angular** que demonstra a implementação de paletas de cores dinâmicas usando **Tailwind CSS**. O objetivo é permitir que o usuário altere facilmente o tema da interface entre as opções disponíveis (verde, azul e roxo).

---

## 🛠️ Tecnologias

* **Angular**: Framework para construção de interfaces de usuário.
* **Tailwind CSS**: Framework CSS utilitário para estilização rápida e eficiente.
* **TypeScript**: Linguagem de programação tipada que compila para JavaScript.

---

## 🎨 Como Funciona

A funcionalidade principal reside na manipulação de classes CSS no elemento `<body>` do documento. O **Tailwind CSS** é configurado para aplicar estilos específicos baseados na classe do tema ativo (por exemplo, `theme-blue`). A lógica para trocar e salvar a preferência do usuário (usando o `localStorage` do navegador) é gerenciada por um serviço Angular. Isso garante que o tema escolhido seja mantido mesmo após a página ser recarregada.

---

## 📂 Estrutura do Projeto

* `src/styles.css`: Contém as diretivas `@tailwind` e a base de estilos globais.
* `tailwind.config.js`: Arquivo de configuração do Tailwind, onde as paletas de cores são definidas e estendidas.
* `src/app/services/theme.service.ts`: Serviço que gerencia a lógica de troca de tema e persistência local.

---

## 🚀 Instalação e Execução

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/renatopedrosal/tailwind-app.git]
    ```

2.  Navegue até o diretório do projeto:
    ```bash
    cd [nome do seu projeto]
    ```

3.  Instale as dependências:
    ```bash
    npm install
    ```

4.  Execute a aplicação em modo de desenvolvimento:
    ```bash
    ng serve
    ```

A aplicação estará disponível em `http://localhost:4200/`.

---

## 🖌️ Personalização

Para adicionar ou modificar paletas de cores, edite o arquivo `tailwind.config.js`. Adicione novas cores na seção `theme.extend.colors` seguindo a mesma estrutura:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}"], // detecta classes em Angular
  darkMode: "class", // ativa dark mode via classe
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      // Aqui vamos usar as variáveis CSS definidas em styles.css
      colors: {
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        secondary: "var(--color-secondary)",
        "secondary-dark": "var(--color-secondary-dark)",
        neutral: "var(--color-neutral)",
        "neutral-dark": "var(--color-neutral-dark)",
      },
    },
  },
  plugins: [],
}
};

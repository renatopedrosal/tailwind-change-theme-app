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

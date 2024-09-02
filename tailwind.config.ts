import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1440px",
    },
    extend: {
      colors: {
        red: "hsl(0, 91%, 63%)",
        orange: "hsl(13, 95%, 66%)",
        yellow: "hsl(42, 91%, 68%)",
        "neon-green": "hsl(127, 100%, 82%)",
        "almost-white": "hsl(252, 11%, 91%)",
        grey: "hsl(251, 9%, 53%)",
        "dark-grey": "hsl(248, 10%, 15%)",
        "very-dark-grey": "hsl(248, 15%, 11%)",
      },
      fontFamily: {
        jetbrains: ["var(--font-jetbrains-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;

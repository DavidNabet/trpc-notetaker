import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["winter", "dark"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
} satisfies Config;

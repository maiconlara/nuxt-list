import { _backdropBlur } from "#tailwind-config/theme";
import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        title: "#ce7f54",
        white: "#f5f7fa",
        default: "#273248",
        accent: "#a13334",
        red: {
          "50": "#fcf4f4",
          "100": "#fae6e6",
          "200": "#f6d2d2",
          "300": "#efb2b3",
          "400": "#e48586",
          "500": "#d65d5e",
          "600": "#c14142",
          "700": "#a13334",
          "800": "#862e2f",
          "900": "#702c2d",
          "950": "#3c1313",
        },
        blue: {
          "50": "#f5f7fa",
          "100": "#e9ecf5",
          "200": "#cfd8e8",
          "300": "#a5b7d4",
          "400": "#7490bc",
          "500": "#5373a4",
          "600": "#405a89",
          "700": "#354a6f",
          "800": "#2f3f5d",
          "900": "#273248",
          "950": "#1c2435",
        },
        orange: {
          "50": "#fbf6f1",
          "100": "#f6ebde",
          "200": "#edd3bb",
          "300": "#e0b491",
          "400": "#d39064",
          "500": "#ce7f54",
          "600": "#bc603a",
          "700": "#9c4b32",
          "800": "#7e3d2e",
          "900": "#663428",
          "950": "#371913",
        },
      },
    },
  },
};

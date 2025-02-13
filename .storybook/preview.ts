import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    themes: {
      default: "dark",
      list: [
        { name: "Light", class: "light", color: "#fff", dark: false },
        { name: "Dark", class: "dark", color: "#000", dark: true },
      ],
    },
  },
};

export default preview;

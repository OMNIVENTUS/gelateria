import type { Preview } from "@storybook/nextjs-vite";
import React from "react";
import "../src/styles/globals.css";
import { fontVariables } from "../src/fonts/fonts";

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: { expanded: true },
  },
  decorators: [
    (Story) => (
      <div
        className={fontVariables}
        style={{
          fontFamily: "var(--font-body)",
          color: "var(--text-primary)",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;

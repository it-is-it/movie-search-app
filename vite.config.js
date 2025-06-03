import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";

export default defineConfig(async () => {
  const { default: tailwindcss } = await import("@tailwindcss/vite");
  return {
    plugins: [React(), tailwindcss()],
  };
});

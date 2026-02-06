import { viteConfig } from "@repo/eslint-config/vite";

export default [
  { ignores: ["dist/**"] },
  ...viteConfig,
];
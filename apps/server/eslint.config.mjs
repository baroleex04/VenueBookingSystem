import { nestjsConfig } from "@repo/eslint-config/nestjs";

export default [
  { ignores: ["dist/**"] },
  ...nestjsConfig,
];
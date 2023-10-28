import sharedConfig from "@monorepo/config/tailwind-preset";
import type { Config } from "tailwindcss";

const config: Pick<Config, "presets"> = {
  presets: [sharedConfig],
};

export default config;

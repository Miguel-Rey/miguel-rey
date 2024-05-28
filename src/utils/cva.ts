import { twMerge } from "tailwind-merge";
import { defineConfig, type VariantProps } from "cva";

const { cva, cx, compose } = defineConfig({
  hooks: {
    onComplete: twMerge,
  },
});

export { cva, cx, compose, type VariantProps };

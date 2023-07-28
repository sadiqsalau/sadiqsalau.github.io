import { defineConfig } from "@vite-pwa/assets-generator/config";

export default defineConfig({
  preset: {
    transparent: {
      sizes: [64, 192, 512],
      favicons: [[64, "favicon.ico"]],
    },
    maskable: {
      sizes: [512],
      resizeOptions: {
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      },
    },
    apple: {
      sizes: [180],
      resizeOptions: {
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      },
    },
  },
  images: ["public/logo.png"],
});

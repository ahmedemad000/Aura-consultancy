import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';
  return {
    plugins: [react(), tailwindcss()],
    base: isBuild ? '/Aura-consultancy/' : '/', // Use /Aura-consultancy/ for build, / for dev
  };
});
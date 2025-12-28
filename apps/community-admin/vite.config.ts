import { createViteConfig } from '@community/vite-config';

export default createViteConfig(process.cwd(), {
  server: {
    port: 5174,
  },
});
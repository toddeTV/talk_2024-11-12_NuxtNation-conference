import slidev from '@slidev/cli/plugin'
import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    'process.env.VITE_ZLIG_DEMO_BASE_URL': JSON.stringify(process.env.VITE_ZLIG_DEMO_BASE_URL),
  },
  plugins: [
    slidev(),
  ],
})

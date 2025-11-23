import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const config = defineConfig({
  plugins: [
    devtools(),
    nitro(),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact({      
    }),
  ],
  server: {
    hmr: {
      overlay: true,
    },
    watch: {
      ignored: ['**/node_modules/**', '**/.git/**'],
    },
  },
  // Prevent Vite from exiting on errors
  logLevel: 'info',
  clearScreen: false,
  // Catch and display errors without crashing
  optimizeDeps: {
    // Don't fail on dependency optimization errors
    entries: [],
  },
})

export default config

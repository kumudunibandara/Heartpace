import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remoteCharts",
      filename: "remoteEntry.js",
      remotes: {
        hostApp: "http://localhost:3006/assets/remoteEntry.js",
      },
      exposes: {
        "./BarChart": "./src/components/Bar/BarChart",
        "./UserByCountrySessionChart": "./src/components/session/UserByCountrySessionChart",
        "./UserPieChart": "./src/components/pie/UserPieChart",
      },
      shared: {
        "react": {},
        "react-dom": {},
        "@mui/material": {},
        "@mui/icons-material": {},
        "@emotion/react": {},
        "@emotion/styled": {},
        'ag-grid-enterprise': {},
        'ag-grid-community': {},
        'ag-grid-react': {},
        "react-redux": {},
        "@reduxjs/toolkit": {},
      },
    })
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setup.js',
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  },
  preview: {
    port: 3001,
    strictPort: true,
    cors: true
  },

})
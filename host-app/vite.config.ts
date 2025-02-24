import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

//NOTE material ui icons issue: https://github.com/Leejjon/material-icons-bug

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "hostApp",
      filename: "remoteEntry.js",
      remotes: {
        remoteApp: "http://localhost:3000/assets/remoteEntry.js",
        remoteCharts: "http://localhost:3001/assets/remoteEntry.js",
      },
      exposes: {
        "./UserTheme": "./src/redux/reducer",
        "./ErrorHandler": "./src/redux/errorSlice",
      },
      shared: {
        "react": {},
        "react-dom": {},
        "@mui/material": {},
        "@mui/icons-material": {},
        "@emotion/react": {},
        "@emotion/styled": {},
        "react-redux": {},
        "@reduxjs/toolkit": {},
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3005,
    strictPort: true,
    cors: true
  },
  preview: {
    port: 3006,
    strictPort: true,
    cors: true
  },

})
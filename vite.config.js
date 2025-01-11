import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
    plugins: [
        react(),
        compression(), // Enable gzip compression for production
        visualizer({
            open: false, // Automatically opens the visualization report
        }),
    ],
    // base: "/subhajit/", // Replace with your GitHub repository name
    base: "/", // Replace with your GitHub repository name
    build: {
        outDir: "dist", // Output directory for production build
        sourcemap: true, // Generate sourcemaps for debugging production code
        rollupOptions: {
            output: {
                manualChunks: {
                    // Example of chunk splitting
                    vendor: ["react", "react-dom"],
                },
            },
        },
    },
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

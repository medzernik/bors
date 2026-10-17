import {fileURLToPath, URL} from "node:url";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import {defineConfig} from "vite";
import vueDevTools from "vite-plugin-vue-devtools";
import {resolve} from "node:path";

// https://vite.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: resolve(import.meta.dirname, "src/pages/queue/queue.ts"),
            name: "Bors Queue",
            // the proper extensions will be added
            fileName: "queue",
        },
        rolldownOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ["vue"],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
    plugins: [vue(), vueJsx(), vueDevTools()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});

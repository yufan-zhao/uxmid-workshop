import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
    resolve:
    {
        alias:
        {
            "public": path.resolve(__dirname, "public"),
            "src": path.resolve(__dirname, "src")
        }
    },
    css:
    {
        preprocessorOptions:
        {
            less:
            {
                // modifyVars:
                // {
                //     hack: `true; @import (reference) "${path.resolve("src/styles/index.less")}";`
                // },
                javascriptEnabled: true
            }
        }
    },
    build:
    {
        lib:
        {
            entry: path.resolve(__dirname, "lib/main.ts"),
            name: "uxmid-workshop"
        },
        rollupOptions:
        {
            external: ["vue"],
            output:
            {
                globals:
                {
                    vue: "Vue"
                }
            }
        }
    },
    plugins:
    [
        createVuePlugin()
    ]
});

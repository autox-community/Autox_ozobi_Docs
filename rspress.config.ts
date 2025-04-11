import { defineConfig } from "rspress/config";

export default defineConfig({
    // 文档根目录
    root: "docs",
    base: "/Autox_ozobi_Docs",
    title: "Autox_ozobi_Docs",
    markdown: {
        showLineNumbers: true,
    },
    icon: "./docs/src/img/logo.png",
    logo: "/logo.png",
});

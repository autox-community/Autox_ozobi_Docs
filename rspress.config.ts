import { defineConfig } from "rspress/config";

export default defineConfig({
    // 文档根目录
    root: "docs",
    base: "/Autox_ozobi_Docs", // 如果需要生成本地文档供 autox app 使用，需要注释掉这一行再执行 npm run build
    title: "Autox_ozobi_Docs",
    markdown: {
        showLineNumbers: true,
    },
    icon: "./docs/src/img/logo.png",
    logo: "/logo.png",
});

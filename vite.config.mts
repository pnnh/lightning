import {ConfigEnv, loadEnv, UserConfig} from 'vite';
import {defineConfig} from 'vite';
import react from "@vitejs/plugin-react"
import path from "node:path";

export default defineConfig((configEnv) => {
    const env = loadEnv(configEnv.mode, __dirname); // 根据 mode 来判断当前是何种环境
    console.log('env', env);
    return {
        mode: env.mode,
        root: process.cwd(),
        base: env.VITE_MODE === 'production' ? './' : '/',
        build: {
            outDir: `dist`,
        },
        plugins: [react()],
        resolve: {
            preserveSymlinks: true,
            alias: [{
                find: "@",
                replacement: path.resolve(__dirname, "./src")
            }, {
                find: "~",
                replacement: path.resolve(__dirname, "./node_modules")
            }]
        },
        clearScreen: false
    } as UserConfig;
});

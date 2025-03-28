import {ConfigEnv, loadEnv, UserConfig} from 'vite';
import {defineConfig} from 'vite';
import react from "@vitejs/plugin-react-swc"
import path from "path";

export default defineConfig((configEnv) => {
    const env = loadEnv(configEnv.mode, __dirname); // 根据 mode 来判断当前是何种环境

    console.log('defineConfig Env', env);
    return {
        mode: env.mode,
        root: process.cwd(),
        base: '/lightning',
        build: {
            outDir: `dist`,
            rollupOptions: {
                input: {
                    localhost: path.resolve(__dirname, 'src/localhost.tsx'),
                    cloud: path.resolve(__dirname, 'src/cloud.tsx'),
                    server: path.resolve(__dirname, 'src/server.tsx'),
                },
                output: {
                    entryFileNames: `assets/[name].js`,
                    chunkFileNames: `assets/[name].js`,
                    assetFileNames: `assets/[name].[ext]`
                }
            },
        },
        plugins: [react({tsDecorators: true})],
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
        server: {
            hmr: true
        },
        clearScreen: false
    } as UserConfig;
});

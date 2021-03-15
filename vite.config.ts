import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default ({ command }: { command: string }) => {
    let config = defineConfig({
        plugins: [reactRefresh()],
    });

    if (command === 'build') {
        config = defineConfig({
            ...config,
            base: '/react-spring-interpolation/',
        })
    }

    return config;
}

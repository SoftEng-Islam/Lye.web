import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vuePugPlugin from 'vite-plugin-pug'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
	base: 'softeng-islam.github.io',
	plugins: [
		tailwindcss(),
		vue({
			template: {
				preprocessOptions: {
					// 'preprocessOptions' is passed through to the pug compiler
					plugins: [vuePugPlugin],
				},
			},
		}),
		vueDevTools(),
	],
	css: {
		devSourcemap: mode === 'development',
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
}))

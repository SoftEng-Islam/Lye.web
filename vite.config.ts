import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vuePugPlugin from 'vite-plugin-pug'

// https://vite.dev/config/
export default defineConfig({
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
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
})

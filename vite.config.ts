import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vuePugPlugin from 'vite-plugin-pug'
import viteImagemin from 'vite-plugin-imagemin'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
	base: '/Lye.web/',
	server: {
		// vite server configs, for details see [vite doc](https://vitejs.dev/config/#server-host)
		port: Number(process?.env?.APP_CLIENT_PORT || 3001),
	},
	plugins: [
		viteImagemin({
			gifsicle: {
				optimizationLevel: 7,
				interlaced: false,
			},
			optipng: {
				optimizationLevel: 7,
			},
			mozjpeg: {
				quality: 20,
			},
			pngquant: {
				quality: [0.8, 0.9],
				speed: 4,
			},
			svgo: {
				plugins: [
					{
						name: 'removeViewBox',
					},
					{
						name: 'removeEmptyAttrs',
						active: false,
					},
				],
			},
		}),
		tailwindcss(),
		vue({
			template: {
				preprocessOptions: {
					// 'preprocessOptions' is passed through to the pug compiler
					plugins: [vuePugPlugin],
				},
			},
		}),
		visualizer({ open: true }), // generates a graph of bundle content
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

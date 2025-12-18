import { createPinia } from 'pinia'
import { createApp } from 'vue'
import router from './core/router/index'
import App from './App.vue'

import './core/styles/vendor/tailwind.css'
import './core/styles/main.sass'
import 'animate.css'
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/style.css'
import VueTippy from 'vue-tippy'
// import 'tippy.js/themes/material.css' // optional for styling

import directives from './core/directives/index'

const app = createApp(App)

// Register router, pinia, and plugins
app.use(router)
app.use(createPinia())
app.use(VueTippy, {
	directive: 'tippy', // => v-tippy
	component: 'tippy', // => <tippy/>
	componentSingleton: 'tippy-singleton', // => <tippy-singleton/>
	defaultProps: {
		placement: 'auto-end',
		allowHTML: true,
	},
})
app.use(PerfectScrollbarPlugin)

// Register your custom directives
Object.entries(directives).forEach(([name, directive]) => {
	app.directive(name, directive)
})

// Mount the app
app.mount('#app')

import { createPinia } from 'pinia'
import { createApp, onBeforeMount } from 'vue'
import router from './router/index'
import App from './App.vue'

import './styles/main.sass'
import 'animate.css'
// import 'remixicon/fonts/remixicon.css'

// Minimalistic but perfect custom scrollbar plugin
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/style.css'
// import './styles/PerfectScrollbar.css'

import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css' // optional for styling

// lye directives
App.directives('font-size', {
	onBeforeMount: (el: HTMLElement, binding: string) => {
		el.style.fontSize = binding.valueOf() + 'px'
	},
})

// mount App
createApp(App)
	.use(router)
	.use(createPinia())
	.use(VueTippy, {
		directive: 'tippy', // => v-tippy
		component: 'tippy', // => <tippy/>
		componentSingleton: 'tippy-singleton', // => <tippy-singleton/>,
		defaultProps: {
			placement: 'auto-end',
			allowHTML: true,
		},
	})
	.use(PerfectScrollbarPlugin)
	.mount('#app')

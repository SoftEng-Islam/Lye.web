import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/HomeView.vue'),
			meta: {
				breadcrumb: 'Home',
				enterClass: 'animate__animated animate__fadeInLeft',
				leaveClass: 'animate__animated animate__fadeOutRight',
			},
			children: [
				// {
				// 	path: 'users',
				// 	name: 'users',
				// 	component: Users,
				// 	meta: { breadcrumb: 'Users' },
				// },
				// {
				// 	path: 'users/:id',
				// 	name: 'user-details',
				// 	component: UserDetails,
				// 	meta: {
				// 		breadcrumb: (route) => `User ${route.params.id}`,
				// 	},
				// },
			],
		},
		{
			path: '/calculator',
			name: 'calculator',
			component: () => import('../views/CalculatorView.vue'),
			meta: {
				breadcrumb: 'Calculator',
				enterClass: 'animate__animated animate__fadeInRight',
				leaveClass: 'animate__animated animate__fadeOutLeft',
			},
		},
	],
	// linkActiveClass: '',
	// linkExactActiveClass: '',
})

export default router

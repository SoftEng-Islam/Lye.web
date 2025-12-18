import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../../modules/home/views/HomeView.vue'),
			meta: {
				breadcrumb: 'Home',
				enterClass: 'animate__animated animate__fadeInLeft',
				leaveClass: 'animate__animated animate__fadeOutRight',
				title: 'Lye.web | Home - Professional Soap Making Calculator',
				description: 'Explore Lye.web and start planning your high-quality soap recipes with precision and ease.'
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
			component: () => import('../../modules/calculator/views/CalculatorView.vue'),
			meta: {
				breadcrumb: 'Calculator',
				enterClass: 'animate__animated animate__fadeInRight',
				leaveClass: 'animate__animated animate__fadeOutLeft',
				title: 'Advanced Lye Calculator | Lye.web',
				description: 'Configure your soap recipe, calculate lye amounts, and analyze soap quality indicators with our advanced calculator.'
			},
		},
	],
	// linkActiveClass: '',
	// linkExactActiveClass: '',
	// scrollBehavior: () => ({ top: 0 }),
})

router.beforeEach((to, from, next) => {
	// Update Title
	const title = to.meta.title as string || 'Lye.web';
	document.title = title;

	// Update Meta Description
	const description = to.meta.description as string || 'Modern soap making lye calculator.';
	const metaDescription = document.querySelector('meta[name="description"]');
	if (metaDescription) {
		metaDescription.setAttribute('content', description);
	}

	// Dynamic OG Title
	const ogTitle = document.querySelector('meta[property="og:title"]');
	if (ogTitle) {
		ogTitle.setAttribute('content', title);
	}

	next();
});

export default router

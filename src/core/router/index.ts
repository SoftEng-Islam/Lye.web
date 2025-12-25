import { createRouter, createWebHistory } from 'vue-router'
import { useAnalytics } from '../composables/useAnalytics'

const { trackPageView } = useAnalytics()

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../../modules/home/views/HomeView.vue'),
			meta: {
				breadcrumb: 'Home',
				enterClass: 'animate__animated animate__fadeInLeft animate__faster',
				leaveClass: 'animate__animated animate__fadeOutRight animate__faster',
				title: 'Lye.web | Home - Professional Soap Making Calculator',
				description:
					'Explore Lye.web and start planning your high-quality soap recipes with precision and ease.',
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
				description:
					'Configure your soap recipe, calculate lye amounts, and analyze soap quality indicators with our advanced calculator.',
			},
		},
		{
			path: '/privacy',
			name: 'privacy-policy',
			component: () => import('../../modules/PrivacyPolicy/views/PrivacyPolicyView.vue'),
			meta: {
				title: 'Privacy Policy | Lye.web',
				description: 'Read our Privacy Policy.',
			},
		},
		{
			path: '/terms',
			name: 'terms-and-conditions',
			component: () => import('../../modules/Terms/views/TermsView.vue'),
			meta: {
				title: 'Terms & Conditions | Lye.web',
				description: 'Read our Terms & Conditions.',
			},
		},
		{
			path: '/cookies',
			name: 'cookie-policy',
			component: () => import('../../modules/Cookies/views/CookiesView.vue'),
			meta: {
				title: 'Cookie Policy | Lye.web',
				description: 'Read our Cookie Policy.',
			},
		},
		{
			path: '/safety',
			name: 'safety',
			component: () => import('../../modules/Safety/views/SafetyView.vue'),
			meta: {
				title: 'Safety & Disclaimer | Lye.web',
				description: 'Read our Safety guidelines and disclaimer.',
			},
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../../modules/About/views/AboutView.vue'),
			meta: {
				title: 'About Us | Lye.web',
				description: 'Learn more about Lye.web and our mission.',
			},
		},
		{
			path: '/contact',
			name: 'contact',
			component: () => import('../../modules/ContactUs/views/ContactUsView.vue'),
			meta: {
				title: 'Contact Us | Lye.web',
				description: 'Get in touch with the Lye.web team.',
			},
		},
		{
			path: '/how-to-use',
			name: 'how-to-use',
			component: () => import('../../modules/HowToUse/views/HowToUseView.vue'),
			meta: {
				title: 'How to Use | Lye.web',
				description: 'Learn how to use the Lye Calculator.',
			},
		},
		{
			path: '/affiliate-resources',
			name: 'affiliate-resources',
			component: () => import('../../modules/Affiliate/views/AffiliateView.vue'),
			meta: {
				title: 'Recommended Resources | Lye.web',
				description: 'Recommended soap making supplies and resources.',
			},
		},
		{
			path: '/blog',
			name: 'blog',
			component: () => import('../../modules/Blog/views/BlogView.vue'),
			meta: {
				title: 'Blog | Lye.web',
				description: 'Soap making tips, tricks, and tutorials.',
			},
		},
	],
	// linkActiveClass: '',
	// linkExactActiveClass: '',
	// scrollBehavior: () => ({ top: 0 }),
})

router.beforeEach((to, from, next) => {
	// Update Title
	const title = (to.meta.title as string) || 'Lye.web'
	document.title = title

	// Update Meta Description
	const description = (to.meta.description as string) || 'Modern soap making lye calculator.'
	const metaDescription = document.querySelector('meta[name="description"]')
	if (metaDescription) {
		metaDescription.setAttribute('content', description)
	}

	// Dynamic OG Title
	const ogTitle = document.querySelector('meta[property="og:title"]')
	if (ogTitle) {
		ogTitle.setAttribute('content', title)
	}

	// Track page view in Google Analytics
	trackPageView(to.path)

	next()
})

export default router

<script setup lang="ts">
import { RouterLink } from 'vue-router';

const fullText = "Enter your oils, choose your superfat, and get instant lye & water measurements.";

const features = [
	{
		icon: "⚖️",
		title: "Accurate Calculations",
		description: "Precise lye and water measurements for safe soap making"
	},
	{
		icon: "🎯",
		title: "Superfat Control",
		description: "Adjust superfat percentages to customize your soap's properties"
	},
	{
		icon: "💧",
		title: "Multiple Water Options",
		description: "Choose from water percentage, lye concentration, or water-to-lye ratio"
	},
	{
		icon: "🌿",
		title: "Oil Database",
		description: "Access comprehensive oil properties and SAP values"
	},
	{
		icon: "📊",
		title: "Soap Properties",
		description: "View hardness, cleansing, conditioning, and more for your recipe"
	},
	{
		icon: "🆓",
		title: "100% Free",
		description: "No sign-up required, no hidden fees, use it anytime"
	}
];

const steps = [
	{
		number: "1",
		title: "Select Your Oils",
		description: "Choose from our extensive database of oils and butters"
	},
	{
		number: "2",
		title: "Set Weights",
		description: "Enter the weight of each oil in your recipe"
	},
	{
		number: "3",
		title: "Configure Options",
		description: "Set superfat percentage, water method, and lye type (NaOH/KOH)"
	},
	{
		number: "4",
		title: "Get Results",
		description: "Instantly see lye amount, water needed, and soap properties"
	}
];

const faqs = [
	{
		question: "What is Lye.web?",
		answer: "Lye.web is a lightweight, client-side web application that helps soap makers calculate the exact amount of lye (sodium hydroxide or potassium hydroxide) and water needed for their soap recipes. It ensures safe and accurate soap making by handling all the complex calculations for you."
	},
	{
		question: "Why Use Lye.web?",
		answer: "Making soap safely requires precise calculations. Too much lye makes soap harsh, too little makes it oily. Lye.web eliminates guesswork and calculation errors, helping you create perfect soap every time. It's fast, accurate, and completely free to use."
	},
	{
		question: "Is It Free to Use?",
		answer: "Yes! Lye.web is completely free and open-source. There are no sign-ups, no subscriptions, and no hidden fees. You can use it as much as you want, whenever you need it."
	},
	{
		question: "Who Uses This Site?",
		answer: "Lye.web is used by soap makers of all levels - from beginners making their first batch to experienced artisans creating complex recipes. It's perfect for hobbyists, small businesses, and anyone who wants accurate soap calculations."
	},
	{
		question: "Who Needs This Site?",
		answer: "Anyone making cold process or hot process soap needs accurate lye calculations. Whether you're a beginner learning the craft or an experienced soap maker experimenting with new recipes, Lye.web ensures your calculations are always correct."
	},
	{
		question: "What Can Lye.web Help With?",
		answer: "Lye.web helps you calculate lye amounts, water requirements, superfat percentages, and provides detailed soap properties including hardness, cleansing ability, conditioning, bubbly lather, creamy lather, and iodine values. It also helps you understand how different oils affect your final soap."
	},
	{
		question: "What Do You Need to Know to Use It?",
		answer: "You just need to know which oils you want to use and their weights! Lye.web handles all the complex calculations. Basic knowledge of soap making helps, but the calculator is designed to be intuitive and easy to use for everyone."
	}
];
</script>

<template lang="pug">
div(class="pt-4 w-full overflow-hidden flex flex-col")
	//- Hero Section
	section(class="hero-section relative flex flex-col items-center w-full justify-center min-h-screen p-4 sm:p-6 md:p-8 overflow-hidden")
		//- Animated background elements
		div(class="absolute inset-0 overflow-hidden pointer-events-none z-0")
			div(class="absolute top-20 left-10 w-72 h-72 bg-amber-300/15 dark:bg-amber-500/8 rounded-full blur-3xl animate-float-slow")
			div(class="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/15 dark:bg-blue-500/8 rounded-full blur-3xl animate-float-slow-delay")
			div(class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-gradient-to-r from-amber-200/8 to-blue-200/8 dark:from-amber-500/4 dark:to-blue-500/4 rounded-full blur-3xl animate-pulse-slow")

		div(class="max-w-7xl mx-auto w-full relative z-10")
			div(class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center")
				//- Left Column: Text Content
				div(class="text-center lg:text-left hero-content")
					div(class="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-amber-50 dark:from-amber-900/40 dark:to-amber-800/30 text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-semibold shadow-sm animate-fade-in")
						svg(class="w-4 h-4 sm:w-5 sm:h-5 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20")
							path(fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd")
						span Instant Calculations

					h1(class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight animate-slide-up")
						span(class="block") Precise Lye
						span(class="block bg-gradient-to-r from-amber-600 to-amber-500 dark:from-amber-400 dark:to-amber-300 bg-clip-text text-transparent") Calculator

					p(class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-slide-up-delay")
						| Calculate exact lye and water amounts for your soap recipes.
						span(class="font-semibold text-gray-700 dark:text-gray-200") Fast, accurate, and completely free.

					div(class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 animate-slide-up-delay-2")
						RouterLink(to="/calculator" class="group relative inline-flex items-center justify-center py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg font-bold text-white bg-gradient-to-r from-amber-600 to-amber-500 dark:from-amber-500 dark:to-amber-600 hover:from-amber-700 hover:to-amber-600 dark:hover:from-amber-600 dark:hover:to-amber-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 overflow-hidden")
							span(class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000")
							span(class="relative z-10 flex items-center")
								| Start Calculating
								svg(class="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24")
									path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6")

					div(class="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start text-xs sm:text-sm text-gray-600 dark:text-gray-400 animate-fade-in-delay")
						div(class="flex items-center gap-2 group cursor-default")
							div(class="relative")
								svg(class="w-4 h-4 sm:w-5 sm:h-5 text-green-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20")
									path(fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd")
							span(class="font-medium") 100% Accurate
						div(class="flex items-center gap-2 group cursor-default")
							div(class="relative")
								svg(class="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20")
									path(fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd")
							span(class="font-medium") No Sign-up
						div(class="flex items-center gap-2 group cursor-default")
							div(class="relative")
								svg(class="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20")
									path(fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd")
							span(class="font-medium") Free Forever

				//- Right Column: Calculator Visual
				div(class="relative flex justify-center lg:justify-end calculator-wrapper")
					div(class="calculator-visual relative w-full max-w-md sm:max-w-lg")
						//- Calculator Card
						div(class="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 transform hover:scale-[1.02] transition-all duration-300 calculator-card")
							//- Calculator Header
							div(class="flex items-center justify-between mb-4 sm:mb-6")
								div(class="flex items-center gap-1.5 sm:gap-2")
									div(class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 shadow-sm")
									div(class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 shadow-sm")
									div(class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 shadow-sm")
								div(class="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400") Lye Calculator
								div(class="w-4 sm:w-6")

							//- Display Screen with glow effect
							div(class="relative bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 font-mono shadow-inner border border-gray-700 dark:border-gray-800 overflow-hidden")
								div(class="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent rounded-lg sm:rounded-xl shimmer-effect")
								div(class="relative")
									div(class="text-right text-gray-400 dark:text-gray-500 text-xs sm:text-sm mb-1") Oils: 500g
									div(class="text-right text-amber-400 text-xl sm:text-2xl font-bold mb-1") Lye: 72.5g
									div(class="text-right text-blue-400 text-sm sm:text-lg") Water: 181.3g

							//- Input Fields
							div(class="space-y-2 sm:space-y-3 mb-4")
								div(class="group flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-gradient-to-r from-amber-50 to-amber-100/50 dark:from-amber-900/20 dark:to-amber-800/10 rounded-lg sm:rounded-xl border border-amber-200 dark:border-amber-800/50 hover:border-amber-300 dark:hover:border-amber-700 transition-all duration-200 hover:shadow-md")
									div(class="text-xl sm:text-2xl transform group-hover:scale-110 transition-transform") 🫒
									div(class="flex-1 min-w-0")
										div(class="text-xs text-gray-500 dark:text-gray-400 mb-0.5 sm:mb-1 truncate") Olive Oil
										div(class="text-sm sm:text-base font-semibold text-gray-900 dark:text-white") 300g
								div(class="group flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-gradient-to-r from-amber-50 to-amber-100/50 dark:from-amber-900/20 dark:to-amber-800/10 rounded-lg sm:rounded-xl border border-amber-200 dark:border-amber-800/50 hover:border-amber-300 dark:hover:border-amber-700 transition-all duration-200 hover:shadow-md")
									div(class="text-xl sm:text-2xl transform group-hover:scale-110 transition-transform") 🥥
									div(class="flex-1 min-w-0")
										div(class="text-xs text-gray-500 dark:text-gray-400 mb-0.5 sm:mb-1 truncate") Coconut Oil
										div(class="text-sm sm:text-base font-semibold text-gray-900 dark:text-white") 200g

							//- Calculate Button with gradient
							button(class="group relative w-full py-2.5 sm:py-3 px-4 bg-gradient-to-r from-amber-600 to-amber-500 dark:from-amber-500 dark:to-amber-600 text-white rounded-lg sm:rounded-xl font-semibold hover:from-amber-700 hover:to-amber-600 dark:hover:from-amber-600 dark:hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-95 overflow-hidden")
								span(class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000")
								span(class="relative flex items-center justify-center gap-2")
									svg(class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24")
										path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z")
									span(class="text-sm sm:text-base") Calculate

						//- Floating Elements with better positioning
						div(class="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/40 dark:to-amber-800/30 rounded-full items-center justify-center text-xl sm:text-2xl shadow-lg floating-icon-1 hidden sm:flex")
							| ⚖️
						div(class="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/30 rounded-full items-center justify-center text-lg sm:text-xl shadow-lg floating-icon-2 hidden sm:flex")
							| 💧
						div(class="absolute top-1/2 -right-4 sm:-right-8 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/40 dark:to-green-800/30 rounded-full items-center justify-center text-sm sm:text-lg shadow-lg floating-icon-3 hidden sm:flex")
							| ✓

	//- Features Section
	section(class="features-section py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900")
		div(class="max-w-6xl mx-auto")
			h2(class="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12")
				| Why Choose Lye.web?

			div(class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6")
				div(v-for="feature in features" :key="feature.title" class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200")
					div(class="text-4xl mb-4") {{ feature.icon }}
					h3(class="text-xl font-semibold text-gray-900 dark:text-white mb-2") {{ feature.title }}
					p(class="text-gray-600 dark:text-gray-400") {{ feature.description }}

	//- How to Use Section
	section(class="how-to-section py-20 px-4 md:px-8")
		div(class="max-w-6xl mx-auto")
			h2(class="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12")
				| How to Use Lye.web

			div(class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6")
				div(v-for="step in steps" :key="step.number" class="relative")
					div(class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 h-full")
						div(class="absolute -top-4 -left-4 w-12 h-12 bg-amber-600 dark:bg-amber-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg")
							| {{ step.number }}
						div(class="pt-4")
							h3(class="text-xl font-semibold text-gray-900 dark:text-white mb-2") {{ step.title }}
							p(class="text-gray-600 dark:text-gray-400") {{ step.description }}

	//- What is Lye.web Section
	section(class="about-section py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900")
		div(class="max-w-4xl mx-auto text-center")
			h2(class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6")
				| What is Lye.web?
			p(class="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4")
				| Lye.web is a lightweight, client-side web application designed to help soap makers calculate the exact amount of lye and water needed for their soap recipes. Built with precision and ease of use in mind, it eliminates the need for manual calculations and reduces the risk of errors in soap making.
			p(class="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed")
				| Whether you're making cold process or hot process soap, Lye.web provides accurate calculations based on your oil selection, weights, and desired superfat percentage. It's completely free, requires no sign-up, and works entirely in your browser.

	//- FAQ Section
	section(class="faq-section py-20 px-4 md:px-8")
		div(class="max-w-4xl mx-auto")
			h2(class="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12")
				| Frequently Asked Questions

			div(class="space-y-6")
				div(v-for="(faq, index) in faqs" :key="index" class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md")
					h3(class="text-xl font-semibold text-gray-900 dark:text-white mb-3") {{ faq.question }}
					p(class="text-gray-600 dark:text-gray-400 leading-relaxed") {{ faq.answer }}

	//- CTA Section
	section(class="cta-section py-20 px-4 md:px-8 overflow-hidden bg-linear-to-r from-amber-600 to-amber-700 dark:from-amber-500 dark:to-amber-600")
		div(class="max-w-4xl mx-auto text-center")
			h2(class="text-3xl md:text-4xl font-bold text-white mb-6")
				| Ready to Make Perfect Soap?
			p(class="text-xl text-amber-100 mb-8")
				| Start calculating your soap recipes now. It's free, fast, and accurate.
			RouterLink(to="/calculator" class="inline-block py-4 px-10 rounded-full text-lg font-bold text-amber-600 bg-white hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105")
				| Start Calculating →
</template>

<style scoped lang="sass">
@reference "tailwindcss"

.hero-section
	background: linear-gradient(135deg, rgba(251, 191, 36, 0.06) 0%, rgba(217, 119, 6, 0.04) 50%, rgba(59, 130, 246, 0.04) 100%)
	position: relative
	overflow: hidden
	min-height: 100vh
	display: flex
	align-items: center

	// Remove duplicate background - using cleaner approach
	&::before
		content: ''
		position: absolute
		top: 0
		left: 0
		right: 0
		bottom: 0
		background: radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.06) 0%, transparent 50%)
		pointer-events: none
		z-index: 0

.hero-content
	animation: fadeInUp 0.8s ease-out

.calculator-wrapper
	animation: fadeInRight 0.8s ease-out 0.2s both

.calculator-visual
	animation: slideIn 0.8s ease-out 0.3s both

.calculator-card
	backdrop-filter: blur(10px)
	will-change: transform

	&:hover
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)

// Shimmer effect for calculator display
.shimmer-effect
	animation: shimmer 3s ease-in-out infinite
	transform: translateX(-100%)

// Floating icon animations
.floating-icon-1
	animation: floatBounce 4s ease-in-out infinite

.floating-icon-2
	animation: floatBounce 5s ease-in-out infinite 0.5s

.floating-icon-3
	animation: floatBounce 3.5s ease-in-out infinite 1s

// Keyframe animations
@keyframes fadeInUp
	from
		opacity: 0
		transform: translateY(20px)
	to
		opacity: 1
		transform: translateY(0)

@keyframes fadeInRight
	from
		opacity: 0
		transform: translateX(-20px)
	to
		opacity: 1
		transform: translateX(0)

@keyframes slideIn
	from
		opacity: 0
		transform: translateX(30px)
	to
		opacity: 1
		transform: translateX(0)

@keyframes shimmer
	0%
		transform: translateX(-100%) translateY(0)
	50%
		transform: translateX(100%) translateY(0)
	100%
		transform: translateX(-100%) translateY(0)

@keyframes floatBounce
	0%, 100%
		transform: translateY(0) translateX(0) scale(1)
	25%
		transform: translateY(-8px) translateX(4px) scale(1.05)
	50%
		transform: translateY(-4px) translateX(-2px) scale(0.98)
	75%
		transform: translateY(-10px) translateX(3px) scale(1.02)

@keyframes float-slow
	0%, 100%
		transform: translateY(0) translateX(0) scale(1)
		opacity: 0.6
	50%
		transform: translateY(-30px) translateX(15px) scale(1.1)
		opacity: 0.8

@keyframes float-slow-delay
	0%, 100%
		transform: translateY(0) translateX(0) scale(1)
		opacity: 0.5
	50%
		transform: translateY(30px) translateX(-20px) scale(1.15)
		opacity: 0.7

@keyframes pulse-slow
	0%, 100%
		opacity: 0.4
		transform: scale(1)
	50%
		opacity: 0.6
		transform: scale(1.05)

// Utility animation classes
.animate-fade-in
	animation: fadeIn 0.6s ease-out

.animate-fade-in-delay
	animation: fadeIn 0.8s ease-out 0.4s both

.animate-slide-up
	animation: fadeInUp 0.6s ease-out

.animate-slide-up-delay
	animation: fadeInUp 0.6s ease-out 0.2s both

.animate-slide-up-delay-2
	animation: fadeInUp 0.6s ease-out 0.3s both

.animate-spin-slow
	animation: spin 3s linear infinite

.animate-float-slow
	animation: float-slow 8s ease-in-out infinite

.animate-float-slow-delay
	animation: float-slow-delay 10s ease-in-out infinite

.animate-pulse-slow
	animation: pulse-slow 4s ease-in-out infinite

@keyframes fadeIn
	from
		opacity: 0
	to
		opacity: 1

@keyframes spin
	from
		transform: rotate(0deg)
	to
		transform: rotate(360deg)

// Responsive adjustments
@media (max-width: 640px)
	.hero-section
		&::before
			background: radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.06) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.04) 0%, transparent 40%)

	.calculator-visual
		max-width: 100%

	.calculator-card
		padding: 1rem

@media (max-width: 1024px)
	.calculator-wrapper
		margin-top: 2rem

.features-section,
.how-to-section,
.about-section,
.faq-section
	scroll-margin-top: 80px

.cta-section
	position: relative
	overflow: hidden

	&::before
		content: ''
		position: absolute
		top: -50%
		left: -50%
		width: 200%
		height: 200%
		background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)
		animation: rotate 20s linear infinite
		pointer-events: none

@keyframes rotate
	from
		transform: rotate(0deg)
	to
		transform: rotate(360deg)
</style>

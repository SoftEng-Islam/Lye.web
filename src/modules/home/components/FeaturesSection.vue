<script setup lang="ts">
// Feature data
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
</script>

<template lang="pug">
section(id="features-section" class="features-section py-20 sm:py-32 px-4 sm:px-6 bg-zinc-50 dark:bg-zinc-900/30 relative")
	div(class="max-w-7xl mx-auto")
		div(class="reveal text-center mb-16 sm:mb-24")
			span(class="text-xs font-black text-(--Theme1) dark:text-(--LTheme4) uppercase tracking-[0.3em] mb-4 block") Scientific Accuracy
			h2(class="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white mb-6 tracking-tight") Engineered for Artisans.
			p(class="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto")
				| Every calculation is backed by precise SAP values and mathematical models to ensure your soap is safe and high-quality.

		div(class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8")
			div(v-for="feature in features" :key="feature.title" class="reveal feature-card group")
				div(class="relative p-10 rounded-[40px] bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] h-full")
					div(class="w-16 h-16 rounded-3xl bg-(--Theme4) dark:bg-(--LTheme4) flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform") {{ feature.icon }}
					h3(class="text-xl font-black text-zinc-900 dark:text-white mb-4") {{ feature.title }}
					p(class="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm") {{ feature.description }}
					div(class="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity")
						<svg class="w-6 h-6 text-(--Theme1) dark:text-(--LTheme1)" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
</template>

<style scoped lang="sass">
@reference "tailwindcss"

// Reveal Styles
.reveal
	opacity: 0
	transform: translateY(30px)
	transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1)

	&.reveal-active
		opacity: 1
		transform: translateY(0)
</style>

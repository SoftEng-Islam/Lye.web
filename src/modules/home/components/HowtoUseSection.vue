<script setup lang="ts">
// Step data
const steps = [
	{
		number: "01",
		title: "Select Your Oils",
		description: "Choose from our extensive database of oils and butters"
	},
	{
		number: "02",
		title: "Set Weights",
		description: "Enter the weight of each oil in your recipe"
	},
	{
		number: "03",
		title: "Configure Options",
		description: "Set superfat percentage, water method, and lye type"
	},
	{
		number: "04",
		title: "Get Results",
		description: "Instantly see lye amount, water needed, and soap properties"
	}
];
</script>

<template lang="pug">
section(id="how-to-section" class="how-to-section py-20 sm:py-32 px-4 sm:px-6 overflow-hidden")
	div(class="max-w-7xl mx-auto")
		div(class="reveal flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 sm:mb-24 gap-8")
			div(class="max-w-xl")
				span(class="text-xs font-black text-(--Theme1) dark:text-(--LTheme4) uppercase tracking-[0.3em] mb-4 block") Simple Workflow
				h2(class="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tight") Workflow Simplified.
			p(class="text-lg text-zinc-500 dark:text-zinc-400 lg:max-w-xs") Our intuitive 4-step process handles the math, so you can focus on the art.

		div(class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6")
			div(v-for="step in steps" :key="step.number" class="reveal step-card group")
				div(class="p-8 rounded-[40px] bg-zinc-100 dark:bg-white/5 border border-transparent hover:border-(--LTheme1) dark:hover:border-(--Theme1) hover:border-opacity-20 transition-all h-full")
					span(class="text-5xl font-black text-zinc-900/30 dark:text-white/5 mb-8 block group-hover:text-(--Theme1) dark:group-hover:text-(--LTheme1) transition-colors") {{ step.number }}
					h3(class="text-lg font-black text-zinc-900 dark:text-white mb-3") {{ step.title }}
					p(class="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed") {{ step.description }}
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

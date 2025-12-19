<script setup lang="ts">
import { RouterLink } from 'vue-router';
import ThemeController from "../ThemeController.vue";
import DarkMode from "../DarkMode.vue";

const emit = defineEmits(['close']);
</script>

<template lang="pug">
div(class="flex flex-col h-full")
	//- Menu Header
	div(class="flex items-center justify-between mb-8")
		div(class="flex flex-col")
			span(class="text-xs font-black text-amber-500 uppercase tracking-widest") Menu
			h2(class="text-2xl font-black text-zinc-800 dark:text-white") Navigation
		button(@click="emit('close')" class="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center justify-center text-zinc-500 hover:text-amber-500 transition-colors")
			<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>

	//- Main Nav Links
	nav(class="flex flex-col gap-4 mb-12")
		RouterLink(to="/" class="mobile-nav-link" @click="emit('close')")
			span(class="icon") 🏠
			span(class="label") Home
			<svg class="w-5 h-5 ml-auto opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>

		RouterLink(to="/calculator" class="mobile-nav-link" @click="emit('close')")
			span(class="icon") ⚖️
			span(class="label") Calculator
			<svg class="w-5 h-5 ml-auto opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>

	//- Bottom Settings
	div(class="mt-auto space-y-6 pt-6 border-t border-black/5 dark:border-white/5")
		div(class="space-y-3")
			span(class="text-[10px] font-black text-zinc-400 uppercase tracking-widest") Appearance
			div(class="flex items-center justify-between p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5")
				span(class="text-sm font-bold text-zinc-600 dark:text-zinc-300") Dark Mode
				dark-mode

		div(class="space-y-3")
			span(class="text-[10px] font-black text-zinc-400 uppercase tracking-widest") Theme Color
			div(class="flex items-center justify-center p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5")
				theme-controller
</template>

<style scoped lang="sass">
@reference "tailwindcss"

.mobile-nav-link
	@apply flex items-center gap-4 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 transition-all duration-300

	.icon
		@apply text-xl grayscale group-hover:grayscale-0 transition-all

	.label
		@apply text-lg font-black text-zinc-700 dark:text-zinc-200 uppercase tracking-tight

	&.router-link-active
		@apply bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400

		.label
			@apply text-amber-600 dark:text-amber-400

		.icon
			@apply grayscale-0 scale-110

	&:active
		@apply scale-95
</style>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template lang="pug">
section(id="get-started-section" class="py-32 px-6 relative overflow-hidden")
	div(class="absolute inset-0 bg-(--Theme1) dark:bg-(--LTheme4) z-0")
	div(class="absolute top-0 right-0 w-[40%] h-full bg-black/10 dark:bg-white/10 skew-x-12 transform origin-top transition-all hover:skew-x-6")

	div(class="max-w-4xl mx-auto text-center relative z-10")
		h2(class="reveal text-4xl md:text-6xl font-black text-white dark:text-zinc-950 mb-8 tracking-tight") Perfecting Science,
			br
			| One Batch at a Time.
		p(class="reveal text-xl text-white/80 dark:text-zinc-900/60 mb-12 font-medium") Join thousands of soap makers using Lye.web today.
		div(class="reveal")
			RouterLink(to="/calculator" class="inline-block py-6 px-16 rounded-3xl text-lg font-black text-zinc-950 dark:text-white bg-white dark:bg-zinc-950 shadow-2xl hover:scale-105 active:scale-95 transition-all") Start Your Next Project →
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

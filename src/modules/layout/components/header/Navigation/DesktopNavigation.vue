<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template lang="pug">
nav(class="hidden md:flex items-center gap-8 h-full justify-center mx-auto")
	RouterLink(to="/" class="nav-link") Home
	RouterLink(to="/calculator" class="nav-link") Calculator
</template>

<style scoped lang="sass">
@reference "tailwindcss"

.nav-link
	@apply relative text-[11px] font-black text-zinc-500 dark:text-zinc-500 hover:text-(--Theme1) dark:hover:text-(--LTheme1) transition-all duration-300 uppercase tracking-[0.2em] py-2

	&:hover
		text-shadow: 0 0 15px var(--Theme1)

	&.router-link-active
		@apply text-(--Theme1) dark:text-(--LTheme1)
		text-shadow: 0 0 15px var(--Theme1)
		&::after
			@apply scale-x-100 opacity-100

	&::after
		@apply content-[''] absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-(--Theme1) dark:bg-(--LTheme1) rounded-full scale-x-0 opacity-0 transition-all duration-500 ease-out origin-center
		box-shadow: 0 0 10px var(--Theme1)

	&:hover::after
		@apply scale-x-100 opacity-100
</style>

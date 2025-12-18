<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LyeLogo from "../LyeLogo.vue";
import ThemeController from "./ThemeController.vue";
import DarkMode from "./DarkMode.vue";
import GetStarted from "./GetStarted.vue";
import RightMenuHandler from "./RightMenu/RightMenuHandler.vue";
</script>

<template lang="pug">
header(tabindex="1" class="fixed z-50 w-full top-0 left-0 h-(--header-height) backdrop-blur-2xl bg-white/70 dark:bg-zinc-950/70 border-b border-black/5 dark:border-white/5 main-padding-x flex items-center justify-between transition-all duration-500 shadow-[0_1px_30px_rgba(0,0,0,0.03)] dark:shadow-none")
	//- Glass Highlight Top
	div(class="absolute top-0 left-0 w-full h-[1px] bg-white/40 dark:bg-white/5 z-0")
	//- Left Section: Logo
	div(class="flex items-center gap-8 h-full")
		lye-logo

		//- Desktop Navigation
		nav(class="hidden md:flex items-center gap-6 h-full")
			RouterLink(to="/" class="nav-link") Home
			RouterLink(to="/calculator" class="nav-link") Calculator

	//- Right Section: Controls
	div(class="flex items-center gap-4 h-full")
		//- Theme & Settings (Desktop)
		div(class="hidden lg:flex items-center gap-4 py-1.5 px-3 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5")
			theme-controller
			div(class="w-px h-4 bg-black/10 dark:bg-white/10")
			dark-mode

		//- Dark Mode (Mobile/Tablet)
		dark-mode(class="lg:hidden")

		get-started(class="hidden sm:flex")

		//- Mobile Menu
		right-menu-handler
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
		@apply content-[''] absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-(--Theme1) dark:bg-(--LTheme1) rounded-full scale-x-0 opacity-0 transition-all duration-500 ease-out origin-center
		box-shadow: 0 0 10px var(--Theme1)

	&:hover::after
		@apply scale-x-100 opacity-100
</style>

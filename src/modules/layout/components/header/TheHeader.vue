<script setup lang="ts">
import LyeLogo from "../LyeLogo.vue";
import DesktopNavigation from "./Navigation/DesktopNavigation.vue";
import MobileMenuTrigger from "./Navigation/MobileNavigation/MobileMenuTrigger.vue";
import DarkModeToggle from "./Controls/DarkModeToggle.vue";
import ThemeColorPicker from "./Controls/ThemeColorPicker.vue";
import GetStartedButton from "./Controls/GetStartedButton.vue";
</script>

<template lang="pug">
header(tabindex="1" class="fixed z-50 w-full top-0 left-0 h-(--header-height) backdrop-blur-2xl bg-white/70 dark:bg-zinc-950/70 border-b border-black/5 dark:border-white/5 px-4 md:px-8 flex items-center transition-all duration-500 shadow-[0_1px_30px_rgba(0,0,0,0.03)] dark:shadow-none")
	//- Glass Highlight Top
	div(class="absolute top-0 left-0 w-full h-px bg-white/40 dark:bg-white/5 z-0")

	//- Column 1: Logo
	div(class="flex items-center h-full")
		lye-logo

	//- Column 2: Nav (Desktop only)
	desktop-navigation

	//- Column 3: Controls
	div(class="ml-auto flex items-center justify-end gap-3")
		//- Theme Section
		div(class="hidden lg:flex items-center gap-4 py-1.5 px-3 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 min-w-[310px] justify-center")
			theme-color-picker
			div(class="w-px h-4 bg-black/10 dark:bg-white/10")
			dark-mode-toggle

		//- Responsive Dark Mode
		dark-mode-toggle(class="lg:hidden")

		//- Call to Action (Fixed Width Container)
		get-started-button(class="hidden sm:flex items-center min-w-[140px] justify-end")

		//- Mobile Menu
		mobile-menu-trigger
</template>

<style scoped lang="sass">
</style>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import LyeLogo from "./LyeLogo.vue";
import ThemeController from "./ThemeController.vue";
import DarkMode from "./DarkMode.vue";
import GetStarted from "./GetStarted.vue";
</script>

<template lang="pug">
//- Our Header
header(class="fixed z-30 w-full top-0 left-0 h-14 overflow-hidden main-padding-x flex items-center justify-between bg-(--LTheme1) dark:bg-(--Theme1)")
	//- Left Section
	div(class="mr-auto flex items-center justify-center h-full")
		//- App Name or The Logo
		lye-logo

		//- Settings
		button(type="button", v-if='false' v-tippy="{content: 'Settings'}" class="w-7 h-7 mx-2 pt-1 rounded-full flex items-center justify-center bg-(--LTheme4) dark:bg-(--Theme4)")
			RouterLink(to="/Settings")
				<i class="ri-settings-2-line ri-lg text-black dark:text-white"></i>

	//- Middle Section
	div(class="mx-auto")
		div(class="links flex flex-row gap-x-3 items-center justify-center *:p-2 *:text-gray-500")
			RouterLink(to="/") #[i(class="ri-home-2-line ri-lg")] Home
			RouterLink(to="/calculator") #[i(class="ri-calculator-line ri-lg")] Lye-Calculator

	//- Right Section
	div(class="ml-auto flex items-center h-full gap-4")
		//- Change App Colors and Theme
		theme-controller

		//- Dark Mode Toggle Button
		dark-mode

		//- Get Started Button
		get-started
</template>
<style scoped lang="sass">
@reference "tailwindcss"
.router-link-active
	color: var(--dark-fav-color)

.dark .router-link-active
	color: var(--light-fav-color)

// .router-link-exact-active
	// @apply text-#{$fav-color} dark:text-(--#{$dark-fav-color})
</style>

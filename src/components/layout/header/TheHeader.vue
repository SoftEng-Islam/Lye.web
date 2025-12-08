<script setup lang="ts">
import { onMounted, ref } from "vue";

import LyeLogo from "../LyeLogo.vue";
import ThemeController from "./ThemeController.vue";
import DarkMode from "./DarkMode.vue";
import GetStarted from "./GetStarted.vue";
</script>

<template lang="pug">
//- Our Header
header(tabindex="1" class="fixed z-30 w-full top-0 left-0 h-14 overflow-hidden main-padding-x flex items-center justify-between bg-(--LTheme1) dark:bg-(--Theme1)")
	//- Left Section
	div(class="mr-auto flex items-center justify-center h-full")
		//- App Name or The Logo
		lye-logo

	//- Middle Section
	div(class="mx-auto")


	//- Right Section
	div(class="ml-auto flex items-center h-full gap-4")
		//- Change App Colors and Theme
		theme-controller(class="hidden sm:flex")

		//- Dark Mode Toggle Button
		dark-mode

		//- Get Started Button
		get-started

		//- Right Menu Button that will appear in small screen size like mobile phones
		button(type="button" class="sm:hidden")
			<svg class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line></svg>
</template>

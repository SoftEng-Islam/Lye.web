<script setup lang="ts">
import { onMounted, ref } from "vue";

import LyeLogo from "../LyeLogo.vue";
import ThemeController from "./ThemeController.vue";
import DarkMode from "./DarkMode.vue";
import GetStarted from "./GetStarted.vue";
import RightMenuHandler from "./RightMenu/RightMenuHandler.vue";
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

		//- Right Menu
		right-menu-handler
</template>

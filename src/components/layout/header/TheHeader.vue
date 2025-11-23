<script setup lang="ts">
import { onMounted, ref } from "vue";
import ThemeController from "./ThemeController.vue";
import DarkMode from "./DarkMode.vue";

const ProjectName = "Lye.web";
const Calc = "Calculator";

</script>

<template lang="pug">
//- Our Header
header(class="overflow-hidden w-full top-0 left-0 h-20 px-4 flex items-center justify-between bg-(--LTheme1) dark:bg-(--Theme1)")
	//- App Name or The Logo
	span(class="text-black dark:text-white font-bold")
		RouterLink(to="/" class="logo") {{ ProjectName }}

	div(class="px-4 py-2 rounded-2xl  flex flex-row gap-x-3 items-center justify-center ml-auto *:rounded-md *:text-black *:dark:text-white *:p-1.5 *:bg-(--light-fav-color)/40 dark:*:bg-(--dark-fav-color)/40 *:border-(--dark-fav-color) dark:*:border-(--light-fav-color)")
		RouterLink(to="/")
			i(class="ri-home-2-line ri-lg")
		RouterLink(to="/calculator")
			i(class="ri-calculator-line ri-lg")


	//- Settings
	button(type="button", v-if='false' v-tippy="{content: 'Settings'}" class="w-7 h-7 mx-2 pt-1 rounded-full flex items-center justify-center bg-(--LTheme4) dark:bg-(--Theme4)")
		RouterLink(to="/Settings")
			<i class="ri-settings-2-line ri-lg text-black dark:text-white"></i>

	//- Change App Colors and Theme
	theme-controller

	//- Dark Mode Toggle Button
	dark-mode

</template>
<style scoped lang="sass">
@reference "tailwindcss"
.logo
	&.router-link-active
		@apply text-black dark:text-white font-bold bg-transparent
	&.router-link-exact-active
		@apply text-black dark:text-white font-bold bg-transparent

</style>

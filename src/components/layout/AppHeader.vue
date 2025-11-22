<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
const ProjectName = "Lye.web";

const darkModeChecked = ref(true);
const LiColorActive = ref(1);

let rootElement: HTMLElement;

onMounted(() => {
	rootElement = document.documentElement;

	// initialize theme on load
	document.documentElement.classList.toggle("dark", darkModeChecked.value);
});

// auto-toggle when user clicks
watch(darkModeChecked, (isDark) => {
	document.documentElement.classList.toggle("dark", isDark);
});

type ColorIndex = 1 | 2 | 3 | 4 | 5 | 6;


// change color theme
function setColorTheme(color: ColorIndex): void {
	LiColorActive.value = color;

	const darkMap: Record<ColorIndex, [string, string]> = {
		1: ["D-gra", "th_gra"],
		2: ["D-pur", "th_pur"],
		3: ["D-pin", "th_pin"],
		4: ["D-blu", "th_blu"],
		5: ["D-gre", "th_gre"],
		6: ["D-yel", "th_yel"],
	};

	const lightMap: Record<ColorIndex, [string, string]> = {
		1: ["L-gra", "Lth_gra"],
		2: ["L-pur", "Lth_pur"],
		3: ["L-pin", "Lth_pin"],
		4: ["L-blu", "Lth_blu"],
		5: ["L-gre", "Lth_gre"],
		6: ["L-yel", "Lth_yel"],
	};

	const [darkName, darkTh] = darkMap[color as ColorIndex];
	const [lightName, lightTh] = lightMap[color as ColorIndex];


	// Dark
	rootElement.style.setProperty("--dark-fav-color", `var(--${darkName})`);
	rootElement.style.setProperty("--borderFavColor", `var(--${darkName})`);
	for (let i = 1; i <= 4; i++) {
		rootElement.style.setProperty(`--Theme${i}`, `var(--${darkTh}${i})`);
	}

	// Light
	rootElement.style.setProperty("--light-fav-color", `var(--${lightName})`);
	rootElement.style.setProperty("--LborderFavColor", `var(--${lightName})`);
	for (let i = 1; i <= 4; i++) {
		rootElement.style.setProperty(`--LTheme${i}`, `var(--${lightTh}${i})`);
	}
}
</script>

<template lang="pug">
//- Our Header
header(class=" overflow-hidden w-full top-0 left-0 h-20 flex items-center justify-between px-4 bg-(--LTheme1) dark:bg-(--Theme1)")
	//- App Name or The Logo
	h1(class="text-black dark:text-white font-bold mr-auto")
		RouterLink(to="/") {{ ProjectName }}
	//- Settings
	button(type="button", v-if='false' v-tippy="{content: 'Settings'}" class="w-7 h-7 mx-2 pt-1 rounded-full flex items-center justify-center bg-(--LTheme4) dark:bg-(--Theme4)")
		RouterLink(to="/Settings")
			<i class="ri-settings-2-line ri-lg text-black dark:text-white"></i>
	//- Change App Colors and Theme
	div(class="scale-75 sm:scale-90 px-2 h-8 overflow-hidden rounded-full flex items-center justify-center gap-x-2 bg-(--LTheme4) dark:bg-(--Theme4)")
		//- button(type="button", @click="setColorTheme(1)" :class="LiColorActive.value === 1 ? 'scale-110 mx-1': ''" class="w-5 h-5 shadow-md rounded-full cursor-pointer hover:scale-90 duration-150 bg-linear-to-r from-(--L-gra) to-gray-950/70")
		button(type="button", @click="setColorTheme(1)" :class="['w-5 h-5 shadow-md rounded-full cursor-pointer hover:scale-90 duration-150 bg-linear-to-r from-(--L-gra) to-gray-950/70', LiColorActive == 1 ? 'scale-125 mx-1.5' : '']")
		button(type="button", @click="setColorTheme(2)" :class="['w-5 h-5 shadow-md rounded-full cursor-pointer hover:scale-90 duration-150 bg-linear-to-r from-(--L-pur) to-gray-950/70', LiColorActive == 2 ? 'scale-125 mx-1.5' : '']")
		button(type="button", @click="setColorTheme(3)" :class="['w-5 h-5 shadow-md rounded-full cursor-pointer hover:scale-90 duration-150 bg-linear-to-r from-(--L-pin) to-gray-950/70', LiColorActive == 3 ? 'scale-125 mx-1.5' : '']")
		button(type="button", @click="setColorTheme(4)" :class="['w-5 h-5 shadow-md rounded-full cursor-pointer hover:scale-90 duration-150 bg-linear-to-r from-(--L-blu) to-gray-950/70', LiColorActive == 4 ? 'scale-125 mx-1.5' : '']")
		button(type="button", @click="setColorTheme(5)" :class="['w-5 h-5 shadow-md rounded-full cursor-pointer hover:scale-90 duration-150 bg-linear-to-r from-(--L-gre) to-gray-950/70', LiColorActive == 5 ? 'scale-125 mx-1.5' : '']")
		button(type="button", @click="setColorTheme(6)" :class="['w-5 h-5 shadow-md rounded-full cursor-pointer hover:scale-90 duration-150 bg-linear-to-r from-(--L-yel) to-gray-950/70', LiColorActive == 6 ? 'scale-125 mx-1.5' : '']")

	//- Dark / Light Button Toggle
	div(class="toggleMode h-8 w-16 mx-3 flex flex-row items-center justify-center rounded-full bg-(--LTheme4) dark:bg-(--Theme4) scale-95" @click="darkModeChecked = !darkModeChecked;")
		input(type="checkbox" :checked="darkModeChecked")
		label(for="darkmode-toggle")
			//- <i class="sun pl-1 ri-sun-fill ri-xl text-yellow-100 shadow-lg"></i>
			//- <i class="moon ri-moon-fill pb-px ri-xl text-gray-500 dark:text-gray-300"></i>
			//- sun icon
			svg(class="sun pl-1.5 text-yellow-100 shadow-lg h-5 w-5 fill-current" xmlns='http://www.w3.org/2000/svg' viewbox='0 0 10 10')
				path(d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z')
			//- moon icon
			svg(class="moon pl-1 h-5 w-5 text-gray-500 dark:text-gray-300 fill-current" xmlns='http://www.w3.org/2000/svg' viewbox='0 0 10 10')
				path(d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z')
</template>
<style scoped lang="sass">
@reference "tailwindcss"
.toggleMode
	input
		@apply w-0 h-0 invisible

		&:checked+label
			@apply bg-(--Theme4)

		&:checked+label:after
			@apply left-full
			transform: translateX(-100%)
			background: linear-gradient(20deg, #000000, #7500e2)

		&:checked+label svg.sun
			@apply fill-gray-400

		&:checked+label svg.moon
			@apply fill-white

	label
		@apply w-full h-full relative flex flex-row items-center justify-center rounded-full cursor-pointer duration-300
		&:after
			content: ""
			@apply w-8 h-8 absolute left-0 rounded-full duration-300
			background: linear-gradient(180deg, #fdff98, #c97900)
			box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2)
		& svg
			@apply absolute w-7 z-10

		& svg.sun
			@apply left-0 fill-white duration-300

		& svg.moon
			@apply right-0 fill-gray-400 duration-300

		&:active:after
			@apply w-10
</style>

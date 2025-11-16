<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProjectName = "Lye.web";
const darkModeChecked = ref(true);

const LiColorActive = ref(1);

let rootElement: HTMLElement;

onMounted(() => {
	rootElement = document.documentElement;
});

watch(darkModeChecked, (val) => {
	if (val) {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
});

// optional: initialize when mounted
onMounted(() => {
	if (darkModeChecked.value) {
		document.documentElement.classList.add("dark");
	}
});

// function MT_toggleMode() {
// 	if (darkModeChecked.value === true) {
// 		// dark
// 		document.documentElement.classList.add("dark");
// 		console.log("dark");
// 	} else {
// 		// light
// 		document.documentElement.classList.remove("dark");
// 		console.log("light");
// 	}
// }

watch(darkModeChecked, (isDark) => {
	document.documentElement.classList.toggle("dark", isDark);
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function setColorTheme(color: number): void {
	LiColorActive.value = color;

	let darkBase = "";
	let lightBase = "";
	let darkTh = "";
	let lightTh = "";

	switch (color) {
		case 1:
			darkBase = "D-gra";
			lightBase = "L-gra";
			darkTh = "th_gra";
			lightTh = "Lth_gra";
			break;
		case 2:
			darkBase = "D-pur";
			lightBase = "L-pur";
			darkTh = "th_pur";
			lightTh = "Lth_pur";
			break;
		case 3:
			darkBase = "D-pin";
			lightBase = "L-pin";
			darkTh = "th_pin";
			lightTh = "Lth_pin";
			break;
		case 4:
			darkBase = "D-blu";
			lightBase = "L-blu";
			darkTh = "th_blu";
			lightTh = "Lth_blu";
			break;
		case 5:
			darkBase = "D-gre";
			lightBase = "L-gre";
			darkTh = "th_gre";
			lightTh = "Lth_gre";
			break;
		case 6:
			darkBase = "D-yel";
			lightBase = "L-yel";
			darkTh = "th_yel";
			lightTh = "Lth_yel";
			break;
	}

	// Favorite colors
	rootElement.style.setProperty("--dark-fav-color", `var(--${darkBase})`);
	rootElement.style.setProperty("--light-fav-color", `var(--${lightBase})`);

	// Border colors
	rootElement.style.setProperty("--borderFavColor", `var(--${darkBase})`);
	rootElement.style.setProperty("--LborderFavColor", `var(--${lightBase})`);

	// Theme sets (1 → 4)
	for (let i = 1; i <= 4; i++) {
		rootElement.style.setProperty(`--Theme${i}`, `var(--${darkTh}${i})`);
		rootElement.style.setProperty(`--LTheme${i}`, `var(--${lightTh}${i})`);
	}
}

</script>
<template lang="pug">
//- Our Header
header(class="overflow-hidden w-full top-0 left-0 h-20 flex items-center px-4 bg-(--LTheme1) dark:bg-(--Theme1)" data-tauri-drag-region style="user-select: none;")
	//- App Name or The Logo
	h1(class="text-black dark:text-white font-bold mr-auto" v-tippy="{ content: ProjectName }")
		RouterLink(to="/") {{ ProjectName }}
	//- Settings
	button(type="button", v-tippy="{content: 'Settings'}" class="w-7 h-7 mx-2 pt-1 rounded-full flex items-center justify-center bg-(--LTheme4) dark:bg-(--Theme4)")
		RouterLink(to="/Settings")
			<i class="ri-settings-2-line ri-lg text-black dark:text-white"></i>
	//- Change App Colors and Theme
	div(class="px-2 h-8 overflow-hidden rounded-full flex items-center justify-center gap-x-2 bg-(--LTheme4) dark:bg-(--Theme4)")
		//- button(type="button", @click="setColorTheme(1)" :class="LiColorActive.value === 1 ? 'scale-110 mx-1': ''" class="w-5 h-5 shadow-md rounded-full cursor-pointer hover:scale-90 duration-150 bg-linear-to-r from-(--L-gra) to-gray-950/70")
		button( type="button" @click="setColorTheme(1)" :class="[ 'w-5 h-5 shadow-md rounded-full cursor-pointer hover:scale-90 duration-150 bg-linear-to-r from-(--L-gra) to-gray-950/70', LiColorActive.value === 1 ? 'scale-110 mx-1' : '']")
		button(type="button", @click="setColorTheme(2)" :class="[ 'w-5 h-5 shadow-md rounded-full cursor-pointer hover:scale-90 duration-150 bg-linear-to-r from-(--L-pur) to-gray-950/70', LiColorActive.value === 2 ? 'scale-110 mx-1' : '']")
		button(type="button", @click="setColorTheme(3)" :class="[ 'w-5 h-5 shadow-md rounded-full cursor-pointer hover:scale-90 duration-150 bg-linear-to-r from-(--L-pin) to-gray-950/70', LiColorActive.value === 3 ? 'scale-110 mx-1' : '']")
		button(type="button", @click="setColorTheme(4)" :class="[ 'w-5 h-5 shadow-md rounded-full cursor-pointer hover:scale-90 duration-150 bg-linear-to-r from-(--L-blu) to-gray-950/70', LiColorActive.value === 4 ? 'scale-110 mx-1' : '']")
		button(type="button", @click="setColorTheme(5)" :class="[ 'w-5 h-5 shadow-md rounded-full cursor-pointer hover:scale-90 duration-150 bg-linear-to-r from-(--L-gre) to-gray-950/70', LiColorActive.value === 5 ? 'scale-110 mx-1' : '']")
		button(type="button", @click="setColorTheme(6)" :class="[ 'w-5 h-5 shadow-md rounded-full cursor-pointer hover:scale-90 duration-150 bg-linear-to-r from-(--L-yel) to-gray-950/70', LiColorActive.value === 6 ? 'scale-110 mx-1' : '']")
	//- Dark / Light Button Toggle
	div(class="toggleMode h-8 w-16 mx-3 flex flex-row items-center justify-center rounded-full bg-(--LTheme4) dark:bg-(--Theme4) scale-95" @click="darkModeChecked = !darkModeChecked; MT_toggleMode();")
		input(type="checkbox" :checked="darkModeChecked")
		label(for="darkmode-toggle")
			<i class="sun pl-1 ri-sun-fill ri-xl text-yellow-100 shadow-lg"></i>
			<i class="moon ri-moon-fill pb-px ri-xl text-gray-500 dark:text-gray-300"></i>
</template>
<style scoped lang="scss">
.toggleMode {
	input {
		@apply w-0 h-0;
		visibility: hidden;

		// &:checked+label {
		// 	@apply bg-[var(--Theme4)];
		// }

		&:checked+label:after {
			@apply left-full;
			transform: translateX(-100%);
			background: linear-gradient(20deg, #000000, #7500e2);
		}

		&:checked+label i.sun {
			@apply fill-gray-400;
		}

		&:checked+label i.moon {
			@apply fill-white;
		}
	}

	label {
		@apply w-full h-full relative flex flex-row items-center justify-center rounded-full cursor-pointer duration-300;

		&:after {
			content: "";
			@apply w-8 h-8 absolute left-0 rounded-full duration-300;
			background: linear-gradient(180deg, #fdff98, #c97900);
			box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
		}

		& i {
			@apply absolute w-7 z-10;
		}

		& i.sun {
			@apply left-0 fill-white duration-300;
		}

		& i.moon {
			@apply right-0 fill-gray-400 duration-300;
		}

		&:active:after {
			@apply w-10;
		}
	}
}
</style>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useStorage } from "@vueuse/core";
type ColorIndex = 1 | 2 | 3 | 4 | 5 | 6;

// Reactive persistent storage
const state = useStorage(
	'lye-store',
	{ themeColor: 1 },
	localStorage,
	{ mergeDefaults: true }
);
const LiColorActive = ref(1);
let rootElement: HTMLElement;

onMounted(() => {
	rootElement = document.documentElement;
});

// change color theme
function setColorTheme(color: ColorIndex): void {
	LiColorActive.value = color;
	state.value.themeColor = color;
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
onMounted(() => {
	setColorTheme(state.value.themeColor as ColorIndex);
});
// React to changes (auto-save)
watch(
	() => state.value.themeColor,
	(value) => {
		setColorTheme(value as ColorIndex);
	}
);
</script>
<template lang="pug">
div(class="px-1 h-6 overflow-hidden rounded-full flex items-center justify-center gap-x-2 bg-(--LTheme3) dark:bg-(--Theme3)")
	button(type="button", aria-label="gra", @click="setColorTheme(1)" :class="['w-4 h-4 shadow-md rounded-full cursor-pointer hover:scale-90 duration-150 bg-linear-to-r from-(--L-gra) to-gray-950/70', LiColorActive == 1 ? 'scale-125 mx-1.5' : '']")
	button(type="button", aria-label="pur", @click="setColorTheme(2)" :class="['w-4 h-4 shadow-md rounded-full cursor-pointer hover:scale-90 duration-150 bg-linear-to-r from-(--L-pur) to-gray-950/70', LiColorActive == 2 ? 'scale-125 mx-1.5' : '']")
	button(type="button", aria-label="pin", @click="setColorTheme(3)" :class="['w-4 h-4 shadow-md rounded-full cursor-pointer hover:scale-90 duration-150 bg-linear-to-r from-(--L-pin) to-gray-950/70', LiColorActive == 3 ? 'scale-125 mx-1.5' : '']")
	button(type="button", aria-label="blu", @click="setColorTheme(4)" :class="['w-4 h-4 shadow-md rounded-full cursor-pointer hover:scale-90 duration-150 bg-linear-to-r from-(--L-blu) to-gray-950/70', LiColorActive == 4 ? 'scale-125 mx-1.5' : '']")
	button(type="button", aria-label="gre", @click="setColorTheme(5)" :class="['w-4 h-4 shadow-md rounded-full cursor-pointer hover:scale-90 duration-150 bg-linear-to-r from-(--L-gre) to-gray-950/70', LiColorActive == 5 ? 'scale-125 mx-1.5' : '']")
	button(type="button", aria-label="yel", @click="setColorTheme(6)" :class="['w-4 h-4 shadow-md rounded-full cursor-pointer hover:scale-90 duration-150 bg-linear-to-r from-(--L-yel) to-gray-950/70', LiColorActive == 6 ? 'scale-125 mx-1.5' : '']")
</template>

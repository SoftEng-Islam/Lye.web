<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useStorage } from "@vueuse/core";

type ColorIndex = 1 | 2 | 3 | 4 | 5 | 6;

// Persistent reactive storage
const state = useStorage(
	"lye-store",
	{ themeColor: 1 },
	localStorage,
	{ mergeDefaults: true }
);

let rootElement: HTMLElement;

// Theme maps moved outside function
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

// Single source of truth for active color
const activeColor = computed({
	get: () => state.value.themeColor,
	set: (color: ColorIndex) => {
		setColorTheme(color);
	}
});

// Core function
function setColorTheme(color: ColorIndex): void {
	state.value.themeColor = color;

	const [darkName, darkTh] = darkMap[color];
	const [lightName, lightTh] = lightMap[color];

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

// One onMounted
onMounted(() => {
	rootElement = document.documentElement;
	setColorTheme(state.value.themeColor as ColorIndex);
});
</script>

<template lang="pug">
div(class="w-[210px] px-2 h-8 overflow-hidden rounded-full flex items-center justify-center gap-x-1 bg-(--LTheme3) dark:bg-(--Theme3) border border-black/5 dark:border-white/5")
  div(class="w-7 h-6 flex items-center justify-center")
    button( type="button" aria-label="gra" @click="activeColor = 1" :class="[ 'w-4 h-4 shadow-md rounded-full cursor-pointer hover:scale-110 duration-150 bg-linear-to-r from-(--L-gra) to-gray-950/70', activeColor === 1 ? 'scale-125' : '' ]" )
  div(class="w-7 h-6 flex items-center justify-center")
    button( type="button" aria-label="pur" @click="activeColor = 2" :class="[ 'w-4 h-4 shadow-md rounded-full cursor-pointer hover:scale-110 duration-150 bg-linear-to-r from-(--L-pur) to-gray-950/70', activeColor === 2 ? 'scale-125' : '' ]" )
  div(class="w-7 h-6 flex items-center justify-center")
    button( type="button" aria-label="pin" @click="activeColor = 3" :class="[ 'w-4 h-4 shadow-md rounded-full cursor-pointer hover:scale-110 duration-150 bg-linear-to-r from-(--L-pin) to-gray-950/70', activeColor === 3 ? 'scale-125' : '' ]" )
  div(class="w-7 h-6 flex items-center justify-center")
    button( type="button" aria-label="blu" @click="activeColor = 4" :class="[ 'w-4 h-4 shadow-md rounded-full cursor-pointer hover:scale-110 duration-150 bg-linear-to-r from-(--L-blu) to-gray-950/70', activeColor === 4 ? 'scale-125' : '' ]" )
  div(class="w-7 h-6 flex items-center justify-center")
    button( type="button" aria-label="gre" @click="activeColor = 5" :class="[ 'w-4 h-4 shadow-md rounded-full cursor-pointer hover:scale-110 duration-150 bg-linear-to-r from-(--L-gre) to-gray-950/70', activeColor === 5 ? 'scale-125' : '' ]" )
  div(class="w-7 h-6 flex items-center justify-center")
    button( type="button" aria-label="yel" @click="activeColor = 6" :class="[ 'w-4 h-4 shadow-md rounded-full cursor-pointer hover:scale-110 duration-150 bg-linear-to-r from-(--L-yel) to-gray-950/70', activeColor === 6 ? 'scale-125' : '' ]" )
</template>

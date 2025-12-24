<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
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

// Theme maps with color names
const themeColors: Array<{ index: ColorIndex; name: string; label: string; }> = [
	{ index: 1, name: "gra", label: "Gray" },
	{ index: 2, name: "pur", label: "Purple" },
	{ index: 3, name: "pin", label: "Pink" },
	{ index: 4, name: "blu", label: "Blue" },
	{ index: 5, name: "gre", label: "Green" },
	{ index: 6, name: "yel", label: "Yellow" },
];

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

// Hover state for tooltip
const hoveredIndex = ref<ColorIndex | null>(null);

// Get button classes
const getButtonClasses = (colorIndex: ColorIndex) => {
	const isActive = activeColor.value === colorIndex;
	const isHovered = hoveredIndex.value === colorIndex;
	return {
		'scale-105': isHovered || isActive,
		'scale-100': !isHovered && !isActive
	};
};

// Get background style for color button
const getColorBackground = (colorName: string) => {
	return `linear-gradient(135deg, var(--L-${colorName}) 0%, var(--L-${colorName}) 40%, rgba(0,0,0,0.3) 100%)`;
};

// Get glow style for active state
const getGlowStyle = () => {
	return `0 0 8px 1px var(--LTheme1), inset 0 0 12px rgba(255,255,255,0.1)`;
};

// Get transform style for indicator
const getIndicatorTransform = () => {
	const translateX = (activeColor.value - 1) * 28;
	return `translateX(${translateX}px)`;
};
</script>

<template lang="pug">
div(class="theme-picker-container relative flex items-center justify-center px-1.5 py-1")
	div(class="flex items-center justify-center gap-1 relative")
		//- Active indicator background (animated)
		div(class="absolute theme-indicator left-0 bottom-0 h-6 w-6 rounded-lg transition-all duration-500 ease-out pointer-events-none" :style="{ transform: getIndicatorTransform() }")
			div(class="absolute inset-0 rounded-lg bg-(--LTheme1) dark:bg-(--Theme1) opacity-20 blur-sm")
			div(class="absolute inset-0 rounded-lg border border-(--LTheme1) dark:border-(--Theme1) opacity-60")

		//- Color buttons
		div(v-for="color in themeColors" :key="color.index" class="relative flex items-center justify-center group")
			button(type="button" :aria-label="'Select ' + color.label + ' theme'" @click="activeColor = color.index" @mouseenter="hoveredIndex = color.index" @mouseleave="hoveredIndex = null" class="color-button relative z-10 w-6 h-6 rounded-lg transition-all duration-300 ease-out cursor-pointer overflow-hidden" :class="getButtonClasses(color.index)")
				//- Color gradient background
				div(class="absolute inset-0 rounded-lg transition-opacity duration-300" :class="activeColor === color.index ? 'opacity-100 shadow-md' : 'opacity-70 group-hover:opacity-90'" :style="{ background: getColorBackground(color.name) }")

				//- Shine effect
				div(class="absolute inset-0 rounded-lg bg-linear-to-br from-white/30 via-transparent to-transparent pointer-events-none transition-opacity duration-300" :class="(activeColor === color.index || hoveredIndex === color.index) ? 'opacity-100' : 'opacity-0'")

				//- Active state glow
				div(v-if="activeColor === color.index" class="absolute inset-0 rounded-lg pointer-events-none" :style="{ boxShadow: getGlowStyle() }")

				//- Checkmark for active state
				div(v-if="activeColor === color.index" class="absolute inset-0 flex items-center justify-center pointer-events-none")
					svg(class="w-3 h-3 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3")
						path(stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7")

			//- Tooltip
			//- div(v-if="hoveredIndex === color.index && activeColor !== color.index" class="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-1 text-[9px] font-bold text-white bg-zinc-900/95 dark:bg-zinc-700/95 backdrop-blur-sm rounded-md whitespace-nowrap pointer-events-none shadow-xl z-50 border border-white/10 animate-fade-in") {{ color.label }}
</template>

<style scoped lang="sass">
@reference "tailwindcss"

.theme-picker-container
	@apply flex items-center

.color-button
	&:active
		transform: scale(0.95) !important

.theme-indicator
	z-index: 0

// Smooth color transitions
.color-button
	div[style*="background"]
		transition: opacity 0.3s ease-out, box-shadow 0.3s ease-out

// Tooltip animation
@keyframes fade-in
	from
		opacity: 0
		transform: translateX(-50%) translateY(4px)
	to
		opacity: 1
		transform: translateX(-50%) translateY(0)

.animate-fade-in
	animation: fade-in 0.2s ease-out
</style>

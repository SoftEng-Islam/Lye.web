<script setup lang="ts">
import { onMounted, watch, computed } from "vue";
import { useStorage } from '@vueuse/core';

// Reactive persistent storage
const state = useStorage(
	'lye-store',
	{ darkMode: true },
	localStorage,
	{ mergeDefaults: true }
);

// Apply theme on page load
onMounted(() => {
	document.documentElement.classList.toggle("dark", state.value.darkMode);
});

// React to changes (auto-save + toggle UI)
watch(
	() => state.value.darkMode,
	(isDark) => {
		document.documentElement.classList.toggle("dark", isDark);
	}
);

// Triggered when user clicks UI
const toggleDark = () => {
	state.value.darkMode = !state.value.darkMode;
};

const isDark = computed(() => state.value.darkMode);

// Get button background classes
const getButtonBgClasses = () => {
	return !isDark.value ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200' : 'bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950';
};

// Get overlay classes
const getOverlayClasses = () => {
	return !isDark.value ? 'bg-gradient-to-r from-amber-500/20 to-amber-400/20' : 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20';
};

// Get thumb classes
const getThumbClasses = () => {
	return !isDark.value ? 'translate-x-0 bg-gradient-to-br from-white to-amber-50' : 'translate-x-6 bg-gradient-to-br from-slate-600 to-slate-800';
};

// Get glow classes
const getGlowClasses = () => {
	return !isDark.value ? 'bg-amber-400' : 'bg-blue-400';
};

// Get icon container classes
const getIconContainerClasses = () => {
	return !isDark.value ? 'rotate-0' : 'rotate-[-360deg]';
};

// Get ring classes
const getRingClasses = () => {
	return !isDark.value ? 'ring-2 ring-amber-400/50 ring-offset-1' : 'ring-2 ring-blue-400/50 ring-offset-1';
};
</script>

<template lang="pug">
button(type="button" @click="toggleDark" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'" class="dark-mode-toggle relative w-14 h-8 rounded-full transition-all duration-500 ease-out cursor-pointer overflow-hidden group focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-950" :class="getButtonBgClasses()")
	//- Background gradient overlay
	div(class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" :class="getOverlayClasses()")

	//- Stars background (dark mode only)
	div(v-if="isDark" class="absolute inset-0 opacity-30")
		div(class="absolute top-1 left-3 w-1 h-1 bg-white rounded-full animate-twinkle" style="animation-delay: 0s")
		div(class="absolute top-3 left-8 w-0.5 h-0.5 bg-white rounded-full animate-twinkle" style="animation-delay: 0.5s")
		div(class="absolute top-2 right-4 w-1 h-1 bg-white rounded-full animate-twinkle" style="animation-delay: 1s")

	//- Toggle circle/thumb
	div(class="absolute top-1 left-1 w-6 h-6 rounded-full transition-all duration-500 ease-out shadow-lg flex items-center justify-center z-10" :class="getThumbClasses()")
		//- Glow effect
		div(class="absolute inset-0 rounded-full blur-md opacity-50 transition-opacity duration-500" :class="getGlowClasses()")

		//- Icon container with rotation animation
		div(class="relative z-10 transition-transform duration-500" :class="getIconContainerClasses()")
			transition(name="icon-switch" mode="out-in")
				//- Sun icon (light mode)
				svg(v-if="!isDark" key="sun" class="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5")
					circle(cx="12" cy="12" r="4")
					path(d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41")

				//- Moon icon (dark mode)
				svg(v-else key="moon" class="w-4 h-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2")
					path(d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z")

	//- Glow ring on hover
	div(class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" :class="getRingClasses()")

	//- Active state pulse
	div(v-if="isDark" class="absolute inset-0 rounded-full animate-pulse-slow opacity-20")
		div(class="absolute inset-0 rounded-full bg-blue-400 blur-xl")
</template>

<style scoped lang="sass">
@reference "tailwindcss"

.dark-mode-toggle
	&:active
		transform: scale(0.98)

// Icon switch transition
.icon-switch-enter-active, .icon-switch-leave-active
	transition: all 0.3s ease-out

.icon-switch-enter-from
	opacity: 0
	transform: scale(0.5) rotate(-90deg)

.icon-switch-leave-to
	opacity: 0
	transform: scale(0.5) rotate(90deg)


// Twinkle animation for stars
@keyframes twinkle
	0%, 100%
		opacity: 0.3
	50%
		opacity: 1

.animate-twinkle
	animation: twinkle 3s ease-in-out infinite

// Pulse animation
@keyframes pulse-slow
	0%, 100%
		opacity: 0.2
	50%
		opacity: 0.4

.animate-pulse-slow
	animation: pulse-slow 3s ease-in-out infinite
</style>

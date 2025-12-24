<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template lang="pug">
RouterLink(
	v-if="route.name === 'home'"
	to="/calculator"
	class="group/gs relative h-10 px-6 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 flex items-center justify-center bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 shadow-lg hover:shadow-(--LTheme1) shadow-opacity-40"
)
	//- Animated Gradient Core
	div(class="absolute inset-0 bg-gradient-to-r from-transparent via-(--LTheme4) to-transparent opacity-0 group-hover/gs:opacity-20 transition-opacity duration-700")

	//- Holographic Reflection / Shimmer
	div(class="absolute inset-0 pointer-events-none opacity-0 group-hover/gs:opacity-100 transition-opacity duration-700")
		div(class="absolute inset-[-100%] bg-gradient-to-tr from-transparent via-white/20 to-transparent rotate-45 animate-shimmer-fast")

	span(class="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] group-hover/gs:tracking-[0.25em] transition-all duration-500") Get Started
</template>

<style scoped lang="sass">
@keyframes shimmer-fast
	0%
		transform: translate(-50%, -50%) rotate(45deg)
	100%
		transform: translate(50%, 50%) rotate(45deg)

.animate-shimmer-fast
	animation: shimmer-fast 3s ease-in-out infinite
</style>

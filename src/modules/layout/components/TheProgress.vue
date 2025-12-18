<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const scrollProgress = ref(0);
let ticking = false;

function updateProgress() {
	const doc = document.documentElement;
	const scrollTop = window.pageYOffset || doc.scrollTop;
	const height = doc.scrollHeight - doc.clientHeight;
	scrollProgress.value = height > 0 ? (scrollTop / height) * 100 : 0;
	ticking = false;
}

function onScroll() {
	if (!ticking) {
		requestAnimationFrame(updateProgress);
		ticking = true;
	}
}

onMounted(() => {
	window.addEventListener("scroll", onScroll, { passive: true });
	updateProgress();
});

onUnmounted(() => {
	window.removeEventListener("scroll", onScroll);
});
</script>

<template lang="pug">
div(class="fixed top-0 left-0 w-full h-[3px] bg-white/5 dark:bg-zinc-900/10 backdrop-blur-md z-[100] border-b border-white/5")
	div(
		class="h-full bg-(--Theme1) dark:bg-(--LTheme1) shadow-[0_0_15px] shadow-(--Theme2) dark:shadow-(--LTheme2) transition-all duration-300 ease-out relative"
		:style="{ width: scrollProgress + '%' }"
	)
		//- Luminous Tip
		div(class="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-full bg-white blur-sm opacity-50")
</template>

<style scoped lang="sass">
// Optimized for GPU
div
	will-change: width
</style>

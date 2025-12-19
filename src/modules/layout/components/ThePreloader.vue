<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Preloader {
	enablePreloader: boolean;
}

const props = withDefaults(defineProps<Preloader>(), {
	enablePreloader: true
});

const isLoading = ref(true);
onMounted(() => {
	if (props.enablePreloader) {
		setTimeout(() => {
			isLoading.value = false;
		}, 300); // 300ms of cinematic glory
	}
});

</script>

<template lang="pug">
teleport(to="body")
	transition(
		enter-active-class="transition-opacity duration-700 ease-out"
		enter-from-class="opacity-0"
		enter-to-class="opacity-100"
		leave-active-class="transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1)"
		leave-from-class="opacity-100 scale-100"
		leave-to-class="opacity-0 scale-110 blur-2xl"
	)
		div(v-if="props.enablePreloader && isLoading" class="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-zinc-950")
			//- Background Cinematic Elements
			div(class="absolute inset-0 z-0")
				div(class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-br from-(--Theme1)/20 via-transparent to-(--Theme2)/10 blur-[120px] animate-mesh-slow")
				div(class="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_center,var(--LTheme1)_1px,transparent_1px)] [background-size:40px_40px]")

			//- Digital Scanning Line
			div(class="absolute inset-0 z-10 pointer-events-none")
				div(class="w-full h-[1px] bg-gradient-to-r from-transparent via-(--LTheme1) to-transparent opacity-20 animate-scan-slow")

			//- Main Lab Container
			div(class="relative z-20 flex flex-col items-center")
				//- Distillation Apparatus Visual
				div(class="relative w-48 h-48 mb-12")
					//- The Beaker / Flask
					div(class="absolute inset-0 rounded-[40px] border-2 border-white/10 backdrop-blur-2xl bg-white/5 shadow-2xl")
						//- Inner Liquid
						div(class="absolute bottom-4 inset-x-4 rounded-[28px] bg-gradient-to-t from-(--LTheme1) to-(--LTheme2) opacity-40 animate-liquid-fill")
							//- Bubbles
							div(v-for="i in 5" :key="i" class="absolute w-1.5 h-1.5 rounded-full bg-white/40 animate-bubble" :style="{ left: i * 20 + '%', animationDelay: i * 0.5 + 's' }")

					//- Connecting Pipes / Technical Accents
					div(class="absolute -top-12 left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-transparent to-white/20")
					div(class="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent")

				//- Loading Text & Progress
				div(class="flex flex-col items-center gap-4 text-center")
					div(class="flex items-center gap-3 mb-2")
						div(class="w-2 h-2 rounded-full bg-(--LTheme1) animate-ping")
						span(class="text-[10px] font-black uppercase tracking-[0.5em] text-(--LTheme1) animate-pulse") Initializing Laboratory

					h2(class="text-2xl font-black text-white tracking-tighter") Lye.web

					//- Technical Data Stream
					div(class="h-4 overflow-hidden")
						p(class="text-[9px] font-mono text-zinc-500 uppercase tracking-widest animate-data-stream")
							| SYNCING SAP MODELS... CALIBRATING LYE RATIOS... OPTIMIZING MOLECULAR MAPPING...
</template>

<style scoped lang="sass">
@reference "tailwindcss"

@keyframes mesh-slow
	0%, 100%
		transform: translate(-50%, -50%) rotate(0deg) scale(1)
	50%
		transform: translate(-45%, -55%) rotate(5deg) scale(1.05)

@keyframes scan-slow
	0%
		top: -10%
	100%
		top: 110%

@keyframes liquid-fill
	0%
		height: 0%
		opacity: 0
	50%
		height: 60%
		opacity: 0.4
	100%
		height: 85%
		opacity: 0.6

@keyframes bubble
	0%
		bottom: 0
		opacity: 0
		transform: scale(0.5)
	50%
		opacity: 1
		transform: scale(1.2)
	100%
		bottom: 90%
		opacity: 0
		transform: scale(0.5)

@keyframes data-stream
	0%
		transform: translateY(0)
	100%
		transform: translateY(-100%)

.animate-mesh-slow
	animation: mesh-slow 15s ease-in-out infinite

.animate-scan-slow
	animation: scan-slow 3s linear infinite

.animate-liquid-fill
	animation: liquid-fill 4s cubic-bezier(0.4, 0, 0.2, 1) forwards

.animate-bubble
	animation: bubble 2s ease-in infinite

.animate-data-stream
	animation: data-stream 10s steps(10) infinite
</style>

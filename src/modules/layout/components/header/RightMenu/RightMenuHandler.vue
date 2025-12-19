<script setup lang="ts">
import { ref, watch } from 'vue';
import RightMenuContent from './RightMenuContent.vue';
const isOpen = ref(false);

// Prevent body scroll when menu is open
watch(isOpen, (val) => {
	if (val) document.body.style.overflow = 'hidden';
	else document.body.style.overflow = '';
});
</script>

<template lang="pug">
div(class="flex")
	//- Trigger Button
	button(@click="isOpen = true" class="lg:hidden w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 flex flex-col items-center justify-center gap-1.5 transition-all hover:bg-black/10 dark:hover:bg-white/10 group")
		div(class="w-5 h-0.5 bg-zinc-600 dark:bg-zinc-300 rounded-full transition-all" :class="{'rotate-45 translate-y-2': isOpen}")
		div(class="w-3 h-0.5 bg-zinc-600 dark:bg-zinc-300 rounded-full transition-all" :class="{'opacity-0': isOpen}")
		div(class="w-5 h-0.5 bg-zinc-600 dark:bg-zinc-300 rounded-full transition-all" :class="{'-rotate-45 -translate-y-2': isOpen}")

	//- Content
	teleport(to="body")
		transition(enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut")
			div(v-if="isOpen" class="fixed inset-0 z-50 overflow-hidden")
				//- Backdrop
				div(class="absolute inset-0 bg-white/20 dark:bg-black/40 backdrop-blur-3xl" @click="isOpen = false")

				//- Drawer
				transition(enter-active-class="animate__animated animate__slideInRight animate__faster" leave-active-class="animate__animated animate__slideOutRight animate__faster")
					div(v-if="isOpen" class="absolute right-0 top-0 bottom-0 w-full sm:w-[400px] h-full bg-white dark:bg-zinc-950 shadow-2xl p-8 border-l border-white/5")
						right-menu-content(@close="isOpen = false")
</template>

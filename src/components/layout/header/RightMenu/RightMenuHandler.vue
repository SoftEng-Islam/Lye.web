<script setup lang="ts">
import { ref } from 'vue';
import RightMenuContent from './RightMenuContent.vue';
const isOpen = ref(false);

const title = "Just A Title";
const msg = "Just A Message";

</script>
<template lang="pug">
//- Right Menu Button that will appear in small screen size like mobile phones
div(class="relative flex")
	//- Trigger Button
	button(@click="isOpen = !isOpen" class="sm:hidden" type="button" name="right-menu-button" id="right-menu-button" aria-expanded="false" aria-controls="right-menu" aria-label="Open Right Menu")
		<svg class="w-8 stroke-black dark:stroke-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line></svg>
	//- Content
	teleport(to="body")
		div(v-if="isOpen" class="content flex flex-col gap-3 fixed w-[90%] h-[85%] z-30  left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] bg-amber-500 p-4 rounded-2xl")
			right-menu-content(@close="isOpen = false" :title="title" :msg="msg" )
</template>

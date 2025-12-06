<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

const displayedText = ref("");

const props = defineProps<{
	text: string;
	speed?: number;       // ms per character
	pause?: number;       // ms before repeating
	repeating?: boolean; // Enable/Disable repeating
}>();

const typingSpeed = props.speed ?? 100;
const pauseDuration = props.pause ?? 1500;
const enableRepeating: boolean = props.repeating ?? false;

const cursor = ref(true);

function startTyping() {
	displayedText.value = "";
	let i = 0;

	function type() {
		if (i < props.text.length) {
			cursor.value = true;
			displayedText.value += props.text[i];
			i++;
			setTimeout(type, typingSpeed);
		} else {
			cursor.value = false;
			// Finished — wait, then restart
			if (enableRepeating) setTimeout(startTyping, pauseDuration);
		}
	}
	type();
}

onMounted(() => {
	startTyping();
});
</script>


<template>
	<p :class="cursor ? '' : 'animate-none! border-none!'">{{ displayedText }}</p>
	<!-- <p>{{ displayedText }}</p> -->
</template>

<style scoped lang="sass">
p
	white-space: nowrap
	border-right: 4px solid black
	// cursor
	animation: none blink 0.5s step-end infinite

@keyframes blink
	from, to
		border-color: transparent
	50%
		border-color: var(--color-red-500)
</style>

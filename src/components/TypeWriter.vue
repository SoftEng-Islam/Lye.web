<script setup lang="ts">
import { ref, onMounted } from 'vue';

const displayedText = ref("");

const props = defineProps<{
	text: string;
}>();

onMounted(() => {
	let i = 0;
	function type() {
		if (i < props.text.length) {
			displayedText.value += props.text[i];
			i++;
			setTimeout(type, 100);         // adjust delay for speed
		}
	}
	type();
});
</script>

<template>
	<p>{{ displayedText }}</p>
</template>

<style scoped lang="sass">
p
	white-space: nowrap
	border-right: 3px solid black
	// cursor
	animation: blink 0.5s step-end infinite

@keyframes blink
	from, to
		border-color: transparent
	50%
		border-color: var(--color-red-500)
</style>

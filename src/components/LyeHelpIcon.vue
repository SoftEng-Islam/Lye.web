<!-- LyeHelpIcon.vue -->
<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
	content: string;
	width?: string;
	strokeColor?: string;
	darkStrokeColor?: string;
	fillColor?: string;
	darkFillColor?: string;
}
const props = withDefaults(defineProps<Props>(), {
	content: "Help Information",
	width: "w-6",
	strokeColor: "stroke-blue-500",
	darkStrokeColor: "stroke-blue-300",
	fillColor: "fill-blue-500",
	darkFillColor: "fill-blue-300"
});
</script>

<template lang="pug">
svg(v-tippy="{ content }" :class="[width, strokeColor, darkStrokeColor, fillColor, darkFillColor]" class="lye-help" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round")
	circle(cx="12" cy="12" r="10")
	line(x1="12" y1="8" x2="12" y2="12")
	line(x1="12" y1="16" x2="12" y2="16")
</template>

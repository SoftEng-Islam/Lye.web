<!-- LyeHelpIcon.vue -->
<script setup lang="ts">
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
	fillColor: "",
	darkFillColor: ""
});
</script>

<template lang="pug">
svg(v-tippy="{ content }" :class="[width, strokeColor, darkStrokeColor, fillColor, darkFillColor]" class="lye-help-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
	path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z")
</template>
<style scoped lang="sass">
@reference "tailwindcss"
svg.lye-help
	@apply w-6 flex-none mr-2
</style>

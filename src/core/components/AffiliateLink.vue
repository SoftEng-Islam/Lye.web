<script setup lang="ts">
interface Props {
	href: string;
	text?: string;
	rel?: string;
}

const props = withDefaults(defineProps<Props>(), {
	rel: 'sponsored noopener noreferrer',
});
</script>

<template lang="pug">
a(
	:href="href"
	:rel="rel"
	target="_blank"
	class="affiliate-link inline-flex items-center gap-1 text-(--Theme1) dark:text-(--LTheme1) font-bold hover:underline"
)
	slot {{ text }}
	svg(class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor")
		path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14")
</template>

<style scoped lang="sass">
@reference "tailwindcss"
</style>

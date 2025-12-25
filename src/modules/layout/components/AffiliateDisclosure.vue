<script setup lang="ts">
// Affiliate Disclosure Component
// This component should be displayed on pages with affiliate links
</script>

<template lang="pug">
div(class="affiliate-disclosure bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-4 rounded-r-lg my-6")
	p(class="text-sm text-amber-800 dark:text-amber-300 leading-relaxed")
		strong(class="font-bold") Affiliate Disclosure:
		|  This site contains affiliate links. We may earn a commission at no extra cost to you when you make a purchase through our links. This helps us maintain and improve Lye.web. Thank you for your support!
</template>

<style scoped lang="sass">
@reference "tailwindcss"
</style>

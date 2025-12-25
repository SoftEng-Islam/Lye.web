<script lang="ts" setup>
// Buy Me a Coffee donation button component
// Replace 'YOUR_USERNAME' with your actual Buy Me a Coffee username
const buyMeACoffeeUrl = 'https://buymeacoffee.com/YOUR_USERNAME'
</script>

<template lang="pug">
a(
	:href="buyMeACoffeeUrl"
	target="_blank"
	rel="noopener noreferrer"
	class="donation-button inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
	aria-label="Support Lye.web on Buy Me a Coffee"
)
	svg(width="20" height="20" fill="currentColor" viewBox="0 0 24 24")
		path(d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6 0 5.302-4.298 9.6-9.6 9.6-5.302 0-9.6-4.298-9.6-9.6 0-5.302 4.298-9.6 9.6-9.6zm-1.2 4.8v9.6h2.4V7.2h-2.4zm-3.6 2.4v4.8h2.4V9.6H7.2zm7.2 0v4.8h2.4V9.6h-2.4z")
	span Buy Me a Coffee
</template>

<style scoped lang="sass">
.donation-button
	@apply no-underline
</style>

<script setup lang="ts">

import BreadCrumb from './BreadCrumb.vue';

const breadcrumb = 'working';

</script>
<template lang="pug">
nav(class="fixed z-30 w-full border-b border-(--LTheme4) dark:border-(--Theme4) top-14 left-0 h-14 main-padding-x flex flex-row items-center justify-between bg-(--LTheme2) dark:bg-(--Theme2)")
	bread-crumb(v-if="false")
	//- Pages
	div(class="links flex flex-row gap-x-3 mx-auto text-sm items-center justify-center *:p-1 *:text-gray-500")
		RouterLink(to="/") Home
		RouterLink(to="/calculator") Lye-Calc
</template>
<style scoped lang="sass">
@reference "tailwindcss"
.router-link-active
	color: var(--dark-fav-color)
	border-bottom: 2px solid var(--dark-fav-color)

.dark .router-link-active
	color: var(--light-fav-color)
	border-bottom: 2px solid var(--light-fav-color)


// .router-link-exact-active
	// @apply text-#{$fav-color} dark:text-(--#{$dark-fav-color})
</style>

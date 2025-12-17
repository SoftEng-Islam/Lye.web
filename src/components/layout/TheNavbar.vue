<script setup lang="ts">

import BreadCrumb from './BreadCrumb.vue';

const breadcrumb = 'working';

</script>
<template lang="pug">
nav(class="fixed z-30 w-full border-b border-(--LTheme4) dark:border-(--Theme4) top-(--nav-top) left-0 h-(--nav-height) main-padding-x flex flex-row items-center justify-between bg-(--LTheme2) dark:bg-(--Theme2)")
	bread-crumb(v-if="false")
	//- Pages
	div(class="links flex flex-row gap-x-3 mx-auto text-sm items-center justify-center *:p-1 *:text-black dark:*:text-white")
		RouterLink(to="/") Home
		RouterLink(to="/calculator") Lye-Calc
</template>
<style scoped lang="sass">
@reference "tailwindcss"
.router-link-active
	font-weight: bold
	color: var(--dark-fav-color)
	border-bottom: 2px solid var(--dark-fav-color)

.dark .router-link-active
	color: var(--light-fav-color)
	border-bottom: 2px solid var(--light-fav-color)


// .router-link-exact-active
	// @apply text-#{$fav-color} dark:text-(--#{$dark-fav-color})
</style>

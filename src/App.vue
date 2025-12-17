<script setup lang="ts">
import ThePreloader from "@/components/layout/ThePreloader.vue";
import TheHeader from "@/components/layout/header/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import TheNavbar from "@/components/layout/TheNavbar.vue";

// Custom Composables
// import { useRoundedSelection } from '@/composables/useRoundedSelection'
// useRoundedSelection()


</script>
<template lang="pug">
the-preloader(:enablePreloader="false")
the-header
the-navbar
div(class="relative content top-(--router-view-top)")
	router-view(v-slot="{Component, route}")
		transition(:enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass" mode="out-in")
			component(:is="Component")
the-footer
</template>
<style lang="sass" module>
.fade-enter-from,
.fade-leave-to
	opacity: 0

.fade-enter-active,
.fade-leave-active
	transition: opacity 0.5s ease-out
</style>

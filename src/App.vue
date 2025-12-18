<script setup lang="ts">
import { RouterView } from 'vue-router';
import ThePreloader from "@/modules/layout/components/ThePreloader.vue";
import TheHeader from "@/modules/layout/components/header/TheHeader.vue";
import TheFooter from "@/modules/layout/components/TheFooter.vue";
import TheProgress from "@/modules/layout/components/TheProgress.vue";

// Custom Composables
// import { useRoundedSelection } from '@/core/composables/useRoundedSelection'
// useRoundedSelection()


</script>
<template lang="pug">
teleport(to="body")
	the-progress

the-preloader(:enablePreloader="true")
the-header
div(class="content pt-(--router-view-top) min-h-[calc(100vh-var(--footer-height))]")
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

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import AppPreloader from "./components/AppPreloader.vue";
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";

// import { useMouse, useCounter } from '@vueuse/core';
// const { x, y } = useMouse();
// watch([x, y], () => {
// 	console.log(`Mouse position: x=${x.value}, y=${y.value}`);
// });

const EnablePreloader = ref(false);
const isLoading = ref(true);
onMounted(() => {
	// Simulate loading process (replace with actual async call)
	// But What about the SEO?
	if (EnablePreloader.value) {
		setTimeout(() => {
			isLoading.value = false;
		}, 4500);
	}
});

</script>
<template lang="pug">
<app-preloader v-if="EnablePreloader" :isLoading="isLoading" />
<app-header/>
router-view
<app-footer/>
</template>

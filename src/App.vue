<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

import AppHeader from "./components/AppHeader.vue";
import OilsList from "./components/OilsList.vue";
import OilProperties from "./components/OilProperties.vue";
import AddedOils from "./components/AddedOils.vue";
import TotalRecipe from "./components/TotalRecipe.vue";
import SoapProperties from "./components/SoapProperties.vue";
import RecipeOptions from "./components/RecipeOptions.vue";
import AppPreloader from "./components/AppPreloader.vue";
import AppFooter from "./components/AppFooter.vue";
import { useMouse, useCounter } from '@vueuse/core';

const { x, y } = useMouse();
const isLoading = ref(true);

watch([x, y], () => {
	console.log(`Mouse position: x=${x.value}, y=${y.value}`);
});

onMounted(() => {
	// Simulate loading process (replace with actual async call)
	// But What about the SEO?
	setTimeout(() => {
		isLoading.value = false;
	}, 4500);
});

</script>
<template lang="pug">
<AppPreloader :isLoading="isLoading" />
<app-header/>
div(class="pb-6 w-full h-full flex flex-wrap items-start bg-(--LTheme3) dark:bg-(--Theme3)")
	<RecipeOptions/>
	PerfectScrollbar(class="h-[90%] w-full flex items-center justify-center")
		div(class="bg-(--LTheme3) dark:bg-(--Theme3) px-4 h-full w-full flex flex-row gap-4 flex-wrap justify-center items-stretch [&_.lyeWidget]:w-72 [&_.lyeWidget]:p-2 [&_.lyeWidget]:rounded-lg [&_.lyeWidget]:bg-(--LTheme2) dark:[&_.lyeWidget]:bg-(--Theme2)")
			<OilsList/>
			<OilProperties/>
			<AddedOils/>
			<TotalRecipe/>
			<SoapProperties/>
<AppFooter/>
</template>

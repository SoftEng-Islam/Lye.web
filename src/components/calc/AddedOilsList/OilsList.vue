<script setup lang="ts">
import { watch, ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useOilStore } from "@/store/index";
import type { Oil } from '@/store/index';  // <-- type-only import

import OilItem from "./OilItem.vue";

const OilStore = storeToRefs(useOilStore());
const { AddedOils } = storeToRefs(useOilStore());
const weightOils = OilStore.RecipeTotal.value.weightOils;

const RemoveThisOil = (val: Oil): void => {
	useOilStore().RemoveOils(val);
};

// watch(weightOils, () => {
// 	if (weightOils > 1000) {
// 		console.warn(`The watch is running for Gram to k.g.`);
// 		console.log(OilStore.RecipeTotal.value.weightOils / 1000); // Gram to k.g
// 	} else {
// 		console.log(`watch Print: ${weightOils}`);
// 	}
// });

const EmptyAddedOilsList = computed(() => AddedOils.value.length === 0 || AddedOils.value.length === null ? true : false);

</script>
<template lang="pug">
//- The Added Oils
div(class="lyeWidget hover:shadow-2xl dark:shadow-none border-green-800 dark:border-green-500")
	div(class="lye-head from-green-400 dark:from-green-600")
		span(class="lye-label") Added Oils.
		<svg v-tippy="{ content: 'Water is calculated as a percentage of total oils.' }" class="w-6 flex-none fill-green-400 dark:fill-green-600 dark:stroke-green-300 stroke-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg>
	//- List of added oils
	div(class="bg-(--LTheme3) dark:bg-(--Theme3) mt-4 rounded-lg h-full overflow-hidden flex flex-col gap-3")
		PerfectScrollbar(class="h-full w-full pb-4 overflow-hidden")
			transition-group(name="list" tag="ul" class="w-full *:my-4 px-4")
				oil-item(v-for="(oil, index) of AddedOils" key="index" :oil="oil")
				div(v-if="EmptyAddedOilsList" class="text-red-500 p-2 bg-(--LTheme2) dark:bg-(--Theme2) rounded-md") Please add oil from the #[span(class="font-bold italic text-purple-500") "All Oils"] list To Start!
	//- weight of all oils
	div(class="flex items-center overflow-hidden pt-3 pb-2 px-4")
		span(class="text-sm text-black dark:text-white ") Oils Weight
		span(class="text-green-500 ml-auto bg-(--LTheme4) dark:bg-(--Theme4) rounded-full px-2 border border-(--LTheme3) dark:border-(--Theme3)") {{ OilStore.RecipeTotal.value.weightOils }} #[span(class="text-black dark:text-white ") Gram]
</template>

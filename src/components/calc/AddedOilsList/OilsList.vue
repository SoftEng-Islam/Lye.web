<script setup lang="ts">
import { watch, ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useOilStore } from "@/store/index";
import OilItem from "./OilItem.vue";
import type { Oil } from '@/store/index';  // <-- type-only import
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

const EmptyAddedOilsList = computed(() => {
	if (AddedOils.value.length === 0 || AddedOils.value.length === null) {
		return true;
	} else {
		return false;
	}
});

</script>
<template lang="pug">
//- The Added Oils
div(class="lyeWidget hover:shadow-2xl dark:shadow-none border-green-800 dark:border-green-500")
	div(class="lye-head from-green-400 dark:from-green-600")
		span(class="lye-label") Added Oils.
		button(class="lye-help bg-green-400 dark:bg-green-600" v-tippy="{ content: 'Empty Content' }") !

	//- List of added oils
	div(class="bg-(--LTheme3) dark:bg-(--Theme3) mt-4 rounded-lg h-full overflow-hidden flex flex-col gap-3")
		PerfectScrollbar(class="h-full w-full pb-4 overflow-hidden")
			transition-group(name="list" tag="ul" class="w-full *:my-4 px-4")
				oil-item(v-for="oil of AddedOils" :oil="oil")
				div(v-if="EmptyAddedOilsList" class="text-red-500 p-2 bg-(--LTheme2) dark:bg-(--Theme2) rounded-md") Please add oil from the #[span(class="font-bold italic text-purple-500") "All Oils"] list To Start!
	//- weight of all oils
	div(class="flex items-center overflow-hidden pt-3 pb-2 px-4")
		span(class="text-sm text-black dark:text-white ") Oils Weight
		span(class="text-green-500 ml-auto bg-(--LTheme4) dark:bg-(--Theme4) rounded-full px-2 border border-(--LTheme3) dark:border-(--Theme3)") {{ OilStore.RecipeTotal.value.weightOils }} #[span(class="text-black dark:text-white ") Gram]
</template>

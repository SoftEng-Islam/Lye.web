<script setup lang="ts">
import { watch, ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useOilStore } from "@/modules/calculator/store/calculatorStore";
import type { Oil } from '@/modules/calculator/store/calculatorStore';

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
div(class="lyeWidget group/added")
	div(class="lye-head bg-linear-to-br from-emerald-400 to-green-600 shadow-emerald-500/20")
		span(class="lye-label") Added Oils
		button.lye-help(v-tippy="{ content: 'Manage the oils in your recipe.' }") ?

	//- List of added oils
	div(class="w-full h-80 flex-grow overflow-hidden rounded-2xl bg-black/5 dark:bg-white/5 border border-white/5 mt-2")
		PerfectScrollbar(class="h-full w-full")
			transition-group(name="list" tag="ul" class="p-2 space-y-2")
				oil-item(v-for="(oil, index) of AddedOils" :key="oil.Name" :oil="oil")

				div(v-if="EmptyAddedOilsList" class="flex flex-col items-center justify-center h-48 text-center px-4")
					<svg class="w-12 h-12 text-zinc-500/30 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
					p(class="text-xs font-bold text-zinc-500 uppercase tracking-widest") No oils added yet
					p(class="text-[10px] text-zinc-400 mt-1") Double click an oil from the list to start!

	//- weight of all oils
	div(class="mt-auto pt-4 flex items-center justify-between px-2 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 p-3")
		div(class="flex flex-col")
			span(class="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-tighter") Total Oils Weight
			span(class="text-xs text-zinc-500") Sum of all selected oils
		div(class="flex flex-col items-end")
			span(class="text-lg font-black text-emerald-600 dark:text-emerald-400") {{ OilStore.RecipeTotal.value.weightOils }}
			span(class="text-[10px] font-bold text-emerald-500/50 uppercase") Grams
</template>

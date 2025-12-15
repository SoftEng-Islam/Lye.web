<script setup lang="ts">
import { computed } from 'vue';
import { useOilStore } from "@/store/index";
const OilStore = useOilStore();

// Reactive formatted water amount
const AmountOfWater = computed(() =>
	Number(OilStore.RecipeTotal.weightWater.toFixed(1))
);

// Reactive formatted lye amount
const AmountOfLye = computed(() =>
	Number(OilStore.RecipeTotal.weightLye.toFixed(1))
);

// Reactive formatted oils amount
const AmountOfOils = computed(() =>
	Number(OilStore.RecipeTotal.weightOils.toFixed(1))
);

// Reactive formatted fragrance amount
const AmountOfFragrance = computed(() =>
	Number(OilStore.RecipeTotal.FragranceWeight.toFixed(1))
);

// Reactive formatted total amount
const TotalAmount = computed(() =>
	Number((
		AmountOfWater.value +
		AmountOfLye.value +
		AmountOfOils.value +
		AmountOfFragrance.value
	).toFixed(1))
);

</script>
<template lang="pug">
div(class="lyeWidget hover:shadow-2xl dark:shadow-none border-blue-800 dark:border-blue-500")
	div(class="lye-head from-blue-400 dark:from-blue-600")
		span(class="lye-label") Total Recipe.
		<svg v-tippy="{ content: 'Water is calculated as a percentage of total oils.' }" class="w-6 flex-none fill-blue-400 dark:fill-blue-600 dark:stroke-blue-300 stroke-blue-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg>
	ul(class="bg-(--LTheme3) dark:bg-(--Theme3) mt-4 p-2 pb-0 rounded-lg h-full")
		li(class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-(--LTheme2) dark:border-t-(--Theme2)")
			span(class="text-sm text-black dark:text-white ") Water
			span(class="text-blue-500 ml-auto duration-200") {{ AmountOfWater || 0}} #[span(class="text-black dark:text-white") Gram]
		li(class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-(--LTheme2) dark:border-t-(--Theme2)")
			span(class="text-sm text-black dark:text-white ") Lye - {{ OilStore.getTypeOfLye }}
			span(class="text-blue-500 ml-auto duration-200") {{ AmountOfLye || 0 }} #[span(class="text-black dark:text-white") Gram]
		li(class="flex overflow-hidden py-2 border-t border-t-(--LTheme2) dark:border-t-(--Theme2)")
			span(class="text-sm text-black dark:text-white ") Oils
			span(class="text-blue-500 ml-auto") {{ AmountOfOils || 0}} #[span(class="text-black dark:text-white") Gram]
		li(class="flex overflow-hidden py-2 border-t border-t-(--LTheme2) dark:border-t-(--Theme2)")
			span(class="text-sm text-black dark:text-white") Fragrance
			span(class="text-blue-500 ml-auto") {{ AmountOfFragrance || 0 }} #[span(class="text-black dark:text-white") Gram]
	div(class="flex items-center overflow-hidden pt-3 pb-2 px-4")
		span(class="text-sm text-black dark:text-white") Total Weight
		span(class="text-blue-500 ml-auto bg-(--LTheme4) dark:bg-(--Theme4) rounded-full px-2 border border-(--LTheme3) dark:border-(--Theme3)") {{ TotalAmount || 0 }} #[span(class="text-black dark:text-white ") Gram]
</template>

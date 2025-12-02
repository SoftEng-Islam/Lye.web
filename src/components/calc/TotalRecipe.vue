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
		button(class="lye-help bg-blue-400 dark:bg-blue-600" v-tippy="{ content: 'Empty Content' }") !

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

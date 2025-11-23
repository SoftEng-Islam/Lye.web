<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useOilStore } from "@/store/index";
const OilStore = storeToRefs(useOilStore());

// Reactive formatted water amount
const AmountOfWater = computed(() =>
	Number(OilStore.RecipeTotal.value.weightWater.toFixed(1))
);

// Reactive formatted lye amount
const AmountOfLye = computed(() =>
	Number(OilStore.RecipeTotal.value.weightLye.toFixed(1))
);

// Reactive formatted oils amount
const AmountOfOils = computed(() =>
	Number(OilStore.RecipeTotal.value.weightOils.toFixed(1))
);

// Reactive formatted fragrance amount
const AmountOfFragrance = computed(() =>
	Number(OilStore.RecipeTotal.value.FragranceWeight.toFixed(1))
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
div(class="lyeWidget flex flex-col min-h-[200px] border border-transparent hover:border-blue-500")
	div(class="Head bg-linear-to-r from-blue-600 to-gray-950/40  p-2 rounded-md")
		span(class="text-black dark:text-white font-bold text-shadow-2xs text-shadow-blue-950") Recipe Total.
	ul(class="bg-(--LTheme3) dark:bg-(--Theme3) mt-4 p-2 pb-0 rounded-md h-full")
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
	div(class="flex items-center overflow-hidden pt-4")
		span(class="text-sm text-black dark:text-white") Recipe
		span(class="text-blue-500 ml-auto bg-(--LTheme4) dark:bg-(--Theme4) rounded-full px-2 border border-(--LTheme3) dark:border-(--Theme3)") {{ TotalAmount || 0 }} #[span(class="text-black dark:text-white ") Gram]
</template>

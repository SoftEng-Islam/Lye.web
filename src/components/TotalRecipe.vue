<script lang="ts">
import { storeToRefs } from 'pinia';
import { useOilStore } from "../store/index";
export default {
	setup() {
		const OilStore = storeToRefs(useOilStore());
		return {
			OilStore
		};
	}
};
</script>
<template lang="pug">
div(class="lyeWidget flex flex-col min-h-[200px] border border-transparent hover:border-blue-500")
	div(class="Head bg-linear-to-r from-blue-500 to-gray-950/40  p-2 rounded-md")
		span(class="text-black dark:text-white font-bold") Recipe Total.
	ul(class="bg-(--LTheme3) dark:bg-(--Theme3) mt-4 p-2 pb-0 rounded-md h-full")
		li(class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-(--LTheme2) dark:border-t-(--Theme2)")
			span(class="text-sm text-white") Water
			span(class="text-blue-500 ml-auto duration-200") {{ OilStore.RecipeTotal.value.weightWater || 0}} #[span(class="text-gray-300") Gram]
		li(class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-(--LTheme2) dark:border-t-(--Theme2)")
			span(class="text-sm text-white") Lye - {{OilStore.getTypeOfLye}}
			span(class="text-blue-500 ml-auto duration-200") {{parseInt(OilStore.RecipeTotal.value.weightLye.toFixed(0)) || 0}} #[span(class="text-gray-300") Gram]
		li(class="flex overflow-hidden py-2 border-t border-t-(--LTheme2) dark:border-t-(--Theme2)")
			span(class="text-sm text-white") Oils
			span(class="text-blue-500 ml-auto") {{OilStore.RecipeTotal.value.weightOils || 0}} #[span(class="text-gray-300") Gram]
		li(class="flex overflow-hidden py-2 border-t border-t-(--LTheme2) dark:border-t-(--Theme2)")
			span(class="text-sm text-white") Fragrance
			span(class="text-blue-500 ml-auto") {{OilStore.RecipeTotal.value.FragranceWeight}} #[span(class="text-gray-300") Gram]
	div(class="flex items-center overflow-hidden pt-2 h-28")
		span(class="text-sm text-white") Recipe
		span(class="text-blue-500 ml-auto bg-(--LTheme4) dark:bg-(--Theme4) rounded-full px-2 border border-(--LTheme3) dark:border-(--Theme3)") {{ parseInt((OilStore.RecipeTotal.value.weightWater + OilStore.RecipeTotal.value.weightLye + OilStore.RecipeTotal.value.weightOils + OilStore.headerOptions.value.fragrance.value).toFixed(0)) || 0 }} #[span(class="text-gray-300") Gram]
</template>

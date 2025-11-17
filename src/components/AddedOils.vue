<script lang="ts">
import { storeToRefs } from "pinia";
import { useOilStore } from "../store/index";
import AddedOil from "./AddedOil.vue";
export default {
	components: {
		AddedOil
	},
	setup() {
		const OilStore = storeToRefs(useOilStore());
		const { AddedOils } = storeToRefs(useOilStore());
		const RemoveThisOil = (val: Object): void => {
			useOilStore().RemoveOils(val);
		};
		if (OilStore.RecipeTotal.value.weightOils > 1000) {
			console.log(OilStore.RecipeTotal.value.weightOils / 1000); // Gram to k.g
		}
		return {
			OilStore,
			AddedOils,
			RemoveThisOil
		};
	}
};
</script>
<template lang="pug">
//- The Added Oils
div(class="lyeWidget flex flex-col min-h-[280px] border border-transparent hover:border-green-500")
	div(class="Head bg-linear-to-r from-green-500 to-gray-950/40 p-2 rounded-md")
		span(class="text-black dark:text-white font-bold") Added Oils.
	//- List of added oils
	ul(class="bg-(--LTheme3) dark:bg-(--Theme3) mt-4 p-2 rounded-md h-full overflow-hidden")
		added-oil(v-for="oil of AddedOils" :oil="oil")
	//- weight of all oils
	div(class="flex items-center overflow-hidden pt-2 h-28")
		span(class="text-sm text-white") Oils
		span(class="text-green-500 ml-auto bg-(--LTheme4) dark:bg-(--Theme4) rounded-full px-2 border border-(--LTheme3) dark:border-(--Theme3)") {{ OilStore.RecipeTotal.value.weightOils }} #[span(class="text-gray-300") Gram]
</template>

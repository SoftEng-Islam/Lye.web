<script setup lang="ts">
import { ref, computed } from 'vue';
import { useOilStore } from "../store/index";

const OilStore = useOilStore();


let STypeLye = ref("NaOH"); // Default => NaOH

const SetTypeOfLye = (): void => {
	OilStore.setTypeOfLye(STypeLye.value);
};

// The Water Options
const TheWaterOption = ref(0);

const TheWaterSelect: () => void = (): void => {
	OilStore.headerOptions.water.selcted = TheWaterOption.value;
};


// Set Water
const TheWater = computed({
	get() {
		if (TheWaterOption.value === 0) {
			return OilStore.headerOptions.water.waterAsOfOils;
		} else if (TheWaterOption.value === 1) {
			return OilStore.headerOptions.water.lyeConcentration;
		} else {
			return OilStore.headerOptions.water.WaterToLyeRatio;
		}
	},

	set(value) {
		OilStore.WaterAsofOils(TheWaterOption.value, value);
	}
});

// Set Super Fat
const SetSuperFat = computed({
	get() {
		return OilStore.headerOptions.superFat || 0;
	},
	set(value) {
		OilStore.ChangeSuperFat(value || 0);
	}
});

// Set Fragrance
const SetFragrance = computed({
	get() {
		return OilStore.headerOptions.fragrance.value || 0;
	},
	set(value) {
		OilStore.ChangeFragrance(value || 0);
	}
});
</script>
<template lang="pug">
ul(class="recipeOptions overflow-hidden w-full mb-5 p-2 bg-(--LTheme2) dark:bg-(--Theme2) *:flex *:p-2 *:px-4 *:rounded-md *:bg-(--LTheme4) dark:*:bg-(--Theme4) *:overflow-hidden flex flex-col items-stretch justify-center gap-2 *:w-full sm:flex-col *:sm:w-1/2 md:flex-row md:flex-wrap md:items-center*:md:w-1/2")
	//- Type Of Lye
	li(class="flex-wrap items-center justify-center gap-2")
		span(class="text-(--dark-fav-color) dark:text-(--light-fav-color)") Type of #[span(class="font-bold text-(--dark-fav-color) dark:text-(--light-fav-color)") Lye]:
		select(class="p-2 px-4 outline-none rounded-md border bg-(--LTheme3) dark:bg-(--Theme3) border-gray-300 dark:border-gray-600 text-green-500" id="Units" v-model="STypeLye" @change="SetTypeOfLye()")
			option(value="NaOH") NaOH
			option(value="KOH") KOH
	//- Weight of Oils
	li(class="flex-wrap items-center justify-center gap-2")
		span(class="text-(--dark-fav-color) dark:text-(--light-fav-color)") Weight of #[span(class="font-bold text-(--dark-fav-color) dark:text-(--light-fav-color)") Oils]:
		input(type="number" readonly class="cursor-not-allowed placeholder:text-white text-black bg-(--LTheme3) dark:bg-(--Theme3) dark:text-white pl-2 py-1 rounded-md scale-90" v-model="OilStore.RecipeTotal.weightOils")
		select(class="p-2 px-4 outline-none rounded-md border bg-(--LTheme3) dark:bg-(--Theme3) border-gray-300 dark:border-gray-600 text-green-500")
			option(value="Pounds") Pounds
			option(value="Ounces") Ounces
			option(value="Grams" selected) Grams
			option(value="Kilo") Kilo
			option(value="Tons") Tons
	//- Water
	li(class="flex-wrap items-center justify-center gap-2")
		span(class="text-(--dark-fav-color) dark:text-(--light-fav-color) mr-3") Water#[span(class="font-bold text-(--dark-fav-color) dark:text-(--light-fav-color)") :]
		input(class="pl-2 py-1 rounded-md bg-(--LTheme3) dark:bg-(--Theme3) ml-auto placeholder:text-white text-black dark:text-white " type="text" v-model="TheWater")
		select(class="p-2 px-4 outline-none rounded-md border bg-(--LTheme3) dark:bg-(--Theme3) border-gray-300 dark:border-gray-600 text-green-500" v-model="TheWaterOption" @change="TheWaterSelect")
			option(value="0") Water as % of Oils
			option(value="1") Lye Concentration
			option(value="2") Water : Lye Ratio
	//- The Lest Section
	li(class="flex-col items-center justify-center gap-2")
		//- Super Fat
		div(class="w-full flex flex-wrap sm:flex-nowrap items-center justify-center")
			span(class="text-orange-400 font-bold") Super Fat
			//- v-model="OilStore.headerOptions.superFat"
			div(class="w-full px-2 flex flex-row gap-2 items-center justify-center overflow-hidden bg-(--LTheme3) dark:bg-(--Theme3) rounded-md")
				input(class="w-full pl-1 py-1 placeholder:text-white text-black dark:text-white" type="number" v-model="SetSuperFat")
				span(class="font-bold text-orange-400") %
		//- Fragrance
		div(class="w-full flex flex-wrap sm:flex-nowrap items-center justify-center")
			span(class="text-fuchsia-400 font-bold") Fragrance
			div(class="w-full px-2 flex flex-row gap-2 items-center justify-center overflow-hidden  rounded-md bg-(--LTheme3) dark:bg-(--Theme3)")
				input(class="w-full pl-1 py-1 placeholder:text-white text-black dark:text-white" type="number" v-model="SetFragrance")
				span(class="font-bold text-fuchsia-400") {{OilStore.headerOptions.fragrance.frWeight}}
</template>

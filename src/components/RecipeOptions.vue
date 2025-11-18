<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
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
ul(class="w-full mb-5 p-2 flex flex-row flex-wrap md:flex-nowrap items-stretch justify-center gap-2 bg-(--LTheme2) dark:bg-(--Theme2) *:flex *:p-2 *:px-4 *:rounded-md *:bg-(--LTheme4) dark:*:bg-(--Theme4)")
	//- Type Of Lye
	li(class="w-full items-center justify-start")
		span(class="text-(--dark-fav-color) dark:text-(--light-fav-color)") Type of #[span(class="font-bold text-(--dark-fav-color) dark:text-(--light-fav-color)") Lye]:
		select(class="ml-auto p-2 px-4 outline-none rounded-md border bg-(--LTheme3) dark:bg-(--Theme3) border-gray-300 dark:border-gray-600 text-green-500" id="Units" v-model="STypeLye" @change="SetTypeOfLye()")
			option(value="NaOH") NaOH
			option(value="KOH") KOH
	//- Weight of Oils
	li(class="w-full items-center")
		span(class="text-(--dark-fav-color) dark:text-(--light-fav-color)") Weight of #[span(class="font-bold text-(--dark-fav-color) dark:text-(--light-fav-color)") Oils]:
		input(type="number" readonly class="cursor-not-allowed w-1/4 ml-auto placeholder:text-white text-black bg-(--LTheme3) dark:bg-(--Theme3) dark:text-white pl-2 py-1 rounded-md scale-90" v-model="OilStore.RecipeTotal.weightOils")
		select(class="ml-auto p-2 px-4 outline-none rounded-md border bg-(--LTheme3) dark:bg-(--Theme3) border-gray-300 dark:border-gray-600 text-green-500")
			option(value="Pounds") Pounds
			option(value="Ounces") Ounces
			option(value="Grams" selected) Grams
			option(value="Kilo") Kilo
			option(value="Tons") Tons
	//- Water
	li(class="w-full items-center")
		span(class="text-(--dark-fav-color) dark:text-(--light-fav-color) mr-3") Water#[span(class="font-bold text-(--dark-fav-color) dark:text-(--light-fav-color)") :]
		input(class="w-12 pl-2 py-1 rounded-md bg-(--LTheme3) dark:bg-(--Theme3) ml-auto placeholder:text-white text-black dark:text-white " type="text" v-model="TheWater")
		select(class="ml-auto p-2 px-4 outline-none rounded-md border bg-(--LTheme3) dark:bg-(--Theme3) border-gray-300 dark:border-gray-600 text-green-500" v-model="TheWaterOption" @change="TheWaterSelect")
			option(value="0") Water as % of Oils
			option(value="1") Lye Concentration
			option(value="2") Water : Lye Ratio
	//- The Lest Section
	li(class="flex-col items-start justify-start gap-2 w-full")
		//- Super Fat
		div(class="w-full flex flex-row items-center justify-start")
			span(class="text-orange-400 font-bold") Super Fat
			//- v-model="OilStore.headerOptions.superFat"
			input(class="pl-4 ml-auto bg-(--LTheme3) dark:bg-(--Theme3) placeholder:text-white text-black dark:text-white py-1 rounded-md scale-90" type="number" v-model="SetSuperFat")
			span(class="ml-4 w-10 text-orange-400") %
		//- Fragrance
		div(class="w-full flex flex-row items-center justify-start")
			span(class="text-fuchsia-400 font-bold") Fragrance
			input(class="pl-4 ml-auto bg-(--LTheme3) dark:bg-(--Theme3) placeholder:text-white text-black dark:text-white  py-1 rounded-md scale-90" type="number" v-model="SetFragrance")
			span(class="ml-4 w-10 text-fuchsia-400") {{OilStore.headerOptions.fragrance.frWeight}}
</template>

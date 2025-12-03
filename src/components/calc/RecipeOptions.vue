<script setup lang="ts">
import { ref, computed } from 'vue';
import { useOilStore } from "@/store/index";

const OilStore = useOilStore();

const STypeLye = ref("NaOH"); // Default => NaOH

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
		OilStore.WaterAsOfOils(TheWaterOption.value, value);
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
ul(class="recipe-options")
	//- Type Of Lye
	li(class="widget md:flex-col bg-(--LTheme4) dark:bg-(--Theme4)")
		div(class="w-full flex items-center py-2")
			button(class="lye-help bg-blue-400 dark:bg-blue-600 text-black dark:text-white" v-tippy="{ content: 'Empty Content' }") !
			span(class="text-(--dark-fav-color) dark:text-(--light-fav-color)") Type of #[span(class="font-bold text-(--dark-fav-color) dark:text-(--light-fav-color)") Lye]:
		select(class="w-full p-2 px-4 border-r-4 border-(--LTheme3) dark:border-(--Theme3) outline-none rounded-md bg-(--LTheme3) dark:bg-(--Theme3) text-green-500" id="Units" v-model="STypeLye" @change="SetTypeOfLye()")
			option(value="NaOH") NaOH
			option(value="KOH") KOH
	//- Weight of Oils
	li(class="widget md:flex-col bg-(--LTheme4) dark:bg-(--Theme4)")
		div(class="w-full flex items-center py-2")
			button(class="lye-help bg-blue-400 dark:bg-blue-600 text-black dark:text-white" v-tippy="{ content: 'Empty Content' }") !
			span(class="text-(--dark-fav-color) dark:text-(--light-fav-color)") Weight of #[span(class="font-bold text-(--dark-fav-color) dark:text-(--light-fav-color)") Oils]:
		input(type="number" name="weightOils" id="weightOils" readonly class="w-full pl-2 py-1 rounded-md cursor-not-allowed placeholder:text-white text-black bg-(--LTheme3) dark:bg-(--Theme3) dark:text-white" v-model="OilStore.RecipeTotal.weightOils")
		select(name="weightOilsUnit" id="weightOilsUnit" class="w-full p-2 px-4 outline-none rounded-md bg-(--LTheme3) dark:bg-(--Theme3) border-r-4 border-(--LTheme3) dark:border-(--Theme3) text-green-500")
			option(value="Pounds") Pounds
			option(value="Ounces") Ounces
			option(value="Grams" selected) Grams
			option(value="Kilo") Kilo
			option(value="Tons") Tons
	//- Water
	li(class="widget md:flex-col bg-(--LTheme4) dark:bg-(--Theme4)")
		div(class="w-full flex items-center py-2")
			button(class="lye-help bg-blue-400 dark:bg-blue-600 text-black dark:text-white" v-tippy="{ content: 'Empty Content' }") !
			span(class="text-(--dark-fav-color) dark:text-(--light-fav-color)") Water#[span(class="font-bold text-(--dark-fav-color) dark:text-(--light-fav-color)") :]
		input(class="w-full pl-2 py-1 rounded-md bg-(--LTheme3) dark:bg-(--Theme3) placeholder:text-white text-black dark:text-white" name="water" id="water" type="text" v-model="TheWater")
		select(name="waterOption" id="waterOption" class="w-full p-2 px-3 outline-none overflow-hidden rounded-md bg-(--LTheme3) dark:bg-(--Theme3) border-r-4 border-(--LTheme3) dark:border-(--Theme3) text-green-500" v-model="TheWaterOption" @change="TheWaterSelect")
			option(value="0") Water as % of Oils
			option(value="1") Lye Concentration
			option(value="2") Water : Lye Ratio
	//- The Lest Section
	li(class="widget flex-col bg-(--LTheme4) dark:bg-(--Theme4)")
		//- Super Fat
		div(class="w-full flex flex-nowrap md:flex-wrap gap-2 items-center justify-between")
			div(class="w-full flex items-center py-2")
				button(class="lye-help bg-orange-400 dark:bg-orange-600 text-black dark:text-white" v-tippy="{ content: 'Empty Content' }") !
				span(class="text-orange-400 font-bold") Super Fat
			//- v-model="OilStore.headerOptions.superFat"
			div(class="w-full px-2 flex flex-row gap-2 items-center justify-center overflow-hidden bg-(--LTheme3) dark:bg-(--Theme3) rounded-md")
				input(class="w-full pl-1 py-1 placeholder:text-white text-black dark:text-white" name="superFat" id="superFat" type="number" v-model="SetSuperFat")
				span(class="font-bold text-orange-400") %
		//- Fragrance
		div(class="w-full flex flex-nowrap md:flex-wrap gap-2 items-center justify-between")
			div(class="w-full flex items-center py-2")
				button(class="lye-help bg-fuchsia-400 dark:bg-fuchsia-600 text-black dark:text-white" v-tippy="{ content: 'Empty Content' }") !
				span(class="text-fuchsia-400 font-bold") Fragrance
			div(class="w-full px-2 flex flex-row gap-2 items-center justify-center overflow-hidden bg-(--LTheme3) dark:bg-(--Theme3) rounded-md")
				input(class="w-full pl-1 py-1 placeholder:text-white text-black dark:text-white" name="fragrance" id="fragrance" type="number" v-model="SetFragrance")
				span(class="font-bold text-fuchsia-400") {{OilStore.headerOptions.fragrance.frWeight}}
</template>
<style scoped lang="sass">
@reference "tailwindcss"
ul.recipe-options
	@apply w-full mb-6 pt-8 pb-4 overflow-hidden flex flex-col md:flex-row items-stretch justify-between gap-3
	li.widget
		@apply flex flex-wrap lg:flex-nowrap items-center justify-between gap-2 p-4 shadow rounded-2xl overflow-hidden sm:grow sm:basis-1/4
		.lye-help
			@apply w-5 h-5 rounded-full flex items-center justify-center text-sm mr-2 font-bold
</style>

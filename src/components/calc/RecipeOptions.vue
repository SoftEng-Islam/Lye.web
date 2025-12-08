<script setup lang="ts">
import { ref, computed } from 'vue';
import { useOilStore } from "@/store/index";
import { convert } from '@/shared/useConvert.ts';

console.log(convert(100, 'kg').kg);

const OilStore = useOilStore();

const STypeLye = ref("NaOH"); // Default => NaOH

const SetTypeOfLye = (): void => {
	OilStore.setTypeOfLye(STypeLye.value);
};



// The Water Options
// const TheWaterOption = ref(0);

// const TheWaterSelect: () => void = (): void => {
// 	OilStore.headerOptions.water.selected = TheWaterOption.value;
// };

// waterPerOils
// - water 20% oils 100g water 20gram
// lyeConcentration
// -
// Water: Lye Ratio

// setWaterLyePercent is a method in Pinia store that will handle the water for us

// waterPerOils (water as percent of oil weight)
const waterPerOils = computed({
	get() {
		return OilStore.headerOptions.water.waterAsOfOils;
	},
	set(value: number) {
		OilStore.setWaterLyePercent(0, value);
	}
});

// lyeConcentration
const lyeCon = computed({
	get(): number {
		return OilStore.headerOptions.water.lyeConcentration;
	},
	set(value: number): void {
		OilStore.setWaterLyePercent(1, value);
	}
});

// Water Ratio
const waterRatio = computed({
	get(): number {
		return OilStore.headerOptions.water.WaterToLyeRatio.water;
	},
	set(value: number): void {
		OilStore.setWaterLyePercent(2, { water: value });
	}
});

// Lye Ratio
const lyeRatio = computed({
	get(): number {
		return OilStore.headerOptions.water.WaterToLyeRatio.lye;
	},
	set(value: number): void {
		OilStore.setWaterLyePercent(2, { lye: value });
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
	li(class="widget md:flex-col bg-(--LTheme4) dark:bg-(--Theme4)" tabindex="2")
		div(class="w-full flex items-center py-2")
			<svg v-tippy="{ content: 'Empty Content' }" class="lye-help stroke-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg>
			span(class="text-(--dark-fav-color) dark:text-(--light-fav-color)") Type of #[span(class="font-bold text-(--dark-fav-color) dark:text-(--light-fav-color)") Lye]:
		select(class="w-full p-2 px-4 border-r-4 border-(--LTheme3) dark:border-(--Theme3) outline-none rounded-md bg-(--LTheme3) dark:bg-(--Theme3) text-green-500" id="Units" v-model="STypeLye" @change="SetTypeOfLye()")
			option(value="NaOH") NaOH
			option(value="KOH") KOH
			option(value="KOH70") KOH 70%
	//- Weight of Oils
	li(class="widget md:flex-col bg-(--LTheme4) dark:bg-(--Theme4)" tabindex="3")
		//- Help
		div(class="w-full flex items-center py-2")
			<svg v-tippy="{ content: 'Here are the weight units used in soap.' }" class="lye-help stroke-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg>
			span(class="text-(--dark-fav-color) dark:text-(--light-fav-color)") Limit the Weight of #[span(class="font-bold text-(--dark-fav-color) dark:text-(--light-fav-color)") Oils]:
		input(type="number" name="weightOils" id="weightOils" readonly class="w-full pl-2 py-1 rounded-md cursor-not-allowed placeholder:text-white text-black bg-(--LTheme3) dark:bg-(--Theme3) dark:text-white" v-model.number.trim="OilStore.RecipeTotal.weightOils")
		select(name="weightOilsUnit" id="weightOilsUnit" class="w-full p-2 px-4 outline-none rounded-md bg-(--LTheme3) dark:bg-(--Theme3) border-r-4 border-(--LTheme3) dark:border-(--Theme3) text-green-500")
			option(value="Pounds") Pounds
			option(value="Ounces") Ounces
			option(value="Grams" selected) Grams
			option(value="Kilo") KG
			option(value="Tons") Tons
	//- Water Section
	li(class="widget md:flex-col bg-(--LTheme4) dark:bg-(--Theme4)" tabindex="4")
		//- Help
		div(v-if="false" class="w-full flex items-center py-2")
			<svg v-tippy="{ content: 'Water is calculated as a percentage of total oils.' }" class="lye-help stroke-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg>
			span(class="text-(--dark-fav-color) dark:text-(--light-fav-color)") Water#[span(class="font-bold text-(--dark-fav-color) dark:text-(--light-fav-color)") :]
		//- [ waterPerOils ] Water is calculated as a percentage of total oils.
		div(class="relative w-full h-12 px-2 hover:border-blue-500 rounded-md flex justify-between items-center gap-2 border border-gray-500  text-black dark:text-white")
			<svg v-tippy="{ content: 'Water is calculated as a percentage of total oils.' }" class="lye-help stroke-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg>
			span(class="absolute left-3 -top-3 rounded-full text-xs h-5 p-2 flex items-center justify-center bg-(--LTheme4) dark:bg-(--Theme4)") Water:Oils
			span(class="text-black dark:text-white") %
			input(class="w-full" type="number" name="" id="" v-model.number.trim="waterPerOils")
		//- [lyeConcentration] Percentage of NaOH (lye) in the total lye solution.
		div(class="relative w-full my-4 h-12 px-2 hover:border-blue-500 rounded-md flex justify-between items-center gap-2 border border-gray-500  text-black dark:text-white")
			<svg v-tippy="{ content: 'Percentage of NaOH (lye) in the total lye solution.' }" class="lye-help stroke-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg>
			span(class="absolute left-3 -top-3 rounded-full text-xs h-5 p-2 flex items-center justify-center bg-(--LTheme4) dark:bg-(--Theme4)") Lye Concentration
			span(class="text-black dark:text-white") %
			input(class="w-full" type="number" name="" id="" v-model.number.trim="lyeCon")
		//- Water: Lye Ratio
		div(class="relative rounded-md flex items-center gap-2 px-2 hover:border-blue-500 h-13 w-full text-black dark:text-white border border-gray-500")
			<svg v-tippy="{ content: 'A direct ratio of water to NaOH weight (e.g., 2:1, 2.5:1, 3:1).' }" class="lye-help stroke-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg>
			span(class="absolute left-3 -top-3 rounded-full text-xs h-5 p-2 flex items-center justify-center bg-(--LTheme4) dark:bg-(--Theme4)") Water:Lye Ratio
			input(class="w-1/2 pl-2 rounded-md bg-(--LTheme3) dark:bg-(--Theme3) placeholder:text-white" name="waterRatio" id="waterRatio" type="number" v-model.number="waterRatio")
			span(class="font-bold") :
			input(class="w-1/2 pl-2 rounded-md bg-(--LTheme3) dark:bg-(--Theme3) placeholder:text-white" name="lyeRatio" id="lyeRatio" type="number" v-model.number="lyeRatio")
	//- The Last Section
	li(class="widget flex-col bg-(--LTheme4) dark:bg-(--Theme4)" tabindex="5")
		//- Super Fat
		div(class="w-full flex flex-nowrap md:flex-wrap gap-2 items-center justify-between")
			div(class="w-full flex items-center py-2")
				<svg v-tippy="{ content: 'Water is calculated as a percentage of total oils.' }" class="lye-help w-8 stroke-orange-400 dark:stroke-orange-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg>
				span(class="text-orange-400 font-bold") Super Fat
			//- v-model="OilStore.headerOptions.superFat"
			div(class="w-full px-2 flex flex-row gap-2 items-center justify-center overflow-hidden bg-(--LTheme3) dark:bg-(--Theme3) rounded-md")
				input(class="w-full pl-1 py-1 placeholder:text-white text-black dark:text-white" name="superFat" id="superFat" type="number" v-model.number="SetSuperFat")
				span(class="font-bold text-orange-400") %
		//- Fragrance
		div(class="w-full flex flex-nowrap md:flex-wrap gap-2 items-center justify-between")
			div(class="w-full flex items-center py-2")
				<svg v-tippy="{ content: 'Fragrance.' }" class="lye-help stroke-fuchsia-400 dark:stroke-fuchsia-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg>
				span(class="text-fuchsia-400 font-bold") Fragrance
			div(class="w-full px-2 flex flex-row gap-2 items-center justify-center overflow-hidden bg-(--LTheme3) dark:bg-(--Theme3) rounded-md")
				input(class="w-full pl-1 py-1 placeholder:text-white text-black dark:text-white" name="fragrance" id="fragrance" type="number" v-model.number="SetFragrance")
				span(class="font-bold text-fuchsia-400") {{OilStore.headerOptions.fragrance.frWeight}}
</template>
<style scoped lang="sass">
@reference "tailwindcss"
ul.recipe-options
	@apply w-full mb-6 pt-8 pb-4 overflow-hidden flex flex-col md:flex-row items-stretch justify-between gap-3
	li.widget
		@apply flex flex-wrap lg:flex-nowrap items-center justify-between gap-2 p-4 shadow rounded-2xl overflow-hidden sm:grow sm:basis-1/4
		.lye-help
			@apply w-6 flex-none mr-2
</style>

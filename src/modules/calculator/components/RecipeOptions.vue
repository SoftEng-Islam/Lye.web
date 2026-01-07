<script setup lang="ts">
import { ref, computed } from 'vue';
import { useOilStore } from "@/modules/calculator/store/calculatorStore";
import { convert } from '@/core/utils/useConvert.ts';
import LyeHelpIcon from './LyeHelpIcon.vue';

// console.log(convert(100, 'kg').kg);

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

// The help Content
const naOH = "<b>Sodium Hydroxide (NaOH)</b><br/><br/>&bull; <b>Used for</b>: solid bar soap (cold process, hot process).<br/> &bull;<b>Physical form</b>: white flakes or beads.<br/>&bull;<b>Purity</b>: usually 95-100%.";
</script>

<template lang="pug">
section(class="RecipeOptions w-full my-8 pb-12")
	div(class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8")

		//- 1. Lye Configuration
		div(class="custom-card group-lye")
			div(class="card-header bg-linear-to-r from-blue-500/20 to-indigo-500/20 text-blue-600 dark:text-blue-400")
				div(class="flex items-center gap-3")
					div(class="p-2 rounded-xl bg-blue-500/10 shadow-inner")
						<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.675.337a6 6 0 01-3.86.517l-2.387-.477a2 2 0 00-1.022.547l-.513.513a2 2 0 01-2.828 0L2 15.414a2 2 0 010-2.828l.513-.513a2 2 0 00.547-1.022l.477-2.387a6 6 0 00-.517-3.86l-.337-.675a6 6 0 00-.517-3.86l.477-2.387a2 2 0 00-.547-1.022l-.513-.513a2 2 0 010-2.828L5.414 2a2 2 0 012.828 0l.513.513a2 2 0 001.022.547l2.387.477a6 6 0 003.86-.517l.675-.337a6 6 0 003.86-.517l2.387.477a2 2 0 001.022-.547l.513-.513a2 2 0 012.828 0L22 8.586a2 2 0 010 2.828l-.513.513a2 2 0 00-.547 1.022l-.477 2.387a6 6 0 00.517 3.86l.337.675a6 6 0 00.517 3.86l-.477 2.387a2 2 0 00.547 1.022l.513.513a2 2 0 010 2.828L18.586 22a2 2 0 01-2.828 0l-.513-.513z" /></svg>
					span(class="text-xs font-black uppercase tracking-widest") Lye Setup
				button.lye-help(v-tippy="{ content: naOH }" class="ml-auto w-6 h-6 rounded-full border border-blue-500/30 flex items-center justify-center text-[10px] font-bold hover:bg-blue-500/20 transition-colors") ?

			div(class="p-6 space-y-3")
				label(v-for="lye in [{id:'NaOH', label:'Sodium Hydroxide (NaOH)'}, {id:'KOH', label:'Potassium Hydroxide (KOH)'}, {id:'KOH70', label:'KOH 70%'}]" :key="lye.id" :for="lye.id" class="option-label group/opt")
					input(class="sr-only" type="radio" :id="lye.id" name="lyeType" :value="lye.id" v-model="STypeLye" @change="SetTypeOfLye")
					div(class="radio-circle border-blue-500/30 group-hover/opt:border-blue-500" :class="{'selected bg-blue-500 border-blue-500 shadow-blue-500/50': STypeLye === lye.id}")
						div(v-if="STypeLye === lye.id" class="w-1.5 h-1.5 rounded-full bg-white animate-scale")
					span(class="text-xs font-bold text-zinc-600 dark:text-zinc-300 transition-colors group-hover/opt:text-zinc-900 dark:group-hover/opt:text-white") {{ lye.label }}

			div(class="px-6 pb-6 pt-2 border-t border-white/5 space-y-2")
				div(class="flex justify-between")
					span(class="text-[10px] font-black text-blue-400 uppercase mt-1") Purity
					span(class="text-sm font-black text-blue-500") {{ OilStore.headerOptions.lyePurity }}%
				input(type="range" min="50" max="100" v-model.number="OilStore.headerOptions.lyePurity" @change="OilStore.calcLye()" class="custom-range accent-blue-500")

		//- 2. Oil Configuration
		div(class="custom-card group-oil")
			div(class="card-header bg-linear-to-r from-emerald-500/20 to-teal-500/20 text-emerald-600 dark:text-emerald-400")
				div(class="flex items-center gap-3")
					div(class="p-2 rounded-xl bg-emerald-500/10 shadow-inner")
						<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
					span(class="text-xs font-black uppercase tracking-widest") Oil Weight
				button.lye-help(v-tippy="{ content: 'Total base oil weight in your recipe.' }" class="ml-auto w-6 h-6 rounded-full border border-emerald-500/30 flex items-center justify-center text-[10px] font-bold hover:bg-emerald-500/20 transition-colors") ?

			div(class="p-6 space-y-4")
				div(class="space-y-1.5")
					label(class="text-[10px] font-black text-zinc-400 uppercase ml-1 tracking-widest") Total Weight
					div(class="relative overflow-hidden rounded-2xl bg-black/5 dark:bg-white/5 border border-white/10 p-4 transition-all focus-within:ring-2 ring-emerald-500/20")
						input(type="number" readonly class="w-full bg-transparent text-2xl font-black text-emerald-600 dark:text-emerald-400 outline-none" v-model.number.trim="OilStore.RecipeTotal.weightOils")


				div(class="relative group")
					select(name="weightOilsUnit" id="weightOilsUnit" class="custom-select border-emerald-500/20 group-hover:border-emerald-500/50")
						option(value="Grams" selected) Grams (g)
						option(value="Kilo") Kilograms (kg)
						option(value="Ounces") Ounces (oz)
						option(value="Pounds") Pounds (lb)
					div(class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-500 opacity-50")
						<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" /></svg>

		//- 3. Water Controls
		div(class="custom-card group-water")
			div(class="card-header bg-linear-to-r from-sky-500/20 to-blue-500/20 text-sky-600 dark:text-sky-400")
				div(class="flex items-center gap-3")
					div(class="p-2 rounded-xl bg-sky-500/10 shadow-inner")
						<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.675.337a6 6 0 01-3.86.517l-2.387-.477a2 2 0 00-1.022.547l-.513.513a2 2 0 01-2.828 0L2 15.414a2 2 0 010-2.828l.513-.513a2 2 0 00.547-1.022l.477-2.387a6 6 0 00-.517-3.86l-.337-.675a6 6 0 00-.517-3.86l.477-2.387a2 2 0 00-.547-1.022l-.513-.513a2 2 0 010-2.828L5.414 2a2 2 0 012.828 0l.513.513a2 2 0 001.022.547l2.387.477a6 6 0 003.86-.517l.675-.337a6 6 0 003.86-.517l2.387.477a2 2 0 001.022-.547l.513-.513a2 2 0 012.828 0L22 8.586a2 2 0 010 2.828l-.513.513a2 2 0 00-.547 1.022l-.477 2.387a6 6 0 00.517 3.86l.337.675a6 6 0 00.517 3.86l-.477 2.387a2 2 0 00.547 1.022l.513.513a2 2 0 010 2.828L18.586 22a2 2 0 01-2.828 0l-.513-.513z" /></svg>
					span(class="text-xs font-black uppercase tracking-widest") Hydration
				button.lye-help(v-tippy="{ content: 'Water settings and lye concentration.' }" class="ml-auto w-6 h-6 rounded-full border border-sky-500/30 flex items-center justify-center text-[10px] font-bold hover:bg-sky-500/20 transition-colors") ?

			div(class="p-6 space-y-6")
				//- Option 0: Water as % of Oils
				div(:class="{'opacity-100 ring-2 ring-sky-500 bg-sky-500/10': OilStore.headerOptions.water.selected === 0, 'opacity-60 hover:opacity-100': OilStore.headerOptions.water.selected !== 0}" class="space-y-2 p-3 rounded-2xl transition-all duration-300")
					div(class="flex justify-between")
						span(class="text-[10px] font-black text-zinc-400 uppercase mt-1") Water : Oils
						span(class="text-sm font-black text-sky-500") {{ waterPerOils }}%
					input(type="range" min="20" max="40" v-model.number="waterPerOils" class="custom-range accent-sky-500")

				//- Option 1: Lye Concentration
				div(:class="{'opacity-100 ring-2 ring-sky-500 bg-sky-500/10': OilStore.headerOptions.water.selected === 1, 'opacity-60 hover:opacity-100': OilStore.headerOptions.water.selected !== 1}" class="space-y-2 p-3 rounded-2xl transition-all duration-300")
					div(class="flex justify-between")
						span(class="text-[10px] font-black text-zinc-400 uppercase mt-1") Lye Concentration
						span(class="text-sm font-black text-sky-500") {{ lyeCon }}%
					input(type="range" min="20" max="50" v-model.number="lyeCon" class="custom-range accent-sky-500")

				//- Option 2: Ratio
				div(:class="{'opacity-100 ring-2 ring-sky-500 bg-sky-500/10': OilStore.headerOptions.water.selected === 2, 'opacity-60 hover:opacity-100': OilStore.headerOptions.water.selected !== 2}" class="grid grid-cols-2 gap-3 pt-4 border-t border-white/5 p-3 rounded-2xl transition-all duration-300")
					div(class="flex flex-col gap-1")
						span(class="text-[8px] font-black text-black dark:text-white uppercase text-center") Water Ratio
						input(class="ratio-input text-black dark:text-white border-sky-500/20" type="number" v-model.number="waterRatio")
					div(class="flex flex-col gap-1")
						span(class="text-[8px] font-black text-black dark:text-white uppercase text-center") Lye Ratio
						input(class="ratio-input text-black dark:text-white border-sky-500/20" type="number" v-model.number="lyeRatio")

		//- 4. Custom Tuning
		div(class="custom-card group-extra")
			div(class="card-header bg-linear-to-r from-fuchsia-500/20 to-rose-500/20 text-fuchsia-600 dark:text-fuchsia-400")
				div(class="flex items-center gap-3")
					div(class="p-2 rounded-xl bg-fuchsia-500/10 shadow-inner")
						<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
					span(class="text-xs font-black uppercase tracking-widest") Tuning
				button.lye-help(v-tippy="{ content: 'Fine-tune superfat and fragrance properties.' }" class="ml-auto w-6 h-6 rounded-full border border-fuchsia-500/30 flex items-center justify-center text-[10px] font-bold hover:bg-fuchsia-500/20 transition-colors") ?

			div(class="p-6 space-y-6")
				div(class="space-y-2")
					div(class="flex justify-between")
						span(class="text-[10px] font-black text-orange-400 uppercase mt-1") Super Fat
						span(class="text-sm font-black text-orange-500") {{ SetSuperFat }}%
					input(type="range" min="0" max="20" v-model.number="SetSuperFat" class="custom-range accent-orange-500")

				div(class="space-y-3 pt-4 border-t border-white/5")
					label(class="text-[10px] font-black text-fuchsia-400 uppercase tracking-widest") Fragrance Amount
					div(class="flex items-stretch gap-3")
						div(class="relative flex-1 rounded-2xl bg-black/5 dark:bg-white/5 border border-white/10")
							input(class="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-lg font-black text-fuchsia-500 outline-none focus:ring-2 ring-fuchsia-500/20 transition-all" type="number" v-model.number="SetFragrance")
						div(class="flex flex-col justify-center items-end px-4 rounded-2xl bg-fuchsia-500/5 border border-fuchsia-500/10")
							span(class="text-xs font-black text-fuchsia-500") {{OilStore.headerOptions.fragrance.frWeight}}
							span(class="text-[8px] font-black text-fuchsia-400/50 uppercase tracking-tighter") Total Grams
</template>

<style scoped lang="sass">
@reference "tailwindcss"

.RecipeOptions
	@apply relative

.dark .custom-card
	background: var(--Theme1)
.custom-card
	background: var(--LTheme4)
	@apply flex flex-col rounded-[2.5rem] border border-white/10 shadow-2xl transition-all duration-500 ease-out
	&:hover
		@apply -translate-y-2 border-white/20

.card-header
	@apply flex items-center px-6 py-5 rounded-t-[2.5rem] border-b border-white/5 bg-white/5 backdrop-blur-md

.dark .option-label
	@apply dark:bg-white/5
.option-label
	@apply  bg-black/5 flex items-center p-3.5 rounded-2xl border border-white/5 hover:border-blue-500 cursor-pointer transition-all duration-300

.radio-circle
	@apply w-5 h-5 rounded-full border-2 flex items-center justify-center mr-4 transition-all duration-300
	&.selected
		@apply shadow-2xl

.dark .custom-select
	@apply dark:bg-white/5
.custom-select
	@apply w-full px-5 py-3.5 rounded-2xl bg-black/5 border border-white/5 outline-none text-xs font-black hover:border-emerald-500 text-zinc-500 appearance-none cursor-pointer transition-all duration-300

.dark .custom-range
	background: var(--Theme4)
.custom-range
	background: var(--LTheme4)
	@apply w-full h-1.5 bg-zinc-200 rounded-full appearance-none cursor-pointer shadow-inner
	&::-webkit-slider-thumb
		@apply appearance-none w-4 h-4 rounded-full bg-current shadow-lg border-2 border-white/20 transition-transform active:scale-125

.dark .ratio-input
	background: var(--Theme2)
.ratio-input
	background: var(--LTheme3)
	@apply w-full border border-white/10 rounded-xl py-2.5 text-center text-sm font-black outline-none focus:ring-2 ring-white/10 transition-all

@keyframes scale
	0%, 100%
		transform: scale(1)
	50%
		transform: scale(1.2)

.animate-scale
	animation: scale 2s infinite ease-in-out

/* Remove Spin Buttons */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button
	@apply appearance-none m-0
</style>

<script setup lang="ts">
import { computed } from 'vue';
import { useOilStore } from "@/modules/calculator/store/calculatorStore";
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
div(class="lyeWidget group/total")
	div(class="lye-head bg-linear-to-br from-sky-400 to-blue-600 shadow-blue-500/20")
		span(class="lye-label") Recipe Summary
		button.lye-help(v-tippy="{ content: 'Final weights of all components in your soap.' }") ?

	div(class="w-full flex-grow overflow-hidden rounded-2xl bg-black/5 dark:bg-white/5 border border-white/5 mt-2")
		ul(class="p-3 space-y-1")
			li(v-for="item in [{label: 'Water', val: AmountOfWater, icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'}, {label: 'Lye (' + OilStore.getTypeOfLye + ')', val: AmountOfLye, icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'}, {label: 'Oils', val: AmountOfOils, icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'}, {label: 'Fragrance', val: AmountOfFragrance, icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'}]" :key="item.label" class="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition-all")
				div(class="flex flex-col")
					span(class="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-tighter") {{ item.label }}
					span(class="text-xs text-zinc-400 dark:text-zinc-500") Weight in Grams
				div(class="flex items-baseline gap-1")
					span(class="text-sm font-black text-blue-600 dark:text-blue-400") {{ item.val || 0 }}
					span(class="text-[10px] font-bold text-zinc-500") g

	div(class="mt-auto pt-4 flex items-center justify-between px-2 bg-blue-500/5 rounded-2xl border border-blue-500/10 p-4")
		div(class="flex flex-col")
			span(class="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-tighter") Total Batch Weight
		div(class="flex flex-col items-end")
			span(class="text-xl font-black text-blue-600 dark:text-blue-400") {{ TotalAmount || 0 }}
			span(class="text-[10px] font-bold text-blue-500/50 uppercase") Grams
</template>

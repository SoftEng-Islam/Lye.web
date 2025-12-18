<script setup lang="ts">
import { ref } from "vue";
import { useOilStore } from "@/modules/calculator/store/calculatorStore";
import type { Oil } from '@/modules/calculator/store/calculatorStore';  // <-- type-only import

interface Props {
	oil: null;
}
const props = defineProps<Props>();

const theme = ref({
	color: 'green-500'
});

const weightOfOil = ref(0);

const RemoveThisOil = (val: Oil) => {
	useOilStore().RemoveOils(val);
};

// weightOfOil
const SetOilWeight = (nameOfOil: string) => {
	useOilStore().AddedOilsWeight(nameOfOil, weightOfOil.value);
};
</script>
<template lang="pug">
li(class="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 hover:bg-white/10 transition-all group/item shadow-sm")
	//- remove Oil
	button(type="button" class="w-8 h-8 rounded-lg flex items-center justify-center bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-inner" @click="RemoveThisOil(props.oil)")
		<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>

	//- Oil Name
	div(class="flex-grow flex flex-col min-w-0")
		span(class="text-sm font-bold text-zinc-800 dark:text-zinc-200 truncate") {{ props.oil.Name }}
		span(class="text-[10px] text-zinc-500 uppercase font-black tracking-tighter") Added Oil

	div(class="flex items-center gap-2")
		div(class="relative flex items-center rounded-lg bg-black/5 dark:bg-white/5 border border-white/10 group-focus-within/item:border-emerald-500/50 transition-all overflow-hidden")
			input(class="w-16 px-2 py-1.5 outline-none bg-transparent text-sm font-black text-emerald-600 dark:text-emerald-400 text-center" type="number" maxlength="3" name="oilWeight" :id="props.oil.Name" v-model="weightOfOil" @input="SetOilWeight(props.oil.Name)")
			select(class="bg-transparent text-[10px] font-bold text-zinc-500 outline-none pr-2 appearance-none cursor-pointer hover:text-zinc-700 dark:hover:text-zinc-300" :name="props.oil.Name")
				option(value="Gram") g
				option(value="Kilo") kg
</template>

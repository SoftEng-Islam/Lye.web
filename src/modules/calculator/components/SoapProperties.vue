<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useOilStore } from "@/modules/calculator/store/calculatorStore.ts";
const oilStore = useOilStore();
const { soapProperties } = storeToRefs(oilStore);

const aryRanges: string[] = Array(7);
aryRanges[0] = "Hardness (in the All column): 29 to 54, higher is harder.";
aryRanges[1] = "Cleansing (in the All column): 12 to 22, all soap cleanses but the higher numbers more so.";
aryRanges[2] = "Conditioning (in the All column): 44 to 69, higher offers more skin conditioning.";
aryRanges[3] = "Bubbly (in the All column): 14 to 46, higher gives a more bubbly lather.";
aryRanges[4] = "Creamy (in the All column): 16 to 48, higher gives a more creamy lather.";
aryRanges[5] = "Iodine Value (in the All column): 41 to 70, lower equals harder bar, much above 70 and bar could possibly be too soft.";
aryRanges[6] = "INS (in the All column): 136 to 165, the commonly accepted ideal is 160.&nbsp; This value gauges the physical qualities of the bar; primarily hardness, with higher being harder.";
aryRanges[7] = "<b>Lauric Acid</b><br /><br />&bull; 12:0<br />&bull; Saturated<br />&bull; dodecanoic acid. &nbsp;&nbsp;(doe-dec-a-no-ik)";
aryRanges[8] = "<b>Myristic Acid</b><br /><br />&bull; 14:0<br />&bull; Saturated<br />&bull; tetradecanoic acid. &nbsp;&nbsp;(te-tra-dec-a-no-ik)";
aryRanges[9] = "<b>Palmitic Acid</b><br /><br />&bull; 16:0<br />&bull; Saturated<br />&bull; hexadecanoic acid. &nbsp;&nbsp;(hex-a-dec-a-no-ik)";
aryRanges[10] = "<b>Stearic Acid</b><br /><br />&bull; 18:0<br />&bull; Saturated<br />&bull; octadecanoic acid. &nbsp;&nbsp;(oc-ta-dec-a-no-ik)";
aryRanges[11] = "<b>Ricinoleic Acid</b><br /><br />&bull; 18:1<br />&bull; MonoUnsaturated<br />&bull; 12-hydroxy-9-cis-octadecenoic acid.<br />(hy-drox-y, sis, oc-ta-dec-e-no-ik)";
aryRanges[12] = "<b>Oleic Acid</b><br /><br />&bull; 18:1<br />&bull; MonoUnsaturated<br />&bull; cis-9-octadecenoic acid. &nbsp;&nbsp;(sis, oc-ta-dec-e-no-ik)";
aryRanges[13] = "<b>Linoleic Acid</b><br /><br />&bull; 18:2<br />&bull; PolyUnsaturated<br />&bull; cis, cis-9,12-octadecadienoic acid.<br /> (sis, oc-ta-dec-a-di-e-no-ic)";
aryRanges[14] = "<b>Linolenic Acid</b><br /><br />&bull; 18:3<br />&bull; PolyUnsaturated<br />&bull; cis, cis,cis-9,12,15-octadecatrienoic acid.<br />(sis, oc-ta-dec-a-tri-e-no-ic)";
aryRanges[15] = "Empty";
aryRanges[16] = "Empty";
aryRanges[17] = "Empty";

const satUnsat = "Empty";
</script>
<template lang="pug">
div(class="lyeWidget group/soap")
	div(class="lye-head bg-linear-to-br from-pink-400 to-rose-600 shadow-rose-500/20")
		span(class="lye-label") Soap Bar Quality
		button.lye-help(v-tippy="{ content: 'Predicted quality of the finished soap bar.' }") ?

	div(class="w-full flex-grow overflow-hidden rounded-2xl bg-black/5 dark:bg-white/5 border border-white/5 mt-2")
		PerfectScrollbar(class="h-full w-full")
			ul(class="p-3 space-y-1")
				li(v-for="(value, name, index) in soapProperties" :key="index" class="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors")
					span(class="text-xs font-bold text-zinc-500 dark:text-zinc-400 flex items-center gap-2")
						button(class="w-4 h-4 rounded-md flex items-center justify-center bg-rose-500/20 text-rose-600 dark:text-rose-400 text-[10px] font-black" v-tippy="{ content: aryRanges[index] }") i
						| {{ name }}
					span(class="text-sm font-black text-rose-600 dark:text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-md") {{value}}

	div(class="mt-auto pt-4 flex items-center justify-between px-2 bg-rose-500/5 rounded-2xl border border-rose-500/10 p-3")
		div(class="flex items-center gap-2")
			button(class="w-5 h-5 rounded-md flex items-center justify-center bg-zinc-500/20 text-zinc-600 dark:text-zinc-400 text-xs font-black shadow-inner" v-tippy="{content: satUnsat}") ?
			div(class="flex flex-col")
				span(class="text-[10px] font-black text-zinc-500 uppercase tracking-tighter") Sat : Unsat Ratio
		div(class="flex flex-col items-end")
			div(class="flex items-center gap-1.5")
				span(class="text-sm font-black text-rose-600") {{soapProperties.MonoUnsaturated}}
				span(class="text-zinc-400 text-xs") :
				span(class="text-sm font-black text-rose-400") {{ soapProperties.PolyUnsaturated }}
</template>

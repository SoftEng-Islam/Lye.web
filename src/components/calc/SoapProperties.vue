<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useOilStore } from "@/store/index.ts";
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
div(class="lyeWidget hover:shadow-2xl dark:shadow-none border-pink-800 dark:border-pink-500")
	div(class="lye-head from-pink-400 dark:from-pink-600")
		span(class="lye-label") Soap Bar Quality.
		button(class="lye-help bg-pink-400 dark:bg-pink-600" v-tippy="{ content: 'Empty Content' }") !
	perfect-scrollbar(class="w-full mt-4 rounded-lg bg-(--LTheme3) dark:bg-(--Theme3)")
		ul(class="p-2 pt-4 rounded-md overflow-hidden")
			li(class="flex overflow-hidden py-2 border-t border-t-zinc-500 first-of-type:border-t-0 last-of-type:border-b-0" v-for="(value, name, index) in soapProperties" :key="index")
				span(class="text-sm text-black dark:text-white flex items-center")
					button(class="w-4 h-4 rounded-full flex items-center justify-center bg-pink-500 text-sm mr-2 text-black dark:text-white" v-tippy="{content: aryRanges[index]}") !
					| {{ name }} #[span(class="text-black dark:text-white") :]
				span(class="text-pink-500 ml-auto") {{value}}
	div(class="flex items-center overflow-hidden pt-3 pb-2 px-4 mt-auto")
		button(class="w-4 h-4 rounded-full flex items-center justify-center bg-pink-500 text-sm mr-2 text-black dark:text-white" v-tippy="{content: satUnsat}") !
		span(class="text-sm text-black dark:text-white") Sat : Unsat
		span(class="text-pink-500 ml-auto bg-(--LTheme4) dark:bg-(--Theme4) rounded-full px-2 border border-(--LTheme3) dark:border-(--Theme3)") {{soapProperties.MonoUnsaturated}} : {{ soapProperties.PolyUnsaturated }}
</template>

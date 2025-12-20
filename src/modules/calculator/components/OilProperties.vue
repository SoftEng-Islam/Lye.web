<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useOilStore } from "@/modules/calculator/store/calculatorStore";

const { OilProperties } = storeToRefs(useOilStore());

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

</script>
<template lang="pug">
//- Info Section
div(class="lyeWidget group/properties")
	div(class="lye-head bg-linear-to-br from-amber-400 to-orange-500 shadow-amber-500/20")
		span(class="lye-label truncate max-w-[80%]") {{ OilProperties.Name || 'Properties' }}
		button.lye-help(v-tippy="{ content: 'Chemical properties of the selected oil.' }") ?

	div(class="w-full grow overflow-hidden rounded-2xl bg-black/5 dark:bg-white/5 border border-white/5 mt-2")
		PerfectScrollbar(class="h-full w-full")
			ul(class="p-3 space-y-1")
				li(v-for="(value, name, index) in OilProperties" :key="index" v-show="name !== 'Name' && name !== 'Id'" class="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors")
					span(class="text-xs font-bold text-zinc-500 dark:text-zinc-400 flex items-center gap-2")
						button(class="w-4 h-4 rounded-md flex items-center justify-center bg-amber-500/20 text-amber-600 dark:text-amber-400 text-[10px] font-black" v-tippy="{ content: aryRanges[index] }") i
						| {{ name }}
					span(class="text-sm font-black text-amber-600 dark:text-amber-500 px-2 py-0.5 rounded-md bg-amber-500/10") {{value}}
</template>

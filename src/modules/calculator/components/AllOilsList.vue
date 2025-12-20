<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useOilStore } from '@/modules/calculator/store/calculatorStore';
import type { Oil } from '@/modules/calculator/store/calculatorStore';  // <-- type-only import

const OilStore = useOilStore();
const { Oils, AddedOils, soapProperties } = storeToRefs(useOilStore());

const searchForOil = ref('');

const filteredOils = () =>
	Oils.value.filter(oil =>
		oil.Name.toLowerCase().includes(searchForOil.value.toLowerCase())
	);
</script>

<template lang="pug">
//- Oils list Section
div(class="lyeWidget group/widget")
	div(class="lye-head shadow-purple-500/20 bg-linear-to-br from-fuchsia-500/90 to-purple-600/90")
		span(class="lye-label") All Oils
		button.lye-help(v-tippy="{content: 'Search and add oils to your recipe. Double click to add.'}") ?

	//- Search
	div(class="relative w-full px-2 mb-4")
		div(class="flex items-center w-full px-4 h-11 rounded-2xl bg-white/5 border border-white/10 focus-within:border-purple-500/50 focus-within:bg-white/10 transition-all shadow-inner shadow-black/10")
			<svg class="w-5 h-5 text-zinc-500 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
			input(name="searchForOil" id="searchForOil" v-model="searchForOil" class="w-full bg-transparent outline-none text-sm font-medium text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-500" type="text" placeholder="Search oils...")

	//- Oils
	div(class="OilsList w-full grow h-72 overflow-hidden rounded-2xl bg-black/5 dark:bg-white/5 border border-white/5")
		PerfectScrollbar(class="h-full w-full" :effectData="filteredOils()")
			transition-group(enter-active-class="animate__animated animate__fadeInUp animate__faster" leave-active-class="animate__animated animate__fadeOutDown animate__faster" tag="ul" class="p-2 space-y-2")
				li(v-for="Oil in filteredOils()" :key="Oil.Name" class="p-3 rounded-xl flex items-center gap-3 bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 cursor-pointer transition-all group/item shadow-sm" @click="OilStore.showTheInfo(Oil)" @dblclick="OilStore.ClickedOil(Oil)")
					button(type="button" class="w-8 h-8 rounded-lg flex items-center justify-center bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover/item:bg-purple-500 group-hover/item:text-white transition-all shadow-inner" @click.stop="OilStore.ClickedOil(Oil)")
						<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
					span(class="text-sm font-medium text-zinc-800 dark:text-zinc-200 grow") {{ Oil.Name }}
					div(class="opacity-0 group-hover/item:opacity-100 transition-opacity")
						<svg class="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
</template>

<style scoped lang="sass">
@reference "tailwindcss"
.OilsList
	.ps
		.ps__rail-y
			left: 0

		.ps__rail-x,
		.ps__rail-y,
		.ps__rail-x,
		.ps__rail-y,
		.ps__rail-x:hover,
		.ps__rail-y:hover,
		.ps__rail-x:focus,
		.ps__rail-y:focus,
		.ps__rail-x.ps--clicking,
		.ps__rail-y.ps--clicking
			background-color: transparent !important
			opacity: 1

	.ps__thumb-y
		width: 6px
		background-color: rgba(168, 85, 247, 0.4) !important
		border-radius: 10px

.list-move,
.list-enter-active,
.list-leave-active
	transition: all 0.5s ease

.list-enter-from,
.list-leave-to
	opacity: 0
	transform: translateX(30px)

.list-leave-active
	position: absolute
</style>

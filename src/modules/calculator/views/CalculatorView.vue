<script setup lang="ts">
import AllOilsList from "@/modules/calculator/components/AllOilsList.vue";
import OilProperties from "@/modules/calculator/components/OilProperties.vue";
import OilsList from "@/modules/calculator/components/AddedOilsList/OilsList.vue";
import TotalRecipe from "@/modules/calculator/components/TotalRecipe.vue";
import SoapProperties from "@/modules/calculator/components/SoapProperties.vue";
import RecipeOptions from "@/modules/calculator/components/RecipeOptions.vue";
import SafetyDisclaimer from "@/modules/calculator/components/SafetyDisclaimer.vue";
</script>

<template lang="pug">
div(class="calculator-view min-h-screen pb-12 overflow-x-hidden")
	h1(class="sr-only") Advanced Lye Calculator for Soap Making

	//- Safety Disclaimer Banner at the top
	div(class="main-padding-x pt-8")
		<Safety-Disclaimer />

	transition(appear enter-active-class="animate__animated animate__fadeInDown")
		<recipe-options class="main-padding-x" />

	main(class="main-padding-x mt-8")
		transition-group(
			tag="div"
			class="lye-container"
			appear
			enter-active-class="animate__animated animate__zoomIn"
			move-class="transition-all duration-500"
		)
			<All-Oils-List key="all-oils"/>
			<oil-properties key="oil-props"/>
			<oils-list key="added-oils"/>
			<total-recipe key="total-recipe"/>
			<soap-properties key="soap-props"/>
</template>

<style lang="css">
@reference "tailwindcss";

.calculator-view {
	background: var(--LTheme4);
}

.dark .calculator-view {
	background: var(--Theme1);
}

/* Lye Styles */
.lye-container {
	@apply grid w-full gap-8 items-stretch justify-center;
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
	min-height: auto;
}

@media (max-width: 360px) {
	.lye-container {
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}
}

.dark .lye-container .lyeWidget {
	background-color: var(--Theme1);
}

.lye-container .lyeWidget {
	background-color: var(--LTheme4);
	@apply border-white/10 relative shadow-2xl w-full h-full px-4 pb-6 pt-10 rounded-3xl flex flex-col gap-4 border;
	transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.lye-container .lyeWidget:hover {
	@apply border-white/20 dark:border-white/10;
	transform: translateY(-6px) scale(1.01);
}

.lye-container .lyeWidget .lye-head {
	@apply absolute z-10 px-5 flex items-center justify-between -top-5 left-1/2 -translate-x-1/2 w-[90%] h-11 rounded-2xl shadow-lg;
}

.lye-container .lyeWidget .lye-head span.lye-label {
	@apply text-white font-bold tracking-wide text-sm;
}

.lye-container .lyeWidget .lye-head button.lye-help {
	@apply w-6 h-6 rounded-lg flex items-center justify-center text-xs text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-all;
}

.main-padding-x {
	@apply px-8;
}
</style>

<script setup lang="ts">
import AllOilsList from "@/modules/calculator/components/AllOilsList.vue";
import OilProperties from "@/modules/calculator/components/OilProperties.vue";
import OilsList from "@/modules/calculator/components/AddedOilsList/OilsList.vue";
import TotalRecipe from "@/modules/calculator/components/TotalRecipe.vue";
import SoapProperties from "@/modules/calculator/components/SoapProperties.vue";
import RecipeOptions from "@/modules/calculator/components/RecipeOptions.vue";
</script>
<template lang="pug">
div(class="calculator-view min-h-screen pb-12 overflow-x-hidden")
	h1(class="sr-only") Advanced Lye Calculator for Soap Making
	transition(appear enter-active-class="animate__animated animate__fadeInDown")
		<recipe-options class="main-padding-x" />

	main(class="main-padding-x mt-8")
		div(class="lye-container")
			transition-group(appear enter-active-class="animate__animated animate__zoomIn" move-class="transition-all duration-500")
				<All-Oils-List key="all-oils"/>
				<oil-properties key="oil-props"/>
				<oils-list key="added-oils"/>
				<total-recipe key="total-recipe"/>
				<soap-properties key="soap-props"/>
</template>

<style scoped lang="sass">
.calculator-view
	background: radial-gradient(circle at 50% -20%, var(--Theme4), var(--Theme1))

.lye-container
	display: grid
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))
	min-height: 800px
	gap: 2.5rem
	align-items: stretch
	justify-content: center
	width: 100%

@media (max-width: 360px)
	.lye-container
		grid-template-columns: 1fr
		gap: 1.5rem
</style>

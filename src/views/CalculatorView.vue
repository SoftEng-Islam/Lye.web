<script setup lang="ts">
import AllOilsList from "@/components/LyeCalc/AllOilsList.vue";
import OilProperties from "@/components/LyeCalc/OilProperties.vue";
import OilsList from "@/components/LyeCalc/AddedOilsList/OilsList.vue";
import TotalRecipe from "@/components/LyeCalc/TotalRecipe.vue";
import SoapProperties from "@/components/LyeCalc/SoapProperties.vue";
import RecipeOptions from "@/components/LyeCalc/RecipeOptions.vue";
</script>
<template lang="pug">
div(class="pb-6 pt-20 main-padding-x w-full h-full flex flex-wrap items-start justify-between")
	<recipe-options/>
	PerfectScrollbar(class="pt-14 w-full flex items-center justify-center")
		div(class="lye-container")
			<All-Oils-List/>
			<oil-properties/>
			<oils-list/>
			<total-recipe/>
			<soap-properties/>
</template>

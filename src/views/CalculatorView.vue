<script setup lang="ts">
import AllOilsList from "@/components/calc/AllOilsList.vue";
import OilProperties from "@/components/calc/OilProperties.vue";
import OilsList from "@/components/calc/AddedOilsList/OilsList.vue";
import TotalRecipe from "@/components/calc/TotalRecipe.vue";
import SoapProperties from "@/components/calc/SoapProperties.vue";
import RecipeOptions from "@/components/calc/RecipeOptions.vue";
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

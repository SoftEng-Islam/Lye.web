<script setup lang="ts">
import OilsList from "@/components/OilsList.vue";
import OilProperties from "@/components/OilProperties.vue";
import AddedOils from "@/components/AddedOils.vue";
import TotalRecipe from "@/components/TotalRecipe.vue";
import SoapProperties from "@/components/SoapProperties.vue";
import RecipeOptions from "@/components/RecipeOptions.vue";
</script>
<template lang="pug">
div(class="pb-6 w-full h-full flex flex-wrap items-start bg-(--LTheme3) dark:bg-(--Theme3)")
	<recipe-options/>
	PerfectScrollbar(class="h-[90%] w-full flex items-center justify-center")
		div(class="bg-(--LTheme3) dark:bg-(--Theme3) px-4 h-full w-full flex flex-row gap-4 flex-wrap justify-center items-stretch [&_.lyeWidget]:w-72 [&_.lyeWidget]:p-2 [&_.lyeWidget]:rounded-lg [&_.lyeWidget]:bg-(--LTheme2) dark:[&_.lyeWidget]:bg-(--Theme2)")
			<oils-list/>
			<oil-properties/>
			<added-oils/>
			<total-recipe/>
			<soap-properties/>
</template>

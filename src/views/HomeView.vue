<script setup lang="ts">
import TypeWriter from '@/components/TypeWriter.vue';
import TypeWriterEffect from "@reusable-ui-tr/vue3-type-writer-effect";
import { ref } from 'vue';
const fullText = "Enter your oils, choose your superfat, and get instant lye & water measurements.";

</script>
<template lang="pug">
div(class="container relative mx-auto w-full overflow-hidden flex flex-col justify-center")
	//- Section 1 [ Overview ]
	div(class="relative overflow-hidden w-full child")
		//- img(class="absolute z-0 top-0 left-0 w-full bg-cover bg-no-repeat blur-lg" src="../assets/images/2.png")
		h1(class="text-black dark:text-white") Accurate Lye Calculations for Perfect Soap, Every Time
		type-writer(:text="fullText" :speed="50" :repeating="false" class="text-black dark:text-white")
		//- TypeWriterEffect(class="text-black dark:text-white" blink-duration="1s" cursor-color="blue" font-family="Lucida Console" font-size="20px" highlight-color="" :text="fulltext" text-color="white" text-wrapper-element-type="p" typing-speed="fast")
		RouterLink(to="/calculator" class="start-now py-2 px-4 mt-4 rounded-full text-white dark:text-black font-bold bg-(--dark-fav-color) dark:bg-(--light-fav-color)") Get Started
		div( class="w-full")
			img(class="mx-auto h-full rotate-12" src="../assets/images/oil-splash.png")

	//- How to Start Using Lye.web (Quick Example)
	div(class="child")
		ul(class="flex flex-row items-center justify-center gap-4")
			li(class="w-60 h-60 rounded-lg bg-amber-600")
			li(class="w-60 h-60 rounded-lg bg-amber-600")
			li(class="w-60 h-60 rounded-lg bg-amber-600")
		div(v-if="false" class="w-full")
			img(class="ml-auto h-full" src="../assets/images/Oil.png")

	//- What is Lye.web?
	//- Why Use Lye.web?
	//- Is It Free to Use?
	//- Who Uses This Site?
	//- Who Needs This Site?
	//- What Can Lye.web Help With?
	//- What Do You Need to Know to Use It?

	//- Best Channel To help you
	div(class="relative w-full h-[90%] pt-10 p-8 flex flex-col items-center justify-center gap-2")
		ul(class="flex flex-row items-center justify-center gap-4")
			li(class="w-60 h-60 rounded-lg bg-amber-600")
			li(class="w-60 h-60 rounded-lg bg-amber-600")
			li(class="w-60 h-60 rounded-lg bg-amber-600")
		div(v-if="false" class="w-full")
			img(class="ml-auto  h-full" src="../assets/images/Oil.png")

	//- div(class="resources")
	//- 	div(class="youtube-channels")
	//- 	div(class="Soap-Images")
	//- 	div(class="articals")
	//- div(class="ideas")
	//- div(class="world-graph")

	//- SomeNotes
		Dirty bluring Image and clean it by soap
		typewriter with soap and bubbles
</template>
<style scoped lang="sass">
// .test
	// corner-shape: scoop;


@reference "tailwindcss"
.container
	.child
		@apply relative w-full h-screen pt-10 p-8 flex flex-col items-center justify-center gap-2
</style>

<script lang="ts" setup>
import LyeLogo from './LyeLogo.vue';
</script>
<template lang="pug">
footer(class="left-0 mt-auto w-full py-4 text-black dark:text-white main-padding-x border-t border-(--LTheme4) dark:border-(--Theme4) flex flex-col items-center justify-center bg-(--LTheme3) dark:bg-(--Theme3)")
	//- Top section
	div(class="w-full flex flex-row items-center gap-4 justify-between")
		//- The Logo
		div(class="w-1/3 flex flex-col items-start gap-5 p-2 mr-8")
			//- App Name or The Logo
			lye-logo
			p(class="text-black dark:text-white text-sm")
				| Lye.web is a lightweight, web-based calculator built to help soap makers.
		//- Links
		div(class="w-1/4 flex flex-col items-start gap-2 p-2")
			h4(class="font-bold") Contact
			ul(class="")
				li(class="") #[a(href="https://github.com/SoftEng-Islam/Lye.web") Twitter]
				li(class="") #[a(href="https://github.com/SoftEng-Islam/Lye.web") GitHub]
				li(class="") #[a(href="https://github.com/SoftEng-Islam/Lye.web") Facebook]
				li(class="") #[a(href="https://github.com/SoftEng-Islam/Lye.web") Telegram]
				li(class="") #[a(href="https://github.com/SoftEng-Islam/Lye.web") WhatsApp]
		//- Contact US
		div(class="w-1/4 flex flex-col items-start gap-2 p-2")
			h4(class="font-bold") links
			ul(class="")
				li(class="") #[a(href="https://github.com/SoftEng-Islam/Lye.web") GitHub]
				li(class="") #[a(href="https://github.com/SoftEng-Islam/Lye.web") GitHub]
				li(class="") #[a(href="https://github.com/SoftEng-Islam/Lye.web") GitHub]
		//- More
		div(class="w-1/4 flex flex-col items-start gap-2 p-2")
			h4(class="font-bold") More
			ul(class="")
				li(class="") #[a(href="/help") Help/FQA]
				li(class="") #[a(href="/About-us") About]
				li(class="") #[a(href="https://github.com/SoftEng-Islam/Lye.web") GitHub]
	//- End Section
	div(class="w-full h-16 mt-5 flex items-center justify-center bg-(--LTheme1) dark:bg-(--Theme1) rounded-lg")
		p(class="text--gray-600 dark:text-gray-300") Lye.web Project Made With Love by #[a(href="#" class="text-(--light-fav-color) font-bold") Islam Ahmed]
</template>

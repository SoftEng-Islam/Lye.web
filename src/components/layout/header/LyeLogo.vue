<script setup lang="ts">
const ProjectName = 'Lye.web';
</script>
<template lang="pug">
div(class="flex h-full items-center gap-4")
	svg(class="w-8" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve")
		path(class="fill-gray-100" d="M393.701,261.2L377.2,336.498H105.4L94.3,298.7L181,162.499V90c-24.901,0-45-20.101-45-45c0-24.901,20.099-45,45-45h150c24.901,0,45,20.099,45,45c0,24.899-20.099,45-45,45v72.499L393.701,261.2z")
		path(class="fill-gray-300" d="M393.701,261.2L377.2,336.498H256V0h75c24.901,0,45,20.099,45,45c0,24.899-20.099,45-45,45v72.499L393.701,261.2z")
		path(class="fill-yellow-500" d="M480.099,396.799l-58.799-92.1v-0.3L393.701,261.2C353.2,232.7,300.7,227.899,256,250.399c-5.099,2.401-10.201,5.101-15,8.401l-46.8,31.199c-25.499,17.1-57.001,22.2-86.4,13.801c-4.799-1.201-9.3-3.001-13.5-5.099l-16.5,25.8L31.901,396.8C0.399,446.899,36.099,512,95.2,512h321.6C475.901,512,511.601,446.899,480.099,396.799z")
		path(class="fill-amber-600" d="M416.8,512H256V250.399c44.7-22.5,97.2-17.699,137.701,10.801l27.599,43.198v0.3l58.799,92.1C511.601,446.899,475.901,512,416.8,512z")
		path(class="fill-yellow-300" d="M166,452c-24.814,0-45-20.186-45-45s20.186-45,45-45s45,20.186,45,45S190.814,452,166,452z")
		path(class="fill-yellow-400" d="M316,392c-24.814,0-45-20.186-45-45s20.186-45,45-45s45,20.186,45,45S340.814,392,316,392z")
		path(class="fill-yellow-300" d="M271,407c0,8.399-6.599,15-15,15s-15-6.601-15-15c0-8.401,6.599-15,15-15S271,398.599,271,407z")
		g
			circle(class="fill-amber-500" cx="376" cy="407" r="15")
			circle(class="fill-amber-300" cx="316" cy="437" r="15")
			path(class="fill-amber-500" d="M271,407c0,8.399-6.599,15-15,15v-30C264.401,392,271,398.599,271,407z")
	span(class="text-black dark:text-white font-bold")
		RouterLink(to="/" class="logo") {{ ProjectName }}
</template>
<style scoped lang="sass">
@reference "tailwindcss"
.logo
	&.router-link-active
		@apply text-black dark:text-white font-bold bg-transparent
	&.router-link-exact-active
		@apply text-black dark:text-white font-bold bg-transparent
</style>

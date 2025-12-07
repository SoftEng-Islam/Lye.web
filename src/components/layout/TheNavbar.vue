<script setup lang="ts">
import BreadCrumb from './BreadCrumb.vue';

const breadcrumb = 'working';

</script>
<template lang="pug">
nav(class="main-padding-x flex flex-row items-center justify-between")
	bread-crumb

	//- Pages
	div(class="links flex flex-row gap-x-3 text-sm items-center justify-center *:p-2 *:text-gray-500")
		RouterLink(to="/") Home
		RouterLink(to="/calculator") Lye-Calc
</template>

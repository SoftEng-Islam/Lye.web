<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(`Params: ${route.params}`);
</script>
<template lang="pug">
button(v-if="route.name === 'home'" type="button", class="h-6 px-3 font-bold rounded-full flex items-center justify-center text-white dark:text-black bg-(--dark-fav-color) dark:bg-(--light-fav-color)")
	RouterLink(to="/calculator") Get Started
</template>

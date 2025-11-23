<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import ThePreloader from "./components/ThePreloader.vue";
import TheHeader from "./components/layout/header/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import TheBreadcrumb from "./components/layout/TheBreadcrumb.vue";


</script>
<template lang="pug">
<the-preloader :enablePreloader="false" />
<the-header class="w-full p-4"/>
<the-breadcrumb/>
router-view
<the-footer/>
</template>

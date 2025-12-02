<script setup lang="ts">
import ThePreloader from "@/components/layout/ThePreloader.vue";
import TheHeader from "@/components/layout/header/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import TheNavbar from "@/components/layout/TheNavbar.vue";

</script>
<template lang="pug">
the-preloader(:enablePreloader="false")
the-header
the-navbar
router-view
the-footer
</template>

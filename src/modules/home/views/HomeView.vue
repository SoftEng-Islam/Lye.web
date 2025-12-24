<script setup lang="ts">
import { onMounted } from 'vue';
import HeroSection from '@/modules/home/components/HeroSection.vue';
import FeaturesSection from '@/modules/home/components/FeaturesSection.vue';
import HowtoUseSection from '@/modules/home/components/HowtoUseSection.vue';
import FAQSection from '@/modules/home/components/FAQSection.vue';
import GetStartedSection from '@/modules/home/components/GetStartedSection.vue';

// Scroll reveal logic
const observerOptions = {
	threshold: 0.1
};

onMounted(() => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('reveal-active');
			}
		});
	}, observerOptions);

	document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
</script>

<template lang="pug">
div(class="w-full flex flex-col bg-white dark:bg-zinc-950")
	HeroSection
	FeaturesSection
	HowtoUseSection
	FAQSection
	GetStartedSection
</template>

<style scoped lang="sass">
</style>

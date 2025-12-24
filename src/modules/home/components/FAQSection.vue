<script setup lang="ts">
import { ref } from 'vue';

// FAQ data with open state
interface FAQ {
	question: string;
	answer: string;
	isOpen: boolean;
}
const faqs = ref<FAQ[]>([
	{
		question: "What is Lye.web?",
		answer: "Lye.web is a lightweight, client-side web application that helps soap makers calculate the exact amount of lye and water needed for their soap recipes. It ensures safe and accurate soap making by handling all the complex calculations for you.",
		isOpen: false
	},
	{
		question: "Why Use Lye.web?",
		answer: "Making soap safely requires precise calculations. Too much lye makes soap harsh, too little makes it oily. Lye.web eliminates guesswork and calculation errors, helping you create perfect soap every time.",
		isOpen: true
	},
	{
		question: "Is It Free to Use?",
		answer: "Yes! Lye.web is completely free and open-source. There are no sign-ups, no subscriptions, and no hidden fees. You can use it as much as you want, whenever you need it.",
		isOpen: false
	},
	{
		question: "Who Uses This Site?",
		answer: "Lye.web is used by soap makers of all levels - from beginners making their first batch to experienced artisans creating complex recipes.",
		isOpen: false
	},
	{
		question: "What Can Lye.web Help With?",
		answer: "Lye.web helps you calculate lye amounts, water requirements, superfat percentages, and provides detailed soap properties including hardness, cleansing ability, conditioning, bubbly lather, creamy lather, and iodine values.",
		isOpen: false
	}
]);

const toggleFAQ = (index: number) => {
	const faq = faqs.value[index];
	if (faq) {
		faq.isOpen = !faq.isOpen;
	}
};
</script>

<template lang="pug">
section(id="faq-section" class="faq-section py-32 px-6 bg-zinc-50 dark:bg-zinc-900/30")
	div(class="max-w-3xl mx-auto")
		div(class="reveal text-center mb-16")
			span(class="text-xs font-black text-(--Theme1) dark:text-(--LTheme4) uppercase tracking-[0.3em] mb-4 block") FAQ
			h2(class="text-4xl font-black text-zinc-900 dark:text-white tracking-tight") Common Questions.

		div(class="space-y-4")
			div(v-for="(faq, index) in faqs" :key="index" class="reveal accordion-item rounded-2xl bg-white shadow-2xl dark:bg-zinc-900 overflow-hidden")
				button(@click="toggleFAQ(index)" class="w-full text-left p-4 px-8 flex items-center justify-between group transition-all" :class="{'rounded-b-none border-b-transparent shadow-xl': faq.isOpen}")
					span(class="text-base font-black text-zinc-800 dark:text-zinc-200") {{ faq.question }}
					div(class="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-white/5 flex items-center justify-center transition-transform" :class="{'rotate-180 bg-(--Theme1) dark:bg-(--LTheme1) text-white': faq.isOpen}")
						<svg class="w-5 h-5 stroke-black dark:stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" /></svg>

				div(v-if="faq.isOpen" class="p-8 pt-5 bg-white dark:bg-zinc-900 border-t border-black/5 dark:border-white/5")
					p(class="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm") {{ faq.answer }}
</template>

<style scoped lang="sass">
@reference "tailwindcss"

// Reveal Styles
.reveal
	opacity: 0
	transform: translateY(30px)
	transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1)

	&.reveal-active
		opacity: 1
		transform: translateY(0)
</style>

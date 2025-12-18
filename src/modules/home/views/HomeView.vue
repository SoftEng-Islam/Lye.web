<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

// Feature data
const features = [
	{
		icon: "⚖️",
		title: "Accurate Calculations",
		description: "Precise lye and water measurements for safe soap making"
	},
	{
		icon: "🎯",
		title: "Superfat Control",
		description: "Adjust superfat percentages to customize your soap's properties"
	},
	{
		icon: "💧",
		title: "Multiple Water Options",
		description: "Choose from water percentage, lye concentration, or water-to-lye ratio"
	},
	{
		icon: "🌿",
		title: "Oil Database",
		description: "Access comprehensive oil properties and SAP values"
	},
	{
		icon: "📊",
		title: "Soap Properties",
		description: "View hardness, cleansing, conditioning, and more for your recipe"
	},
	{
		icon: "🆓",
		title: "100% Free",
		description: "No sign-up required, no hidden fees, use it anytime"
	}
];

// Step data
const steps = [
	{
		number: "01",
		title: "Select Your Oils",
		description: "Choose from our extensive database of oils and butters"
	},
	{
		number: "02",
		title: "Set Weights",
		description: "Enter the weight of each oil in your recipe"
	},
	{
		number: "03",
		title: "Configure Options",
		description: "Set superfat percentage, water method, and lye type"
	},
	{
		number: "04",
		title: "Get Results",
		description: "Instantly see lye amount, water needed, and soap properties"
	}
];

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
	//- Hero Section
	section(class="relative flex flex-col items-center w-full justify-center min-h-[100svh] p-6 lg:p-12 overflow-hidden")
		//- Animated Mesh Background
		div(class="absolute inset-0 z-0")
			div(class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-(--Theme1) dark:bg-(--LTheme1) opacity-10 blur-[120px] rounded-full animate-mesh-1")
			div(class="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-(--Theme2)/10 dark:bg-(--LTheme2)/10 blur-[120px] rounded-full animate-mesh-2")
			div(class="absolute top-[20%] right-[10%] w-[30%] h-[40%] bg-(--Theme3)/5 dark:bg-(--LTheme3)/5 blur-[100px] rounded-full animate-mesh-3")

		div(class="max-w-7xl mx-auto w-full relative z-10")
			div(class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center")
				//- Left Column: Text Content
				div(class="text-left hero-content")
					div(class="reveal inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-(--Theme2)/20 dark:bg-(--LTheme1)/10 border border-(--Theme1)/10 dark:border-(--LTheme4)/20 text-(--Theme1) dark:text-(--LTheme4) text-sm font-black uppercase tracking-[0.2em]")
						div(class="w-2 h-2 bg-(--Theme1) dark:bg-(--LTheme4) rounded-full animate-pulse")
						span Next-Gen Calculator

					h1(class="reveal text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-zinc-900 dark:text-white mb-6 sm:mb-8 leading-[1.05] tracking-tight")
						| Precise
						span(class="text-(--Theme1) dark:text-(--LTheme4) ")  Soap Making
						|  Mastery.

					p(class="reveal text-lg md:text-xl text-zinc-500 dark:text-zinc-400 mb-10 leading-relaxed max-w-xl")
						| The world's most sophisticated and responsive lye calculator.
						span(class="text-zinc-900 dark:text-zinc-200 font-bold") Craft perfect soap with absolute scientific precision.

					div(class="reveal flex flex-col sm:flex-row gap-5 items-start")
						RouterLink(to="/calculator" class="group/cta relative px-10 py-5 rounded-2xl bg-zinc-950 text-white overflow-hidden transition-all duration-500 hover:scale-[1.05] active:scale-[0.98] shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-(--LTheme2) shadow-opacity-40 flex items-center gap-3")
							//- Animated Gradient Core
							div(class="absolute inset-0 bg-gradient-to-r from-zinc-950 via-(--LTheme4) to-zinc-950 opacity-20 animate-gradient-shift")

							//- Flowing Neon Border
							div(class="absolute inset-[-2px] rounded-2xl opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500 pointer-events-none")
								div(class="absolute inset-0 rounded-2xl border-[1.5px] border-transparent [background:linear-gradient(#09090b,#09090b)_padding-box,conic-gradient(from_0deg,#b45309,#f59e0b,#fbbf24,#f59e0b,#b45309)_border-box] animate-neon-flow")

							//- Holographic Reflection / Shimmer
							div(class="absolute inset-0 pointer-events-none opacity-0 group-hover/cta:opacity-100 transition-opacity duration-700")
								div(class="absolute inset-[-100%] bg-gradient-to-tr from-transparent via-white/10 to-transparent rotate-45 animate-shimmer-fast")

							span(class="relative z-10 font-black text-lg tracking-tight") Start Calculating
							<svg class="relative z-10 w-6 h-6 transition-transform group-hover/cta:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>

						div(class="flex items-center -space-x-3")
							div(v-for="i in 3" :key="i" class="w-12 h-12 rounded-full border-4 border-white dark:border-zinc-950 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xl shadow-lg") {{ ['🧼', '⚗️', '🌿'][i-1] }}
							div(class="pl-6 flex flex-col")
								span(class="text-sm font-black text-zinc-900 dark:text-white") 10,000+
								span(class="text-xs text-zinc-500") Batches Calculated

				//- Right Column: Calculator Visual
				div(class="reveal relative flex justify-center lg:justify-end py-12")
					div(class="relative w-full max-w-sm sm:max-w-md perspective-2000")
						//- Orbiting Data Badges
						div(class="absolute -top-12 -right-4 sm:-right-8 z-20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl animate-float-slow")
							span(class="text-[8px] sm:text-[10px] font-black text-(--Theme1) dark:text-(--LTheme4) uppercase tracking-tighter") KOH 90%
						div(class="absolute top-1/2 -left-6 sm:-left-12 z-20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-900/10 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-2xl animate-float-delayed")
							span(class="text-[8px] sm:text-[10px] font-black text-(--Theme2) dark:text-(--LTheme2) uppercase tracking-tighter") SAP: 0.134

						div(class="calculator-card relative z-10 p-6 sm:p-10 rounded-[32px] sm:rounded-[48px] bg-white/40 dark:bg-zinc-950/40 backdrop-blur-[40px] saturate-[200%] border border-white/40 dark:border-white/10 shadow-[0_80px_160px_-40px_rgba(0,0,0,0.3)] rotate-lg group overflow-hidden")
							//- Holographic Flare / Reflection
							div(class="absolute inset-0 pointer-events-none z-30")
								div(class="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/10 to-transparent rotate-45 animate-shimmer pointer-events-none")

							//- Molecular SVG Pattern (Subtle Background)
							div(class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0")
								<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)"><path d="M25 0 L50 14.4 L50 43.4 L25 57.8 L0 43.4 L0 14.4 Z" fill="none" stroke="currentColor" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#hexagons)" /></svg>

							//- Premium Inner Border (Glass Highlight)
							div(class="absolute inset-0 rounded-[32px] sm:rounded-[48px] border-t border-l border-white/60 pointer-events-none z-10")

							//- Head
							div(class="flex items-center justify-between mb-10 relative z-20")
								div(class="flex gap-2.5")
									div(class="w-3.5 h-3.5 rounded-full bg-red-400 shadow-[0_0_15px_rgba(248,113,113,0.4)]")
									div(class="w-3.5 h-3.5 rounded-full bg-(--Theme1) dark:bg-(--LTheme1) shadow-[0_0_15px] shadow-(--Theme2) dark:shadow-(--LTheme2)")
									div(class="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.4)]")
								div(class="flex items-center gap-3")
									div(class="flex gap-1")
										div(v-for="i in 3" :key="i" class="w-1 h-1 rounded-full bg-(--Theme3) dark:bg-(--LTheme3) animate-pulse" :style="{ animationDelay: i * 0.2 + 's' }")
									span(class="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400/80") Lab System v2.1

							//- Technical Display
							div(class="lcd-display bg-black rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 mb-6 sm:mb-10 shadow-[inner_0_2px_30px_rgba(0,0,0,0.9)] relative overflow-hidden group/lcd z-20 border border-white/5")
								//- Layer 2: Moving Scanline
								div(class="absolute inset-0 pointer-events-none opacity-[0.1] bg-gradient-to-b from-transparent via-white/20 to-transparent h-[20%] w-full animate-crt-scanline")

								//- Layer 3: CRT Flicker / Noise
								div(class="absolute inset-0 pointer-events-none bg-white opacity-[0.012] animate-crt-flicker")

								div(class="absolute inset-0 bg-(--Theme1) dark:bg-(--LTheme1) opacity-0 group-hover/lcd:opacity-5 transition-opacity duration-700")

								//- Scientific "Waveform" indicator
								div(class="absolute top-4 right-8 w-16 h-4 opacity-40")
									<svg viewBox="0 0 100 20" class="w-full h-full stroke-(--Theme1) dark:stroke-(--LTheme1) stroke-opacity-50 fill-none"><path d="M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10 T 100 10" stroke-width="2" class="animate-wave"/></svg>

								div(class="relative z-10 flex flex-col gap-6 group-hover/lcd:animate-rgb-shift")
									div(class="flex justify-between items-end border-b border-white/5 pb-6 mb-2")
										div(class="flex flex-col")
											span(class="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1") Total Lye
											div(class="flex items-center gap-2")
												span(class="w-1.5 h-1.5 rounded-full bg-(--Theme1) dark:bg-(--LTheme1) animate-ping")
												span(class="text-xs font-medium text-zinc-500 uppercase") Sodium Hydroxide
										span(class="text-2xl sm:text-4xl font-black text-(--Theme1) dark:text-(--LTheme4) font-mono animate-pulse-subtle") 142.50
											span(class="text-sm sm:text-lg ml-1 opacity-50") g

									div(class="grid grid-cols-2 gap-4")
										div(class="flex flex-col gap-1")
											div(class="flex items-center gap-2")
												span(class="text-[10px] font-bold text-zinc-700 uppercase") Water
												div(class="w-8 h-[1px] bg-zinc-800")
											span(class="text-lg sm:text-xl font-black text-zinc-200 font-mono") 330.0
										div(class="flex flex-col gap-1")
											div(class="flex items-center gap-2")
												span(class="text-[10px] font-bold text-zinc-700 uppercase") Concentration
												div(class="w-8 h-[1px] bg-zinc-800")
											span(class="text-lg sm:text-xl font-black text-zinc-200 font-mono") 30.1%

							//- Dummy Form
							div(class="space-y-4 relative z-20")
								div(v-for="(oil, idx) in ['Olive Oil (Pure)', 'Coconut Oil (76deg)']" :key="oil" class="p-5 rounded-2xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/5 flex flex-col gap-3 hover:bg-white/20 dark:hover:bg-white/10 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-default group/item")
									div(class="flex items-center justify-between")
										div(class="flex items-center gap-3")
											div(class="w-10 h-10 rounded-xl bg-(--Theme4) dark:bg-(--LTheme4) flex items-center justify-center text-xl group-hover/item:scale-110 transition-transform") {{ idx === 0 ? '🌿' : '🥥' }}
											div(class="flex flex-col")
												span(class="text-xs font-black text-zinc-900 dark:text-zinc-200") {{ oil }}
												span(class="text-[8px] text-zinc-500 uppercase font-black tracking-widest") Premium Grade
										div(class="flex flex-col items-end")
											span(class="text-xs font-black text-(--Theme1) dark:text-(--LTheme4) opacity-80 group-hover/item:opacity-100") 500.0g
											span(class="text-[8px] text-(--Theme3) dark:text-(--LTheme3) uppercase font-black") Verified

									//- Scientific Mini-Meter
									div(class="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden")
										div(class="h-full bg-(--Theme1) dark:bg-(--LTheme1) opacity-40 group-hover/item:opacity-100 transition-all duration-700" :style="{ width: idx === 0 ? '65%' : '85%' }")

								button(class="group/btn relative w-full mt-6 py-6 rounded-2xl bg-zinc-950 overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-(--LTheme2) shadow-opacity-40")
									//- Animated Gradient Core
									div(class="absolute inset-0 bg-gradient-to-r from-zinc-950 via-(--LTheme4) to-zinc-950 opacity-10 animate-gradient-shift")

									//- Flowing Neon Border
									div(class="absolute inset-[-2px] rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 pointer-events-none")
										div(class="absolute inset-0 rounded-2xl border-[1.5px] border-transparent [background:linear-gradient(#09090b,#09090b)_padding-box,conic-gradient(from_0deg,#b45309,#f59e0b,#fbbf24,#f59e0b,#b45309)_border-box] animate-neon-flow")

									//- Holographic Reflection / Shimmer
									div(class="absolute inset-0 pointer-events-none opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700")
										div(class="absolute inset-[-100%] bg-gradient-to-tr from-transparent via-white/10 to-transparent rotate-45 animate-shimmer-fast")

									//- Button Content
									div(class="relative z-10 flex items-center justify-center gap-4 text-white")
										//- Reactive Lab Icon
										div(class="relative w-6 h-6 group-hover/btn:scale-110 transition-transform duration-500")
											<svg viewBox="0 0 24 24" fill="none" class="w-full h-full stroke-current stroke-[2]"><path d="M9 3h6M10 3v6l-4 8a2 2 0 002 3h8a2 2 0 002-3l-4-8V3" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12h8" stroke-opacity="0.5" class="group-hover/btn:animate-pulse"/></svg>
											div(class="absolute -inset-2 bg-(--LTheme1) opacity-0 group-hover/btn:opacity-20 rounded-full blur-lg animate-pulse transition-opacity")

										span(class="font-black uppercase tracking-[0.4em] text-[11px] group-hover/btn:tracking-[0.5em] transition-all duration-500") Execute Final Formula

						//- Background Orbs
						div(class="absolute -top-20 -left-20 w-48 h-48 bg-(--Theme1) dark:bg-(--LTheme1) opacity-20 blur-3xl rounded-full animate-pulse-slow")
						div(class="absolute -bottom-24 -right-24 w-64 h-64 bg-(--Theme2)/15 dark:bg-(--LTheme2)/15 blur-3xl rounded-full animate-float")

	//- Features Section
	section(class="features-section py-20 sm:py-32 px-4 sm:px-6 bg-zinc-50 dark:bg-zinc-900/30 relative")
		div(class="max-w-7xl mx-auto")
			div(class="reveal text-center mb-16 sm:mb-24")
				span(class="text-xs font-black text-(--Theme1) dark:text-(--LTheme4) uppercase tracking-[0.3em] mb-4 block") Scientific Accuracy
				h2(class="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white mb-6 tracking-tight") Engineered for Artisans.
				p(class="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto")
					| Every calculation is backed by precise SAP values and mathematical models to ensure your soap is safe and high-quality.

			div(class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8")
				div(v-for="feature in features" :key="feature.title" class="reveal feature-card group")
					div(class="relative p-10 rounded-[40px] bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] h-full")
						div(class="w-16 h-16 rounded-3xl bg-(--Theme4) dark:bg-(--LTheme4) flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform") {{ feature.icon }}
						h3(class="text-xl font-black text-zinc-900 dark:text-white mb-4") {{ feature.title }}
						p(class="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm") {{ feature.description }}
						div(class="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity")
							<svg class="w-6 h-6 text-(--Theme1) dark:text-(--LTheme1)" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>

	//- How to Use Section
	section(class="how-to-section py-20 sm:py-32 px-4 sm:px-6 overflow-hidden")
		div(class="max-w-7xl mx-auto")
			div(class="reveal flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 sm:mb-24 gap-8")
				div(class="max-w-xl")
					span(class="text-xs font-black text-(--Theme1) dark:text-(--LTheme4) uppercase tracking-[0.3em] mb-4 block") Simple Workflow
					h2(class="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tight") Workflow Simplified.
				p(class="text-lg text-zinc-500 dark:text-zinc-400 lg:max-w-xs") Our intuitive 4-step process handles the math, so you can focus on the art.

			div(class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6")
				div(v-for="step in steps" :key="step.number" class="reveal step-card group")
					div(class="p-8 rounded-[40px] bg-zinc-100 dark:bg-white/5 border border-transparent hover:border-(--LTheme1) dark:hover:border-(--Theme1) hover:border-opacity-20 transition-all h-full")
						span(class="text-5xl font-black text-zinc-900/5 dark:text-white/5 mb-8 block group-hover:text-(--Theme1) dark:group-hover:text-(--LTheme1) transition-colors") {{ step.number }}
						h3(class="text-lg font-black text-zinc-900 dark:text-white mb-3") {{ step.title }}
						p(class="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed") {{ step.description }}

	//- FAQ Section
	section(class="faq-section py-32 px-6 bg-zinc-50 dark:bg-zinc-900/30")
		div(class="max-w-3xl mx-auto")
			div(class="reveal text-center mb-16")
				span(class="text-xs font-black text-(--Theme1) dark:text-(--LTheme4) uppercase tracking-[0.3em] mb-4 block") FAQ
				h2(class="text-4xl font-black text-zinc-900 dark:text-white tracking-tight") Common Questions.

			div(class="space-y-4")
				div(v-for="(faq, index) in faqs" :key="index" class="reveal accordion-item")
					button(@click="toggleFAQ(index)" class="w-full text-left p-8 rounded-[32px] bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 flex items-center justify-between group transition-all" :class="{'rounded-b-none border-b-transparent shadow-xl': faq.isOpen}")
						span(class="text-base font-black text-zinc-800 dark:text-zinc-200") {{ faq.question }}
						div(class="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-white/5 flex items-center justify-center transition-transform" :class="{'rotate-180 bg-(--Theme1) dark:bg-(--LTheme1) text-white': faq.isOpen}")
							<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" /></svg>

					transition(enter-active-class="transition-all duration-300 ease-out" enter-from-class="max-h-0 opacity-0 transform -translate-y-2" enter-to-class="max-h-[500px] opacity-100 transform translate-y-0" leave-active-class="transition-all duration-300 ease-in" leave-from-class="max-h-[500px] opacity-100" leave-to-class="max-h-0 opacity-0 transform -translate-y-2")
						div(v-if="faq.isOpen" class="p-8 pt-0 bg-white dark:bg-zinc-900 border border-t-0 border-black/5 dark:border-white/5 rounded-b-[32px]")
							p(class="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm") {{ faq.answer }}



	section(class="py-32 px-6 relative overflow-hidden")
		div(class="absolute inset-0 bg-(--Theme1) dark:bg-(--LTheme4) z-0")
		div(class="absolute top-0 right-0 w-[40%] h-[100%] bg-black/10 dark:bg-white/10 skew-x-12 transform origin-top transition-all hover:skew-x-6")

		div(class="max-w-4xl mx-auto text-center relative z-10")
			h2(class="reveal text-4xl md:text-6xl font-black text-white dark:text-zinc-950 mb-8 tracking-tight") Perfecting Science,
				br
				| One Batch at a Time.
			p(class="reveal text-xl text-white/80 dark:text-zinc-900/60 mb-12 font-medium") Join thousands of soap makers using Lye.web today.
			div(class="reveal")
				RouterLink(to="/calculator" class="inline-block py-6 px-16 rounded-[24px] text-lg font-black text-zinc-950 dark:text-white bg-white dark:bg-zinc-950 shadow-2xl hover:scale-105 active:scale-95 transition-all") Start Your Next Project →
</template>

<style scoped lang="sass">
@reference "tailwindcss"

// Custom Animations
@keyframes mesh-1
	0%, 100%
		transform: translate(0, 0) scale(1)
	33%
		transform: translate(10%, 15%) scale(1.1)
	66%
		transform: translate(-5%, 10%) scale(0.9)

@keyframes mesh-2
	0%, 100%
		transform: translate(0, 0) scale(1)
	33%
		transform: translate(-15%, -10%) scale(0.9)
	66%
		transform: translate(10%, -20%) scale(1.1)

@keyframes mesh-3
	0%, 100%
		transform: translate(0, 0)
	50%
		transform: translate(-20%, 30%)

@keyframes float
	0%, 100%
		transform: translateY(0)
	50%
		transform: translateY(-20px)

@keyframes float-slow
	0%, 100%
		transform: translateY(0) translateX(0)
	50%
		transform: translateY(-15px) translateX(10px)

@keyframes pulse-subtle
	0%, 100%
		opacity: 1
	50%
		opacity: 0.85

@keyframes shimmer
	0%
		transform: translate(-100%, -100%) rotate(45deg)
	100%
		transform: translate(100%, 100%) rotate(45deg)

@keyframes wave
	0%
		stroke-dashoffset: 0
	100%
		stroke-dashoffset: -40

@keyframes scan
	0%
		top: -10%
	100%
		top: 110%

@keyframes neon-flow
	from
		filter: hue-rotate(0deg)
	to
		filter: hue-rotate(360deg)

@keyframes gradient-shift
	0%, 100%
		background-position: 0% 50%
	50%
		background-position: 100% 50%

@keyframes shimmer-fast
	0%
		transform: translate(-50%, -50%) rotate(45deg)
	100%
		transform: translate(50%, 50%) rotate(45deg)

@keyframes crt-scanline
	0%
		transform: translateY(-100%)
	100%
		transform: translateY(1000%)

@keyframes crt-flicker
	0%, 100%
		opacity: 0.012
	10%, 30%, 50%, 70%, 90%
		opacity: 0.018
	20%, 40%, 60%, 80%
		opacity: 0.008

@keyframes rgb-shift
	0%
		text-shadow: 2px 0 0 rgba(255,0,0,0.2), -2px 0 0 rgba(0,0,255,0.2)
	25%
		text-shadow: -2px 0 0 rgba(255,0,0,0.2), 2px 0 0 rgba(0,0,255,0.2)
	50%
		text-shadow: 2px 0 0 rgba(255,0,0,0.2), -2px 0 0 rgba(0,0,255,0.2)
	75%
		text-shadow: -2px 0 0 rgba(255,0,0,0.2), 2px 0 0 rgba(0,0,255,0.2)
	100%
		text-shadow: 2px 0 0 rgba(255,0,0,0.2), -2px 0 0 rgba(0,0,255,0.2)

.animate-mesh-1
	animation: mesh-1 25s ease-in-out infinite

.animate-mesh-2
	animation: mesh-2 30s ease-in-out infinite

.animate-mesh-3
	animation: mesh-3 35s ease-in-out infinite

.animate-float
	animation: float 6s ease-in-out infinite

.animate-float-slow
	animation: float-slow 8s ease-in-out infinite

.animate-float-delayed
	animation: float-slow 8s ease-in-out infinite 2s

.animate-pulse-slow
	animation: pulse-subtle 4s ease-in-out infinite

.animate-pulse-subtle
	animation: pulse-subtle 2s ease-in-out infinite

.animate-shimmer
	animation: shimmer 6s ease-in-out infinite

.animate-wave
	stroke-dasharray: 10 30
	animation: wave 2s linear infinite

.animate-scan
	animation: scan 2s linear infinite

.animate-neon-flow
	animation: neon-flow 4s linear infinite

.animate-gradient-shift
	background-size: 200% 200%
	animation: gradient-shift 10s ease infinite

.animate-shimmer-fast
	animation: shimmer-fast 3s ease-in-out infinite

.animate-crt-scanline
	animation: crt-scanline 8s linear infinite

.animate-crt-flicker
	animation: crt-flicker 0.15s infinite

.animate-rgb-shift
	animation: rgb-shift 0.2s steps(2) infinite

.perspective-2000
	perspective: 2000px

.rotate-lg
	transform: perspective(2000px) rotateY(-18deg) rotateX(8deg)
	transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1)

	&:hover
		transform: perspective(2000px) rotateY(-8deg) rotateX(4deg) translateY(-10px)
		box-shadow: 0 100px 200px -50px rgba(0,0,0,0.4)

// Reveal Styles
.reveal
	opacity: 0
	transform: translateY(30px)
	transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1)

	&.reveal-active
		opacity: 1
		transform: translateY(0)

// Stagger reveals
.reveal:nth-child(1)
	transition-delay: 0.1s
.reveal:nth-child(2)
	transition-delay: 0.2s
.reveal:nth-child(3)
	transition-delay: 0.3s
.reveal:nth-child(4)
	transition-delay: 0.4s
</style>

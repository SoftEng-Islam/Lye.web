<script setup lang="ts">
import { ref } from 'vue';

const isExpanded = ref(false);
const isDismissed = ref(false);

const dismiss = () => {
	isDismissed.value = true;
};
</script>

<template lang="pug">
transition(name="slide-down")
	div(v-if="!isDismissed" class="safety-disclaimer-banner relative w-full mb-8 rounded-2xl overflow-hidden border-2 border-amber-500/30 dark:border-amber-500/20 shadow-xl")
		//- Background gradient
		div(class="absolute inset-0 bg-linear-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-amber-950/40")

		//- Animated warning icon background
		div(class="absolute top-0 right-0 w-32 h-32 opacity-10 dark:opacity-5")
			svg(class="w-full h-full text-amber-600 dark:text-amber-400" fill="currentColor" viewBox="0 0 24 24")
				path(d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z")

		div(class="relative z-10 p-6 md:p-8")
			//- Header with dismiss button
			div(class="flex items-start justify-between gap-4 mb-4")
				div(class="flex items-center gap-4 flex-1")
					//- Warning Icon
					div(class="shrink-0 w-12 h-12 rounded-full bg-amber-500/20 dark:bg-amber-500/10 flex items-center justify-center")
						svg(class="w-7 h-7 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5")
							path(stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z")

					div(class="flex-1")
						h3(class="text-lg md:text-xl font-black text-amber-900 dark:text-amber-100 mb-1")
							| Safety & Legal Disclaimer
						p(class="text-sm md:text-base font-bold text-amber-800 dark:text-amber-200 leading-relaxed")
							| This calculator is for <span class="underline decoration-2">educational purposes only</span>. Working with lye requires proper safety equipment and knowledge.

				//- Dismiss Button
				button(
					@click="dismiss"
					class="shrink-0 w-8 h-8 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 dark:bg-amber-500/5 dark:hover:bg-amber-500/10 flex items-center justify-center text-amber-700 dark:text-amber-300 transition-colors"
					aria-label="Dismiss warning"
				)
					svg(class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor")
						path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12")

			//- Expandable Details
			div(class="mt-6 pt-6 border-t border-amber-500/20 dark:border-amber-500/10")
				button(
					@click="isExpanded = !isExpanded"
					class="w-full flex items-center justify-between group"
				)
					span(class="text-sm font-bold text-amber-800 dark:text-amber-200 group-hover:text-amber-900 dark:group-hover:text-amber-100 transition-colors")
						| {{ isExpanded ? 'Hide' : 'Show' }} Important Safety Details
					svg(
						:class="['w-5 h-5 text-amber-700 dark:text-amber-300 transition-transform duration-300', { 'rotate-180': isExpanded }]"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2.5"
					)
						path(stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7")

				transition(name="expand")
					div(v-if="isExpanded" class="mt-6 space-y-6 text-sm text-amber-900 dark:text-amber-100")
						//- Safety Requirements
						div(class="bg-white/50 dark:bg-zinc-900/30 rounded-xl p-5 border border-amber-500/20")
							div(class="flex items-center gap-2 mb-3")
								svg(class="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor")
									path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z")
								h4(class="font-black text-base text-amber-900 dark:text-amber-100") Safety Requirements
							ul(class="space-y-2 ml-2 list-none")
								li(class="flex items-start gap-2")
									span(class="text-amber-600 dark:text-amber-400 mt-1") •
									span Always wear <strong class="text-amber-900 dark:text-amber-50">safety goggles</strong> and <strong class="text-amber-900 dark:text-amber-50">chemical-resistant gloves</strong>
								li(class="flex items-start gap-2")
									span(class="text-amber-600 dark:text-amber-400 mt-1") •
									span Work in a <strong class="text-amber-900 dark:text-amber-50">well-ventilated area</strong>
								li(class="flex items-start gap-2")
									span(class="text-amber-600 dark:text-amber-400 mt-1") •
									span Keep lye away from children and pets
								li(class="flex items-start gap-2")
									span(class="text-amber-600 dark:text-amber-400 mt-1") •
									span Have vinegar or citric acid solution nearby to neutralize spills
								li(class="flex items-start gap-2")
									span(class="text-amber-600 dark:text-amber-400 mt-1") •
									span <strong class="text-amber-900 dark:text-amber-50">Never add water to lye</strong>—always add lye to water slowly

						//- Accuracy & Responsibility
						div(class="bg-white/50 dark:bg-zinc-900/30 rounded-xl p-5 border border-amber-500/20")
							div(class="flex items-center gap-2 mb-3")
								svg(class="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor")
									path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z")
								h4(class="font-black text-base text-amber-900 dark:text-amber-100") Accuracy & Responsibility
							ul(class="space-y-2 ml-2 list-none")
								li(class="flex items-start gap-2")
									span(class="text-amber-600 dark:text-amber-400 mt-1") •
									span Calculations are based on standard SAP values and may vary with oil quality
								li(class="flex items-start gap-2")
									span(class="text-amber-600 dark:text-amber-400 mt-1") •
									span Always <strong class="text-amber-900 dark:text-amber-50">verify calculations</strong> before use
								li(class="flex items-start gap-2")
									span(class="text-amber-600 dark:text-amber-400 mt-1") •
									span This tool is not certified for commercial soap production
								li(class="flex items-start gap-2")
									span(class="text-amber-600 dark:text-amber-400 mt-1") •
									span Users are <strong class="text-amber-900 dark:text-amber-50">solely responsible</strong> for safety and accuracy

						//- Units & Assumptions
						div(class="bg-white/50 dark:bg-zinc-900/30 rounded-xl p-5 border border-amber-500/20")
							div(class="flex items-center gap-2 mb-3")
								svg(class="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor")
									path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14")
								h4(class="font-black text-base text-amber-900 dark:text-amber-100") Units & Assumptions
							ul(class="space-y-2 ml-2 list-none")
								li(class="flex items-start gap-2")
									span(class="text-amber-600 dark:text-amber-400 mt-1") •
									span All weights default to <strong class="text-amber-900 dark:text-amber-50">grams (g)</strong> for precision
								li(class="flex items-start gap-2")
									span(class="text-amber-600 dark:text-amber-400 mt-1") •
									span SAP values are industry-standard averages
								li(class="flex items-start gap-2")
									span(class="text-amber-600 dark:text-amber-400 mt-1") •
									span Water calculations assume standard soap-making conditions
								li(class="flex items-start gap-2")
									span(class="text-amber-600 dark:text-amber-400 mt-1") •
									span Superfat percentages are applied to the total oil weight

						//- Liability Notice
						div(class="bg-red-500/10 dark:bg-red-500/5 border-2 border-red-500/30 dark:border-red-500/20 rounded-xl p-5")
							div(class="flex items-center gap-2 mb-2")
								svg(class="w-5 h-5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor")
									path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z")
								h4(class="font-black text-base text-red-700 dark:text-red-400") No Liability
							p(class="text-sm font-bold text-red-700 dark:text-red-400 leading-relaxed")
								| Lye.web and its creators assume <strong>no liability</strong> for misuse, incorrect results, or any harm resulting from the use of this calculator. Use at your own risk.
</template>

<style scoped lang="sass">
@reference "tailwindcss"

.safety-disclaimer-banner
	animation: slideIn 0.5s ease-out

@keyframes slideIn
	from
		opacity: 0
		transform: translateY(-20px)
	to
		opacity: 1
		transform: translateY(0)

.expand-enter-active,
.expand-leave-active
	transition: all 0.3s ease-out
	overflow: hidden

.expand-enter-from,
.expand-leave-to
	opacity: 0
	max-height: 0

.expand-enter-to,
.expand-leave-from
	opacity: 1
	max-height: 2000px
</style>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const isSubmitting = ref(false);
const isSubmitted = ref(false);
const error = ref('');

const handleSubmit = async () => {
	if (!email.value || !email.value.includes('@')) {
		error.value = 'Please enter a valid email address';
		return;
	}

	isSubmitting.value = true;
	error.value = '';

	// TODO: Replace with your actual email service integration
	// Examples: Mailchimp, ConvertKit, EmailJS, or your own backend
	try {
		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 1000));

		// Here you would make the actual API call to your email service
		// Example:
		// await fetch('YOUR_EMAIL_SERVICE_ENDPOINT', {
		//   method: 'POST',
		//   headers: { 'Content-Type': 'application/json' },
		//   body: JSON.stringify({ email: email.value })
		// });

		isSubmitted.value = true;
		email.value = '';
	} catch (err) {
		error.value = 'Something went wrong. Please try again.';
	} finally {
		isSubmitting.value = false;
	}
};
</script>

<template lang="pug">
section(class="email-signup-section py-16 px-4 md:px-8 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 border-t border-b border-black/5 dark:border-white/5")
	div(class="max-w-4xl mx-auto text-center")
		div(class="mb-8")
			h2(class="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white mb-4")
				| Get Your Free Soap Making Checklist
			p(class="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto")
				| Join our community and receive a free PDF checklist with essential safety tips, equipment lists, and step-by-step guidance for making soap safely.

		div(v-if="!isSubmitted" class="max-w-md mx-auto")
			form(@submit.prevent="handleSubmit" class="flex flex-col sm:flex-row gap-3")
				input(
					v-model="email"
					type="email"
					placeholder="Enter your email"
					required
					class="flex-1 px-5 py-4 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-(--Theme1) dark:focus:ring-(--LTheme1) font-bold transition-all"
				)
				button(
					type="submit"
					:disabled="isSubmitting"
					class="px-8 py-4 rounded-xl bg-(--Theme1) dark:bg-(--LTheme1) text-white font-bold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
				)
					span(v-if="!isSubmitting") Get Free Checklist
					span(v-else class="flex items-center gap-2")
						svg(class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24")
							circle(class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4")
							path(class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z")
						| Submitting...
			p(v-if="error" class="mt-3 text-sm text-red-600 dark:text-red-400") {{ error }}
			p(class="mt-4 text-xs text-zinc-500 dark:text-zinc-500")
				| We respect your privacy. Unsubscribe at any time.

		div(v-else class="max-w-md mx-auto bg-green-500/10 border border-green-500/30 rounded-xl p-6")
			div(class="flex items-center justify-center mb-3")
				svg(class="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor")
					path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z")
			h3(class="text-xl font-bold text-green-700 dark:text-green-400 mb-2") Success!
			p(class="text-sm text-green-600 dark:text-green-500")
				| Check your email for your free checklist. Don't forget to check your spam folder!
</template>

<style scoped lang="sass">
@reference "tailwindcss"
</style>

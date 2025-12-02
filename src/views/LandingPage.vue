<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useMotion, useMotionVariants } from '@vueuse/motion';
import { useRouter, RouterLink } from 'vue-router';

// Heroicons
import { MenuIcon, SunIcon, MoonIcon, GlobeAltIcon } from '@heroicons/vue/24/outline';

// Components
const FeatureCard = {
	props: ['icon', 'title', 'desc'],
	template: `
    <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow flex gap-4 items-start">
      <div class="w-12 h-12 rounded-lg bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300">
        <component :is="icon" class="w-6 h-6" />
      </div>
      <div>
        <div class="font-semibold">{{ title }}</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">{{ desc }}</div>
      </div>
    </div>
  `
};

const router = useRouter();
const repoUrl = 'https://github.com/SoftEng-Islam/Lye.web';

// UI state
const mobileMenu = ref(false);
const isDark = ref(false);
const lang = ref('en');
const email = ref('');
const subscribed = ref(false);

const toggleMobileMenu = () => (mobileMenu.value = !mobileMenu.value);
const toggleDark = () => {
	isDark.value = !isDark.value;
	localStorage.setItem('lye_dark', isDark.value ? '1' : '0');
};

const toggleLang = () => {
	lang.value = lang.value === 'en' ? 'ar' : 'en';
	localStorage.setItem('lye_lang', lang.value);
	// Also set dir on body
	document.documentElement.dir = lang.value === 'ar' ? 'rtl' : 'ltr';
};

const goToApp = () => router.push('/app');

const scrollTo = (selector) => {
	const el = document.querySelector(selector);
	if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const subscribe = () => {
	if (!email.value || !/^\S+@\S+\.\S+$/.test(email.value)) return;
	// store locally for now (no backend) - in real app you'd POST to server
	localStorage.setItem('lye_news', JSON.stringify({ email: email.value, date: Date.now() }));
	subscribed.value = true;
	email.value = '';
};

onMounted(() => {
	// load preferences
	const d = localStorage.getItem('lye_dark');
	if (d === '1') isDark.value = true;
	const l = localStorage.getItem('lye_lang');
	if (l === 'ar') {
		lang.value = 'ar';
		document.documentElement.dir = 'rtl';
	}
});

// Motion variants
const heroMotion = useMotionVariants({
	initial: { opacity: 0, y: 20 },
	enter: { opacity: 1, y: 0, transition: { delay: 0.05, duration: 0.6 } }
});
const cardMotion = useMotionVariants({
	initial: { opacity: 0, x: 30 },
	enter: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.6 } }
});
const stepMotion = useMotionVariants({
	initial: { opacity: 0, y: 10 },
	enter: { opacity: 1, y: 0, transition: { stagger: 0.08 } }
});

useMotion({ target: 'section[ v-motion ]' });

// Translations (simple inline i18n)
const messages = {
	en: {
		hero: { title: 'Accurate Lye Calculations for Perfect Soap, Every Time', subtitle: 'Enter your oils, choose your superfat, and get instant lye & water measurements.' },
		cta: { start: 'Start Calculating', learn: 'How it works' },
		safety: { note: 'Lye is caustic. Always wear gloves and eye protection. These calculations are an aid — follow safe procedures.' },
		sample: { title: 'Sample Recipe', subtitle: 'Olive-forward', oils: 'Oils', superfat: 'Superfat', result: 'Result', lye: 'Lye', water: 'Water', note: 'This is a sample calculation. Always verify measurements.' },
		features: { title: 'Features' },
		how: { title: 'How to Use' },
		newsletter: { title: 'Stay Updated', desc: 'Enter your email to get notified about new features.', button: 'Subscribe', thanks: 'Thanks! You are subscribed.' }
	},
	ar: {
		hero: { title: 'حساب دقيق للـلي لتحضير صابون مثالي في كل مرة', subtitle: 'أدخل الزيوت واختر نسبة السوبرفات واحصل فوراً على كميات اللي والماء.' },
		cta: { start: 'ابدأ الحساب', learn: 'كيف تعمل' },
		safety: { note: 'اللي مادة حارقة. ارتدِ القفازات ونظارات الحماية. الحسابات للمساعدة — اتبع إجراءات الأمان.' },
		sample: { title: 'وصفة نموذجية', subtitle: 'تركيز على زيت الزيتون', oils: 'الزيوت', superfat: 'نسبة السوبرفات', result: 'النتيجة', lye: 'لي', water: 'ماء', note: 'هذا حساب نموذجي. تحقق دائماً من القياسات.' },
		features: { title: 'الميزات' },
		how: { title: 'كيفية الاستخدام' },
		newsletter: { title: 'ابقَ على اطلاع', desc: 'أدخل بريدك الإلكتروني لتصلك الميزات الجديدة.', button: 'اشترك', thanks: 'شكراً! تم اشتراكك.' }
	}
};

const t = (path) => {
	const segs = path.split('.');
	let obj = messages[lang.value];
	for (const s of segs) {
		obj = obj ? obj[s] : null;
	}
	return obj || path;
};

// Feature data uses icons from heroicons. Use dynamic mapping.
const features = [
	{ icon: MenuIcon, title: lang.value === 'ar' ? 'حساب دقيق' : 'Accurate Calculations', desc: lang.value === 'ar' ? 'حساب كميات اللي والماء بدقة.' : 'Calculate NaOH/KOH & water precisely.' },
	{ icon: GlobeAltIcon, title: lang.value === 'ar' ? 'مفتوح المصدر' : 'Open Source', desc: lang.value === 'ar' ? 'متاح على GitHub ويمكنك التعديل.' : 'Open on GitHub — customize or self-host.' },
	{ icon: SunIcon, title: lang.value === 'ar' ? 'صديق للمبتدئين' : 'Beginner Friendly', desc: lang.value === 'ar' ? 'واجهة بسيطة ومباشرة للمستخدمين الجدد.' : 'Simple UI for beginners and hobbyists.' }
];

const steps = [
	{ title: lang.value === 'ar' ? 'أضف الزيوت' : 'Add Oils', desc: lang.value === 'ar' ? 'أدخل أسماء الزيوت والوزن.' : 'Enter oils and their weights.' },
	{ title: lang.value === 'ar' ? 'اختر السوبرفات' : 'Set Superfat', desc: lang.value === 'ar' ? 'حدد نسبة السوبرفات التي تريدها.' : 'Choose the superfat percentage.' },
	{ title: lang.value === 'ar' ? 'احصل على النتائج' : 'Get Results', desc: lang.value === 'ar' ? 'ستظهر كميات اللي والماء فوراً.' : 'See exact lye & water amounts instantly.' }
];
</script>

<template>
	<div :class="[{ 'dark': isDark }, lang === 'ar' ? 'direction-rtl' : 'direction-ltr']" class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
		<!-- Mobile Nav -->
		<nav class="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
			<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex items-center justify-between h-16">
					<div class="flex items-center gap-3">
						<button @click="toggleMobileMenu" class="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
							<MenuIcon class="w-6 h-6" />
						</button>
						<RouterLink to="/" class="flex items-center gap-3">
							<div class="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">LY</div>
							<div class="hidden sm:block">
								<div class="font-semibold">Lye.web</div>
								<div class="text-xs text-gray-500 dark:text-gray-400">Soap Lye Calculator</div>
							</div>
						</RouterLink>
					</div>

					<div class="hidden md:flex items-center gap-4">
						<button @click="goToApp" class="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
							Start Calculating
						</button>

						<div class="flex items-center gap-2">
							<button @click="toggleDark" class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
								<template v-if="isDark">
									<SunIcon class="w-5 h-5" />
								</template>
								<template v-else>
									<MoonIcon class="w-5 h-5" />
								</template>
							</button>

							<button @click="toggleLang" class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
								<GlobeAltIcon class="w-5 h-5" />
							</button>

							<a :href="repoUrl" target="_blank" class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
								<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
									<path fill-rule="evenodd" d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.19 1.78 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.76.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.4.98.01 1.96.14 2.88.4 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.44-2.71 5.41-5.29 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56C20.72 21.42 24 17.09 24 12 24 5.65 18.35.5 12 .5z" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- Mobile menu panel -->
			<transition name="slide-fade">
				<div v-if="mobileMenu" class="md:hidden px-4 pb-4">
					<div class="flex flex-col gap-2 py-2">
						<button @click="goToApp" class="w-full text-left px-3 py-2 rounded-md bg-indigo-600 text-white">Start Calculating</button>
						<button @click="toggleDark" class="w-full text-left px-3 py-2 rounded-md">Toggle Dark</button>
						<button @click="toggleLang" class="w-full text-left px-3 py-2 rounded-md">Toggle Arabic</button>
						<a :href="repoUrl" class="w-full text-left px-3 py-2 rounded-md">GitHub</a>
					</div>
				</div>
			</transition>
		</nav>

		<main class="pt-20">
			<!-- HERO -->
			<section v-motion="heroMotion" class="py-20">
				<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div class="grid lg:grid-cols-2 gap-10 items-center">
						<div>
							<h1 class="text-4xl sm:text-5xl font-extrabold mb-4 text-indigo-600">
								{{ t('hero.title') }}
							</h1>
							<p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
								{{ t('hero.subtitle') }}
							</p>

							<div class="flex gap-3 flex-wrap">
								<button @click="goToApp" class="px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
									{{ t('cta.start') }}
								</button>
								<button @click="scrollTo('#how')" class="px-5 py-3 border rounded-lg">
									{{ t('cta.learn') }}
								</button>
							</div>

							<div class="mt-8 text-sm text-gray-500 dark:text-gray-400">
								{{ t('safety.note') }}
							</div>
						</div>

						<div class="relative">
							<!-- Illustrative panel with slide-in -->
							<div v-motion="cardMotion" class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
								<div class="flex items-center gap-4 mb-4">
									<div class="w-12 h-12 rounded-lg bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300">Na</div>
									<div>
										<div class="font-semibold">{{ t('sample.title') }}</div>
										<div class="text-xs text-gray-500 dark:text-gray-400">{{ t('sample.subtitle') }}</div>
									</div>
								</div>

								<div class="grid grid-cols-2 gap-3 text-sm">
									<div class="p-3 rounded-md bg-gray-50 dark:bg-gray-700">
										<div class="text-xs text-gray-500">{{ t('sample.oils') }}</div>
										<div class="font-medium">Olive: 300 g</div>
									</div>

									<div class="p-3 rounded-md bg-gray-50 dark:bg-gray-700">
										<div class="text-xs text-gray-500">{{ t('sample.superfat') }}</div>
										<div class="font-medium">5%</div>
									</div>

									<div class="p-3 rounded-md bg-gray-50 dark:bg-gray-700 col-span-2">
										<div class="text-xs text-gray-500">{{ t('sample.result') }}</div>
										<div class="font-medium">{{ t('sample.lye') }} 69.2 g NaOH · {{ t('sample.water') }} 190 g</div>
									</div>
								</div>

								<div class="mt-4 text-xs text-gray-500">{{ t('sample.note') }}</div>
							</div>

							<!-- decorative bubbles -->
							<div class="absolute -right-10 -bottom-8 opacity-30">
								<svg width="140" height="140" viewBox="0 0 100 100" fill="none">
									<circle cx="20" cy="30" r="18" fill="#C7D2FE" />
									<circle cx="60" cy="70" r="28" fill="#E0F2FE" />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- FEATURES -->
			<section id="features" class="py-16 bg-gradient-to-b from-transparent to-gray-50 dark:from-transparent dark:to-gray-900">
				<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 class="text-3xl font-semibold mb-8 text-center">{{ t('features.title') }}</h2>

					<div class="grid md:grid-cols-3 gap-6">
						<FeatureCard v-for="(f, i) in features" :key="i" :icon="f.icon" :title="f.title" :desc="f.desc" />
					</div>
				</div>
			</section>

			<!-- HOW TO -->
			<section id="how" class="py-16">
				<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 class="text-3xl font-semibold mb-6 text-center">{{ t('how.title') }}</h2>

					<div class="space-y-6">
						<div v-for="(step, idx) in steps" :key="idx" v-motion="stepMotion" class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
							<div class="flex items-center gap-4">
								<div class="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-semibold">{{ idx + 1 }}</div>
								<div>
									<div class="font-semibold">{{ step.title }}</div>
									<div class="text-sm text-gray-500 dark:text-gray-400">{{ step.desc }}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- SIGNUP -->
			<section class="py-16 bg-indigo-50 dark:bg-gray-800 px-4">
				<div class="max-w-3xl mx-auto text-center">
					<h2 class="text-2xl font-semibold mb-4">{{ t('newsletter.title') }}</h2>
					<p class="text-gray-600 dark:text-gray-300 mb-6">{{ t('newsletter.desc') }}</p>

					<form @submit.prevent="subscribe" class="flex flex-col sm:flex-row gap-3 justify-center">
						<input v-model="email" type="email" placeholder="you@domain.com" class="px-4 py-3 rounded-lg border focus:outline-none focus:ring focus:ring-indigo-300 w-full sm:w-auto" />
						<button type="submit" class="px-6 py-3 bg-indigo-600 text-white rounded-lg">{{ t('newsletter.button') }}</button>
					</form>

					<div v-if="subscribed" class="mt-4 text-sm text-green-600 dark:text-green-400">{{ t('newsletter.thanks') }}</div>
				</div>
			</section>

			<!-- FOOTER -->
			<footer class="py-8 text-center text-sm text-gray-600 dark:text-gray-400">
				<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					© {{ new Date().getFullYear() }} Lye.web · <a :href="repoUrl" target="_blank" class="underline">GitHub</a> · Built with care
				</div>
			</footer>
		</main>
	</div>
</template>


<style scoped>
.direction-rtl {
	direction: rtl
}

.direction-ltr {
	direction: ltr
}

/* simple transition for mobile menu */
.slide-fade-enter-active,
.slide-fade-leave-active {
	transition: all .25s ease
}

.slide-fade-enter-from {
	transform: translateY(-6px);
	opacity: 0
}

.slide-fade-enter-to {
	transform: translateY(0);
	opacity: 1
}
</style>

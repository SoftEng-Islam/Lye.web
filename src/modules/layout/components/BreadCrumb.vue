<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const breadcrumbs = computed(() =>
	route.matched.map(r => {
		const label = typeof r.meta.breadcrumb === "function"
			? r.meta.breadcrumb(route)
			: r.meta.breadcrumb;

		return {
			name: label,
			path: router.resolve({ name: r.name, params: route.params }).href
		};
	})
);
</script>

<template>
	<div>
		<ul>
			<li class="breadcrumb-item text-black dark:text-white" v-for="bc in breadcrumbs" :key="bc.path">
				<router-link :to="bc.path">{{ bc.name }}</router-link>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="scss">
div ul {
	display: flex;
	gap: 8px;
	list-style: none;

	li::after {
		content: ">";
		margin-left: 8px;
		color: wheat
	}

	li:last-child::after {
		content: "";
	}
}
</style>

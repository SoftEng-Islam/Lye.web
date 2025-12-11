<script setup lang="ts">
const close = defineEmits(['close']);

interface Props {
	title: string;
	msg: string;
}
const props = withDefaults(defineProps<Props>(), {
	title: "Write Your title",
	msg: "Write Your Message"
})

</script>
<template lang="pug">
div
	button(@click="$emit('close')" type="button" class="p-2 px-4 bg-red-500 text-white rounded-2xl") Close
	h2 {{props.title}}
	p {{props.msg}}
</template>

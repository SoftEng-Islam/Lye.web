<script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";

interface Props {
	text: string;
	typingSpeed: number;
	erasingSpeed: number;
	repeating: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	text: "Change This text Please!",
	typingSpeed: 100,
	erasingSpeed: 100,
	repeating: true,
});


// Reactive state
const typeValue = ref("");
const typeStatus = ref(false);

// const displayTextArray = ["word1", "word2", etc..];

const displayTextArray: string[] = props.text.split(" ");
console.log(displayTextArray);

const typingSpeed: number = props.typingSpeed;
const erasingSpeed: number = props.erasingSpeed;
const newTextDelay = 100;

// This will write only the first word in the array
let displayTextArrayIndex: number = 0;

let charIndex: number = 0;

// Typing function
const typeText = () => {
	// const currentText = displayTextArray[displayTextArrayIndex] ?? "";
	const currentText = displayTextArray ?? "";
	console.log(currentText);
	if (charIndex < currentText.length) {
		if (!typeStatus.value) typeStatus.value = true;
		// typeValue.value += currentText.charAt(charIndex);
		typeValue.value += ' ' + currentText[charIndex];
		charIndex += 1;
		setTimeout(typeText, typingSpeed);
	} else {
		// typeStatus.value = false;
		// setTimeout(eraseText, newTextDelay);
	}
};

// Erasing function
const eraseText = () => {
	const currentText = displayTextArray[displayTextArrayIndex] ?? "";
	if (charIndex > 0) {
		if (!typeStatus.value) typeStatus.value = true;
		typeValue.value = currentText.substring(0, charIndex - 1);
		charIndex -= 1;
		setTimeout(eraseText, erasingSpeed);
	} else {
		typeStatus.value = false;
		if (displayTextArray.length > 0) {
			displayTextArrayIndex = (displayTextArrayIndex + 1) % displayTextArray.length;
		} else {
			displayTextArrayIndex = 0;
		}
		setTimeout(typeText, typingSpeed + 1000);
	}
};

// Start typing after component mounts
onMounted(() => {
	setTimeout(typeText, newTextDelay + 200);
});
</script>

<template lang="pug">
h1
	span(class="typed-text") {{ typeValue }}
	span(class="blinking-cursor") |
	span(class="cursor" :class="{ typing: typeStatus }") &nbsp;
</template>

<style scoped lang="sass">
h1
	span.typed-text
		color: #d2b94b

.blinking-cursor
	font-size: 2rem
	color: #2c3e50
	animation: 1s blink step-end infinite

@keyframes blink
	from, to
		color: transparent
	50%
		color: #2c3e50
</style>

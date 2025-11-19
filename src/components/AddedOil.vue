<script setup lang="ts">
import { ref, defineProps } from "vue";
import { useOilStore } from "../store/index";

interface Props {
	oil: null;
	// size?: number
	// count: number;
	// isActive?: boolean;
}

const props = defineProps<Props>();

// for Default Values
// const props = withDefaults(defineProps<Props>(), {
// 	size: 14
// })

const theme = ref({
	color: 'green-500'
});

const weightOfOil = ref(0);

const RemoveThisOil = (val: object) => {
	useOilStore().RemoveOils(val);
};

// weightOfOil
const SetOilWeight = (nameOfOil: string) => {
	useOilStore().AddedOilsWeight(nameOfOil, weightOfOil.value);
};
</script>
<template lang="pug">
li( class="hover:shadow-2xl duration-200 flex overflow-hidden items-center py-2 first-of-type:border-none border-t border-t-(--LTheme3) dark:border-t-(--Theme3) rounded-md p-2 bg-(--LTheme4) dark:bg-(--Theme4)")
	//- remove Oil
	button(type="button" class="mr-2 w-7 h-7 cursor-pointer flex items-center justify-center rounded-sm hover:opacity-50 flex-none bg-(--LTheme3) dark:bg-(--Theme3)" @click="RemoveThisOil(props.oil)")
		<svg class="w-5 fill-red-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 6V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7ZM13.4142 13.9997L15.182 12.232L13.7678 10.8178L12 12.5855L10.2322 10.8178L8.81802 12.232L10.5858 13.9997L8.81802 15.7675L10.2322 17.1817L12 15.4139L13.7678 17.1817L15.182 15.7675L13.4142 13.9997ZM9 4V6H15V4H9Z"/></svg>
	//- Oil Name
	span(class="pr-2 w-3/5 text-sm text-black dark:text-white overflow-hidden overflow-ellipsis whitespace-wrap") {{ props.oil.Name }}
	div(class="overflow-hidden w-1/5 flex flex-col gap-1 items-center justify-center ml-auto")
		select(class="w-full p-1 outline-none rounded-md border bg-(--LTheme3) dark:bg-(--Theme3) border-gray-300 dark:border-gray-600 text-green-500" id="oilUnits" name="oilunits")
			option(value="Gram") g
			option(value="Kilo") K.g
		input(class="w-full p-1 text-black dark:text-white outline-none rounded-md border bg-(--LTheme3) dark:bg-(--Theme3)" type="number" maxlength="3" v-model="weightOfOil" @input="SetOilWeight(props.oil.Name)")
</template>

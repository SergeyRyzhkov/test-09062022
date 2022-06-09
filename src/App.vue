<script lang="ts" setup>
import { computed, ref } from "vue";

type ButtonPosition = {
  col: number;
  row: number;
};

const matrixDem = 3;

const clickedButtonIndexList = ref<number[]>([]);
const lastPressedButtonIndex = ref(-1);

const allClickCost = ref(0);

const getButtonPositionByIndex = (idx: number): ButtonPosition => {
  return {
    row: Math.floor(idx / matrixDem) + 1,
    col: (idx % matrixDem) + 1,
  };
};

const buttonClickCost = (index: number) => {
  if (clickedButtonIndexList.value.length === 0) {
    return 0;
  }
  const lastPosition = getButtonPositionByIndex(lastPressedButtonIndex.value);
  const currentPosition = getButtonPositionByIndex(index);
  return Math.abs(lastPosition.col - currentPosition.col) + Math.abs(lastPosition.row - currentPosition.row) > 2 ? 2 : 1;
};

const onButtonClick = (index: number) => {
  if (!buttonClicked(index)) {
    allClickCost.value = allClickCost.value + buttonClickCost(index);
    lastPressedButtonIndex.value = index;
    clickedButtonIndexList.value.push(index);
  }
};

const buttonClicked = (index: number) => {
  return clickedButtonIndexList.value.some((iter) => iter === index);
};
</script>

<template>
  <main class="layout-wrapper">
    <div class="m-auto">
      <section class="grid grid-cols-3 grid-rows-3 gap-10">
        <button
          v-for="index of 9"
          :key="index"
          class="flex h-20 w-20 border border-gray-600 hover:border-blue-600 hover:bg-blue-500 hover:text-[22px] hover:font-semibold hover:text-white"
          :class="[
            buttonClicked(index - 1) ? 'border-blue-600 bg-blue-500' : '',
            lastPressedButtonIndex === index - 1 ? 'border-yellow-600 bg-yellow-500' : '',
          ]"
          @click="onButtonClick(index - 1)"
        >
          <span class="m-auto cursor-pointer" :class="[buttonClicked(index - 1) ? 'text-[22px] font-semibold text-white' : '']">{{
            index
          }}</span>
        </button>
      </section>
      <section class="mt-16">
        <p>Кликнутые: {{ clickedButtonIndexList }}</p>
        <p>Стоимость кликов: {{ allClickCost }}</p>
      </section>
    </div>
  </main>
</template>

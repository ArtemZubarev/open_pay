<script setup lang="ts">
import { computed } from "vue";

interface Props {
  devided?: boolean;
  single?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  devided: false,
});

const containerClass = computed(() => {
  if (props.devided) {
    return "flex flex-col justify-between gap-[18px] mt-[160px]";
  } else if (props.single) {
    return "flex flex-col justify-between gap-[18px] mt-[60px]";
  } else {
    return "bg-cover bg-contain";
  }
});
</script>

<template>
  <div
    class="w-full max-w-[659px] h-[746px] relative z-2 rounded-[50px] overflow-hidden"
    :class="[containerClass, !devided && !single ? 'back' : '']"
  >
    <template v-if="devided">
      <!-- Верхний блок -->
      <div
        class="flex-1 bg-background rounded-[60px] flex items-center justify-center text-white text-lg font-semibold"
      >
        <slot name="top">Верхний блок</slot>
      </div>

      <!-- Нижний блок -->
      <div
        class="flex-1 bg-background rounded-[60px] flex items-center justify-center text-white text-lg font-semibold"
      >
        <slot name="bottom">Нижний блок</slot>
      </div>
    </template>

    <template v-else-if="single">
      <div
        class="flex-1 bg-background rounded-[60px] flex items-center justify-center text-white text-lg font-semibold"
      >
        <slot name="top">Верхний блок</slot>
      </div>

      <!-- Нижний блок не отображается -->
      <div
        class="flex-1 bg-background rounded-[60px] flex items-center justify-center text-white text-lg font-semibold invisible"
      >
        <slot name="bottom">Нижний блок</slot>
      </div>
    </template>

    <!-- Если без деления -->
    <template v-else>
      <div
        class="w-full h-full flex items-center justify-center text-white text-xl font-bold"
      >
        <slot>Фон с картинкой</slot>
      </div>
    </template>

    <!-- Одиночный блок -->
  </div>
</template>

<style>
.back {
  background-image: url("/assets/images/promo-back-2.png");
  background-size: 100% 100%; /* растянуть по ширине и высоте */
  background-position: center;
  background-repeat: no-repeat;
}
</style>

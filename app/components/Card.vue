<!-- Card.vue -->
<template>
  <div
    class="bg-[#F5F5F5] rounded-[50px] overflow-hidden relative w-full max-w-[460px] aspect-[4/3] p-8 shadow-[8px_8px_50px_rgba(0,0,0,0.15)] flex flex-col justify-between"
    :style="{
      transform:
        'rotate(' +
        rotate +
        'deg) translateX(' +
        translateX +
        'px) translateY(' +
        translateY +
        'px)',
      zIndex: z,
    }"
  >
    <div class="flex flex-col gap-2">
      <h2
        class="text-[28px] md:text-[40px] font-bold text-[#141414] leading-[120%]"
      >
        {{ title }}
      </h2>
      <p class="text-[20px] md:text-[30px] text-[#141414] mt-2">
        {{ subtitle }}
      </p>
    </div>
    <div class="relative w-full flex" :class="imgAlignClass">
      <img
        :src="imgSrc"
        class="max-w-[50%] md:max-w-[60%] max-h-[50%] object-contain"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: String,
  subtitle: String,
  imgSrc: String,
  rotate: { type: Number, default: 0 },
  translateX: { type: Number, default: 0 },
  translateY: { type: Number, default: 0 },
  z: { type: Number, default: 0 },
  imgAlign: { type: String, default: "right" }, // left, right, center
});

const imgAlignClass = computed(() => {
  switch (props.imgAlign) {
    case "left":
      return "justify-start";
    case "right":
      return "justify-end";
    default:
      return "justify-center";
  }
});
</script>

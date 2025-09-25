<template>
  <div class="absolute w-full h-full bottom-0 left-0 photos overflow-hidden">
    <img
      v-for="(src, i) in images"
      :key="i"
      :src="src"
      alt=""
      class="absolute photo"
      :class="[i < 3 ? 'left-0' : 'right-0', sizeClasses[i]]"
      :style="getStyle(i)"
    />
  </div>
</template>

<script setup>
import photo1 from "@/assets/images/photo_1.png";
import photo2 from "@/assets/images/photo_2.png";
import photo3 from "@/assets/images/photo_3.png";
import photo4 from "@/assets/images/photo_4.png";
import photo5 from "@/assets/images/photo_5.png";
import photo6 from "@/assets/images/photo_6.png";

const images = [photo1, photo2, photo3, photo4, photo5, photo6];

// индивидуальные размеры
const sizeClasses = [
  "w-[121px] h-[121px]",
  "w-[157px] h-[157px]",
  "w-[92px] h-[92px]",
  "w-[193px] h-[193px]",
  "w-[117px] h-[117px]",
  "w-[134px] h-[134px]",
];

// распределяем фото по вертикали от bottom в процентах
const positions = images.map((_, i) => {
  const bottomPercent = 10 + (i / (images.length - 1)) * 40; // базовый %
  const heightPercent =
    (parseInt(sizeClasses[i].match(/h-\[(\d+)px\]/)[1]) / 600) * 100;
  // 600 — пример высоты контейнера, можно сделать динамической
  return {
    bottom: bottomPercent + heightPercent / 2, // сдвигаем вверх на половину высоты фото
    xOffset: (Math.random() - 0.5) * 20,
  };
});

const getStyle = (i) => {
  const pos = positions[i];
  return {
    bottom: pos.bottom + "%",
    transform: `translateX(${pos.xOffset}px)`,
  };
};
</script>

<style scoped>
.photos img {
  will-change: transform;
}
</style>

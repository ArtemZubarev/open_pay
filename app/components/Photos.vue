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

const sizeClasses = [
  "w-[121px] h-[121px]",
  "w-[157px] h-[157px]",
  "w-[92px] h-[92px]",
  "w-[193px] h-[193px]",
  "w-[117px] h-[117px]",
  "w-[134px] h-[134px]",
];

const heights = sizeClasses.map((c) => parseInt(c.match(/h-\[(\d+)px\]/)[1]));

const containerHeight = 600; // px, пример

// разделяем на левую и правую группу
const leftImages = heights.slice(0, 3);
const rightImages = heights.slice(3);

// функция для распределения фото в слоты с случайным смещением внутри слота
const generatePositions = (groupHeights) => {
  const slotCount = groupHeights.length;
  return groupHeights.map((height, i) => {
    const slotHeight = containerHeight / slotCount;
    const slotTop = i * slotHeight;
    const slotBottom = slotTop + slotHeight - height;
    const bottomPx = slotTop + Math.random() * (slotBottom - slotTop);
    return {
      bottom: (bottomPx / (containerHeight * 2)) * 100,
      xOffset: (Math.random() - 0.5) * 20,
    };
  });
};

const leftPositions = generatePositions(leftImages);
const rightPositions = generatePositions(rightImages);

// объединяем позиции обратно в один массив
const positions = [...leftPositions, ...rightPositions];

const getStyle = (i) => ({
  bottom: positions[i].bottom + "%",
  transform: `translateX(${positions[i].xOffset}px)`,
});
</script>

<style scoped>
.photos img {
  will-change: transform;
}
</style>

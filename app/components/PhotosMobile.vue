<template>
  <div
    class="relative flex max-w-[360px] w-[90%] mx-auto h-[93px] mt-4 justify-center items-center"
  >
    <img
      v-for="(src, i) in images"
      :key="i"
      :src="src"
      alt=""
      class="absolute transition-all duration-300 w-[55px] h-[55px]"
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

const images = [photo1, photo4, photo2, photo6, photo5];

// задаём стили для каждого фото
const getStyle = (i) => {
  if (i === 0) {
    // левое маленькое
    return {
      left: "5%",
      zIndex: 1,
      transform: "translateY(0px)",
    };
  }
  if (i === 1) {
    // левое среднее
    return {
      left: "20%",
      zIndex: 2,
      transform: "translateY(0px) scale(1.2)",
    };
  }
  if (i === 2) {
    // центральное самое большое (горка)
    return {
      left: "50%",
      zIndex: 3,
      transform: "translateX(-50%) scale(1.4)",
    };
  }
  if (i === 3) {
    // справа маленькое
    return {
      right: "20%",
      zIndex: 2,
      transform: "translateY(0px) scale(1.2)",
    };
  }
  if (i === 4) {
    // крайнее справа
    return {
      right: "5%",
      zIndex: 1,
      transform: "translateY(0px)",
    };
  }
};
</script>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const offset = ref(0);
const container = ref(null);
const visible = ref(false);

const handleScroll = () => {
  if (!container.value) return;

  const rect = container.value.getBoundingClientRect();
  // проверяем, есть ли хотя бы частичная видимость блока
  visible.value = rect.bottom - 1500 > 0 && rect.top < window.innerHeight;

  // обновляем offset только если блок виден
  if (visible.value) {
    offset.value = window.scrollY;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // сразу проверяем
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const parallax = (factor) => {
  return {
    transform: `translateY(${offset.value * factor * 10}px)`,
    transition: "transform 0.1s linear",
  };
};
</script>

<template>
  <div
    ref="container"
    class="absolute inset-0 w-full h-full pointer-events-none z-10"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1966"
      preserveAspectRatio="xMidYMid slice"
      class="w-full h-full"
      style="overflow: visible"
    >
      <g filter="url(#blurFilter)" style="overflow: visible">
        <ellipse
          cx="425.256"
          cy="1103.08"
          rx="658.257"
          ry="504.849"
          fill="#3840FF"
          :style="parallax(0.05)"
        />
        <ellipse
          cx="1878.74"
          cy="892.624"
          rx="658.257"
          ry="504.849"
          fill="#A661FF"
          :style="parallax(-0.03)"
        />
        <ellipse
          cx="1852.28"
          cy="1006.3"
          rx="512.291"
          ry="352.484"
          fill="#141414"
          :style="parallax(0.08)"
        />
        <ellipse
          cx="1155.25"
          cy="1014.23"
          rx="512.291"
          ry="352.484"
          fill="#EAAFFF"
          :style="parallax(-0.06)"
        />
        <ellipse
          cx="1598.4"
          cy="678.75"
          rx="466.956"
          ry="320.749"
          fill="#A36EF7"
          :style="parallax(0.04)"
        />
        <ellipse
          cx="1286.72"
          cy="811.356"
          rx="466.956"
          ry="320.749"
          fill="#EAAFFF"
          :style="parallax(-0.02)"
        />
        <ellipse
          cx="486.341"
          cy="931.82"
          rx="567.997"
          ry="435.381"
          fill="#8960FF"
          fill-opacity="0.94"
          :style="parallax(0.07)"
        />
        <ellipse
          cx="233.287"
          cy="811.463"
          rx="376.811"
          ry="327.662"
          fill="#AF7EFF"
          fill-opacity="0.94"
          :style="parallax(-0.05)"
        />
        <ellipse
          cx="1949.64"
          cy="931.82"
          rx="169.579"
          ry="87.3513"
          fill="#0029FF"
          :style="parallax(0.03)"
        />
        <ellipse
          cx="1757.64"
          cy="1015.37"
          rx="206.843"
          ry="115.606"
          fill="#711AFF"
          :style="parallax(-0.04)"
        />
      </g>

      <defs>
        <filter
          id="blurFilter"
          x="-200%"
          y="-200%"
          width="500%"
          height="500%"
          filterUnits="userSpaceOnUse"
        >
          <feGaussianBlur stdDeviation="178.696" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

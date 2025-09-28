<template>
  <div
    ref="container"
    class="w-full flex justify-center relative mt-[-10px] md:mt-[45px]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="562"
      height="247"
      viewBox="0 0 562 247"
      fill="none "
    >
      <!-- Путь ракеты -->
      <path
        ref="rocketPath"
        d="M27 32.3789C61.5 119.379 139.603 194.379 278.5 194.379C417.397 194.379 498.5 122.379 530 32.3789"
        stroke="#302E3F"
        stroke-width="4"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-dasharray="15 15"
        fill="none"
      />

      <!-- Зеленые круги -->
      <circle
        ref="greenCircle"
        cx="529.5"
        cy="32.5"
        r="32.5"
        fill="#95F368"
        fill-opacity="0.25"
      />
      <circle ref="innerCircle" cx="529.5" cy="32.5" r="14.13" fill="#95F368" />
      <!-- Галочка -->
      <path
        ref="checkMark"
        d="M523 32 L528 37 L538 27"
        stroke="white"
        stroke-width="2"
        fill="none"
        :style="{ opacity: 0 }"
      />

      <!-- Флаг -->
      <g clip-path="url(#clip0)">
        <path
          d="M32.5 65C50.4493 65 65 50.4493 65 32.5C65 14.5507 50.4493 0 32.5 0C14.5507 0 0 14.5507 0 32.5C0 50.4493 14.5507 65 32.5 65Z"
          fill="#F0F0F0"
        />
        <path
          d="M31.0869 32.5003H64.9999C64.9999 29.5669 64.6089 26.7252 63.8803 24.022H31.0869V32.5003Z"
          fill="#D80027"
        />
        <path
          d="M31.0869 15.5437H60.2298C58.2403 12.2973 55.6965 9.42777 52.7306 7.06543H31.0869V15.5437Z"
          fill="#D80027"
        />
        <path
          d="M32.4998 64.9998C40.1486 64.9998 47.1789 62.3561 52.7305 57.9346H12.269C17.8207 62.3561 24.851 64.9998 32.4998 64.9998Z"
          fill="#D80027"
        />
        <path
          d="M4.77017 49.4563H60.2299C61.8271 46.8501 63.0658 44.0013 63.8804 40.978H1.11963C1.93429 44.0013 3.17297 46.8501 4.77017 49.4563Z"
          fill="#D80027"
        />
        <path
          d="M15.0546 5.07533H18.0163L15.2614 7.07675L16.3137 10.3152L13.559 8.31378L10.8042 10.3152L11.7132 7.51753C9.28764 9.53799 7.16168 11.9052 5.40973 14.5427H6.3587L4.6051 15.8167C4.33189 16.2725 4.06986 16.7355 3.81875 17.2053L4.65613 19.7826L3.09385 18.6475C2.7055 19.4703 2.35028 20.3116 2.031 21.1704L2.95356 24.0101H6.3587L3.60382 26.0116L4.65613 29.25L1.90138 27.2486L0.25124 28.4475C0.0860742 29.7752 0 31.1275 0 32.5H32.5C32.5 14.5509 32.5 12.4348 32.5 0C26.0797 0 20.0948 1.8624 15.0546 5.07533Z"
          fill="#0052B4"
        />
      </g>

      <!-- Ракета -->
      <g ref="rocketGroup">
        <g transform="translate(-260,-194)" filter="url(#filter0_d)">
          <path
            d="M237.55 216.875C239.98 213.091 242.274 209.165 245.22 205.748L243.9 204.794L243.271 203.391C243.341 198.354 242.65 192.711 243.007 187.723C243.048 187.132 243.185 185.985 243.525 185.516C244.075 184.759 245.018 184.619 245.74 184.132L237.451 173.872C236.376 172.201 238.57 172.762 239.423 172.711C243.549 172.464 247.904 171.877 252.002 171.784C253.099 171.759 253.56 171.683 254.387 172.553C255.88 174.124 257.263 176.767 258.639 178.586C258.945 178.991 259.829 180.304 260.191 180.422C273.697 178.122 287.688 178.505 300.715 183.056C305.622 184.771 312.303 187.816 316.466 190.897C319.698 193.288 319.801 194.936 316.533 197.374C314.849 198.629 312.505 200.035 310.672 201.108C295.515 209.977 277.205 211.615 260.134 209.111C259.891 209.135 259.767 209.303 259.626 209.476C257.799 211.689 256.389 214.988 254.56 217.286C253.929 218.047 252.522 217.852 251.595 217.84C247.753 217.79 243.354 217.63 239.529 217.348C239.129 217.319 237.637 217.316 237.557 216.882L237.55 216.875ZM285.363 188.833C278.176 183.223 268.793 194.214 276.677 200.473C283.86 206.173 293.308 195.033 285.363 188.833Z"
            fill="#A36EF7"
          />
        </g>
        <circle
          ref="rocketCircle"
          cx="21"
          cy="0"
          r="9"
          fill="#CCACFF"
          class="rocket-circle"
        />
      </g>

      <defs>
        <clipPath id="clip0">
          <rect width="65" height="65" fill="white" />
        </clipPath>
        <filter
          id="filter0_d"
          x="222"
          y="156"
          width="112"
          height="76"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="7.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.639216 0 0 0 0 0.431373 0 0 0 0 0.968627 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const container = ref(null);
const rocketGroup = ref(null);
const rocketPath = ref(null);
const greenCircle = ref(null);
const innerCircle = ref(null);
const checkMark = ref(null);
const rocketCircle = ref(null);

let pathLength = 0;
let ticking = false;

const handleScroll = () => {
  if (!rocketPath.value || !rocketGroup.value || !container.value) return;

  const svgRect = container.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  let progress = (windowHeight - svgRect.top) / (windowHeight + svgRect.height);
  progress = Math.min(Math.max(progress, 0), 1);

  const distance = pathLength * Math.min(progress * 1.5, 1);
  const point = rocketPath.value.getPointAtLength(distance);

  const step = pathLength * 0.001;
  const nextPoint = rocketPath.value.getPointAtLength(
    Math.min(distance + step, pathLength)
  );
  const angle =
    Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);

  rocketGroup.value.setAttribute(
    "transform",
    `translate(${point.x},${point.y}) rotate(${angle})`
  );

  // Зеленый круг и галочка
  const dx = point.x - 529.5;
  const dy = point.y - 32.5;
  const dist = Math.sqrt(dx * dx + dy * dy);

  greenCircle.value.setAttribute(
    "r",
    32.5 + Math.max(0, 15 * (1 - Math.min(dist / 100, 1)))
  );
  innerCircle.value.setAttribute(
    "r",
    14.13 + Math.max(0, 5 * (1 - Math.min(dist / 50, 1)))
  );

  checkMark.value.style.opacity = dist < 10 ? 1 : 0;
};

const onScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll();
      ticking = false;
    });
    ticking = true;
  }
};

onMounted(() => {
  pathLength = rocketPath.value.getTotalLength();
  window.addEventListener("scroll", onScroll, { passive: true });
  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<style scoped>
svg {
  overflow: visible;
}
@keyframes flicker {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}
.rocket-circle {
  animation: flicker 1.5s infinite ease-in-out;
}
</style>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  direction: {
    type: String,
    default: "bottom", // top, bottom, left, right
  },
  duration: {
    type: Number,
    default: 700,
  },
  delay: {
    type: Number,
    default: 300,
  },
  scale: {
    type: Number,
    default: 0.97,
  },
  rotate: {
    type: Number,
    default: 1,
  },
});

const isVisible = ref(false);
const el = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          isVisible.value = true;
        }, props.delay);
        observer.disconnect();
      }
    },
    { threshold: 0.1 }
  );

  if (el.value) observer.observe(el.value);
});

const getTranslate = () => {
  let x = 0,
    y = 0;
  switch (props.direction) {
    case "top":
      y = -20;
      break;
    case "bottom":
      y = 20;
      break;
    case "left":
      x = -20;
      break;
    case "right":
      x = 20;
      break;
  }
  return `translate(${x}px, ${y}px)`;
};

const getStyle = () => ({
  transition: `all ${props.duration}ms cubic-bezier(0.25,1.5,0.5,1)`,
  transform: isVisible.value
    ? "translate(0,0) scale(1) rotate(0deg)"
    : `${getTranslate()} scale(${props.scale}) rotate(${props.rotate}deg)`,
  opacity: isVisible.value ? 1 : 0.0, // слегка видимая изначально
});
</script>

<template>
  <div ref="el" :style="getStyle()">
    <slot />
  </div>
</template>

<!-- <script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  direction: { type: String, default: "bottom" },
  duration: { type: Number, default: 700 },
  delay: { type: Number, default: 200 },
  scale: { type: Number, default: 0.97 },
  rotate: { type: Number, default: 1 },
});

const el = ref(null);
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => (isVisible.value = true), props.delay);
        observer.disconnect();
      }
    },
    { threshold: 0.1 }
  );

  if (el.value) observer.observe(el.value);
});

const getInitialTransform = () => {
  let x = 0,
    y = 0;
  switch (props.direction) {
    case "top":
      y = -10;
      break;
    case "bottom":
      y = 10;
      break;
    case "left":
      x = -10;
      break;
    case "right":
      x = 10;
      break;
  }
  return `translate(${x}px, ${y}px) scale(${props.scale}) rotate(${props.rotate}deg)`;
};

const getVisibleTransform = () => "translate(0px, 0px) scale(1) rotate(0deg)";
</script>

<template>
  <div
    ref="el"
    class="fade-in-block"
    :class="{ visible: isVisible }"
    :style="{
      transitionDuration: props.duration + 'ms',
      transform: isVisible ? getVisibleTransform() : getInitialTransform(),
    }"
  >
    <slot />
  </div>
</template>

<style scoped>
.fade-in-block {
  opacity: 0.2; /* изначально слегка видим */
  will-change: transform, opacity;
}

.fade-in-block.visible {
  opacity: 1;
}
</style> -->

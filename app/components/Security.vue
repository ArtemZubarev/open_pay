<template>
  <BaseContainer class="z-2 relative mt-[220px]" :max-width="'1292px'">
    <h2 class="title text-[88px] font-bold text-center mb-6">
      Security & Compliance
    </h2>

    <div class="flex flex-col gap-4 w-full mt-14">
      <div
        v-for="(item, i) in items"
        :key="i"
        :ref="(el) => (blocks[i] = el)"
        class="box flex justify-between items-center px-10 rounded-[50px] shadow-[8px_8px_50px_0_rgba(0,0,0,0.15)] origin-center"
        :class="i === 1 ? 'py-6' : 'py-10'"
        :style="getBlockStyle(i)"
      >
        <!-- Текст -->
        <div class="flex gap-4 items-center leading-[48px] max-w-[85%]">
          <span class="text-[#A36EF7] text-[40px] font-medium"
            >({{ i + 1 }})</span
          >
          <span class="text-white text-[40px] font-bold">{{ item }}</span>
        </div>

        <!-- Иконка -->
        <img
          src="/assets/images/switcher.svg"
          alt="switcher"
          class="w-[48px] h-[48px]"
        />
      </div>
    </div>
  </BaseContainer>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";

const items = [
  "KYC/AML for US users",
  "Licensed money movement via regulated partners (state availability varies)",
  "Ongoing risk monitoring & sanctions screening",
];

// массив для DOM-элементов
const blocks = ref([]);

// активный индекс (или null)
const activeIndex = ref(null);

// плавность (в ms) — можно изменить
const TRANSITION_MS = 900;

// функция возвращает стиль для блока (scale + transition)
const getBlockStyle = (i) => {
  const scale = activeIndex.value === i ? 1.05 : 1;
  return {
    transform: `scale(${scale})`,
    transition: `transform ${TRANSITION_MS}ms cubic-bezier(.22,.9,.24,1)`,
  };
};

let observer = null;

onMounted(async () => {
  // дождёмся, чтобы refs заполнились
  await nextTick();

  // создаём observer, корневая область — СРЕДИНА экрана
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const idx = blocks.value.indexOf(entry.target);
        if (idx === -1) return;

        if (entry.isIntersecting) {
          activeIndex.value = idx;
        } else {
          if (activeIndex.value === idx) {
            activeIndex.value = null;
          }
        }
      });
    },
    {
      root: null,
      // смещаем "рабочую зону" так, чтобы активная точка была на 1/3 сверху
      rootMargin: "-33% 0px -67% 0px",
      threshold: 0,
    }
  );

  // наблюдаем за всеми блоками (после nextTick они есть)
  blocks.value.forEach((el) => {
    if (el) observer.observe(el);
  });
});

onBeforeUnmount(() => {
  if (observer) {
    blocks.value.forEach((el) => {
      if (el) observer.unobserve(el);
    });
    observer.disconnect();
  }
});
</script>

<style scoped>
.title {
  background: linear-gradient(270deg, #a87afe -5.72%, #cf99e6 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* при желании можно добавить will-change */
div[ref] {
  will-change: transform;
}
.box {
  background: linear-gradient(180deg, #252431 50%, #16151d 100%);
}
</style>

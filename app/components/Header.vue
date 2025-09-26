<template>
  <BaseContainer>
    <header
      class="relative z-20 text-white px-6 py-[30px] flex items-center justify-between"
    >
      <!-- Лого -->
      <div class="flex items-center">
        <img src="/assets/images/logo.svg" alt="Logo" class="h-8 w-auto" />
      </div>

      <!-- Меню (desktop) -->
      <nav class="hidden lg:flex lg:gap-[46px] xl:gap-[56px] items-center">
        <NuxtLink
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.href"
          class="text-[#5D587B] hover:text-white transition-colors duration-200 font-normal flex items-center gap-2"
          :class="{ 'text-white': index === menuItems.length - 1 }"
        >
          {{ item.label }}
          <img
            v-if="index === menuItems.length - 1"
            src="/assets/images/arrow-menu.svg"
            alt="Arrow"
            class="w-4 h-4"
          />
        </NuxtLink>
      </nav>

      <!-- Кнопка (desktop) -->
      <div class="hidden lg:block">
        <button
          class="bg-white text-[#141414] px-6 py-2 rounded-full hover:opacity-90 transition cursor-pointer font-normal"
        >
          Sign Up
        </button>
      </div>

      <!-- Бургер (mobile) -->
      <button
        class="lg:hidden flex flex-col gap-1.5 z-30"
        @click="isMenuOpen = true"
      >
        <span class="w-6 h-0.5 bg-white"></span>
        <span class="w-6 h-0.5 bg-white"></span>
        <span class="w-6 h-0.5 bg-white"></span>
      </button>
    </header>

    <!-- Мобильное меню -->
    <transition name="slide">
      <div v-if="isMenuOpen" class="fixed inset-0 z-40 flex">
        <!-- Затемнение -->
        <div class="flex-1 bg-black/50" @click="isMenuOpen = false"></div>

        <!-- Сайдбар -->
        <div class="w-64 bg-[#16151d] h-full p-6 flex flex-col gap-6">
          <!-- Крестик -->
          <button class="self-end mb-4" @click="isMenuOpen = false">✕</button>

          <!-- Меню -->
          <nav class="flex flex-col gap-4">
            <NuxtLink
              v-for="(item, index) in menuItems"
              :key="index"
              :to="item.href"
              class="text-[#5D587B] hover:text-white transition-colors duration-200 font-normal flex items-center gap-2"
              :class="{ 'text-white': index === menuItems.length - 1 }"
              @click="isMenuOpen = false"
            >
              {{ item.label }}
              <img
                v-if="index === menuItems.length - 1"
                src="/assets/images/arrow-menu.svg"
                alt="Arrow"
                class="w-4 h-4"
              />
            </NuxtLink>
          </nav>

          <!-- Кнопка -->
          <button
            class="mt-auto bg-white text-[#141414] px-6 py-2 rounded-full hover:opacity-90 transition cursor-pointer font-normal"
          >
            Sign Up
          </button>
        </div>
      </div>
    </transition>
  </BaseContainer>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Why OpenPay", href: "#why" },
  { label: "About OpenPay", href: "#about" },
  { label: "Support", href: "#support" },
  { label: "Open an Account", href: "#account" }, // последняя ссылка
];
</script>

<style scoped>
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-to {
  transform: translateX(0%);
}
.slide-leave-from {
  transform: translateX(0%);
}
.slide-leave-to {
  transform: translateX(100%);
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
</style>

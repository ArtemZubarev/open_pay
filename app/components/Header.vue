<template>
  <BaseContainer>
    <header
      class="relative z-2 text-white px-6 py-[60px] flex items-center justify-between"
    >
      <!-- Лого слева -->
      <div class="flex items-center">
        <img src="/assets/images/logo.svg" alt="Logo" class="h-8 w-auto" />
      </div>

      <!-- Меню по центру -->
      <nav class="flex gap-[56px] items-center">
        <NuxtLink
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.href"
          class="text-[#5D587B] hover:text-white transition-colors duration-200 font-normal flex items-center gap-2"
          :class="{ 'text-white': index === menuItems.length - 1 }"
        >
          {{ item.label }}
          <!-- Если последний пункт меню, добавляем иконку -->
          <img
            v-if="index === menuItems.length - 1"
            src="/assets/images/arrow-menu.svg"
            alt="Arrow"
            class="w-4 h-4"
          />
        </NuxtLink>
      </nav>

      <!-- Кнопка справа -->
      <div>
        <button
          class="bg-white text-[#141414] px-6 py-2 rounded-full hover:opacity-90 transition cursor-pointer font-normal"
        >
          Sign Up
        </button>
      </div>
    </header>
  </BaseContainer>
</template>

<script setup>
const menuItems = [
  { label: "Home", href: "/" },
  { label: "Why OpenPay", href: "#why" },
  { label: "About OpenPay", href: "#about" },
  { label: "Support", href: "#support" },
  { label: "Open an Account", href: "#account" }, // последняя ссылка
];
</script>

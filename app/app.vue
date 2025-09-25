<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import Header from "@/components/Header.vue";
import HeroBlock from "@/components/HeroBlock.vue";
import Promo from "@/components/Promo.vue";
import PurpleHazePrlx from "@/components/PurpleHazePrlx.vue";
import HeroBack from "./HeroBack.vue";

const promoRef = ref<HTMLElement | null>(null);
const hazeRef = ref<HTMLElement | null>(null);

const updatePosition = () => {
  if (!promoRef.value || !hazeRef.value) return;

  const rect = promoRef.value.getBoundingClientRect();
  hazeRef.value.style.top = `${rect.top + window.scrollY}px`;
  hazeRef.value.style.left = `${rect.left + window.scrollX}px`;
  hazeRef.value.style.width = `${rect.width}px`;
  hazeRef.value.style.height = `${rect.height}px`;
};

onMounted(() => {
  updatePosition();
  window.addEventListener("resize", updatePosition);
  window.addEventListener("scroll", updatePosition, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updatePosition);
  window.removeEventListener("scroll", updatePosition);
});
</script>

<template>
  <div
    class="bg-background text-foreground min-h-screen relative overflow-hidden"
  >
    <div class="relative">
      <Header />
      <HeroBlock />
      <HeroBack />
    </div>

    <!-- Purple haze, позиция управляется JS -->
    <div ref="hazeRef" class="absolute z-1 pointer-events-none">
      <PurpleHazePrlx class="w-full h-full" />
    </div>

    <!-- Promo блок -->
    <div ref="promoRef">
      <Promo />
    </div>
    <div class="relative">
      <Benefits />
      <BenefitsBack />
    </div>
    <div class="relative">
      <WhatWeDo />
    </div>
    <div class="relative">
      <HowItWorks />
    </div>

    <ForWho />
    <div class="relative">
      <Technology />
    </div>
    <div class="relative">
      <Security />
      <SecurityBack />
    </div>
    <Contacts />
    <div class="relative">
      <Footer />
    </div>
  </div>
</template>

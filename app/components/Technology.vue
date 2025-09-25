<template>
  <BaseContainer class="z-2 relative mt-[250px]" :max-width="'1292px'">
    <img class="mx-auto" src="/assets/images/venomphpr.svg" alt="" />
    <h2
      class="text-[88px] font-bold text-center mb-12 mt-[33px] leading-[120%]"
    >
      Technology Backbone: <br />
      Venom & PHPR
    </h2>
    <TechnologyInner />
    <!-- Фоновое свечение -->
  </BaseContainer>
  <img
    src="/assets/images/glow.png"
    alt=""
    class="glow absolute inset-0 object-cover opacity-30"
  />
</template>

<style scoped>
.glow {
  bottom: -600px !important;
}
</style>

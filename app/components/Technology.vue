<template>
  <BaseContainer
    class="z-2 relative mt-[80px] md:mt-[250px]"
    :max-width="'1292px'"
  >
    <img
      class="mx-auto max-w-[150px] md:max-w-[unset]"
      src="/assets/images/venomphpr.svg"
      alt=""
    />
    <h2
      class="text-title md:text-title-md lg:text-title-lg xl:text-title-xl font-bold text-center mb-12 mt-[5%] md:mt-[5%] leading-[120%]"
    >
      Technology Backbone: <br />
      Venom & PHPR
    </h2>
    <TechnologyInner />
  </BaseContainer>
  <!-- Фоновое свечение -->
  <img
    src="/assets/images/glow.png"
    alt=""
    class="glow absolute w-[2200px] transform translate-x-[-50%] left-[50%] top-[50%] translate-y-[-38%] md:translate-y-[-22%] xl:translate-y-[-18%] opacity-90 max-w-[2200px]"
  />
</template>

<style scoped></style>

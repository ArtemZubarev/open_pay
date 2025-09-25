<template>
  <BaseContainer
    class="relative mt-[340px] pb-[160px] mx-auto"
    :max-width="'1292px'"
  >
    <!-- Центральные -->
    <div class="central w-full flex justify-center gap-[16px]">
      <PromoBlock :devided="true" class="shrink-1">
        <template #top>
          <div class="h-full w-full flex flex-col justify-center gap-6 px-20">
            <img class="w-[125px]" src="/assets/images/flag.svg" alt="" />
            <p class="text-[40px] font-normal leading-[120%]">
              Licensed US money transfer partners
            </p>
          </div>
        </template>
        <template #bottom>
          <div class="h-full w-full flex flex-col gap-6 px-20 py-20">
            <p class="relative z-20 text-[40px] font-normal leading-[120%]">
              Audited reserves backing PHPR
            </p>
            <img
              class="absolute bottom-0 w-[80%] left-[50%] -translate-x-[50%]"
              src="/assets/images/logos.svg"
              alt=""
            />
          </div>
        </template>
      </PromoBlock>
      <PromoBlock class="shrink-1">
        <template #default>
          <div class="h-full w-full flex flex-col gap-2">
            <div class="flex flex-col justify-center w-full flex-1 px-20">
              <p class="text-[40px] font-normal">human support</p>
              <h2 class="support text-[88px] font-bold mb-0">24/7</h2>
            </div>
            <div
              class="flex relative flex-col justify-center w-full flex-1 px-20"
            >
              <p class="relative z-10 text-[40px] font-normal">
                Bank-grade encryption & security
              </p>
              <img
                class="absolute bottom-0 w-[225px] left-[50%] -translate-x-[50%]"
                src="/assets/images/lock.svg"
                alt=""
              />
            </div>
          </div>
        </template>
      </PromoBlock>
    </div>

    <!-- Левый декоративный -->
    <div
      class="absolute left-0 top-0 -translate-x-[696px] pointer-events-none z-2 w-full max-w-[659px]"
    >
      <PromoBlock>
        <template #default>Центральный</template>
      </PromoBlock>
    </div>

    <!-- Правый декоративный -->
    <div
      class="absolute right-0 top-0 -translate-x-[-696px] pointer-events-none z-2 w-full max-w-[659px]"
    >
      <PromoBlock :single="true" class="shrink-1">
        <template #top>Верх</template>
        <template #bottom>Низ</template>
      </PromoBlock>
    </div>
  </BaseContainer>
</template>

<style scoped>
.support {
  background: linear-gradient(270deg, #a87afe -5.72%, #cf99e6 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

<template>
  <BaseContainer
    class="relative mt-10 xl:mt-[140px] pb-[160px] mx-auto"
    :max-width="'1292px'"
  >
    <!-- Центральные -->
    <div
      class="central w-full flex flex-col md:flex-row justify-center gap-[8px] md:gap-[16px]"
    >
      <PromoBlock :devided="true" class="shrink-1">
        <template #top>
          <div
            class="h-full w-full flex flex-col justify-center gap-[8px] md:gap-6 px-10 md:px-20"
          >
            <img
              class="w-[55px] md:w-[125px]"
              src="/assets/images/flag.svg"
              alt=""
            />
            <p
              class="text-[20px] sm:text-[30px] lg:text-[40px] font-normal leading-[120%]"
            >
              Licensed US money <br class="md:hidden" />
              transfer partners
            </p>
          </div>
        </template>
        <template #bottom>
          <div
            class="h-full w-full flex flex-col justify-center md:justify-start gap-[8px] md:gap-6 px-10 md:px-20 md:py-20"
          >
            <img
              class="max-w-[55px] md:hidden"
              src="/assets/images/circle.svg"
              alt=""
            />
            <p
              class="relative z-20 text-[20px] sm:text-[30px] lg:text-[40px] font-normal leading-[120%] relative z-20"
            >
              Audited reserves <br class="md:hidden" />
              backing PHPR
            </p>
            <img
              class="absolute hidden md:block bottom-0 w-[160px] md:w-[80%] left-[50%] -translate-x-[50%]"
              src="/assets/images/logos.svg"
              alt=""
            />
          </div>
        </template>
      </PromoBlock>
      <PromoBlock class="shrink-1">
        <template #default>
          <div class="h-full w-full flex flex-col gap-2">
            <div
              class="flex flex-col justify-center w-full flex-1 px-10 md:px-20"
            >
              <p
                class="text-[20px] sm:text-[30px] lg:text-[40px] font-normal relative z-20"
              >
                human support
              </p>
              <h2
                class="support text-title-md lg:text-title-lg xl:text-title-xl font-bold mb-0 relative z-20"
              >
                24/7
              </h2>
            </div>
            <div
              class="flex relative flex-col justify-center w-full flex-1 px-10 md:px-20"
            >
              <p
                class="relative z-10 text-[20px] sm:text-[30px] lg:text-[40px] font-normal"
              >
                Bank-grade encryption & security
              </p>
              <img
                class="absolute bottom-0 w-[125px] md:w-[225px] left-[50%] -translate-x-[50%]"
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

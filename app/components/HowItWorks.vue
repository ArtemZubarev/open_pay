<template>
  <BaseContainer class="z-2 relative mt-30" :max-width="'1292px'">
    <h2
      class="text-title md:text-title-md lg:text-title-lg xl:text-title-xl font-bold text-center mb-12"
    >
      How it works
    </h2>

    <div class="flex flex-col items-center gap-[80px] mt-28 w-full">
      <!-- Верхний ряд -->
      <div class="flex flex-col lg:flex-row justify-center gap-[-50px] w-full">
        <FadeUp direction="left">
          <div
            class="bg-[#F5F5F5] rounded-[50px] flex flex-col p-8 flex-1 max-w-[460px] aspect-[4/3] transform translate-x-2 rotate-3 z-10 overflow-hidden"
            style="box-shadow: 8px 8px 50px 0 rgba(0, 0, 0, 0.15)"
          >
            <h2
              class="text-[28px] md:text-[40px] text-[#141414] font-bold text-left z-20"
            >
              Sign up & verify
            </h2>
            <p
              class="text-[20px] md:text-[30px] text-[#141414] mt-2 text-left z-20"
            >
              in minutes
            </p>
            <img
              src="/assets/images/clock.svg"
              alt=""
              class="mt-4 max-w-[100px] md:max-w-[190px] absolute right-[40px] bottom-[-20px]"
            />
          </div>
        </FadeUp>
        <FadeUp :delay="300">
          <div
            class="bg-[#F5F5F5] rounded-[50px] flex flex-col p-8 flex-1 max-w-[460px] aspect-[4/3] transform translate-y-2 -rotate-2 z-20 overflow-hidden"
            style="box-shadow: 8px 8px 50px 0 rgba(0, 0, 0, 0.15)"
          >
            <h2
              class="text-[28px] md:text-[40px] text-[#141414] font-bold text-left z-20"
            >
              Load USD
            </h2>
            <p
              class="text-[20px] md:text-[30px] text-[#141414] mt-2 text-left z-20"
            >
              via bank transfer or card
            </p>
            <img
              src="/assets/images/graph.svg"
              alt=""
              class="mt-4 max-w-[270px] md:max-w-[430px] absolute left-[-30px] bottom-[-40px]"
            />
          </div>
        </FadeUp>
        <FadeUp :delay="300">
          <div
            class="bg-[#F5F5F5] rounded-[50px] flex flex-col p-8 flex-1 max-w-[460px] aspect-[4/3] transform rotate-5 -translate-x-2 -translate-y-2 z-30 overflow-hidden"
            style="box-shadow: 8px 8px 50px 0 rgba(0, 0, 0, 0.15)"
          >
            <h2
              class="text-[28px] md:text-[40px] text-[#141414] font-bold text-left z-20 leading-[120%]"
            >
              Choose recipient
            </h2>
            <p
              class="text-[20px] md:text-[30px] text-[#141414] mt-2 text-left leading-[120%] z-20"
            >
              bank, wallet, or pickup partner
            </p>
            <img
              src="/assets/images/click.svg"
              alt=""
              class="mt-4 max-w-[130px] md:max-w-[229px] mx-auto"
            />
          </div>
        </FadeUp>
      </div>

      <!-- Нижний ряд -->
      <div
        class="flex flex-col lg:flex-row justify-center gap-[-50px] mt-[-80px] md:mt-[-40px] w-full"
      >
        <FadeUp :delay="300">
          <div
            class="bg-[#F5F5F5] rounded-[50px] flex flex-col p-8 flex-1 max-w-[460px] aspect-[4/3] transform rotate-5 translate-x-6 z-40 overflow-hidden"
            style="box-shadow: 8px 8px 50px 0 rgba(0, 0, 0, 0.15)"
          >
            <h2
              class="text-[28px] md:text-[40px] text-[#141414] font-bold text-left z-20"
            >
              Send & track
            </h2>
            <p
              class="text-[20px] md:text-[30px] text-[#141414] mt-2 text-left z-20"
            >
              with an on-chain transaction ID
            </p>
            <img
              src="/assets/images/search.svg"
              alt=""
              class="mt-0 md:mt-4 max-w md:max-w-[314px] mx-auto"
            />
          </div>
        </FadeUp>
        <FadeUp :delay="500">
          <div
            class="bg-[#F5F5F5] rounded-[50px] flex flex-col p-8 flex-1 max-w-[460px] aspect-[4/3] transform -rotate-2 z-50 overflow-hidden"
            style="box-shadow: 8px 8px 50px 0 rgba(0, 0, 0, 0.15)"
          >
            <h2
              class="text-[28px] md:text-[40px] text-[#141414] font-bold text-left z-20"
            >
              Get status updates
            </h2>
            <p
              class="text-[20px] md:text-[30px] text-[#141414] mt-2 text-left z-20"
            >
              until delivered
            </p>
            <img
              src="/assets/images/tick.svg"
              alt=""
              class="mt-4 max-w-[120px] md:max-w-[169px] absolute right-[20px] bottom-[-40px]"
            />
          </div>
        </FadeUp>
      </div>
    </div>
  </BaseContainer>
</template>

<style scoped>
div > div {
  transition: transform 0.3s ease;
}
</style>

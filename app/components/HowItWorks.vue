<template>
  <BaseContainer class="z-2 relative h-[1250px] mt-30" :max-width="'1292px'">
    <h2 class="xl:text-title-xl lg:xl:text-title-lg font-bold text-left mb-12">
      How it works
    </h2>

    <div class="flex flex-col items-center gap-[80px] mt-28 w-full">
      <!-- Верхний ряд -->
      <div class="flex justify-center gap-[-50px] w-full">
        <FadeUp direction="left">
          <div
            class="bg-[#F5F5F5] rounded-[50px] flex flex-col p-8 flex-1 max-w-[460px] aspect-[4/3] transform translate-x-2 rotate-3 z-10 overflow-hidden"
            style="box-shadow: 8px 8px 50px 0 rgba(0, 0, 0, 0.15)"
          >
            <h2 class="text-[40px] text-[#141414] font-bold text-left">
              Sign up & verify
            </h2>
            <p class="text-[30px] text-[#141414] mt-2 text-left">in minutes</p>
            <img
              src="/assets/images/clock.svg"
              alt=""
              class="mt-4 w-[190px] h-[190px] absolute right-[40px] bottom-[-20px]"
            />
          </div>
        </FadeUp>
        <FadeUp :delay="300">
          <div
            class="bg-[#F5F5F5] rounded-[50px] flex flex-col p-8 flex-1 max-w-[460px] aspect-[4/3] transform translate-y-2 -rotate-2 z-20 overflow-hidden"
            style="box-shadow: 8px 8px 50px 0 rgba(0, 0, 0, 0.15)"
          >
            <h2 class="text-[40px] text-[#141414] font-bold text-left">
              Load USD
            </h2>
            <p class="text-[30px] text-[#141414] mt-2 text-left">
              via bank transfer or card
            </p>
            <img
              src="/assets/images/graph.svg"
              alt=""
              class="mt-4 w-[430px] absolute left-[-30px] bottom-[-40px]"
            />
          </div>
        </FadeUp>
        <FadeUp :delay="300">
          <div
            class="bg-[#F5F5F5] rounded-[50px] flex flex-col p-8 flex-1 max-w-[460px] aspect-[4/3] transform rotate-5 -translate-x-2 -translate-y-2 z-30 overflow-hidden"
            style="box-shadow: 8px 8px 50px 0 rgba(0, 0, 0, 0.15)"
          >
            <h2 class="text-[40px] text-[#141414] font-bold text-left">
              Choose recipient
            </h2>
            <p class="text-[30px] text-[#141414] mt-2 text-left">
              bank, wallet, or pickup partner
            </p>
            <img
              src="/assets/images/click.svg"
              alt=""
              class="mt-4 w-[229px] h-20 mx-auto"
            />
          </div>
        </FadeUp>
      </div>

      <!-- Нижний ряд -->
      <div class="flex justify-center gap-[-50px] mt-[-40px] w-full">
        <FadeUp :delay="300">
          <div
            class="bg-[#F5F5F5] rounded-[50px] flex flex-col p-8 flex-1 max-w-[460px] aspect-[4/3] transform rotate-5 translate-x-6 z-40 overflow-hidden"
            style="box-shadow: 8px 8px 50px 0 rgba(0, 0, 0, 0.15)"
          >
            <h2 class="text-[40px] text-[#141414] font-bold text-left">
              Send & track
            </h2>
            <p class="text-[30px] text-[#141414] mt-2 text-left">
              with an on-chain transaction ID
            </p>
            <img
              src="/assets/images/search.svg"
              alt=""
              class="mt-4 w-[314px] h-20 mx-auto"
            />
          </div>
        </FadeUp>
        <FadeUp :delay="500">
          <div
            class="bg-[#F5F5F5] rounded-[50px] flex flex-col p-8 flex-1 max-w-[460px] aspect-[4/3] transform -rotate-2 z-50 overflow-hidden"
            style="box-shadow: 8px 8px 50px 0 rgba(0, 0, 0, 0.15)"
          >
            <h2 class="text-[40px] text-[#141414] font-bold text-left">
              Get status updates
            </h2>
            <p class="text-[30px] text-[#141414] mt-2 text-left">
              until delivered
            </p>
            <img
              src="/assets/images/tick.svg"
              alt=""
              class="mt-4 w-[169px] h-[169px] absolute right-[20px] bottom-[-40px]"
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

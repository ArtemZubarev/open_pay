<template>
  <BaseContainer class="z-2 relative mt-16" :max-width="'1292px'">
    <div class="flex gap-6">
      <!-- Первый блок -->

      <FadeUp class="flex-1" direction="left">
        <div
          class="box flex flex-col justify-between relative flex-1 bg-[#252431] rounded-[30px] py-12 px-16 overflow-hidden"
        >
          <!-- Контент -->
          <div class="relative z-10 flex flex-col h-full">
            <h3 class="text-[40px] font-bold text-white mb-4">About PHPR</h3>
            <p class="text-[30px] text-white mb-6 leading-[120%]">
              PHPR is our peso-denominated digital token that powers settlement
              behind the scenes. It ensures speed and stability across
              corridors.
            </p>
          </div>
          <a
            href="#"
            class="flex relative items-center text-[#A36EF7] text-[30px] font-medium hover:underline z-2"
          >
            Visit PHPR site for details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2 w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          <!-- Фоновая картинка справа снизу -->
          <img
            src="/assets/images/log_1.svg"
            alt=""
            class="absolute -bottom-14 right-6 w-[280px] h-[300px] object-contain"
          />
        </div>
      </FadeUp>

      <!-- Второй блок -->
      <FadeUp class="flex-1" direction="right">
        <div
          class="box relative flex flex-col justify-between flex-1 bg-[#252431] rounded-[30px] py-12 px-16 overflow-hidden"
        >
          <!-- Контент -->
          <div class="relative z-10 flex flex-col h-full">
            <h3 class="text-[40px] font-bold text-white mb-4">
              Built on Venom
            </h3>
            <p class="text-[30px] text-white mb-6 leading-[120%]">
              Venom makes transfers faster, cheaper, and more transparent. Every
              transfer is recorded immutably, so you can always see where your
              money is.
            </p>
          </div>
          <a
            href="#"
            class="flex relative items-center text-[#A36EF7] text-[30px] font-medium hover:underline z-2"
          >
            Learn more on Venom
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2 w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          <!-- Фоновая картинка справа снизу -->
          <img
            src="/assets/images/log_1.svg"
            alt=""
            class="absolute bottom-0 right-0 w-[280px] h-[300px] object-contain"
          />
        </div>
      </FadeUp>
    </div>
  </BaseContainer>
</template>

<style scoped>
.box {
  box-shadow: 8px 8px 50px 0 rgba(0, 0, 0, 0.15);
}
</style>

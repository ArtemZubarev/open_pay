<template>
  <BaseContainer class="z-2 relative" :max-width="'1292px'">
    <h2
      class="text-title md:text-title-md lg:text-title-lg xl:text-title-xl font-bold text-center mb-12"
    >
      Key Benefits
    </h2>

    <div class="flex flex-col lg:flex-row lg:flex-wrap gap-4 mt-[200px]">
      <!-- Левая колонка -->
      <div class="flex flex-col gap-4 md:w-[calc(50%-8px)]">
        <FadeUp direction="left">
          <div class="bg-[#252525] rounded-[50px] relative">
            <h3
              class="font-semibold text-[38px] sm:text-[46px] md:text-[50px] px-[25px] pt-[35px] lg:px-[60px] lg:pt-[60px]"
            >
              Fast & Fair
            </h3>
            <p
              class="text-[28px] sm:text-[36px] md:text-[40px] px-[25px] lg:px-[60px]"
            >
              Live FX quotes, no <br />
              hidden markups.
            </p>
            <img class="w-full" src="/assets/images/fast-n-fair.png" alt="" />
          </div>
        </FadeUp>
        <FadeUp direction="left">
          <div class="bg-[#252525] rounded-[50px] pb-[40px] lg:p-[60px]">
            <h3
              class="font-semibold text-[38px] sm:text-[46px] md:text-[50px] px-[25px] pt-[35px] lg:px-[60px] lg:pt-[60px]"
            >
              On-Chain <br />
              Settlement
            </h3>
            <p
              class="text-[28px] sm:text-[36px] md:text-[40px] px-[25px] lg:px-[60px]"
            >
              Built on Venom for <br />
              scale and low fees.
            </p>
            <img
              src="/assets/images/venom-logo.svg"
              alt=""
              class="venom w-[200px] mx-auto mt-[20px] lg:mx-0 lg:w-[299px] lg:mt-[40px]"
            />
          </div>
        </FadeUp>
      </div>

      <!-- Правая колонка -->
      <div class="flex flex-col gap-4 lg:w-[calc(50%-8px)] relative">
        <FadeUp direction="right">
          <div class="folder">
            <img
              src="/assets/images/folder.png"
              class="inner-img rounded-b-[60px] hidden lg:block"
            />
            <img
              src="/assets/images/check.svg"
              alt=""
              class="check w-[71px] h-[71px] absolute right-[38px] bottom-[34px] z-3"
            />
            <div class="inner-text bg-[#252525] rounded-[50px] lg:p-[60px]">
              <h3
                class="font-semibold text-[38px] sm:text-[46px] md:text-[50px] px-[25px] pt-[35px] lg:px-[60px] lg:pt-[60px]"
              >
                Compliance-First
              </h3>
              <p
                class="text-[28px] sm:text-[36px] md:text-[40px] px-[25px] lg:px-[60px]"
              >
                US KYC/AML; licensed <br />
                partners where br required.
              </p>
            </div>
          </div>
        </FadeUp>
        <FadeUp direction="right">
          <div
            class="bg-[#252525] rounded-[50px] lg:p-[60px] relative overflow-hidden"
          >
            <div class="relative z-2 pb-[150px]">
              <h3
                class="font-semibold text-[38px] sm:text-[46px] md:text-[50px] px-[25px] pt-[35px] lg:px-[60px] lg:pt-[60px]"
              >
                Multiple Payout <br />
                Options
              </h3>
              <p
                class="text-[28px] sm:text-[36px] md:text-[40px] px-[25px] lg:px-[60px]"
              >
                Bank deposit, mobile <br />
                wallet, cash-out <br />
                partners.
              </p>
            </div>
            <img
              class="absolute w-[312px] bottom-0 right-[54px] z-1"
              src="/assets/images/coins.svg"
              alt=""
            />
          </div>
        </FadeUp>

        <div class="flex justify-around mt-[10px]">
          <a
            href="#"
            class="text-foreground hover:opacity-60 text-[30px] transition-colors duration-200 font-normal flex items-center gap-2"
          >
            Learn More
            <img
              src="/assets/images/arrow-menu.svg"
              alt="Arrow"
              class="w-6 h-6 mt-1"
            />
          </a>
          <a
            href="#"
            class="text-foreground hover:opacity-60 text-[30px] transition-colors duration-200 font-normal flex items-center gap-2"
          >
            Get Started
            <img
              src="/assets/images/arrow-menu.svg"
              alt="Arrow"
              class="w-6 h-6 mt-1"
            />
          </a>
        </div>
      </div>

      <!-- <div class="flex flex-col gap-4 w-[calc(50%-8px)]">
        <a href="#" class="text-blue-600 font-semibold">Learn More</a>
        <a href="#" class="text-blue-600 font-semibold">Get Started</a>
      </div> -->
    </div>
  </BaseContainer>
</template>

<script setup>
// Логики нет, чисто разметка
</script>

<style scoped>
.folder {
  position: relative;

  z-index: 2;
}
.inner-text {
  position: relative;
  z-index: 2;
  background: linear-gradient(180deg, #a36ef7 0%, #7448b9 100%);
  box-shadow: 0 -11.779px 47.115px 0 rgba(135, 64, 162, 0.5),
    0 4.417px 5.889px 0 rgba(255, 255, 255, 0.3) inset,
    0 -23.557px 94.23px 0 rgba(135, 64, 162, 0.4) inset;
  padding-bottom: 180px;
}
.inner-img {
  position: relative;
  width: 100%;
  height: 100%;
  /* background-image: url("/assets/images/folder.png"); */
  /* background-size: 100% 100%; */
  /* background-position: center; */
  position: absolute;
  width: 100%;
  height: calc(100%);
  left: 0;
  z-index: 1;
  transform: translateY(-98px);

  background-size: cover;
}
.folder:before {
}
</style>

<template>
  <BaseContainer class="z-2 relative" :max-width="'1292px'">
    <h2 class="text-[88px] font-bold text-center mb-12">Key Benefits</h2>

    <div class="flex flex-wrap gap-4 mt-[200px]">
      <!-- Левая колонка -->
      <div class="flex flex-col gap-4 w-[calc(50%-8px)]">
        <FadeUp direction="left">
          <div class="bg-[#252525] rounded-[50px] relative">
            <h3 class="text-[50px] font-semibold px-[60px] pt-[60px]">
              Fast & Fair
            </h3>
            <p class="text-[40px] px-[60px]">
              Live FX quotes, no <br />
              hidden markups.
            </p>
            <img class="w-full" src="/assets/images/fast-n-fair.png" alt="" />
          </div>
        </FadeUp>
        <FadeUp direction="left">
          <div class="bg-[#252525] p-4 rounded-[50px] p-[60px]">
            <h3 class="text-[50px] font-semibold">
              On-Chain <br />
              Settlement
            </h3>
            <p class="text-[40px]">
              Built on Venom for <br />
              scale and low fees.
            </p>
            <img
              src="/assets/images/venom-logo.svg"
              alt=""
              class="venom w-[299px] mt-[40px]"
            />
          </div>
        </FadeUp>
      </div>

      <!-- Правая колонка -->
      <div class="flex flex-col gap-4 w-[calc(50%-8px)] relative">
        <FadeUp direction="right">
          <div class="folder">
            <img
              src="/assets/images/folder.png"
              class="inner-img rounded-b-[60px]"
            />
            <img
              src="/assets/images/check.svg"
              alt=""
              class="check w-[71px] h-[71px] absolute right-[38px] bottom-[34px] z-3"
            />
            <div class="inner-text bg-[#252525] p-4 rounded-[50px] p-[60px]">
              <h3 class="text-[50px] font-semibold">Compliance-First</h3>
              <p class="text-[40px]">
                US KYC/AML; licensed <br />
                partners where br required.
              </p>
            </div>
          </div>
        </FadeUp>
        <FadeUp direction="right">
          <div class="bg-[#252525] p-4 rounded-[50px] p-[60px] relative">
            <div class="relative z-2 pb-[150px]">
              <h3 class="text-[50px] font-semibold">
                Multiple Payout <br />
                Options
              </h3>
              <p class="text-[40px]">
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

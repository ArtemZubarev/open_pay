<template>
  <BaseContainer
    class="z-2 relative mt-[80px] md:mt-[220px]"
    :max-width="'1292px'"
  >
    <h2
      class="title text-title md:text-title-md lg:text-title-lg xl:text-title-xl font-bold mb-12 text-center"
    >
      What We Do
    </h2>
    <div class="flex justify-center">
      <div
        class="speech rounded-[28px] md:rounded-full text-[14px] text-center px-[10px] py-[6px] md:px-[40px] md:text-[34px]"
      >
        Remittances - Moving at Internet Speed
      </div>
    </div>
    <div class="flex flex-wrap gap-6 mt-[50px]">
      <!-- Блок 1 -->
      <div
        class="rounded-[22px] md:rounded-[50px] bg-[#252431] pr-6 pl-0 w-full md:w-[48%] flex items-center overflow-hidden"
      >
        <img
          src="/assets/images/pic_1.svg"
          alt=""
          class="max-w-[70px] md:max-w-[unset] md:h-[189px] md:w-[116px] object-cover flex-shrink-0"
        />
        <div class="ml-6">
          <h3 class="text-white font-normal text-[18px] lg:text-[36px]">
            Finds partners
          </h3>
        </div>
      </div>

      <!-- Блок 2 -->
      <div
        class="rounded-[22px] md:rounded-[50px] bg-[#252431] pr-6 pl-0 w-full md:w-[48%] flex items-center overflow-hidden"
      >
        <img
          src="/assets/images/pic_2.svg"
          alt=""
          class="max-w-[70px] md:max-w-[unset] md:h-[189px] md:w-[116px] object-cover flex-shrink-0"
        />
        <div class="ml-6">
          <h3 class="text-white font-normal text-[18px] lg:text-[36px]">
            Issues tokens
          </h3>
        </div>
      </div>

      <!-- Блок 3 -->
      <div
        class="rounded-[22px] md:rounded-[50px] bg-[#252431] pr-6 pl-0 w-full md:w-[48%] flex items-center overflow-hidden"
      >
        <img
          src="/assets/images/pic_3.svg"
          alt=""
          class="max-w-[70px] md:max-w-[unset] md:h-[189px] md:w-[116px] object-cover flex-shrink-0"
        />
        <div class="ml-6">
          <h3 class="text-white font-normal text-[18px] lg:text-[36px]">
            Identifies key technologies to empower users
          </h3>
        </div>
      </div>

      <!-- Блок 4 -->
      <div
        class="rounded-[22px] md:rounded-[50px] bg-[#252431] pr-6 pl-0 w-full md:w-[48%] flex items-center overflow-hidden"
      >
        <img
          src="/assets/images/pic_4.svg"
          alt=""
          class="max-w-[70px] md:max-w-[unset] md:h-[189px] md:w-[116px] object-cover flex-shrink-0 object-cover flex-shrink-0"
        />
        <div class="ml-6">
          <h3 class="text-white font-normal text-[18px] lg:text-[36px]">
            Provides KYC and Customer Support
          </h3>
        </div>
      </div>
    </div>
    <p
      class="mission text-center text-[18px] md:text-[32px] mt-[97px] max-w-[1160px] mx-auto"
    >
      We help people and businesses move money from the US to global corridors.
      Fast, fair, and with verifiable on-chain receipts. Fund in USD
      (bank/card), deliver to bank, mobile wallet, or partner pickup - no crypto
      knowledge required.
      <br />
      <br />
      OpenPay facilitates cross-border transactions at internet speed. All
      international remittances are conducted by licensed partners.
    </p>
    <Rocket />
  </BaseContainer>
  <Photos class="hidden md:block" />
</template>

<script setup>
// Логики нет, чисто разметка
</script>

<style scoped>
.title {
  background: linear-gradient(270deg, #a87afe -5.72%, #cf99e6 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.speech {
  border: 1px solid #625d81;
  background: linear-gradient(90deg, #16151d 0%, #2c2a3b 100%);
}
</style>

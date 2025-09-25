<template>
  <section class="text-white py-32 z-2 relative">
    <BaseContainer>
      <!-- Заголовок -->
      <h1 class="text-center font-semibold leading-[1.4] text-[88px]">
        <div class="flex justify-center gap-26 z-1">
          <span>Send Money at</span>
          <span class="onchain">On-chain</span>
        </div>
        <div class="flex justify-center gap-20">
          <div class="speed block">
            <span class="speed-text">Speed</span>
            <!-- <img class="speed-back" src="/assets/images/speed.svg" alt="" /> -->
          </div>
          <span>with OpenPay</span>
        </div>
      </h1>

      <!-- Подзаголовок -->
      <p
        class="text-center mt-8 text-[34px] font-normal text-foreground max-w-4xl mx-auto"
      >
        Powering US-based remittances with on-chain speed and transparency -
        built on Venom.
      </p>

      <!-- Кнопки -->
      <div class="flex justify-center mt-12 gap-6 flex-wrap">
        <!-- Градиентная кнопка -->
        <button
          class="btn-primary text-[#141414] rounded-full px-6 py-3 cursor-pointer"
        >
          Get Early Access
        </button>

        <!-- Вторая кнопка -->
        <button class="btn-secondary rounded-full px-6 py-3 cursor-pointer">
          Corporate Queries
        </button>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup>
import BaseContainer from "~/components/BaseContainer.vue";
</script>

<style scoped>
h1 span {
  display: block;
}

/* Первая пилюльная кнопка */
.btn-primary {
  background: linear-gradient(90deg, #a36ef7 0%, #fff 100%);
}

/* Вторая пилюльная кнопка */
.btn-secondary {
  border: 1px solid #625d81;
  background: linear-gradient(90deg, #16151d 0%, #2c2a3b 100%);
}
.btn-primary,
.btn-secondary {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.btn-primary:hover,
.btn-secondary:hover {
  transform: scale(1.05);
  opacity: 0.9;
}
.onchain {
  position: relative;
}
.onchain::before {
  content: "";
  width: 72px;
  height: 72px;
  position: absolute;
  left: -84px;
  top: 23px;
  background-image: url("/assets/images/chain.svg");
  background-size: contain;
}
.speed {
  position: relative;
}
.speed-text {
  position: relative;
  background: linear-gradient(
    90deg,
    #d96efd 0%,
    #986ef6 28.59%,
    #606fe7 60.45%,
    #db7da6 97.48%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 2;
  font-size: 74px;
  padding-top: 12px;
  font-weight: 500;
}
.speed::before {
  position: absolute;
  z-index: 1;
  top: 0;
  width: 382px;
  height: 108px;
  content: "";
  top: 13%;
  left: -34%;
  /* transform: translate(-50%, -42%); */
  background-image: url("/assets/images/speed.svg");
  pointer-events: none;
  background-size: contain;
}
</style>

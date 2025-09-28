<template>
  <section class="text-white py-16 md:py-32 z-2 relative">
    <BaseContainer>
      <!-- Заголовок -->
      <h1
        class="text-center font-semibold leading-[1.4] text-title md:text-title-md lg:text-title-lg xl:text-title-xl"
      >
        <div
          class="flex flex-col md:flex-row items-center md:items-unset justify-center md:gap-16 lg:gap-20 xl:gap-26 z-1"
        >
          <span>Send Money at</span>
          <span class="onchain max-w-max md:max-w-unset">On-chain</span>
        </div>
        <div
          class="flex flex-col md:flex-row items-center md:items-unset justify-center md:gap-10 lg:gap-14 xl:gap-20"
        >
          <div class="speed block">
            <span class="speed-text">Speed</span>
            <!-- <img class="speed-back" src="/assets/images/speed.svg" alt="" /> -->
          </div>
          <span>with OpenPay</span>
        </div>
      </h1>

      <!-- Подзаголовок -->
      <p
        class="text-center mt-8 text-[18px] md:text-[28px] lg:text-[34px] font-normal text-foreground max-w-md md:max-w-xl lg:max-w-4xl mx-auto"
      >
        Powering US-based remittances with on-chain speed and transparency -
        built on Venom.
      </p>

      <!-- Кнопки -->
      <div class="flex justify-center mt-12 gap-2 md:gap-6">
        <!-- Градиентная кнопка -->
        <button
          class="btn-primary text-[13px] md:text-[16px] px-3 py-2 md:px-6 md:py-3 text-[#141414] rounded-full cursor-pointer"
        >
          Get Early Access
        </button>

        <!-- Вторая кнопка -->
        <button
          class="btn-secondary text-[13px] md:text-[16px] px-3 py-2 md:px-6 md:py-3 rounded-full cursor-pointer"
        >
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
  position: absolute;
  background-image: url("/assets/images/chain.svg");
  background-size: contain;
  width: 32px;
  height: 32px;
  left: -23%;
  top: 4px;
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

  font-weight: 500;
}
.speed::before {
  position: absolute;
  z-index: 1;
  top: 0;
  content: "";
  top: 13%;

  background-image: url("/assets/images/speed.svg");
  pointer-events: none;
  background-size: 100% 100%;

  width: 190px;
  height: 45px;
  top: 7%;
  left: -44%;
}
@media (min-width: 768px) {
  .onchain::before {
    width: 42px;
    height: 42px;
    left: -52px;
    top: 14px;
  }
  .speed-text {
    font-size: 45px;
    padding-top: 4px;
  }
  .speed:before {
    width: 230px;
    height: 60px;
    top: 14%;
    left: -35%;
  }
}

@media (min-width: 1024px) {
  .onchain::before {
    width: 52px;
    height: 52px;
    left: -64px;
    top: 18px;
  }

  .speed-text {
    font-size: 55px;
    padding-top: 10px;
  }
  .speed:before {
    width: 280px;
    height: 80px;
    top: 15%;
  }
}
@media (min-width: 1280px) {
  .onchain::before {
    width: 72px;
    height: 72px;
    left: -84px;
    top: 23px;
  }

  .speed-text {
    font-size: 65px;
    font-size: 74px;
    padding-top: 12px;
  }

  .speed:before {
    width: 382px;
    height: 108px;
    top: 14%;
  }
}
</style>

<template>
  <BaseContainer
    class="z-2 relative mt-[60px] md:mt-[200px]"
    :max-width="'1292px'"
  >
    <div
      class="relative who bg-[#252431] px-[28px] py-[36px] md:py-[110px] md:px-[110px] rounded-[36px] md:rounded-[55px] overflow-hidden"
    >
      <h2
        class="text-[39px] md:text-title-md lg:text-title-lg xl:text-[75px] font-bold mb-12t ext-left mb-6 relative z-10"
      >
        Who it’s for
      </h2>
      <ul class="relative flex flex-col gap-4 md:gap-8 z-10">
        <li class="flex items-start gap-3 md:gap-6">
          <span
            class="w-3 h-3 md:w-4.5 md:h-4.5 rounded-full bg-white flex-shrink-0 mt-1.5 md:mt-4"
          ></span>
          <span
            class="text-[18px] md:text-[34px] text-white font-normal leading-[120%]"
          >
            Individuals sending money home
          </span>
        </li>
        <li class="flex items-start gap-3 md:gap-6">
          <span
            class="w-3 h-3 md:w-4.5 md:h-4.5 rounded-full bg-white flex-shrink-0 mt-1.5 md:mt-4"
          ></span>
          <span
            class="text-[18px] md:text-[34px] text-white font-normal leading-[120%]"
          >
            Freelancers/creators/ <br class="md:hidden" />consultants
            <br class="hidden md:block" />
            paid across borders
          </span>
        </li>
        <li class="flex items-start gap-3 md:gap-6">
          <span
            class="w-3 h-3 md:w-4.5 md:h-4.5 rounded-full bg-white flex-shrink-0 mt-1.5 md:mt-4"
          ></span>
          <span
            class="text-[18px] md:text-[34px] text-white font-normal leading-[120%]"
          >
            Exchanges, wallets & fintechs <br />
            needing compliant payout rails
          </span>
        </li>
      </ul>
      <div
        class="relative z-10 flex mt-12 gap-2 md:gap-6 flex-wrap mb-10 md: mb-0"
      >
        <!-- Градиентная кнопка -->
        <button
          @click="handleClick"
          class="btn-primary text-[#141414] rounded-full px-6 py-3 cursor-pointer"
        >
          Get Early Access
        </button>

        <!-- Вторая кнопка -->
        <button
          @click="handleClick"
          class="btn-secondary rounded-full px-6 py-3 cursor-pointer"
        >
          Corporate Queries
        </button>
      </div>
      <!-- Фоновая картинка справа -->
      <div
        class="bckg absolute top-0 right-0 h-full w-full max-w-[1520px] bg-no-repeat bg-right bg-contain"
      ></div>
    </div>
  </BaseContainer>
</template>

<script setup>
const toast = useToast();

const handleClick = () => {
  toast.warning({
    title: "Coming soon!",
    // message: "Be careful with this action.",
    position: "topCenter",
    backgroundColor: "#fff",
    titleColor: "#16151D",
    iconColor: "#A36EF7",
    iconUrl: "/danger.svg",
    timeout: 3000,
  });
};
</script>
<style scoped>
.who {
  position: relative;

  border: 2px solid transparent;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(#252431, #252431),
    linear-gradient(to bottom, #cf6ffc, #7f6ef3, #686fe9, #fd84a0);
}

.bckg {
  background-image: url("/assets/images/money.png");
  background-position: bottom right;
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
</style>

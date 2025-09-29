<template>
  <BaseContainer
    class="z-2 relative mt-[60px] md:mt-[150px]"
    :max-width="'1292px'"
  >
    <footer class="w-full py-16">
      <div class="max-w-[1292px] mx-auto md:grid grid-cols-12 gap-12">
        <!-- Колонка 1 (6 колонок) -->
        <div
          class="col-span-6 flex flex-col justify-between md:pr-8 md:border-r border-[#252431] h-full"
        >
          <div class="flex flex-col gap-4">
            <img
              src="/assets/images/logo.svg"
              alt="Logo"
              class="w-[180px] h-auto"
            />
            <p
              class="text-white/80 text-title md:text-title-sm font-semibold leading-[120%]"
            >
              Start Sending in Minutes
            </p>
            <p class="text-white/70 text-[14px] md:text-[18px] leading-[150%]">
              Low fees, live FX, clear tracking from day one.
            </p>
            <div class="flex mt-2 gap-2 md:gap-6 md:flex-wrap">
              <button
                @click="handleClick"
                class="btn-primary text-[13px] md:text-[16px] px-3 py-2 md:px-6 md:py-3 text-[#141414] rounded-full cursor-pointer"
              >
                Get Started
              </button>
              <button
                @click="handleClick"
                class="flex gap-1 btn-secondary text-[13px] md:text-[16px] px-3 py-2 md:px-6 md:py-3 rounded-full cursor-pointer"
              >
                <img
                  class="w-[39px] h-[21px]"
                  src="/assets/images/apps.svg"
                  alt=""
                />
                Download app
              </button>
            </div>
          </div>
          <p class="info text-[#4E4A66] mt-6 text-[12px] md:text-[16px]">
            Cookies and related technology are used for advertising. To learn
            more visit our Privacy Policy
          </p>
        </div>

        <!-- Колонка 2 (3 колонки) -->
        <div
          class="col-span-3 flex flex-col justify-between pt-10 md:pt-0 md:pl-8 h-full"
        >
          <div class="flex flex-col gap-4">
            <h3 class="text-white text-[20px] font-semibold">Menu</h3>
            <ul
              class="flex flex-col gap-2 md:gap-4 text-white/70 text-[14px] md:text-[16px]"
            >
              <li><a class="hover:opacity-60" href="/">Home</a></li>
              <li><a class="hover:opacity-60" href="#why">Why OpenPay</a></li>
              <li>
                <a class="hover:opacity-60" href="#about">About OpenPay</a>
              </li>
              <li>
                <a
                  @click.prevent="handleClick"
                  class="text-white hover:opacity-60 flex items-center gap-2"
                  href="#"
                >
                  Open an Account
                  <img
                    src="/assets/images/arrow-menu.svg"
                    alt="Arrow"
                    class="w-4 h-4"
                  />
                </a>
              </li>
            </ul>
          </div>
          <p class="info text-[#4E4A66] mt-6 text-[12px] md:text-[16px]">
            OpenPay ©2023 All Rights Reserved
          </p>
        </div>

        <!-- Колонка 3 (3 колонки) -->
        <div
          class="col-span-3 flex flex-col justify-between h-full mt-8 md:mt-0"
        >
          <div class="flex flex-col gap-4">
            <h3 class="text-white text-[20px] font-semibold">Support</h3>
            <button
              @click="handleClick"
              class="btn-primary text-[#141414] rounded-full px-6 py-3 cursor-pointer max-w-[205px]"
            >
              Chat With Us
            </button>
          </div>
        </div>
      </div>
    </footer>

    <!-- Нижний текст -->
    <div
      class="border-t-2 border-t-[#252431] text-[10px] md:text-[16px] pt-[60px] text-justify mb-10"
    >
      Open Pay is a technology provider. Open Pay does not conduct remittances
      or money transmission. All remittance services are performed exclusively
      by independently licensed overseas remittance partners in the
      jurisdictions where they are authorized to operate. Availability of
      services depends on partner licensing and local/state regulations and may
      vary by jurisdiction. Nothing on this site constitutes an offer by OpenPay
      to provide remittance services where prohibited.
    </div>
  </BaseContainer>
  <img
    class="absolute right-0 bottom-[20%] md:bottom-0 max-w-[150px] md:max-w-[622px]"
    src="/assets/images/footer-back.png"
    alt=""
  />
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
.btn-primary {
  background: linear-gradient(90deg, #a36ef7 0%, #fff 100%);
}

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

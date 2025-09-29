<template>
  <BaseContainer
    class="z-2 relative mt-[60px] md:mt-[150px]"
    :max-width="'1292px'"
    id="support"
  >
    <button class="btn-secondary rounded-full px-6 py-3 cursor-pointer">
      Human help, 24/7
    </button>
    <p
      class="text text-title md:text-title-md lg:text-title-lg xl:text-title-xl font-semibold leading-[120%] mt-3 md:mt-10"
    >
      Chat
      <img
        class="inline max-w-[30px] md:max-w-[68px]"
        src="/assets/images/chat.svg"
        alt=""
      />
      email
      <img
        class="inline max-w-[30px] md:max-w-[68px]"
        src="/assets/images/mail.svg"
        alt=""
      />
      or phone
      <img
        class="inline max-w-[30px] md:max-w-[68px]"
        src="/assets/images/phone.svg"
        alt=""
      />
      - our team replies in under 5 minutes. Our guides and FAQs are always up
      to date.
    </p>
  </BaseContainer>
</template>
<style scoped>
.btn-secondary {
  border: 1px solid #625d81;
  background: linear-gradient(90deg, #16151d 0%, #2c2a3b 100%);
}
.btn-secondary {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.btn-secondary:hover {
  transform: scale(1.05);
  opacity: 0.9;
}
</style>

<template>
  <div
    class="warning flex items-center rounded bg-white text-gray-800 font-bold text-sm mx-6"
  >
    <div
      class="flex justify-center items-center bg-yellow-400 h-full w-8 rounded-l px-1"
    >
      <Icon name="typcn:warning" class="w-5 h-5 text-gray-800" />
    </div>
    <span class="line-clamp-1"
      >Realizaremos uma manutenção programada nesta terça-feira, 25 de abril
      à(s) 07:00 AM (PDT). Esperamos que o serviço retorne à(s) 8:00 AM (PDT).
      Note que durante este período os servidores ficaram indisponíveis para o
      jogo</span
    >
  </div>
</template>
<style lang="scss" scoped>
.warning {
  position: absolute;
  height: 40px;
  transition: 300ms;
  span {
    align-items: center;
    padding-inline: 5px;
  }
  &:hover {
    height: 60px;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      white-space: normal !important;
      overflow: visible !important;
      text-overflow: clip !important;
    }
  }
}
</style>
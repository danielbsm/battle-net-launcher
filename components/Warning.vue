<template>
  <div class="warning rounded bg-white text-gray-800 font-bold text-sm">
    <div
      class="flex justify-center items-center bg-yellow-400 h-full w-8 rounded-l px-1"
    >
      <Icon name="typcn:warning" class="w-5 h-5 text-gray-800" />
    </div>
    <span class="line-clamp-1"
      >Realizaremos uma manutenção programada nesta terça-feira, 25 de abril
      à(s) 07:00 AM (PDT). Esperamos que o serviço retorne à(s) 8:00 AM (PDT).
      Note que durante este período os servidores ficaram indisponíveis para o
      jogo.</span
    >
  </div>
</template>
<style lang="scss" scoped>
.warning {
  display: grid;
  grid-template-columns: auto 1fr;
  position: absolute;
  align-items: center;
  height: 40px;
  transition: all 0.3s ease-out;
  span {
    padding: 5px 5px;
  }
  &:hover {
    height: 60px;
    span {
      display: grid;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
<template>
  <div
    class="warning flex items-center mb-3 rounded bg-white text-gray-800 font-bold text-sm"
  >
    <div
      class="flex justify-center items-center bg-yellow-400 h-full w-8 rounded-l"
    >
      <Icon name="typcn:warning" class="w-5 h-5 text-gray-800" />
    </div>
    <span
      >Realizaremos uma manutenção programada nesta terça-feira, 25 de abril
      à(s) 07:00 AM (PDT). Esperamos que o serviço retorne à(s) 8:00 AM (PDT).
      Note que durante este período os servidores ficaram indisponíveis para o
      jogo</span
    >
  </div>
</template>
<style lang="scss" scoped>
.warning {
  position: sticky;

  height: 40px;
  transition: 300ms;
  span {
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-inline: 5px;
  }
  &:hover {
    height: 60px;
    span {
      white-space: normal;
      overflow: visible;
      text-overflow: clip;
    }
  }
}
</style>
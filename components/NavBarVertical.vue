<template>
  <section class="nav-vertical flex flex-col">
    <div class="flex flex-col flex-1">
      <img src="/logo.png" alt="Dragonflights" width="284" height="140" />
      <nav class="flex-1 ml-4">
        <ul class="text-gray-300 font-medium mt-8 grid gap-3">
          <li>
            <a href="#" class="hover:text-white"
              ><Icon name="clarity:shopping-cart-line" class="w-6 mr-2 h-6" />
              Loja World of Warcraft</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-white">
              <Icon
                name="material-symbols:forum-outline"
                class="w-6 mr-2 h-6" />
              Fóruns <Icon name="ic:round-open-in-new" class="w-3 h-3"
            /></a>
          </li>
          <li>
            <a href="#" class="hover:text-white">
              <Icon name="ph:seal-warning-bold" class="w-6 mr-2 h-6" /> Notas do
              Patch</a
            >
          </li>
        </ul>
      </nav>
    </div>
    <div class="jogar ml-4 flex flex-col gap-2 mb-14">
      <span class="text-xs font-bold uppercase text-gray-400"
        >Versão do jogo e conta</span
      >
      <button
        class="bg-zinc-700 text-start px-2 rounded text-gray-300 h-8 flex justify-between items-center hover:bg-zinc-600 hover:text-white"
      >
        <span>World of Warcraft</span>
        <Icon name="ep:arrow-down-bold" class="w-3 h-3" />
      </button>
      <button
        class="bg-zinc-700 text-start px-2 rounded text-gray-300 h-8 flex justify-between items-center hover:bg-zinc-600 hover:text-white"
      >
        <span>WoW1 (US) - Dragonflight</span>
        <Icon name="ep:arrow-down-bold" class="w-3 h-3" />
      </button>
      <button
        class="bg-[#0074E0] hover:bg-[--primary] text-start pl-2 rounded text-gray-300 h-14 flex justify-center items-center"
      >
        <span class="text-xl font-bold text-center flex-1">Jogar</span>
        <div
          class="options border-l border-white border-opacity-20 w-10 h-full flex justify-center items-center"
        >
          <Icon name="octicon:gear" class="w-6 h-6" />
        </div>
      </button>
      <span class="text-sm font-semibold text-zinc-400"
        >Versão: 10.0.7.48999</span
      >
    </div>
  </section>
</template>
<style lang="scss" scoped>
.nav-vertical {
  min-width: 330px;
  .options {
    svg {
      transition: 300ms;
    }
    &:hover {
      svg {
        transition: 300ms;
        transform: rotate(90deg);
      }
    }
  }
}
</style>
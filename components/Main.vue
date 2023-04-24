<template>
  <main class="mt-8 flex">
    <div class="flex flex-col">
      <img src="/logo.png" alt="Dragonfligth" width="284" height="140" />
      <nav class="flex-1 ml-4">
        <ul class="text-gray-300 font-medium mt-8 grid gap-3">
          <li>
            <Icon name="clarity:shopping-cart-line" class="w-6 mr-2 h-6" /> Loja
            World of Warcraft
          </li>
          <li>
            <Icon name="material-symbols:forum-outline" class="w-6 mr-2 h-6" />
            Fóruns <Icon name="ic:round-open-in-new" class="w-23 h-3" />
          </li>
          <li>
            <Icon name="ph:seal-warning-bold" class="w-6 mr-2 h-6" /> Notas do
            Patch
          </li>
        </ul>
      </nav>
      <div class="jogar ml-4 flex flex-col gap-2">
        <span class="text-xs font-bold uppercase text-gray-400"
          >Versão do jogo e conta</span
        >
        <button
          class="bg-zinc-600 text-start px-2 rounded text-gray-300 h-8 flex justify-between items-center"
        >
          <span>World of Warcraft</span>
          <Icon name="ep:arrow-down-bold" class="w-3 h-3" />
        </button>
        <button
          class="bg-zinc-600 text-start px-2 rounded text-gray-300 h-8 flex justify-between items-center"
        >
          <span>WoW1 (US) - Dragonflight</span>
          <Icon name="ep:arrow-down-bold" class="w-3 h-3" />
        </button>
        <button
          class="bg-blue-500 text-start pl-2 rounded text-gray-300 h-14 flex justify-center items-center"
        >
          <span class="text-xl font-bold text-center flex-1">Jogar</span>
          <div
            class="options border-l border-white border-opacity-20 w-10 h-full flex justify-center items-center"
          >
            <Icon name="octicon:gear" class="w-6 h-6" />
          </div>
        </button>
      </div>
    </div>
    <section>Conteudo</section>
  </main>
</template>
<script lang="ts">
export default {
  name: "Main",
};
</script>
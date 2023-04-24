<template>
  <nav class="flex h-16 gap-2 mt-4">
    <div
      class="flex items-center gap-2 px-4 h-full rounded bg-white bg-opacity-10 text-gray-300 font-bold uppercase text-sm"
    >
      <Icon name="gridicons:grid" class="w-6 h-6" /> Todos os jogos
    </div>
    <div
      class="flex items-center rounded px-4 h-full bg-white bg-opacity-10 text-gray-300 font-bold uppercase flex-1"
    >
      Favoritos
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "NavBar",
};
</script>
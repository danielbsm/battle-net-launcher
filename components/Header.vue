<template>
  <header>
    <div class="flex items-center text-slate-300">
      <div class="flex items-center gap-2 mr-7">
        <svg-logo :size="40" class="primary cursor-pointer" />
        <Icon
          name="ep:arrow-down"
          class="w-3 h-3 text-gray-300 font-extrabold"
        />
      </div>
      <ul class="flex items-center gap-9 flex-1 uppercase font-bold text-lg">
        <li>
          <a href="#" class="hover:text-white active:text-white"> Jogos </a>
        </li>
        <li><a href="#" class="hover:text-white"> Loja </a></li>
      </ul>
      <Icon name="gala:bell" class="cursor-pointer text-white w-5 h-5" />
    </div>
    <nav></nav>
  </header>
</template>
<script lang="ts">
export default {
  name: "Header",
};
</script>
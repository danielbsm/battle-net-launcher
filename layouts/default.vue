<template>
  <div class="h-screen bg-gradient-to-r from-zinc-700 to-zinc-950 flex">
    <div class="content w-screen mt-6 px-6">
      <Header />
      <NavBar />
      <Main />
    </div>
    <div class="chat w-1/5">
      <Chat />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "default",
};
</script>
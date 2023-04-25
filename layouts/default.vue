<template>
  <div class="flex h-screen pt-6 bg-custom">
    <div class="flex h-full flex-col w-4/5 px-6">
      <Header />
      <NavBar />
      <Main />
    </div>
    <div class="chat w-1/5">
      <Chat />
    </div>
    <popup-dialog />
  </div>
</template>
<script lang="ts">
export default {
  name: "default",
};
</script>
<style>
.bg-custom {
  background: rgb(21, 23, 30);
  background: linear-gradient(
    197deg,
    rgba(21, 23, 30, 1) 0%,
    rgba(28, 24, 33, 1) 32%,
    rgba(62, 43, 41, 1) 64%,
    rgba(64, 40, 60, 1) 88%,
    rgba(82, 45, 82, 1) 100%
  );
}
</style>
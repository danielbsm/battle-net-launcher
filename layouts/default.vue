<template>
  <div class="bg-custom flex h-screen pt-6">
    <div class="flex h-full flex-col px-6">
      <Header />
      <NavBar />
      <Main />
    </div>
    <div class="chat mr-5">
      <Chat />
    </div>
    <popup-modal />
  </div>
</template>
<script lang="ts">
import PopupModal from "~/components/PopupModal.vue";
export default {
  components: { PopupModal },
  name: "default",
};
</script>
<style>
.bg-custom {
  min-width: 1000px;
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
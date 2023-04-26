<template>
  <div class="bg-custom flex h-screen pt-6 w-screen">
    <div class="flex flex-col px-6">
      <Header />
      <NavBar />
      <Main />
    </div>
    <div>
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
    261deg,
    rgba(21, 23, 30, 1) 0%,
    rgba(21, 23, 30, 1) 17%,
    rgba(21, 23, 30, 1) 57%,
    rgba(64, 40, 60, 1) 89%,
    rgba(82, 45, 82, 1) 100%
  );
}
</style>
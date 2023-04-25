<template>
  <div v-if="showModal">
    <div
      class="fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-80"
    ></div>
    <div
      class="modal flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white bg-[--secondary] rounded border border-opacity-80 border-zinc-600"
    >
      <div class="btn-close flex justify-end m-2">
        <Icon
          name="ic:sharp-close"
          class="w-5 h-5 text-zinc-400 cursor-pointer"
          @click="closeModal"
        />
      </div>
      <div class="title m-5 mt-0 pb-5 border-b border-zinc-700">
        <span class="font-bold text-xl">O que há de novo?</span>
      </div>
      <div class="img p-5 pt-0">
        <img src="/modal/modal.jpg" alt="modal" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      showModal: true,
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.modal {
  min-width: 600px;
}
</style>
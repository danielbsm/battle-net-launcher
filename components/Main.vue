<template>
  <main class="mt-8 flex h-full">
    <nav-bar-vertical />
    <div class="flex flex-col relative">
      <warning v-if="showWarning" />
      <content :class="showWarning && 'mt-14'" />
    </div>
  </main>
</template>
<script lang="ts">
export default {
  name: "Main",
  data() {
    return {
      showWarning: true,
    };
  },
};
</script>
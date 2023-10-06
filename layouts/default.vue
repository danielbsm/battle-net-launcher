<template>
  <div class="grid-container">
    <c-header />
    <c-navBar />
    <C-Aside />
    <c-main />
    <Chat />
    <!-- <popup-modal /> -->
  </div>
</template>
<script lang="ts">
import PopupModal from '~/components/PopupModal.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { PopupModal },
  name: 'default',
})
</script>
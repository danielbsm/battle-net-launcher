<template>
  <div
    v-for="friend in friends"
    :key="friend.username"
    class="profile text-white flex items-center gap-3 hover:bg-[#464850] rounded p-2"
  >
    <div
      class="flex justify-center items-center rounded-full bg-sky-500 bg-opacity-25 w-10 h-10"
    >
      <Icon name="mingcute:user-1-line" class="w-8 h-8 text-[--primary]" />
    </div>
    <div class="flex flex-col flex-1">
      <span class="text-sky-200 text-md">{{ friend.username }}</span>
      <span class="text-gray-300 text-sm">{{ friend.status }} </span>
    </div>
    <div v-if="friend.playing.status">
      <img
        :src="`/nav-games-icons/${friend.playing.game}.png`"
        :alt="friend.playing.game"
        class="w-7 h-7"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { friendsList } from "@/interfaces/friendsList";
export default {
  props: {
    friends: {
      type: Array<friendsList>,
      required: true,
    },
  },
};
</script>
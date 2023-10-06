<template>
  <ul>
    <li
      v-for="user in users"
      :key="user.username"
      class="profile text-white hover:bg-zinc-800 rounded tooltip-left"
    >
      <span class="tooltip-text">
        <chat-tooltip-chat-user :user="user" />
      </span>
      <div
        class="avatar rounded-full w-10 h-10"
        :class="user.isOn ? 'bg-sky-500 bg-opacity-25' : 'bg-zinc-800'"
      >
        <Icon
          name="mingcute:user-1-line"
          class="w-8 h-8"
          :class="user.isOn ? 'text-[--primary]' : 'text-zinc-500'"
        />
      </div>
      <div class="info">
        <span
          class="text-md grid grid-cols-2 items-center justify-self-start gap-1"
          :class="user.isOn ? 'text-sky-200' : 'text-zinc-400'"
          >{{ user.username }}
          <Icon
            v-if="user.favorite"
            name="material-symbols:star"
            class="text-yellow-400"
        /></span>
        <span
          class="text-sm"
          :class="user.isOn ? 'text-zinc-300' : 'text-zinc-400'"
          >{{ user.status }}
        </span>
      </div>
      <div v-if="user.playing.status" class="game-logo">
        <img
          :src="`/nav-games-icons/${user.playing['game-slug']}.svg`"
          :alt="user.playing['game-name']"
          class="w-7 h-7"
        />
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
import { ChatUserListCard } from '@/interfaces/chatUserListCard'
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    usersList: {
      type: Array<ChatUserListCard>,
      required: true,
    },
    favorites: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    users() {
      return this.usersList.filter((user) => user.favorite === this.favorites)
    },
  },
})
</script>

<style lang="scss" scoped>
.profile {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 12px;
  align-items: center;
  padding: 8px;

  .avatar {
    display: grid;
    justify-content: center;
    align-items: center;
  }

  .info {
    display: grid;
    line-height: 1.2;
  }
  .game-logo {
    img {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
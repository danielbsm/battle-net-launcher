<template>
  <div class="tooltip-user text-sm font-normal text-white">
    <div class="user">
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
          class="flex items-center gap-1"
          :class="user.isOn ? 'text-sky-200' : 'text-zinc-400'"
          >{{ user.username }}
          <span class="text-zinc-300">#15100216</span>
        </span>

        <span :class="user.isOn ? 'text-zinc-300' : 'text-zinc-400'"
          >{{ user.status }}
        </span>
        <span :class="user.isOn ? 'text-zinc-300' : 'text-zinc-400'"
          >Amigos desde 24 de março de 2014
        </span>
      </div>
    </div>
    <div v-if="user.playing.status" class="playing bg-zinc-800 rounded">
      <img
        :src="`../../nav-games-icons/${user.playing['game-slug']}.svg`"
        :alt="user.playing['game-name']"
      />
      <div class="game-info">
        <span class="font-semibold">{{ user.playing['game-name'] }}</span>
        <span class="text-gray-400">{{ user.playing['game-location'] }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ChatUserListCard } from '@/interfaces/chatUserListCard'
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    user: {
      type: Object as () => ChatUserListCard,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.tooltip-user {
  display: grid;
  grid-gap: 16px;

  .user {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 8px;
    align-items: center;
    .avatar {
      display: grid;
      justify-content: center;
      align-items: center;
    }
    .info {
      display: grid;
      justify-items: flex-start;
    }
  }
  .playing {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 8px;
    align-items: center;
    padding: 8px;
    img {
      min-width: 38px;
      height: 38px;
    }
    .game-info {
      display: grid;
      justify-items: flex-start;
    }
  }
}
</style>
<template>
  <div class="chat bg-[#15171E] ml-5">
    <chat-header-chat v-model:userTypedSearch="searchUsers" />
    <div class="content mr-1 pr-1">
      <div class="favorite box-users-list mb-2">
        <button
          class="hover:bg-[#464850] rounded"
          @click="showFavorites = !showFavorites"
        >
          <Icon
            v-if="!showFavorites"
            name="material-symbols:arrow-right"
            class="flex justify-start items-start text-white"
            size="30"
          />
          <Icon
            v-else
            name="ic:sharp-arrow-drop-down"
            class="flex justify-start items-start text-white"
            size="30"
          />
          <Icon
            name="uis:favorite"
            class="flex justify-start items-start text-white mr-2"
            size="15"
          />
          <span class="text-white">Favoritos - {{ favoritesOn }}</span>
          {{ searchUsers }}
        </button>
        <div v-show="showFavorites" class="mt-3">
          <chat-user-list-card :usersList="usersList" :favorites="true" />
        </div>
      </div>
      <div class="friends box-users-list">
        <button
          class="flex hover:bg-[#464850] rounded w-full"
          @click="showFriends = !showFriends"
        >
          <Icon
            v-if="!showFriends"
            name="material-symbols:arrow-right"
            class="flex justify-start items-start text-white"
            size="30"
          />
          <Icon
            v-else
            name="ic:sharp-arrow-drop-down"
            class="flex justify-start items-start text-white"
            size="30"
          />
          <Icon
            name="fe:users"
            class="flex justify-start items-start text-white mr-2"
            size="18"
          />
          <span class="text-white">Amigos - {{ friendsOn }}</span>
        </button>
        <div v-show="showFriends" class="mt-3">
          <chat-user-list-card :usersList="usersList" :favorites="false" />
        </div>
      </div>
    </div>
    <div class="footer-chat bg-[#15171E] bottom-0 pb-5 py-2">
      <button
        class="footer-btn bg-zinc-700 bg-opacity-90 rounded w-60 h-10 text-lg text-white font-bold"
      >
        Bate-papos e Grupos
      </button>
      <div class="hidden-chat tooltip-top">
        <Icon name="humbleicons:logout" class="text-white" size="20" />
        <span class="tooltip-text">Recolher painel social</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ChatUserListCard } from '@/interfaces/chatUserListCard'
import mock from '@/mock.json'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'chat',
  data() {
    return {
      showFriends: false,
      showFavorites: false,
      searchUsers: '',
      userData: [] as ChatUserListCard[],
    }
  },
  created() {
    this.userData = mock
  },
  computed: {
    favoritesOn() {
      const totalFavorites = this.usersList.filter((user) => user.favorite)
      const amountOn = totalFavorites.filter((friend) => friend.isOn).length
      return `${amountOn}/${totalFavorites.length}`
    },
    friendsOn() {
      const totalFriends = this.usersList.filter((user) => !user.favorite)
      const amountOn = totalFriends.filter((friend) => friend.isOn).length
      return `${amountOn}/${totalFriends.length}`
    },
    usersList() {
      if (this.searchUsers) {
        const users = this.userData.filter((user) =>
          user.username.toLowerCase().includes(this.searchUsers.toLowerCase())
        )
        return users
      }
      return this.userData
    },
  },
})
</script>
<style lang="scss" scoped>
.chat {
  grid-area: chat;
  display: grid;
  grid-template-rows: auto 1fr auto;

  .content {
    .box-users-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      button {
        display: grid;
        grid-auto-flow: column;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }
}
.footer-chat {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 8px;
  justify-self: center;
  align-items: center;
  box-shadow: 0px -6px 34px 10px #15171e;
  z-index: 1;
  button {
    transition: 100ms;
    &:hover {
      box-shadow: inset 0 0 0 1.5px #797878;
    }
  }
  .hidden-chat {
    display: grid;
    justify-items: flex-end;
    padding: 5px 2px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: rgba(68, 66, 70, 0.651);
    }
    .tooltip-text {
      right: -15px;
    }
  }
}
</style>
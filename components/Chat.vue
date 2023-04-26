<template>
  <div class="chat px-5 bg-[#15171E] flex flex-col justify-between w-70">
    <div class="content">
      <div class="profile text-white flex items-center gap-3 mb-5">
        <div
          class="flex justify-center items-center rounded-full bg-sky-500 bg-opacity-25 w-12 h-12"
        >
          <Icon
            name="mingcute:user-1-line"
            class="w-10 h-10 text-[--primary]"
          />
        </div>
        <div class="flex flex-col flex-1">
          <span class="text-sky-200 text-xl">Brutallus</span>
          <span class="text-gray-300"
            >Online <Icon name="ep:arrow-down-bold" class="w-3 h-3"
          /></span>
        </div>
        <div>
          <Icon name="ic:round-open-in-new" class="w-5 h-5" />
        </div>
      </div>
      <nav class="manage-user flex justify-between mb-5">
        <div class="box-btn">
          <Icon name="material-symbols:person-add" class="w-5 h-5 text-white" />
        </div>
        <div class="box-btn">
          <Icon name="ic:baseline-manage-accounts" class="w-5 h-5 text-white" />
        </div>
        <div class="search">
          <input class="search-input" type="text" />
          <Icon
            name="material-symbols:search-rounded"
            class="w-6 h-6 text-white search-icon"
          ></Icon>
        </div>
      </nav>
      <div
        class="favorite flex items-center mb-2 hover:bg-[#464850] rounded cursor-pointer"
      >
        <Icon
          name="material-symbols:arrow-right"
          class="flex justify-start items-start text-white"
          size="30"
        />
        <Icon
          name="uis:favorite"
          class="flex justify-start items-start text-white mr-2"
          size="15"
        />
        <span class="text-white">Favoritos - 0/0</span>
      </div>
      <div
        class="friends flex items-center hover:bg-[#464850] rounded cursor-pointer"
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
      </div>
      <div v-show="showFriends" class="box-friends mt-3 overflow-y-auto pb-14">
        <friends :friends="friends" />
      </div>
    </div>
    <div
      class="footer-chat bg-[#15171E] fixed flex items-center justify-center bottom-0 gap-3 pb-5"
    >
      <button
        class="footer-btn bg-zinc-700 bg-opacity-90 rounded w-60 h-10 text-lg text-white font-bold"
      >
        Bate-papos e Grupos
      </button>
      <Icon name="humbleicons:logout" class="text-white" size="20" />
    </div>
  </div>
</template>
<script lang="ts">
import { FriendsList } from "@/interfaces/friendsList";
import mock from "@/public/mock.json";
export default {
  name: "chat",
  data() {
    return {
      showFriends: false,
      friends: [] as FriendsList[],
    };
  },
  created() {
    this.friends = mock;
  },
  computed: {
    friendsOn() {
      const totalFriends = this.friends.length;
      const amountOn = this.friends.filter(
        (friend) => friend.status === "Online"
      ).length;
      return `${amountOn}/${totalFriends}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.chat {
  .manage-user {
    gap: 8px;
    .box-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 40px;
      min-height: 40px;
      background-color: #464850;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        border: solid 2px #727683;
      }
    }

    .search {
      position: relative;
      .search-input {
        min-height: 40px;
        max-width: 175px;
        background-color: #464850;
        border-radius: 4px;
        padding: 0 35px 0 10px;
        color: white;
        &:hover {
          background-color: #53555e;
        }
      }
      .search-icon {
        top: 0;
        right: 0;
        position: absolute;
        float: right;
        margin: 8px 5px 0 0;
      }
    }
  }
  .box-friends {
    max-height: 700px;
  }
}
.footer-chat {
  box-shadow: 0px -46px 34px 3px #15171e;
}
</style>
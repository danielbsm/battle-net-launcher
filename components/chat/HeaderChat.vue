<template>
  <header class="pr-5">
    <div class="profile text-white mb-5">
      <div
        class="avatar grid justify-center items-center rounded-full bg-sky-500 bg-opacity-10 w-12 h-12"
      >
        <Icon name="mingcute:user-1-line" class="w-10 h-10 text-[--primary]" />
        <div class="hover-edit absolute hidden">
          <Icon name="material-symbols:edit-rounded" class="w-6 h-6" />
        </div>
        <span class="status"></span>
      </div>
      <div
        class="user-data"
        @click="showManageAccountMenu = !showManageAccountMenu"
      >
        <span class="text-sky-200 text-xl">Brutallus</span>
        <span class="text-gray-300 text-sm"
          >Online <Icon name="ep:arrow-down-bold" class="w-3"
        /></span>
        <chat-manage-account-menu v-if="showManageAccountMenu" />
      </div>
      <div class="btn-open-in-new">
        <Icon name="ic:round-open-in-new" class="w-5 h-5" />
      </div>
    </div>
    <nav class="manage-user mb-5">
      <div class="box-btn">
        <Icon name="material-symbols:person-add" class="w-5 h-5 text-white" />
      </div>
      <div
        class="box-btn"
        @click="showFriendshipSettingsMenu = !showFriendshipSettingsMenu"
      >
        <Icon name="ic:baseline-manage-accounts" class="w-5 h-5 text-white" />
        <div
          v-show="showFriendshipSettingsMenu"
          class="card-right-to-left-chat"
        >
          <ul>
            <li
              v-for="friendshipMenu in friendshipSettingsMenu"
              :key="friendshipMenu.slug"
            >
              <a href="#" class="grid grid-flow-col items-center"
                >{{ friendshipMenu.title }}
                <Icon
                  v-if="friendshipMenu.icon !== ''"
                  :name="friendshipMenu.icon"
                  class="w-3 h-3 justify-self-end"
              /></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="search tooltip-bottom">
        <input class="search-input" type="text" v-model="searchUsersInput" />
        <Icon
          v-if="emptySearchInput"
          name="material-symbols:search-rounded"
          class="w-6 h-6 text-white search-icon"
        ></Icon>
        <Icon
          v-else
          name="material-symbols:close-rounded"
          class="clear-input-search"
          @click="searchUsersInput = ''"
        ></Icon>
        <span v-if="emptySearchInput" class="tooltip-text"
          >Filtro de Amigos</span
        >
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  data() {
    return {
      showManageAccountMenu: false,
      showButtonClearSearch: false,
      showFriendshipSettingsMenu: false,
      searchUsersInput: '',
      friendshipSettingsMenu: [
        {
          slug: 'view-sent-friend-request',
          title: 'Ver Pedidos de Amizade Enviados',
          to: '',
          icon: '',
        },
        {
          slug: 'friends-and-chat-settings',
          title: 'Configurações de Amigos e Bate-papo',
          to: '',
          icon: '',
        },
        {
          slug: 'privacy-settings',
          title: 'Configurações de Privacidade',
          to: '',
          icon: 'ic:round-open-in-new',
        },
        {
          slug: 'connects-accounts',
          title: 'Contas Conectadas',
          to: '',
          icon: 'ic:round-open-in-new',
        },
        {
          slug: 'friends-list-expand',
          title: 'Expandir Lista de Amigos',
          to: '',
          icon: '',
        },
      ],
    }
  },
  props: {
    userTypedSearch: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    emptySearchInput(): boolean {
      return this.searchUsersInput.length === 0
    },
  },
  methods: {
    searchUsers(user: string) {
      this.$emit('update:userTypedSearch', user)
    },
  },
  watch: {
    searchUsersInput(newValue, oldValue) {
      console.log(newValue, oldValue)
      this.searchUsers(newValue)
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  .profile {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr auto;
    grid-gap: 4px;
    .avatar {
      position: relative;
      cursor: pointer;
      margin: auto;
      display: grid;
      justify-items: center;
      .status {
        position: absolute;
        width: 14px;
        height: 14px;
        background: greenyellow;
        bottom: 0;
        right: 1px;
        border-radius: 100%;
        z-index: 10;
      }
      &:hover {
        box-shadow: inset 0px 0px 0px 2px #727683;
        background-color: rgba(30, 120, 180, 0.2);
        .hover-edit {
          display: grid;
        }
      }
    }
    .user-data {
      display: grid;
      padding: 4px;
      cursor: pointer;
      &:hover {
        border-radius: 4px;
        background-color: rgba(39, 41, 48, 0.8);
      }
    }
    .btn-open-in-new {
      display: grid;
      height: fit-content;
      padding: 8px;
      margin: auto;
      color: #c5c6c9;
      cursor: pointer;
      border-radius: 4px;
      &:hover {
        background-color: rgba(39, 41, 48, 0.8);
      }
    }
  }
  .manage-user {
    display: grid;
    grid-auto-columns: auto auto auto;
    grid-auto-flow: column;
    grid-gap: 8px;
    .box-btn {
      display: grid;
      justify-content: center;
      align-items: center;
      position: relative;
      min-width: 40px;
      min-height: 40px;
      background-color: rgba(70, 72, 80, 0.8);
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 0 2px #727683;
      }
      ul {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: auto;
        white-space: nowrap;
        color: #c5c6c9;
        font-size: 16px;
        font-weight: 500;
        padding: 12px;
        li {
          padding: 4px;
          &:hover {
            border-radius: 4px;
            background-color: rgba(70, 72, 80, 0.5);
            color: #fff;
          }
        }
      }
    }

    .search {
      display: grid;
      justify-items: center;
      .search-input {
        min-height: 40px;
        max-width: 174px;
        background-color: rgba(70, 72, 80, 0.5);
        border-radius: 4px;
        padding: 0 35px 0 10px;
        color: white;
        &:hover {
          background-color: rgba(70, 72, 80, 0.8);
        }
        &:focus {
          outline: none;
          background-color: rgba(70, 72, 80, 0.8);
          border: solid 1px #727683;
        }
      }
      .search-icon,
      .clear-input-search {
        display: grid;
        position: absolute;
        height: 100%;
        right: 0;
        font-size: 30px;
        color: #bfc0c2;
        margin-right: 2px;
      }
    }
  }
}
</style>
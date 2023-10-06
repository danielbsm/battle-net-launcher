<template>
  <aside class="aside px-3 mt-12">
    <nav>
      <img src="/logo.png" alt="Dragonflights" />
      <ul class="text-gray-300 mt-8 grid gap-2">
        <li>
          <a href="#" class="hover:text-white"
            ><Icon name="clarity:shopping-cart-line" class="w-6 mr-2 h-6" />
            Loja World of Warcraft</a
          >
        </li>
        <li>
          <a href="#" class="hover:text-white">
            <Icon name="material-symbols:forum-outline" class="w-6 mr-2 h-6" />
            Fóruns <Icon name="ic:round-open-in-new" class="w-3 h-3"
          /></a>
        </li>
        <li>
          <a href="#" class="hover:text-white">
            <Icon name="ph:seal-warning-bold" class="w-6 mr-2 h-6" /> Notas do
            Patch</a
          >
        </li>
      </ul>
    </nav>
    <div class="game-and-account">
      <span class="text-xs font-bold uppercase text-gray-400"
        >Versão do jogo e conta</span
      >
      <div class="grid relative">
        <button class="btn-select" @click="showGameInfo = !showGameInfo">
          <span>World of Warcraft</span>
          <Icon name="ep:arrow-down-bold" />
        </button>
        <div
          class="card-top-without-arrow relative mb-1 p-2 text-gray-300"
          v-show="showGameInfo"
        >
          <div class="classic grid my-2">
            <span class="uppercase font-bold text-sm">No ar - classic</span>
            <a href="#">Wrath of the lich king classic</a
            ><a href="#">World of warcraft classic</a>
          </div>
          <div class="separator"></div>
          <div class="origin grid my-2">
            <span class="uppercase font-bold text-sm">No ar</span>
            <a href="#">World of warcraft classic</a>
          </div>
        </div>
      </div>
      <div class="grid relative">
        <button class="btn-select" @click="showAccountsWow = !showAccountsWow">
          <span>WoW1 (US) - Dragonflight</span>
          <Icon name="ep:arrow-down-bold" />
        </button>
        <div
          class="card-top-without-arrow relative mb-1 p-2 text-gray-300"
          v-show="showAccountsWow"
        >
          <div class="accounts-wow grid my-1">
            <a href="#">WoW1 (US) - Dragonflight</a
            ><a href="#">WoW3 (US) - Starter Edition</a>
          </div>
        </div>
      </div>
      <div class="btn-play-settings-together">
        <button class="btn-play-now">
          <span>Jogar</span>
        </button>
        <div class="settings-menu">
          <button
            class="btn-settings"
            @click="showSettingsMenu = !showSettingsMenu"
          >
            <Icon name="octicon:gear" />
          </button>
          <div
            v-show="showSettingsMenu"
            class="card-settings-menu card-top-left-to-right-aside-settings"
          >
            <ul v-for="(category, key, index) in settingsMenu" :key="key">
              <li v-for="(menu, index) in category" :key="index">
                {{ menu.name }}
              </li>
              <div
                class="separator mt-1"
                v-if="category.length - 1 > index"
              ></div>
            </ul>
          </div>
        </div>
      </div>
      <span class="version">Versão: 10.0.7.48999</span>
      <div class="game-time">
        <Icon name="ic:outline-hourglass-empty" /> Assinatura vencida
      </div>
    </div>
  </aside>
</template>
<script lang="ts">
export default {
  data() {
    return {
      showGameInfo: false,
      showAccountsWow: false,
      showSettingsMenu: false,
      settingsMenu: {
        settings: [
          {
            slug: 'settings-of-game',
            name: 'Configurações do Jogo',
          },
          {
            slug: 'show-in-explorer',
            name: 'Mostrar no Explorer',
          },
          {
            slug: 'create-shortcut',
            name: 'Criar Atalho na Área de trabalho',
          },
          {
            slug: 'verify-repair',
            name: 'Verificar e Reparar',
          },
          {
            slug: 'search-update',
            name: 'Procurar Atualizações',
          },
        ],
        managerGame: [
          {
            slug: 'modify-installation',
            name: 'Modificar instalação',
          },
          {
            slug: 'uninstall',
            name: 'Desinstalar',
          },
        ],
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.aside {
  grid-area: aside;
  display: grid;
  grid-template-rows: 1fr auto;
  max-width: 316px;

  nav {
    img {
      margin: auto;
      display: block;
      min-width: 284px;
    }
  }
  .game-and-account {
    display: grid;
    grid-gap: 6px;
    grid-template-rows: repeat(6, auto);

    button {
      outline: none;
    }

    .btn-select {
      display: grid;
      grid-template-columns: 1fr auto;
      justify-items: flex-start;
      align-items: center;
      padding: 4px 8px;
      border-radius: 4px;
      background-color: rgba(254, 254, 255, 0.1);
      color: #bfc0c2;
      font-size: 16px;
      transition: ease-out 200ms;
      svg {
        font-size: 10px;
      }
      &:hover {
        color: #fff;
        background-color: rgba(254, 254, 255, 0.2);
      }
    }

    .classic,
    .origin,
    .accounts-wow {
      span {
        padding-inline: 8px;
      }
      a {
        padding: 2px 8px;
        &:hover {
          border-radius: 4px;
          background-color: rgba(39, 41, 48, 0.8);
        }
      }
    }

    .btn-play-settings-together {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-template-rows: 56px;

      color: #fff;
      .btn-play-now {
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        border-start-start-radius: 4px;
        border-end-start-radius: 4px;
        background-color: var(--primary);
        font-size: 20px;
        font-weight: bold;
        &:hover {
          background-color: #148eff;
        }
      }

      .settings-menu {
        display: grid;
        position: relative;
        .btn-settings {
          display: grid;
          align-items: center;
          padding-inline: 8px;
          font-size: 22px;
          border-end-end-radius: 4px;
          border-start-end-radius: 4px;
          background-color: var(--primary);
          svg {
            transition: 300ms;
          }
          &:hover {
            background-color: #148eff;
            svg {
              transition: 300ms;
              transform: rotate(90deg);
            }
          }
        }
        .card-settings-menu {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 8px;
          padding: 8px 8px;
          ul {
            display: grid;
            grid-template-columns: 1fr;
            grid-auto-rows: auto;
            li {
              display: grid;
              grid-template-columns: auto 1fr auto;
              grid-gap: 8px;
              align-items: center;
              white-space: nowrap;
              padding: 6px 8px;
              color: #bfc0c2;
              font-size: 16px;
              cursor: pointer;
              .icon {
                font-size: 20px;
              }

              &:hover {
                border-radius: 4px;
                background-color: rgba(39, 41, 48, 0.8);
                color: #fff;
              }
            }
          }
        }
      }
    }

    .version {
      font-size: 13px;
      color: #bfc0c2;
      margin-bottom: 18px;
    }
    .game-time {
      color: #cc9000;
      margin-bottom: 24px;
      svg {
        font-size: 18px;
      }
    }
  }
}
</style>
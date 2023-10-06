<template>
  <nav class="nav">
    <div
      class="all-games grid grid-flow-col items-center gap-2 px-4 rounded bg-white bg-opacity-5 text-gray-300 font-bold uppercase text-sm"
    >
      <Icon name="gridicons:grid" class="w-6 h-6" /> Todos os jogos
    </div>
    <div
      class="nav-games rounded px-4 bg-white bg-opacity-5 text-zinc-400 font-bold text-sm uppercase"
    >
      <span class="mr-1">Favoritos</span>
      <ul>
        <li
          v-for="(item, index) in menu"
          :key="index"
          class="tooltip-bottom"
          :class="{ 'game-selected': gameSelected === item.slug }"
          @click="updateGameSelected(item.slug)"
        >
          <a href="#">
            <img :src="`/nav-games-icons/${item.slug}.svg`" :alt="item.alt" />
            <span class="tooltip-text">{{ item.alt }}</span>
          </a>
        </li>
      </ul>
      <div class="btn-favorite tooltip-bottom">
        <Icon name="material-symbols:add" />
        <span class="tooltip-text">Adicionar um favorito</span>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NavBar',
  data() {
    return {
      gameSelected: 'wow',
      menu: [
        {
          slug: 'wow',
          alt: 'World Of Warcraft',
        },
        {
          slug: 'cod-mw',
          alt: 'Call Of Duty: Modern Warfare',
        },
        {
          slug: 'heroes-of-the-storm',
          alt: 'Heroes Of The Storm',
        },
        {
          slug: 'hearthstone',
          alt: 'HearthStone',
        },
        {
          slug: 'wow-classic',
          alt: 'World Of Warcraft Classic',
        },
        {
          slug: 'overwatch',
          alt: 'Overwatch',
        },
        {
          slug: 'diablo',
          alt: 'Diablo',
        },
        {
          slug: 'starcraft',
          alt: 'StarCraft',
        },
      ],
    }
  },
  methods: {
    updateGameSelected(game: string) {
      this.gameSelected = game
    },
  },
})
</script>
<style lang="scss" scoped>
.nav {
  grid-area: nav;
  display: grid;
  grid-template-columns: 190px 1fr;
  grid-template-rows: 56px;
  grid-gap: 8px;
  .all-games {
    cursor: pointer;
    &:hover {
      background-color: rgba(128, 128, 128, 0.4);
      color: white;
    }
  }
  .nav-games {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto auto auto;
    align-items: center;
    justify-content: flex-start;
    ul {
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: repeat(8, 64px);
      grid-template-rows: 56px;
      li {
        display: grid;
        a {
          display: grid;
          justify-items: center;
          align-items: center;
          box-shadow: none;
          &:hover {
            background-color: rgba(131, 131, 131, 0.15);
            img {
              transform: translateY(-2px);
            }
          }
          img {
            width: 40px;
            height: 40px;
            transition: 300ms;
          }
        }
      }
    }
  }
  .game-selected {
    transition: 350ms;
    background-color: rgba(131, 131, 131, 0.15);
    box-shadow: inset 0 -2px 0 var(--primary);
  }

  .btn-favorite {
    display: grid;
    grid: 56px / 56px;
    justify-items: center;
    align-items: center;
    svg {
      font-size: 2.5rem;
      background-color: rgba(128, 128, 128, 0.2);
      color: white;

      padding: 8px;
      border-radius: 100%;
      cursor: pointer;
      &:hover {
        background-color: rgba(128, 128, 128, 0.3);
      }
    }
  }
}
</style>
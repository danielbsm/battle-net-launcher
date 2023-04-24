<template>
  <div class="flex gap-2 mt-4">
    <div
      class="all-games flex h-16 items-center gap-2 px-4 rounded bg-white bg-opacity-10 text-gray-300 font-bold uppercase text-sm"
    >
      <Icon name="gridicons:grid" class="w-6 h-6" /> Todos os jogos
    </div>
    <div
      class="flex h-16 items-center rounded px-4 bg-white bg-opacity-10 text-zinc-400 font-bold text-sm uppercase flex-1"
    >
      <span class="mr-1">Favoritos</span>
      <nav class="nav-games">
        <ul>
          <li v-for="(item, index) in menu" :key="index">
            <a href="#" :class="index === 0 && 'selected'">
              <img :src="`/nav-games-icons/${item.icon}.png`" :alt="item.alt" />
            </a>
          </li>
        </ul>
      </nav>
      <div class="btn-favorite">
        <Icon name="material-symbols:add" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "NavBar",
  data() {
    return {
      menu: [
        {
          icon: "wow",
          alt: "World Of Warcraft",
        },
        {
          icon: "cod-mw",
          alt: "Call Of Duty: Modern Warfare",
        },
        {
          icon: "h-o-t-s",
          alt: "Heroes Of The Storm",
        },
        {
          icon: "hearthstone",
          alt: "HearthStone",
        },
        {
          icon: "wow-classic",
          alt: "World Of Warcraft Classic",
        },
        {
          icon: "overwatch",
          alt: "Overwatch",
        },
        {
          icon: "diablo",
          alt: "Diablo",
        },
        {
          icon: "star-craft",
          alt: "StarCraft",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.all-games {
  cursor: pointer;
  &:hover {
    background-color: rgba(128, 128, 128, 0.4);
    color: white;
  }
}
.nav-games {
  height: 100%;
  ul {
    display: flex;
    height: 100%;
    li {
      a {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        padding-inline: 16px;
        &:hover {
          background-color: rgba(131, 131, 131, 0.15);
          img {
            transform: translateY(-2px);
          }
        }
        img {
          width: 36px;
          height: 36px;
          transition: transform 300ms;
        }
      }
    }
  }
}
.selected {
  background-color: rgba(131, 131, 131, 0.15);
  border-bottom: 2px solid var(--primary);
}
.btn-favorite {
  background-color: rgba(128, 128, 128, 0.2);
  color: white;
  font-size: 1.5rem;
  padding: 8px;
  border-radius: 100%;
  margin-inline: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgba(128, 128, 128, 0.3);
  }
}
</style>
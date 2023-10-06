<template>
  <header class="header text-slate-300 mb-4">
    <div
      class="logo relative cursor-pointer"
      @click="showMenuLauncher = !showMenuLauncher"
    >
      <logo :size="40" color="--primary" />
      <Icon name="ep:arrow-down-bold" class="arrow-down text-gray-300" />
      <div v-if="showMenuLauncher" class="card-left-to-right-menu-launcher">
        <div
          class="menu-launcher"
          v-for="(menuLauncher, index) in menusLauncher"
          :key="index"
        >
          <ul v-for="(category, key, index) in menuLauncher" :key="key">
            <li
              v-for="item in category"
              :key="item.slug"
              class="text-zinc-200 text-sm"
            >
              <Icon :name="item.icon" class="icon" />
              <span>{{ item.title }}</span>
              <Icon
                v-if="item.showIconOpenInNew"
                name="ic:round-open-in-new"
                class="w-3 h-3"
              />
            </li>
            <div v-if="index < category.length" class="separator mt-1"></div>
          </ul>
        </div>
      </div>
    </div>
    <ul class="menu-games uppercase font-bold text-lg">
      <li
        v-for="menu in menus"
        :key="menu.slug"
        @click="updateItemSelected(menu.slug)"
      >
        <a
          href="#"
          :class="[
            'hover:text-white',
            { 'text-white': menu.slug === itemActive },
          ]"
        >
          {{ menu.title }}
        </a>
      </li>
    </ul>
    <notifications class="mr-6" />
  </header>
</template>
<script lang="ts">
import logo from '@/components/svg/logo.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Header',
  components: { logo },
  data() {
    return {
      showMenuLauncher: false,
      itemActive: 'games',
      menusLauncher: [
        {
          settings: [
            {
              slug: 'settings',
              icon: 'material-symbols:settings-outline',
              showIconOpenInNew: false,
              title: 'Configurações',
              from: '',
            },
            {
              slug: 'news',
              icon: 'iconoir:page',
              showIconOpenInNew: false,
              title: 'Novidades',
              from: '',
            },
          ],
          accounts: [
            {
              slug: 'account',
              icon: 'mdi:account-circle-outline',
              showIconOpenInNew: true,
              title: 'Conta',
              from: '',
            },

            {
              slug: 'support',
              icon: 'material-symbols:help-outline',
              showIconOpenInNew: true,
              title: 'Suporte',
              from: '',
            },
            {
              slug: 'forums',
              icon: 'material-symbols:forum-outline',
              showIconOpenInNew: true,
              title: 'Fóruns',
              from: '',
            },
            {
              slug: 'app-mobile',
              icon: 'ci:mobile',
              showIconOpenInNew: true,
              title: 'Aplicativo móvel',
              from: '',
            },
          ],
          report: [
            {
              slug: 'feedback',
              icon: 'system-uicons:lightbulb-on',
              showIconOpenInNew: false,
              title: 'Enviar Feedback',
              from: '',
            },
            {
              slug: 'send-bug',
              icon: 'ant-design:bug-outlined',
              showIconOpenInNew: false,
              title: 'Comunicar um Erro',
              from: '',
            },
            {
              slug: 'open-discussion',
              icon: 'tabler:flag',
              showIconOpenInNew: false,
              title: 'Iniciar Excursão',
              from: '',
            },
          ],
          logout: [
            {
              slug: 'logout',
              icon: 'tabler:logout-2',
              showIconOpenInNew: false,
              title: 'Sair',
              from: '',
            },
            {
              slug: 'logout',
              icon: 'material-symbols:close-rounded',
              showIconOpenInNew: false,
              title: 'Sair',
              from: '',
            },
          ],
        },
      ],
      menus: [
        {
          slug: 'games',
          title: 'Jogos',
          from: '',
        },
        {
          slug: 'store',
          title: 'Loja',
          from: '',
        },
      ],
    }
  },
  methods: {
    updateItemSelected(slug: string) {
      this.itemActive = slug
    },
  },
})
</script>

<style lang="scss" scoped>
.header {
  grid-area: header;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 20px;
  align-items: center;
  .logo {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    grid-gap: 5px;

    .arrow-down {
      width: 10px;
    }
    .menu-launcher {
      display: grid;
      grid-template-columns: 236px;
      grid-gap: 8px;
      padding: 16px 8px;
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

  .menu-games {
    display: grid;
    grid-auto-flow: column;
    justify-content: flex-start;
    grid-gap: 32px;
    margin: auto 0;
    li {
      display: block;
    }
  }
}
</style>
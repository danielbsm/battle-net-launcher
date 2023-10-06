<template>
  <div class="relative">
    <Icon
      name="gala:bell"
      class="cursor-pointer text-white w-5 h-5"
      @click="showNotifications = !showNotifications"
    />
    <div class="notifications-card text-white" v-show="showNotifications">
      <div class="title">Notificações</div>
      <div
        class="notification bg-zinc-800 hover:bg-zinc-700 rounded"
        v-for="(notification, index) in notifications"
        :key="index"
      >
        <img
          :src="`/nav-games-icons/${notification.game}.svg`"
          :alt="notification.game"
          class="w-8 h-8 mr-2"
        />
        <span class="text-gray-200 text-sm line-clamp-2">{{
          notification.title
        }}</span>
        <span class="time text-sm text-gray-400">{{
          timeAgo(notification.time)
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import convertMsInTimeAgo from '../mixins/date'
export default {
  mixins: [convertMsInTimeAgo],
  data() {
    return {
      showNotifications: false,
      notifications: [
        {
          game: 'wow',
          title: 'Venha conhecer a nova expansão do World Of Warcraft.',
          time: 1683760044682,
        },
        {
          game: 'overwatch',
          title: 'Atiradores novidades chegando no novo patch season 5.',
          time: 1683750553782,
        },
        {
          game: 'wow-classic',
          title: 'Confira todo o poder do Illidan no templo negro!',
          time: 1683720552782,
        },
        {
          game: 'diablo',
          title: 'Lançamento do Diablo IV bate recorde de vendas.',
          time: 1683660551782,
        },
        {
          game: 'hearthstone',
          title: 'Monte seu deck e venha participar do torneio.',
          time: 1683260550782,
        },
      ],
    }
  },
  methods: {
    timeAgo(time) {
      return convertMsInTimeAgo(time)
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin arrows($borderPx, $borderColor) {
  content: '';
  position: absolute;
  border: $borderPx solid transparent;
  bottom: 100%;
  border-bottom-color: $borderColor;
  right: calc(6.2% - $borderPx);
}
.notifications-card {
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 8px;
  position: absolute;
  background-color: #1a1c23;
  border-radius: 6px;
  border: 1px solid #626472;
  padding: 16px;
  transform: translate(-91%);
  top: calc(100% + 20px);
  z-index: 2;
  min-width: 424px;
  &::before {
    @include arrows(10px, #626472);
  }
  &::after {
    @include arrows(9px, #1a1c23);
  }

  .title {
    padding-bottom: 16px;
    text-transform: uppercase;
    font-weight: 2rem;
    font-weight: bold;
    border-bottom: 1px solid #3d4253;
  }
  .notification {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    padding: 8px;
    cursor: pointer;

    img {
      width: 38px;
      height: 38px;
      grid-row: 1/ 2;
    }
    .time {
      display: grid;
      justify-content: end;
      grid-column: span 2;
    }
  }
}
</style>
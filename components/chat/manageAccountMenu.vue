<template>
  <div class="card-manage-account">
    <div class="card-bottom-chat">
      <div class="connected-account-info">
        <div class="user-tag">
          <span class="username">Brutallus</span
          ><span class="user-id"> #1234</span>
        </div>
        <span class="connected-country text-sm">Conectado a: Américas</span>
      </div>
      <div class="separator"></div>
      <div class="status">
        <ul>
          <li>
            <Icon name="mdi:checkbox-blank-circle" class="online" />
            Online
          </li>
          <li><Icon name="mdi:clock-time-three" class="absent" /> Ausente</li>
          <li><Icon name="mdi:minus-circle" class="busy" />Ocupado</li>
          <li>
            <Icon name="ph:circle-bold" class="offline" />Aparecer offline
          </li>
        </ul>
      </div>
      <div class="separator"></div>
      <div class="view-data">
        <ul>
          <li>Ver perfil</li>
          <li>Ver lista de Desejos</li>
          <li>Ver Presentes</li>
          <li>
            Ver conta <Icon name="ic:round-open-in-new" class="w-3 h-3" />
          </li>
          <li>Resgatar um código</li>
        </ul>
      </div>
      <div class="separator"></div>
      <a class="logout" href="#">Sair</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.card-manage-account {
  display: grid;
  position: relative;
  .card-bottom-chat {
    display: grid;
    grid-template-columns: 272px;
    grid-template-rows: auto;
    padding: 8px;
    color: #c5c6c9;
    .connected-account-info {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      padding: 4px 8px;
      margin-bottom: 8px;
      .user-tag {
        font-size: 17px;
        .username {
          color: #add8ff;
        }
      }
      &:hover {
        background-color: rgba(70, 72, 80, 0.5);
      }
    }
    .status {
      margin: 8px 0;
      ul {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        li {
          display: grid;
          grid-template-columns: auto 1fr;
          grid-gap: 12px;
          align-items: center;
          padding: 4px 8px;
          svg {
            font-size: 17px;
          }
          &:hover {
            border-radius: 4px;
            background-color: rgba(39, 41, 48, 0.8);
            color: #fff;
          }
        }
      }
    }
    .view-data {
      margin: 8px 0;
      ul {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        li {
          display: grid;
          grid-template-columns: 1fr auto;
          grid-gap: 12px;
          align-items: center;
          padding: 4px 8px 4px 38px;
          white-space: nowrap;
          svg {
            font-size: 17px;
          }
          &:hover {
            border-radius: 4px;
            background-color: rgba(39, 41, 48, 0.8);
            color: #fff;
          }
        }
      }
    }
    .logout {
      margin-top: 4px;
      padding: 4px 8px 4px 38px;
      &:hover {
        border-radius: 4px;
        background-color: rgba(39, 41, 48, 0.8);
        color: #fff;
      }
    }
  }
}
.online {
  color: #6cdb00;
}
.absent {
  color: #ffb400;
}
.busy {
  color: #dd0000;
}
.offline {
  color: #4e5161;
}
</style>
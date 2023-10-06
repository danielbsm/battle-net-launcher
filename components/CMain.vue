<template>
  <main class="main relative mt-8 px-4">
    <section class="warning">
      <warning v-if="showWarning" />
    </section>
    <section :class="['content overflow-y-auto', { 'mt-14': showWarning }]">
      <div class="carousel flex flex-col rounded mb-5">
        <div class="carousel-img mb-2">
          <img src="/carousel/bg-1.png" alt="carousel" />
        </div>
        <div class="controller flex justify-center items-center">
          <Icon name="ic:twotone-pause" class="text-gray-400 w-5 h-5" />
          <Icon
            name="octicon:horizontal-rule-16"
            class="w-6 h-6 text-blue-500"
          />
          <Icon
            name="ic:outline-horizontal-rule"
            class="w-6 h-6 text-gray-400"
          />
          <Icon
            name="ic:outline-horizontal-rule"
            class="w-6 h-6 text-gray-400"
          />
        </div>
      </div>
      <div class="news">
        <div class="card rounded" v-for="(noticia, index) in news" :key="index">
          <img
            :src="`/news/news-${index + 1}.jpg`"
            alt="news-1"
            class="rounded-t"
          />
          <div class="title flex flex-col px-4 py-5">
            <span class="type mb-1 text-gray-400 text-sm font-bold uppercase">{{
              noticia.type
            }}</span>
            <span class="description text-white font-bold line-clamp-3">{{
              noticia.title
            }}</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CMain',
  data() {
    return {
      showWarning: true,
      news: [
        {
          type: 'Noticias',
          title: 'Esta semana no WoW: 24 de abril de 2023',
        },
        {
          type: 'Noticias',
          title:
            '[ATUALIZADO 20 DE ABRIL] Domine os desafios da Série 2 de Dragonflight em 9 de maio',
        },
        {
          type: 'Noticias',
          title: 'Dragonflight: ganhando altitude de voo',
        },
      ],
    }
  },
})
</script>
<style lang="scss" scoped>
.main {
  grid-area: main;
  display: grid;
  grid-template-rows: auto 1fr;
  .content {
    max-height: calc(100vh - 240px);
    display: grid;
    grid-template-rows: auto 1fr;
    .news {
      display: grid;
      grid-template-columns: repeat(
        auto-fit,
        minmax(max(100% / 3 - 11px), 1fr)
      );
      grid-template-rows: auto;
      grid-gap: 16px;
      .card {
        max-height: 347px;
        background-color: #24252b;
        cursor: pointer;
        transition: 300ms;
        img {
          max-height: 218px;
          min-height: 110px;
          opacity: 0.9;
          transition: 300ms;
        }
        .title {
          transition: transform 300ms;
          @media screen and (max-width: 938px) {
            font-size: 0.9rem;
          }
        }
        &:hover {
          transition: 300ms;
          background-color: rgba(131, 131, 131, 0.2);
          img {
            transition: 300ms;
            opacity: 1;
          }
          .title {
            transition: transform 300ms;
            transform: translateY(-5px);
          }
        }
        @media screen and (max-width: 938px) {
          max-height: 225px;
        }
      }
    }
  }
}
</style>
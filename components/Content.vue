<template>
  <div class="flex flex-col justify-between px-6 w-4/5">
    <!-- <warning /> -->
    <section class="content overflow-y-scroll pr-1 pb-2">
      <div class="carousel flex flex-col rounded mb-5">
        <div class="carousel-img mb-2">
          <img src="/carousel/bg-1.png" alt="carousel" />
        </div>
        <div class="controller flex justify-center items-center">
          <Icon name="ic:twotone-pause" class="text-gray-400 w-5 h-5" />
          <Icon
            name="ic:outline-horizontal-rule"
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
      <div class="news flex rounded gap-4">
        <div class="card" v-for="i in 3" :key="i">
          <img :src="`/news/news-${i}.jpg`" alt="news-1" class="rounded-t" />
          <div class="title flex flex-col px-8 py-5">
            <span class="type mb-1 text-gray-400 text-sm font-bold uppercase"
              >Noticias</span
            >
            <span class="description text-white font-bold"
              >Programação e prévia do raide Aberrus, o Crisol Sombrio</span
            >
          </div>
        </div>
      </div>
      <div class="news flex rounded gap-4">
        <div class="card" v-for="i in 3" :key="i">
          <img :src="`/news/news-${i}.jpg`" alt="news-1" class="rounded-t" />
          <div class="title flex flex-col px-8 py-5">
            <span class="type mb-1 text-gray-400 text-sm font-bold uppercase"
              >Noticias</span
            >
            <span class="description text-white font-bold"
              >Programação e prévia do raide Aberrus, o Crisol Sombrio</span
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.content {
  height: calc(100vh - 250px);
  .card {
    max-width: 385px;
    width: 100%;
    height: 347px;
    background-color: #24252b;
    cursor: pointer;
    transition: 300ms;
    img {
      max-height: 218px;
      height: 100%;
      opacity: 0.9;
      transition: 300ms;
    }
    .title {
      transition: transform 300ms;
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
  }
}
::-webkit-scrollbar {
  width: 0.5rem;
}

::-webkit-scrollbar-thumb {
  background: #313239;
  border-radius: 8px;
}

::-webkit-scrollbar-thumb:hover {
  background: #41424d;
}
</style>
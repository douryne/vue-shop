<template>
  <div class="list_body d-flex text-center flex-column">
    <h1 class="mt-6 mb-12 mx-n3">
      My Shop
    </h1>
    <div class="item_list d-flex justify-space-between flex-wrap">
      <item-card
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import itemCard from '../components/itemCard'

export default {
  components: {
    itemCard
  },
  data () {
    return {
      items: [
        { title: 'Пылосос', category: 'Категория', price: 4200 },
        { title: 'Пылосос', category: 'Категория', price: 4200 },
        { title: 'Пылосос', category: 'Категория', price: 4200 },
        { title: 'Товар', category: 'Категория', price: 4200 },
        { title: 'Товар', category: 'Категория', price: 4200 },
        { title: 'Товар', category: 'Категория', price: 4200 },
        { title: 'Товар', category: 'Категория', price: 4200 },
        { title: 'Товар', category: 'Категория', price: 4200 },
        { title: 'Товар', category: 'Категория', price: 4200 },
        { title: 'Товар', category: 'Категория', price: 4200 },
        { title: 'Товар', category: 'Категория', price: 4200 }
      ]
    }
  }
}
</script>

<style>
  .item_list {
    background-color: #ffffff;
  }
  .list_body {
    width: 100%;
    height: 100%;
  }
</style>

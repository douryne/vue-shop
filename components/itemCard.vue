<template>
  <div class="item mb-5 mx-3">
    <h1>{{ item.title }}</h1>
    <h2>{{ item.category }}</h2>
    <p>{{ item.price }}</p>
    <v-btn small fab dark color="indigo" @click="pushToBasket(item)">
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ItemCard',
  props: {
    item: { type: Object, required: true }
  },
  methods: mapMutations('items', ['pushToBasket'])
}
</script>

<style>
  .item {
    padding: 50px;
    border: 1px solid #CBCBCB;
    border-radius: 10%;
  }
</style>

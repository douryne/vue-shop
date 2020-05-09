<template>
  <div class="item mb-5 mx-3">
    <v-btn v-if="removable" icon large class="mb-12" @click="removeItem(item)">
      <v-icon>mdi-delete-forever</v-icon>
      {{ item.id }}
    </v-btn>
    <v-img :src="item.src" />
    <h2 @click="getItem(item)">
      <nuxt-link :to="{ name: 'itemPage' }">
        {{ item.title }}
      </nuxt-link>
    </h2>
    <h2>{{ item.category }}</h2>
    <p>{{ item.price }}</p>
    <v-btn small fab dark color="indigo" @click="saveItemInTheBasket(item)">
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'

export default {
  name: 'ItemCard',
  props: {
    removable: { type: Boolean, required: false, default: false },
    item: { type: Object, required: true }
  },
  computed: {
    ...mapState('items', ['disabled'])
  },
  methods: {
    ...mapMutations('items', ['getItem']),
    ...mapActions('items', ['saveItemInTheBasket', 'removeItem'])
  }
}
</script>

<style>
  .item {
    padding: 50px;
    border: 1px solid #CBCBCB;
    border-radius: 10%;
    width: 18vw;
    height: auto;
  }
</style>

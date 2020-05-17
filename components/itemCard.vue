<template>
  <div class="item d-flex justify-space-between flex-column align-center mb-5 mx-3">
    <v-btn v-if="removable" icon large class="mb-12" @click="removeItem(item)">
      <v-icon>mdi-delete-forever</v-icon>
    </v-btn>
    <div>
      <v-img max-width="12vw" class="item_card_img mb-6" :src="item.src" />
    </div>
    <div>
      <h2 class="mb-6" @click="getItem(item)">
        <nuxt-link :to="{ name: 'itemPage' }" style="color: black; text-decoration: none; opacity: .75">
          {{ item.title }}
        </nuxt-link>
      </h2>
      <h3 class="mb-6" style="color: #47494e">
        {{ item.price }}₽
      </h3>
      <v-btn small fab dark color="grey darken-3" @click="saveItemInTheBasket(item)">
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </div>
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
    border-radius: 10%;
    width: 18vw;
    height: auto;
  }
  .item_card_img {
    height: 200px;
    background-size: cover;
    background-position: center;
  }
</style>

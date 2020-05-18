<template>
  <nuxt-link :to="{ name: 'itemPage' }" style="text-decoration: none;">
    <div class="item d-flex justify-space-between flex-column align-center mb-5 mx-3" @click="getItem(item)">
      <v-btn v-if="removable" icon large class="mb-12" @click="saveOrRemoveItem([$event, item])">
        <v-icon>mdi-delete-forever</v-icon>
      </v-btn>
      <div>
        <v-img max-width="12vw" class="item_card_img mb-6" :src="item.src" />
      </div>
      <h2 class="mb-6" style="color: black; opacity: .75">
        {{ item.title }}
      </h2>
      <h3 class="mb-6" style="color: #47494e">
        {{ item.price }}₽
      </h3>
      <v-btn small fab dark color="grey darken-3" @click="saveOrRemoveItem([$event, item])">
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </div>
  </nuxt-link>
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
    ...mapActions('items', ['saveItemInTheBasket', 'removeItem']),
    saveOrRemoveItem ([event, item]) {
      event.preventDefault()
      this.removable ? this.removeItem(item) : this.saveItemInTheBasket(item)
    }
  }
}
</script>

<style>
  .item {
    padding: 50px;
    width: 18vw;
    height: 100%;
    transition: background-color 0.5s;
  }
  .item_card_img {
    height: 200px;
    background-size: cover;
    background-position: center;
  }
</style>

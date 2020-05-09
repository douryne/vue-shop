<template>
  <div class="d-flex flex-column">
    <v-img :src="item.src" class="mb-12 mt-6" />
    <hr>
    <div>
      <h1>{{ item.title }}</h1>
      <h2 class="mt-6 mb-4">
        Specs:
      </h2>
      <h4>{{ item.specs }}</h4>
      <v-btn color="indigo accent-1">
        <nuxt-link class="checkout" to="/checkout">
          Checkout
        </nuxt-link>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('items', ['item'])
  }
}
</script>

<style scoped>
  .checkout {
    text-decoration: none;
    color: black;
  }
</style>

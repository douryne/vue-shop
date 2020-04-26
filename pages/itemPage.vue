<template>
  <div class="d-flex flex-column">
    <h1 class="mb-12 mt-6">
      КАРТИНКА ВСЁ КАРТИНКА АААА КАРТИНКА ААА
    </h1>
    <hr>
    <div>
      <h1 class="mt-12 mb-6">
        Specs:
      </h1>
      <h3>{{ item.title }}</h3>
      <h4>{{ item.specs }}</h4>
      <v-btn>
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

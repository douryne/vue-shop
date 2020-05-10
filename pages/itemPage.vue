<template>
  <div class="d-flex flex-column">
    <div>
      <v-img max-width="400px" :src="item.src" class="itemImg mb-12 mx-auto mt-6" />
    </div>
    <hr>
    <div class="mt-12">
      <h1>{{ item.title }}</h1>
      <h2 class="mt-6 mb-4">
        Specs:
      </h2>
      <h4 v-for="(spec, i) in item.specs" :key="i">
        {{ spec }}
      </h4>
      <h2 class="mt-4">
        Price: {{ item.price }}
      </h2>
      <v-btn class="mt-8" color="indigo accent-1">
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
  .itemImg {
    display: block;
    height: auto;
    object-fit: contain;
  }
</style>

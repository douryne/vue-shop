<template>
  <div class="list_body d-flex text-center flex-column">
    <h1 class="mt-6 mb-12 mx-n3">
      Basket
    </h1>
    <div class="d-flex justify-space-between flex-wrap">
      <item-card
        v-for="(item, index) in basket"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import itemCard from '../components/itemCard'

export default {
  name: 'TV',
  components: {
    itemCard
  },
  computed: {
    ...mapState('items', ['basket'])
  }
}
</script>

<style scoped>

</style>

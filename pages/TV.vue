<template>
  <div class="d-flex text-center flex-column">
    <h1 class="mt-6 mb-12 mx-n3">
      TV
    </h1>
    <div class="d-flex justify-space-between flex-wrap">
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
  name: 'TV',
  components: {
    itemCard
  },
  computed: {
    items () {
      return this.$store.getters['items/getCategoryItems']('TV')
    }
  }
}
</script>

<style scoped>

</style>

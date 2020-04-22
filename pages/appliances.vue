<template>
  <div class="d-flex text-center flex-column">
    <h1 class="mt-6 mb-12 mx-n3">
      Appliances
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
  name: 'Appliances',
  components: {
    itemCard
  },
  computed: {
    items () {
      return this.$store.getters['items/getCategoryItems']('appliances')
    }
  }
}
</script>

<style scoped>

</style>

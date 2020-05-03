<template>
  <div class="d-flex text-center flex-column">
    <h1 class="mt-6 mb-12 mx-n3">
      Laptops
    </h1>
    <v-select
      v-model="filterValue"
      class="itemPriceSelect ml-6"
      :items="['Default','itemsFromHighPrice', 'itemsFromLowPrice']"
      dense
      outlined
    />
    <div class="d-flex justify-space-between flex-wrap">
      <item-card
        v-for="(item, index) in filteredItems('laptops')"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import itemCard from '../components/itemCard'

export default {
  name: 'TV',
  components: {
    itemCard
  },
  computed: {
    ...mapGetters('items', ['filteredItems']),
    filterValue: {
      get () {
        return this.$store.state.items.filterValue
      },
      set (filterValue) {
        this.$store.commit('items/updateFilterValue', filterValue)
      }
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="d-flex text-center flex-column">
    <h1 class="mt-6 mb-12 mx-n3">
      SmartPhones
    </h1>
    <v-select
      v-model="filterValue"
      color="grey darken-2"
      item-color="grey darken-2"
      class="itemPriceSelect ml-6"
      :items="['Default','itemsFromHighPrice', 'itemsFromLowPrice']"
      dense
      outlined
    />
    <div class="d-flex justify-space-between flex-wrap">
      <item-card
        v-for="(item, index) in filteredItems('phones')"
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
  name: 'Phones',
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

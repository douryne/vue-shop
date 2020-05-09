<template>
  <div class="list_body d-flex text-center align-center flex-column">
    <alert />
    <h1 class="mt-6 mb-12 mx-n3">
      My Shop
    </h1>
    <v-carousel
      cycle
      height="300"
      interval="5000"
      hide-delimiters
      class="slider mb-12"
    >
      <v-carousel-item
        v-for="(slide,i) in getHotItems"
        :key="i"
        @click="handleClick(slide)"
      >
        <v-img class="slider-image" :src="slide.src" :alt="slide.src" />
      </v-carousel-item>
    </v-carousel>
    <v-select
      v-model="filterValue"
      class="itemPriceSelect ml-6"
      :items="['Default','itemsFromHighPrice', 'itemsFromLowPrice']"
      dense
      outlined
    />
    <div class="item_list d-flex justify-space-between flex-wrap">
      <item-card
        v-for="(item, index) in filteredItems()"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import alert from '../components/alert'
import itemCard from '../components/itemCard'

export default {
  components: {
    itemCard,
    alert
  },
  computed: {
    ...mapGetters('items', ['filteredItems', 'getHotItems']),
    filterValue: {
      get () {
        return this.$store.state.items.filterValue
      },
      set (filterValue) {
        this.$store.commit('items/updateFilterValue', filterValue)
      }
    }
  },
  methods: {
    handleClick (slide) {
      this.getItem(slide)
      this.$router.push('/itemPage')
    }
  }
}
</script>

<style>
  .alert-enter-active, .alert-leave-active {
    transition: opacity 1s;
  }
  .alert-enter, .alert-leave-to {
    opacity: 0;
  }
  .alert {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    height: 80px;
  }
  .item_list {
    background-color: #ffffff;
  }
  .itemPriceSelect {
    width: 400px;
  }
  .list_body {
    width: 100%;
    height: 100%;
  }
  .slider {
    width: 1500px;
  }
  .slider-image {
    display: block;
    height: 100%;
    object-fit: contain;
  }
</style>

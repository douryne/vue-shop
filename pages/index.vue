<template>
  <div class="list_body d-flex text-center flex-column">
    <alert />
    <h1 class="mt-6 mb-12 mx-n3">
      My Shop
    </h1>
    <div class="item_list d-flex justify-space-between flex-wrap">
      <item-card
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import alert from '../components/alert'
import itemCard from '../components/itemCard'

export default {
  components: {
    itemCard,
    alert
  },
  computed: {
    items () {
      return this.$store.getters['items/getCategoryItems']()
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
  .list_body {
    width: 100%;
    height: 100%;
  }
</style>

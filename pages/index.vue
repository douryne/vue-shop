<template>
  <div class=" list_body d-flex text-center flex-column">
    <h1 class="mt-6 mb-12">
      My Shop
    </h1>
    <div class=" item_list d-flex justify-space-between">
      <item-card />
      <item-card />
      <item-card />
      <item-card />
      <item-card />
      <item-card />
      <item-card />
      <item-card />
      <item-card />
      <item-card />
      <item-card />
      <item-card />
      <item-card />
      <item-card />
      <item-card />
      <item-card />
      <item-card />
      <item-card />
    </div>
  </div>
</template>

<script>
import itemCard from '../components/itemCard'

export default {
  components: {
    itemCard
  }
}
</script>

<style>
  .item_list {
    background-color: #ffffff;
    width: 80vw;
    flex-wrap: wrap;
  }
  .list_body {
    width: 100%;
    height: 100%;
  }
</style>

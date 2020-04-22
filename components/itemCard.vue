<template>
  <div class="item mb-5">
    <h1>Картинка</h1>
    <h1>Товар</h1>
    <h2>Категория</h2>
    <p>Цена</p>
    <v-btn small fab dark color="indigo">
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'ItemCard'
}
</script>

<style>
  .item {
    padding: 50px;
    border: 1px solid #CBCBCB;
    border-radius: 10%;
  }
</style>

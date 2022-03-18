<template>
  <div class="d-flex justify-center text-center flex-column">
    <h1 class="mb-10">
      Buy product
    </h1>
    <h2 class="mb-10">
      Choose one way to pay:
    </h2>
    <v-list class=" wayList mb-10">
      <v-list-item-group v-model="model" active-class="image" class="d-flex flex-row justify-space-between">
        <v-list-item
          v-for="(way, i) in ways"
          :key="i"
          class="list-item"
        >
          <v-img
            :src="way.src"
            contain
            height="auto"
            max-width="100px"
            alt=""
          />
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <hr>
    <div>
      <v-btn
        class="buyBtn"
        :disabled="model === undefined"
        dark
        color="grey darken-3"
        @click="getAlertAndRedirect"
      >
        Buy
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      wayClass: 'images',
      model: undefined,
      alertText: 'My congratulations. The purchase have been done successfully',
      alertType: 'success',
      ways: [
        { src: '/mts.jpg' },
        { src: '/bilain.png' },
        { src: '/tele2.png' },
        { src: '/megafon.png' },
        { src: '/visa.png' },
        { src: '/mastercard.png' },
        { src: '/qiwi.png' },
        { src: '/webmoney.png' }
      ]
    }
  },
  computed: {},
  methods: {
    getAlertAndRedirect () {
      this.getAlert([this.alertType, this.alertText])
      this.$router.push('/')
    },
    ...mapActions('alerts', ['getAlert'])
  }
}
</script>

<style scoped>
  .wayList {
    border: 1px solid lightgrey;
    padding: 50px;
  }
  .buyBtn {
    margin-top: 40px;
    width: 150px;
  }
  .list-item {
    border: 2px solid cornflowerblue;
    border-radius: 5%;
    flex: none;
    display: flex;
    padding: 0;
  }
  .image {
    border: 2px solid orange;
    border-radius: 5%;
    padding: 0;
  }
</style>

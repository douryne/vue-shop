<template>
  <div class="list_body d-flex text-center flex-column">
    <h1 class="mt-6 mb-12 mx-n3">
      Basket
    </h1>
    <v-btn class="deleteBtn mx-auto mb-12" dark color="grey darken-3" @click="deleteAllItemsInTheBasket">
      Remove All
    </v-btn>
    <div class="d-flex justify-space-between flex-wrap">
      <item-card
        v-for="(item, index) in basket"
        :key="index"
        removable
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import firebase from 'firebase'
import itemCard from '../components/itemCard'

export default {
  name: 'TV',
  components: {
    itemCard
  },
  data () {
    return {
      data: null
    }
  },
  computed: {
    ...mapState('items', ['email', 'basket']),
    ...mapActions('items', ['getUid'])
  },
  async mounted () {
    const uid = await this.getUid
    if (this.email === null) {
      this.updateBasket(JSON.parse(localStorage.getItem('basket')))
    } else {
      this.data = firebase.database().ref().child(`/users/${uid}/items`)
      this.data.on('value', snap => this.$store.commit('items/updateBasket', snap.val()))
    }
  },
  methods: {
    ...mapMutations('items', ['updateBasket']),
    ...mapActions('items', ['deleteAllItemsInTheBasket'])
  }
}
</script>

<style scoped>
  .deleteBtn {
    width: 300px;
  }
</style>

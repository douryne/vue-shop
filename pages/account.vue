<template>
  <div>
    <h1>Account</h1>
    <v-btn color="grey darken-3" dark @click="logout">
      Logout
    </v-btn>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Account',
  middleware: 'auth',
  methods: {
    ...mapMutations('auth', ['clearData']),
    ...mapMutations('items', ['clearEmail']),
    logout () {
      this.clearEmail()
      this.clearData()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>

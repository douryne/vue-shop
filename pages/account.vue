<template>
  <div>
    <h1>Account</h1>
    <v-btn @click="logout">logout</v-btn>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Account',
  middleware: 'auth',
  methods: {
    ...mapMutations('auth', ['clearData']),
    logout () {
      this.clearData()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>

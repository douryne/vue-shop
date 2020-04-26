<template>
  <transition name="alert">
    <v-alert v-if="alert" class="alert d-flex align-center" :type="alertType">
      {{ alertText }}
    </v-alert>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Alert',
  computed: {
    ...mapState('alerts', ['alert', 'alertText', 'alertType'])
  }
}
</script>

<style scoped>

</style>

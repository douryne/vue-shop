<template>
  <div class="d-flex justify-center align-center">
    <div class="d-flex justify-center flex-column align-center" style="width: 400px">
      <h1 class="mx-auto mt-6 mb-6">
        Login
      </h1>
      <v-form class="mt-12">
        <v-text-field v-model="email" color="grey darken-3" label="E-mail" />
        <v-text-field v-model="password" color="grey darken-3" autocomplete="on" type="password" label="Password" />
        <div class="d-flex justify-center flex-column">
          <v-btn
            class="mx-auto mb-5"
            depressed
            dark
            color="grey darken-3"
            style="height: 40px; width: 400px"
            @click="submitHandler"
          >
            Login
          </v-btn>
          <div class="d-flex justify-space-around align-center">
            <strong>Don't have an account?</strong>
            <v-btn depressed dark color="grey darken-3" to="/registration" style="height: 40px; width: 200px;">
              Register
            </v-btn>
          </div>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      alertType: 'error'
    }
  },
  computed: {
    error () {
      return this.error
    },
    ...mapGetters('auth', ['error']),
    ...mapState('alerts', ['alert'])
  },
  watch: {
    error () {
      this.getAlert([this.alertType, this.error])
    }
  },
  methods: {
    ...mapMutations('auth', ['getData']),
    ...mapMutations('items', ['emailChanger']),
    ...mapActions('auth', ['login']),
    ...mapActions('alerts', ['getAlert']),
    async submitHandler () {
      const formData = {
        email: this.email,
        password: this.password
      }

      try {
        await this.login(formData)
        await this.getData(this.email)
        await this.emailChanger(this.email)
        this.$router.push('/')
      } catch (e) {}
    }
  }
}
</script>

<style>
</style>

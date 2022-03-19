<template>
  <div class="d-flex justify-center">
    <div class="d-flex justify-center flex-column" style="width: 400px">
      <h1 class="mx-auto mt-6 mb-6">
        Register
      </h1>
      <v-form v-model="valid" class="mt-12" @submit.prevent="submitHandler">
        <v-text-field v-model="email" color="grey darken-3" label="E-mail" />
        <v-text-field v-model="name" color="grey darken-3" :rules="[(value) => value.length > 1 ]" label="Name" />
        <v-text-field
          v-model="password"
          color="grey darken-3"
          :rules="[(value) => value.length >= 6 ]"
          autocomplete="on"
          type="password"
          label="Password"
        />
        <div class="d-flex flex-column">
          <v-btn
            class="mr-4 mb-5"
            depressed
            type="submit"
            style="height: 40px; width: 400px"
            color="grey darken-3"
            dark
          >
            Register
          </v-btn>
          <div class="d-flex justify-space-around align-center">
            <strong>Do have an account?</strong>
            <v-btn depressed dark color="grey darken-3" to="/login" style="height: 40px; width: 200px;">
              Log in
            </v-btn>
          </div>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
  name: 'Login',
  components: {},
  data () {
    return {
      email: '',
      password: '',
      name: '',
      alertType: 'error',
      valid: false
    }
  },
  computed: {
    error () {
      return this.error
    },
    ...mapGetters('auth', ['error']),
    ...mapMutations('auth', ['getData']),
    ...mapState('alerts', ['alert'])
  },
  watch: {
    error () {
      this.getAlert([this.alertType, this.error])
    }
  },
  methods: {
    ...mapActions('auth', ['register']),
    ...mapActions('alerts', ['getAlert']),
    async submitHandler () {
      if (!this.valid) { return }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      }
      try {
        await this.register(formData)
        this.$router.push('/')
      } catch (e) {}
    }
  }
}
</script>

<style>
</style>

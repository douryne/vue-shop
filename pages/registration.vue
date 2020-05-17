<template>
  <div class="d-flex justify-center">
    <div class="d-flex justify-center flex-column" style="width: 400px">
      <transition name="alert">
        <v-alert v-if="alert === true" class="alert d-flex align-center" type="error">
          {{ error.message }}
        </v-alert>
      </transition>
      <h1 class="mx-auto mt-6 mb-6">
        Register
      </h1>
      <v-form v-model="valid" class="mt-12" @submit.prevent="submitHandler">
        <v-text-field v-model="email" color="grey darken-3" label="E-mail" />
        <v-text-field v-model="name" color="grey darken-3" :rules="[(value) => value.length > 1 ]" label="Name" />
        <v-text-field v-model="password" color="grey darken-3" autocomplete="on" type="password" label="Password" />
        <div class="d-flex flex-column">
          <v-btn
            class="mr-4 mb-5"
            depressed
            dark
            color="grey darken-3"
            style="height: 40px; width: 400px"
            type="submit"
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
      this.getAlert()
      this.changeAlertText(this.error)
      this.changeAlertType(this.alertType)
    }
  },
  methods: {
    ...mapActions('auth', ['register']),
    ...mapActions('alerts', ['getAlert']),
    ...mapMutations('alerts', ['changeAlertText']),
    ...mapMutations('alerts', ['changeAlertType']),
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
  .alert-enter-active, .alert-leave-active {
    transition: opacity 1s;
  }
  .alert-enter, .alert-leave-to {
    opacity: 0;
  }
  .alert {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    height: 80px;
  }
</style>

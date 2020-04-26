<template>
  <div class="d-flex justify-center align-center">
    <div class="d-flex justify-center flex-column align-center" style="width: 400px">
      <alert />
      <h1 class="mx-auto mt-6 mb-6">
        Login
      </h1>
      <v-form class="mt-12">
        <v-text-field v-model="email" label="E-mail" />
        <v-text-field v-model="password" autocomplete="on" type="password" label="Password" />
        <div class="d-flex justify-center flex-column">
          <v-btn class="mx-auto mb-5" depressed color="indigo accent-1" style="height: 40px; width: 400px" @click="submitHandler">
            Login
          </v-btn>
          <div class="d-flex justify-space-around align-center">
            <strong>Don't have an account?</strong>
            <v-btn depressed color="indigo accent-1" to="/registration" style="height: 40px; width: 200px;">
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
import alert from '../components/alert'

export default {
  name: 'Login',
  components: {
    alert
  },
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

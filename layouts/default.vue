<template>
  <v-app>
    <!-- <alert /> -->
    <v-dialog
      v-model="dialog"
      max-width="500px"
    >
      <v-card class="text-center pa-6">
        <v-card-title>
          Choose your problem
        </v-card-title>
        <v-card-text>
          <v-select
            v-model="selected"
            color="grey darken-2"
            item-color="grey darken-2"
            :items="select"
            label="A Select List"
            item-value="text"
          />
        </v-card-text>
        <h3 class="mb-6">
          Describe your problem
        </h3>
        <v-textarea
          v-model="problemText"
          background-color="grey lighten-2"
          color="grey darken-1"
          filled
          label="Your problem"
          auto-grow
        />
        <v-card-actions class="d-flex justify-center">
          <v-btn color="grey darken-3" dark :disabled="selected === null || problemText === ''" class="supportBtn" @click="sendMessage">
            Send
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          color="grey darken-3"
          :to="item.to"
          class=""
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      color="rgba(0, 0, 0, 0.8)"
      dark
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon large @click.stop="drawer = !drawer" />
      <v-spacer />
      <div>
        <v-text-field
          class="mr-6 mt-6"
          style="width: 300px"
          dense
          rounded
          label="Search"
          outlined
        />
      </div>
      <v-btn to="/account" icon>
        <v-icon large>
          mdi-account
        </v-icon>
      </v-btn>
      <v-btn nuxt to="/basket" icon class="ml-4">
        <v-icon large>
          mdi-cart-arrow-down
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      dark
      absolute
      app
    >
      <v-spacer />
      <v-btn class="mr-12" text @click="dialog = true">
        <span>
          Support
        </span>
      </v-btn>
      <span>&copy; Ofoty {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
// import alert from '../components/alert'
export default {
  components: {
    // alert
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      dialog: false,
      selected: null,
      problemText: '',
      alertType: 'success',
      select: [
        { text: 'State 1' },
        { text: 'State 2' },
        { text: 'State 3' },
        { text: 'State 4' },
        { text: 'State 5' },
        { text: 'State 6' },
        { text: 'State 7' }
      ],
      items: [
        {
          icon: 'mdi-shopping',
          title: 'My-Shop',
          to: '/'
        },
        {
          icon: 'mdi-cellphone',
          title: 'SmartPhones',
          to: '/phones'
        },
        {
          icon: 'mdi-laptop',
          title: 'Laptops',
          to: '/laptops'
        },
        {
          icon: 'mdi-monitor',
          title: 'Monitors',
          to: '/monitors'
        },
        {
          icon: 'mdi-television',
          title: 'TV',
          to: '/tv'
        },
        {
          icon: 'mdi-washing-machine',
          title: 'Appliances',
          to: '/appliances'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      alertText: 'Thank you for your help. We will resolve your problem'
    }
  },
  methods: {
    sendMessage () {
      this.getAlert([this.alertType, this.alertText])
      this.dialog = false
      this.selected = {}
      this.problemText = ''
    },
    ...mapActions('alerts', ['getAlert'])
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
    position: fixed;
    top: 9%;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    height: 80px;
  }
  .supportBtn{
    width: 150px;
    height: auto;
  }
</style>

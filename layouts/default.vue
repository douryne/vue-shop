<template>
  <v-app>
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
            color="indigo accent-3"
            item-color="indigo accent-3"
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
          background-color="indigo lighten-4"
          color="indigo accent-3"
          filled
          label="Your problem"
          auto-grow
        />
        <v-card-actions class="d-flex justify-center">
          <v-btn color="indigo accent-1" :disabled="selected === null || problemText === ''" class="supportBtn" @click="sendMessage">
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
          color="indigo accent-3"
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
      color="indigo accent-1"
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
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      color="indigo lighten-3"
      :fixed="fixed"
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
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
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
  .supportBtn{
    width: 150px;
    height: auto;
  }
</style>

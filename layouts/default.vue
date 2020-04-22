<template>
  <v-app>
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
      <v-btn icon>
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
      <span>&copy; Ofoty {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
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
      title: 'Vuetify.js'
    }
  }
}
</script>

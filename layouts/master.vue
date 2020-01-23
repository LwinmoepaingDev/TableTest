<template>
  <v-app dark>
    <LeftDrawer
      :drawer="drawer"
      :items="items"
      :miniVariant="miniVariant"
      :clipped="clipped"
      :fixed="fixed"
      @drawerToggle="setDrawer($event)"
    />

    <AppBar
      :miniVariant="miniVariant"
      :clipped="clipped"
      :title="title"
      @drawerToggle="drawer = !drawer"
      @miniVariantToggle="miniVariant = !miniVariant"
      @clippedToggle="clipped = !clipped"
      @fixedToggle="fixed = !fixed"
      @rightDrawerToggle="rightDrawer = !rightDrawer"
    />

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <RightNavigationDrawer
      :fixed="fixed"
      :rightDrawer="rightDrawer"
      @drawerToggle="setRightDrawer($event)"
    />

    <Footer :fixed="fixed" />
  </v-app>
</template>

<script>
import AppBar from '~/components/Navigation/AppBar'
import LeftDrawer from '~/components/Navigation/LeftDrawer'
import RightNavigationDrawer from '~/components/Navigation/RightNavigationDrawer'
import Footer from '~/components/Footer'
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Master'
    }
  },
  methods: {
    setDrawer (event) { this.drawer = event },
    setRightDrawer (event) { this.rightDrawer = event}
  },
  components: { AppBar, Footer, LeftDrawer, RightNavigationDrawer }
}
</script>

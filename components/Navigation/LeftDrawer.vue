<template>
  <v-navigation-drawer
    v-model="propDrawer"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app
  >
    <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
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
</template>

<script>
export default {
  props: {
    items: Array,
    miniVariant: Boolean,
    clipped: Boolean,
    fixed: Boolean,
    drawer: {
      type: Boolean,
      require: true
    }
  },
  computed: {
    propDrawer: {
      get() { return this.drawer },
      set(propDrawer) {
        this.$emit('drawerToggle', propDrawer);
      }
    }
  }
}
</script>

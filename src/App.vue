<template>
  <v-app>
    <v-app-bar app color="primary" dark flat class="app-bar">
      <v-toolbar-title style="font-weight: 700;">vuemblr.</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        class="nav-button"
        v-for="link in links"
        :key="`${link.label}-link`"
        :to="link.url"
        icon
        small
        dark
      >
        <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {
      links: [
        { label: "Dashboard", url: "/dashboard", icon: "mdi-home" },
        // { label: "Home", url: "/", icon: "mdi-home" },
        // { label: "Login", url: "/login" },
        // { label: "Signup", url: "/signup" },
        { label: "Account", url: "/account", icon: "mdi-account" },
        { label: "New Post", url: "/new", icon: "mdi-pencil" },
      ],
    };
  },
};
</script>

<style scoped>

.nav-button {
  margin: 0 10px;
}
</style>

<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn 
        v-for="link in links" 
        :key="`${link.label}-link`"
        text
        rounded
        :to="link.url"
      >{{
        link.label
      }}</v-btn>
      <v-spacer></v-spacer>
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
        { label: "Dashboard", url: "/dashboard" },
        { label: "Home", url: "/" },
        { label: "Login", url: "/login" },
        { label: "Signup", url: "/signup" },
      ],
    };
  },
};
</script>

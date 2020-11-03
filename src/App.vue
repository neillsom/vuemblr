<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <v-app-bar app color="primary" flat class="c-app-bar">
      <router-link to="/dashboard">
        <v-toolbar-title> vumblr </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn
        class="nav-button"
        v-for="link in links"
        :key="`${link.label}-link`"
        :to="link.url"
        depressed
        small
        :color="link.color"
      >
        <v-icon color="iconColor">{{ link.icon }}</v-icon>
      </v-btn>
      <v-btn small color="transparent" depressed @click="toggleTheme">
        <v-icon color="iconColor"> mdi-radiobox-marked </v-icon>
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
        {
          label: "Dashboard",
          url: "/dashboard",
          icon: "mdi-home",
          color: "transparent",
        },

        {
          label: "Signup",
          url: "/signup",
          icon: "mdi-account-plus",
          color: "transparent",
        },
        {
          label: "Account",
          url: "/account",
          icon: "mdi-account",
          color: "transparent",
        },
        {
          label: "Inbox",
          url: "/inbox",
          icon: "mdi-email-outline",
          color: "transparent",
        },
        {
          label: "New Post",
          url: "/new",
          icon: "mdi-pencil",
          color: "primary",
        },
      ],
    };
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};
</script>

<style scoped>
.c-app-bar {
  font-weight: 700;
  font-family: "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif;
  outline: 1px solid var(--v-secondary-base);

}
.nav-button {
  margin: 0 10px;
}
.v-toolbar__title {
  color: var(--v-iconColor-base);
  text-decoration: none;
}
</style>

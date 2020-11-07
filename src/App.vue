<template>
  <v-app
    :style="{ background: $vuetify.theme.themes[theme].background }"
    class="app-container"
  >
    <v-app-bar style="height: 54px" class="v-app-bar" app color="primary" flat>
      <router-link to="/dashboard">
        <v-toolbar-title style="font-size: 1.75em"> vumblr </v-toolbar-title>
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
        :title="link.label"
        :aria-label="link.label"
      >
        <v-icon color="iconColor">{{ link.icon }}</v-icon>
      </v-btn>

      <v-btn small color="transparent" depressed @click="toggleTheme">
        <v-icon color="iconColor"> mdi-radiobox-marked </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="main-body">
      <div class="router-body">
        <router-view></router-view>
      </div>
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

        // {
        //   label: "Signup",
        //   url: "/signup",
        //   icon: "mdi-account-plus",
        //   color: "transparent",
        // },
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
          color: "secondary",
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
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.v-toolbar.v-app-bar {
  font-weight: 900;
  font-family: "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12) !important;
  display: flex;
  flex-direction: column;
}
.nav-button {
  margin: 0 10px;
}
.v-toolbar__title {
  color: var(--v-iconColor-base);
  text-decoration: none;
}
.main-body {
  width: 990px;
}
.router-body {
}
</style>

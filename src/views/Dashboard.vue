<template>
  <div class="dashboard">
    <!-- mobile responsivesness logic need refactoring -->
    <div
      :style="hideSidebar ? '' : 'align-items: center;'"
      class="posts-avatars-container"
    >
      <div v-for="post in posts" :key="post.id">
        <div>
          <Post :post="post" />
        </div>
      </div>
    </div>

    <!-- mobile responsivesness logic need refactoring -->
    <div :style="hideSidebar ? '' : 'display: none'" class="sidebar-container">
      <div class="sidebar">
        <h2>Recommended Blogs</h2>
        <v-divider></v-divider>
        <v-card>
          <v-list color="background" flat>
            <v-list-item
              v-for="recommendedBlog in recommendedBlogs"
              :key="recommendedBlog.id"
            >
              <v-avatar tile size="37">
                <v-img
                  contain
                  :src="recommendedBlog.blogData.avatarUrl"
                ></v-img>
              </v-avatar>

              <v-list-item-content>
                <v-list-item-title>{{
                  recommendedBlog.blog
                }}</v-list-item-title>
                <v-list-item-subtitle
                  class="text-truncate"
                  style="max-width: 150px"
                  >{{ recommendedBlog.blogData.title }}</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import postData from "../data/posts.json";
import avatarData from "../data/avatars.json";
import Post from "../components/Post";
import blogs from "../data/blogs.json";

export default {
  name: "Dashboard",
  components: {
    Post,
  },

  data() {
    return {
      posts: postData,
      avatars: avatarData,
      recommendedBlogs: blogs,
    };
  },
  methods: {
    generateAvatar() {
      // fetches avatar images and randomly assigns image to post
      return this.avatars[Math.floor(Math.random() * this.avatars.length)]
        .imageUrl;
    },
  },
  computed: {
    hideSidebar() {
      if (this.$vuetify.breakpoint.width > 1090) {
        return true;
      } else return false;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.sidebar .v-card {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}
.sidebar h2 {
  font-weight: 500;
}
.v-list-item {
  padding: 5px 0;
}

.v-list-item .v-avatar {
  border-radius: 3px !important;
}

.v-list-item,
.v-list-item__content {
  padding-left: 10px;
}

.theme--dark .v-list-item__title {
  font-weight: 700;
}
.sidebar-container {
}
.sidebar {
  width: 320px;
  background: var(--v-background-base) !important;
  height: 100%;

  margin-left: 30px;
}

.sidebar h2 {
  padding: 0 10px;
}

.dashboard {
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 8px;
  margin: 24px auto 0;
}

.flex-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.posts-container-avatars {
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* on mobile resize this needs to be changed to center */
  /* width: 100%; */
  /* max-width: 625px; */
}

.posts-container-avatars div {
  width: 100%;
}

.avatar {
  width: 70px;
  height: 70px;

  border-radius: 5px;
}
</style>
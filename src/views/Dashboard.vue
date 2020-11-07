<template>
  <div class="dashboard">
    <v-row>
      <!-- posts col -->
      <v-col class="flex-col">
        <div class="posts-container">
          <v-row v-for="post in posts" :key="post.id">
            <v-col style="padding: 0">
              <Post :post="post" />
            </v-col>
          </v-row>
        </div>
      </v-col>

      <!-- sidebar col -->
      <v-col class="flex-col">
        <div class="sidebar-container">
          <v-row>
            <v-col>
              <div class="sidebar-test"></div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import postData from "../data/posts.json";
import avatarData from "../data/avatars.json";
import Post from "../components/Post";

export default {
  name: "Dashboard",
  components: {
    Post,
  },

  data() {
    return {
      posts: postData,
      avatars: avatarData,
    };
  },
  methods: {
    generateAvatar() {
      // fetches avatar images and randomly assigns image to post
      return this.avatars[Math.floor(Math.random() * this.avatars.length)]
        .imageUrl;
    },
  },
};
</script>

<style scoped>
.sidebar-test {
  width: 320px;
  background: pink;
  height: 1000px;
}
.dashboard {
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.flex-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: 1px dashed white;
}

.posts-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  width: 70px;
  height: 70px;

  border-radius: 5px;
}
</style>
<template>
  <div class="dashboard">
    <!-- posts -->
    <div class="posts-container">
      <div v-for="post in posts" :key="post.id">
        <div style="padding: 0">
          <Post :post="post" />
        </div>
      </div>
    </div>
    <!-- sidebar col -->
    <div class="sidebar-container">
      <div class="sidebar-test"></div>
    </div>
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
  background: var(--v-primary-base);
  height: 100%;
  outline: 1px dashed white;
}
.dashboard {
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 8px;
  margin: 24px auto 0;
  
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
  align-items: flex-end;
  width: 100%;
  max-width: 625px;
  outline: 1px dashed white;
}

.avatar {
  width: 70px;
  height: 70px;

  border-radius: 5px;
}
</style>
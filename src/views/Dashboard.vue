<template>
  <div class="dashboard">
    <v-spacer class="mt-4"></v-spacer>
    <v-row
      style="outline: 1px dashed white"
      v-for="post in posts"
      :key="post.id"
    >
      <!-- <v-col>
        <v-img
          class="avatar"
          :style="{
            background: 'url(' + generateAvatar() + ')',
            'background-size': 'cover',
          }"
          contain
        >
        </v-img>
      </v-col> -->
      <v-col style="padding: 0;">
        <Post :post="post" />
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
      return this.avatars[Math.floor(Math.random() * this.avatars.length)]
        .imageUrl;
    },
  },
};
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
}

.avatar {
  width: 70px;
  height: 70px;

  border-radius: 5px;
}
</style>
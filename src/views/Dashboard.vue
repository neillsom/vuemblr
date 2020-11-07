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
      <div class="sidebar-test">
        <h2>Recommended Blogs</h2>
        <v-divider></v-divider>
        <v-card id="neill">
          <v-list color="primary" flat>
            <v-list-item v-for="item in items" :key="item.title">
              <v-avatar tile size="37">
                <v-img contain :src="generateAvatar()"></v-img>
              </v-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
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

export default {
  name: "Dashboard",
  components: {
    Post,
  },

  data() {
    return {
      posts: postData,
      avatars: avatarData,
      items: [
        {
          icon: true,
          title: "Jason Oner",
        },
        {
          title: "Travis Howard",
        },
        {
          title: "Ali Connors",
        },
        {
          title: "Cindy Baker",
        },
      ],
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
#neill {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
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
.sidebar-test {
  width: 320px;
  background: var(--v-primary-base);
  height: 100%;

  margin-left: 30px;
}

.sidebar-test h2 {
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

.posts-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* on mobile resize this needs to be changed to center */
  width: 100%;
  max-width: 625px;
}

.avatar {
  width: 70px;
  height: 70px;

  border-radius: 5px;
}
</style>
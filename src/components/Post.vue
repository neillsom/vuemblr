<template>
  <v-card>
    <div class="post">
      <div :style="hideSidebar ? '' : 'display: none'" class="avatar-column">
        <a :href="post.originalPoster">
          <v-img
            class="avatar"
            :style="{
              background: 'url(' + post.posterAvatar + ')',
            }"
            contain
          >
          </v-img>
        </a>
      </div>
      <div class="post-content">
        <div class="post-header-col">
          <div>
            <a class="posted-by">{{ post.originalPoster }}:</a>
          </div>
          <div class="notes-and-icons">
            <a>{{ post.noteCount }} notes</a>
            <v-icon
              size="22px"
              :color="this.$vuetify.theme.currentTheme.postText"
              class="post-icon"
            >
              mdi-chat-outline
            </v-icon>
            <v-icon
              size="22px"
              :color="this.$vuetify.theme.currentTheme.postText"
              class="post-icon"
            >
              mdi-repeat
            </v-icon>

            <div style="display: inline" @click="post.isLiked = !post.isLiked">
              <v-icon
                class="post-icon like-button"
                size="22px"
                :color="
                  post.isLiked
                    ? this.$vuetify.theme.currentTheme.likeColor
                    : this.$vuetify.theme.currentTheme.postText
                "
                >{{
                  this.$vuetify.theme.isDark ? "mdi-heart" : "mdi-heart-outline"
                }}
              </v-icon>
            </div>
          </div>
        </div>

        <div class="post-content">
          <!-- <v-img
            class="post-image"
            contain
            :src="post.postContent.imageUrl"
            :alt="`a post from ${post.originalPoster}`"
          >
          </v-img> -->
          <div>
            <img
              class="post-image"
              :src="post.postContent.imageUrl"
              :alt="`a post from ${post.originalPoster}`"
              srcset=""
              sizes="(max-width: 540px) 100vw, 540px"
            />
          </div>
          <div class="post-body-text">
            <span v-html="post.postContent.text"></span>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import avatarData from "../data/avatars.json";

export default {
  name: "Post",
  props: {
    post: Object,
  },
  data() {
    return {
      overlay: false,
      avatars: avatarData,
    };
  },
  methods: {
    generateAvatar() {
      return this.avatars[Math.floor(Math.random() * this.avatars.length)]
        .imageUrl;
    },
    likePost() {
      console.log(this.$vuetify);
    },
  },
  computed: {
    hideSidebar() {
      if (this.$vuetify.breakpoint.width > 1090) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
.v-card {
  margin-bottom: 20px;
}
.post {
  max-width: 540px;
  min-height: 225px;
  background: #fff;
  border-radius: 4px;
  position: relative;
}

.post-image {
  width: 100%;
  background: linear-gradient(
    to bottom left,
    var(--v-primary-base),
    var(--v-secondary-base)
  );
}

.post .avatar-column .avatar {
  width: 70px;
  height: 70px;
  border-radius: 4px;
  background-size: cover !important;
  position: -webkit-sticky;
  position: sticky;
  top: 69px;
}

.post .avatar-column .avatar.theme--light {
}

.avatar-column {
  position: absolute;
  left: -85px;
  height: 100%;
}

.post-content {
  padding: 10px;
}

.post-body-text {
  margin-top: 8px;
  color: var(--v-postText-darken2);
}

.tag {
  color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
}

.post-header-col {
  padding: 10px 10px 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.post-header-col a {
  padding: 0 5px;
  letter-spacing: -0.22px;
  color: var(--v-postText-base) !important;
  font-weight: 500 !important;
}

.theme--dark .post-header-col a {
  font-weight: 700 !important;
}

a.posted-by {
  text-decoration: underline;
}

.post-icon {
  padding-left: 10px;
  cursor: pointer;
}

.notes-and-icons {
}

.notes-and-icons .like-button {
}

/* .post-icon:hover {
  color: var(--v-likeColor-base) !important;
  transition: 0.2s;
} */
</style>

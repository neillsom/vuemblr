<template>
  <v-card>
    <div class="post">
      <div :style="hideSidebar ? '' : 'display: none'" class="avatar-column">
        <a :href="post.blogName">
          <v-img
            class="avatar"
            :style="{
              background: 'url(' + post.blog.avatar + ')',
            }"
            contain
          >
          </v-img>
        </a>
      </div>
      <div class="post-content">
        <div class="post-header-col">
          <div>
            <a class="posted-by">{{ post.blogName }}:</a>
          </div>
          <div class="notes-and-icons">
            <a>{{ Number(post.noteCount).toLocaleString() }} notes</a>
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
          <div></div>
          <PostImage :post=post />
          <PostVideo :post=post />
          <div class="post-body-text">
            <span v-html="post.content.text"></span>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import PostImage from "./PostImage";
import PostVideo from "./PostVideo";

export default {
  components: { PostImage, PostVideo },
  name: "Post",
  props: {
    post: Object,
  },
  data() {
    return {
      overlay: false,
    };
  },
  methods: {
    likePost() {
      console.log("like button clicked");
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
  margin-left: 10px;
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

<template>
  <v-card>
    <div class="post">
      <div class="avatar-column">
        <a :href="post.originalPoster">
          <v-img
            class="avatar"
            :style="{
              background: 'url(' + generateAvatar() + ')',
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
          <div>
            <a>{{ post.noteCount }} notes</a>
            <v-icon
              size="22px"
              :color="this.$vuetify.theme.currentTheme.iconColor"
              class="post-icon"
            >
              mdi-chat-outline
            </v-icon>
            <v-icon
              size="22px"
              :color="this.$vuetify.theme.currentTheme.iconColor"
              class="post-icon"
            >
              mdi-repeat
            </v-icon>
            <v-icon
              class="post-icon like-button"
              size="22px"
              :color="
                !!post.isLiked
                  ? '#ff492f'
                  : this.$vuetify.theme.currentTheme.iconColor
              "
              >{{
                this.$vuetify.theme.isDark ? "mdi-heart" : "mdi-heart-outline"
              }}
            </v-icon>
          </div>
        </div>

        <!-- content -->
        <div class="post-content">
          <v-img
            class="post-image"
            placeholder
            contain
            :src="post.postContent.imageUrl"
            :alt="`a post from ${post.originalPoster}`"
          />
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

<style>
.v-card {
  margin-bottom: 20px;
}
.post {
  width: 540px;
  min-height: 225px;
  background: var(--v-surface-base);
  border-radius: 4px;
  position: relative;
}

.post-image {
  max-width: 100%;
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
  border: 1px solid black;
  box-shadow: 0 3px 11px 0 #e8eafc, 0 3px 3px -2px hsla(0, 0%, 69.8%, 0.1),
    0 1px 8px 0 hsla(0, 0%, 60.4%, 0.1);
}

.avatar-column {
  position: absolute;
  left: -85px;
  height: 100%;
}

.post-content {
  padding: 10px;
}

.tag {
  color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
}

.post-header-col {
  padding: 10px 10px 0 10px;
  display: flex;
  justify-content: space-between;
  /* padding: 0 10px 10px 10px; */
}

.post-header-col a {
  padding: 0 5px;
  letter-spacing: -0.22px;
  color: var(--v-iconColor-base) !important;
  font-weight: 500 !important;
}

.post-header-col div:nth-of-type(2) {
  display: flex;
  align-items: center;
}

a.posted-by {
  text-decoration: underline;
}

.post-icon {
  padding-left: 10px;
  cursor: pointer;
}

.like-button:hover {
  color: #ff492f !important;
  transition: 0.3s;
  /* transform: scale(1.1); */
}
</style>

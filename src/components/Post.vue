<template>
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
          <v-icon size="22px" style="color: #abb2b9" class="post-icon">
            mdi-chat-outline
          </v-icon>
          <v-icon size="22px" style="color: #abb2b9" class="post-icon">
            mdi-repeat
          </v-icon>
          <v-icon
            class="post-icon like-button"
            size="22px"
            :color="!!post.isLiked ? '#ff492f' : '#abb2b9'"
          >
            mdi-cards-heart
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
.post {
  width: 540px;
  min-height: 225px;
  margin: 0 auto 20px;
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
}

.avatar-column {
  position: absolute;
  left: -85px;
  height: 100%;
}

.avatar-column .avatar {
  position: -webkit-sticky;
  position: sticky;
  top: 69px;
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
  color: #abb2b9 !important;
  font-weight: 700;
  padding: 0 5px;
  letter-spacing: -0.22px;
}

.post-header-col div:nth-of-type(2) {
  display: flex;
  align-items: center;
}

a.posted-by {
  font-weight: 500;
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

<template>
  <div class="post">
    <!-- avatar -->
    <div class="avatar-column">
      <v-img
        class="avatar"
        :style="{
          background: 'url(' + generateAvatar() + ')',
          'background-size': 'cover',
        }"
        contain
      >
      </v-img>
    </div>
    <div class="post-content">
      <!-- header -->
      <!-- <v-col class="post-header-col  "> -->
      <div class="post-header-col">
        <div>
          <a class="posted-by">{{ post.originalPoster }}:</a>
        </div>
        <div>
          <a>{{ post.noteCount }} notes</a>
          <a>reply</a>
          <a>reblog</a>
          <v-icon
            class="like-button"
            size="22px"
            :color="!!post.isLiked ? '#ff492f' : '#abb2b9'"
          >
            mdi-cards-heart
          </v-icon>
        </div>
      </div>
      <!-- </v-col> -->

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
  /* padding: 20px; */
  /* margin-bottom: 18px; */
  background: var(--v-surface-base);
  /* border-radius: 4px; */
  position: relative;
}

.post-image {
  max-width: 100%;
}

.avatar {
  width: 70px;
  height: 70px;
  border-radius: 5px;
}

.avatar-column {
  outline: 1px dashed white;
  position: absolute;
  left: -85px;
  height: 100%;
}

.avatar-column .avatar {
  position: sticky;
}

.tag {
  color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
}

.post-header-col {
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

.like-button {
  padding-left: 6px;
}
.like-button:hover {
  cursor: pointer;
  color: #ff492f !important;
  transition: 0.3s;
  transform: scale(1.1);
}
</style>

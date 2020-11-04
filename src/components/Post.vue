<template>
  <div class="post">
    <v-row>
      <v-col class="post-header-col">
        <div>
          <a class="posted-by">{{ post.originalPoster }}:</a>
        </div>
        <div>
          <a>{{ post.noteCount }} notes</a>
          <a>reply</a>
          <a>reblog</a>
          <i class="fa fa-heart"></i>
        </div>
      </v-col>
    </v-row>

    <v-img
      :src="post.postContent.imageUrl"
      :alt="`a post from ${post.originalPoster}`"
    />
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object,
  },
};
</script>

<style>
.post {
  width: 540px;
  min-height: 225px;
  padding: 20px;
  margin-bottom: 18px;
  background: var(--v-surface-base);
  border-radius: 5px;
}

img {
  max-width: 500px;
}

.tag {
  color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
}

.post-header-col {
  display: flex;
  justify-content: space-between;
  padding: 0 10px 10px 10px;
}

.post-header-col a {
  color: #abb2b9 !important;
  font-weight: 700;
  padding: 0 5px;
  letter-spacing: -0.2px;
}

.post-header-col div:nth-of-type(2) {
  display: flex;
  align-items: center;
}

a.posted-by {
  font-weight: 500;
  text-decoration: underline;
}

.fa-heart {
  color: #abb2b9;
  transition: 0.2s;
  padding-left: 6px;
}

.fa-heart:hover {
  color: #ff492f;
  transition: 0.3s;
  cursor: pointer;
}
</style>

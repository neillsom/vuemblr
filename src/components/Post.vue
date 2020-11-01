<template>
  <div class="post">
    <p>Posted by {{ post.originalPoster }} on {{ post.originalPostedDate }}</p>
    <img
      :src="post.postContent.imageUrl"
      :alt="`a post from ${post.originalPoster}`"
    />

    <!-- <a href="#">
      <span class="tag" v-for="tag in post.postContent.tags" :key="tag"> #{{ tag }}</span>
    </a> -->
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
  background: #fff;
  border-radius: 3px;
}

img {
  max-width: 500px;
}

.tag {
  color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
}
</style>

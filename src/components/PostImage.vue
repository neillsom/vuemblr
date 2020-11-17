<template>
  <div>
   
    <img
      v-for="imageUrl in post.content.imageUrl"
      :key="imageUrl"
      :alt="`a post from ${post.blogName}`"
      class="post-image"
      :src="imageUrl"
      srcset=""
      sizes="(max-width: 540px) 100vw, 540px"
    />
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>

<style>
</style>
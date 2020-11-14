<template>
  <div>
    <img
      class="post-image"
      :src="post.content.imageUrl"
      :alt="`a post from ${post.blogName}`"
      srcset=""
      sizes="(max-width: 540px) 100vw, 540px"
    />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
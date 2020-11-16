<template>
  <div>
    <video 
      width="100%" 
      :src="post.content.videoUrl" 
      controls>
    </video>
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
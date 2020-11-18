<template>
  <div>
    <div class="image-container" @click="imageViewer">
      <div>
        <a :href="post.content.imageUrl" target="_blank">
          <img
            v-for="imageUrl in post.content.imageUrl"
            :key="imageUrl"
            :alt="`a post from ${post.blogName}`"
            class="post-image"
            :src="imageUrl"
            srcset=""
            sizes="(max-width: 540px) 100vw, 540px"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
  methods: {
    imageViewer() {
      console.log("imageViewer clicked");
    },
  },
};
</script>

<style>
#hello {
}
.image-container .post-image {
  cursor: pointer;
}
</style>
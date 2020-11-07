<template>
  <v-container>
    <h1>Inbox</h1>
    <div class="post">
      <!-- avatar -->
      <div class="avatar-column">
        <a :href="post.originalPoster"
          ><v-img
            class="avatar"
            :style="{
              background: 'url(' + generateAvatar() + ')',
              'background-size': 'cover',
            }"
            contain
          >
          </v-img
        ></a>
      </div>
      <div class="post-content">
        <!-- header -->

        <div class="post-header-col">
          <div>
            <a class="posted-by">{{ post.originalPoster }}:</a>
          </div>
          <div>
            <v-icon class="post-icon" color="#abb2b9"> mdi-repeat </v-icon>
          </div>
        </div>

        <!-- content -->
        <div class="post-content">
          <v-text-field
            value="John Doe"
            label="Filled"
            filled
            disabled
          ></v-text-field>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import '../data/posts.json'
export default {};
</script>

<style>
.icon-container {
  background: var(--v-surface-base);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  outline: 1px dashed #9400ff70;
}
</style>
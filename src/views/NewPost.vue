<template>
  <v-container>
    <div class="new-post-container">
      <v-card class="testing">
        <div
          v-for="type in postTypes"
          :key="type.name"
          class="post-type-container"
        >
          <v-btn icon large>
            <v-icon size="50px" :color="type.iconColor">
              {{ type.iconName }}
            </v-icon>
          </v-btn>
          <p class="button-text">{{ type.name }}</p>
        </div>
      </v-card>
    </div>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      postTypes: [
        {
          name: "Text",
          iconColor: "black",
          iconName: "mdi-format-letter-case",
        },
        {
          name: "Photo",
          iconColor: "red",
          iconName: "mdi-camera",
        },
        {
          name: "Quote",
          iconColor: "orange",
          iconName: "mdi-format-quote-open",
        },
        {
          name: "Link",
          iconColor: "green",
          iconName: "mdi-link-variant",
        },
        {
          name: "Audio",
          iconColor: "purple",
          iconName: "mdi-headphones",
        },
        {
          name: "Video",
          iconColor: "pink",
          iconName: "mdi-video-vintage",
        },
      ],
    };
  },

  methods: {},
};
</script>

<style scoped>
.new-post-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.testing {
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  width: 540px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.post-type-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.theme--dark .button-text {
  color: black;
}
</style>
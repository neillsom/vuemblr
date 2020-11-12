<template>
  <v-container>
    <div class="new-post-container">
      <!-- <v-card class="testing">
        <div
          v-for="type in postTypes"
          :key="type.name"
          class="post-type-container"
        >
          <div
            class="post-button"
            :style="`
            border-radius: 100%; 
            padding: 15px;
          `"
          >
            <a href="#" style="text-decoration: none">
              <v-icon class="new-post-icon" size="50px" :color="type.postText">
                {{ type.iconName }}
              </v-icon>
            </a>
          </div>
          <p style="margin: 0; font-weight: 500" class="button-text">
            {{ type.name }}
          </p>
        </div>
      </v-card> -->
      <v-card max-width="540px" style="padding: 20px" light>
        <v-form>
          <v-text-field v-model="title" label="Title" required></v-text-field>

          <v-text-field
            v-model="imageUrl"
            label="Image Url"
            required
          ></v-text-field>

          <v-btn color="secondary">Create New</v-btn>
        </v-form>
      </v-card>
    </div>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      title: "",
      imageUrl: "",
      postTypes: [
        {
          name: "Text",
          postText: "#4A4545",
          iconName: "mdi-format-letter-case",
        },
        {
          name: "Photo",
          postText: "#CB684C",
          iconName: "mdi-camera",
        },
        {
          name: "Quote",
          postText: "#E6A34C",
          iconName: "mdi-format-quote-open",
        },
        {
          name: "Link",
          postText: "#72BA8F",
          iconName: "mdi-link-variant",
        },
        {
          name: "Audio",
          postText: "#A580BE",
          iconName: "mdi-headphones",
        },
        {
          name: "Video",
          postText: "#79828C",
          iconName: "mdi-video-vintage",
        },
      ],
    };
  },

  methods: {},
};
</script>

<style scoped>
.post-button:hover {
}

.new-post-icon::before {
  font-weight: 700;
}

.new-post-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.testing {
  padding: 10px;
  background: #fff;
  border-radius: 10px;
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
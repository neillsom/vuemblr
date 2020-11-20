<template>
  <v-container>
    <div class="new-post-container">
      <v-card class="new-post">
        <div
          v-for="type in postTypes"
          :key="type.name"
          class="post-type-container"
        >
          <div class="post-button" @click="newPost">
            <div class="icon-container">
              <v-icon class="new-post-icon" size="50px" :color="type.postText">
                {{ type.iconName }}
              </v-icon>
            </div>
            <p class="button-text">
              {{ type.name }}
            </p>
          </div>
        </div>
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
          type: "text",
        },
        {
          name: "Photo",
          postText: "#CB684C",
          iconName: "mdi-camera",
          type: "photo",
        },
        {
          name: "Quote",
          postText: "#E6A34C",
          iconName: "mdi-format-quote-open",
          type: "quote",
        },
        {
          name: "Link",
          postText: "#72BA8F",
          iconName: "mdi-link-variant",
          type: "link",
        },
        {
          name: "Audio",
          postText: "#A580BE",
          iconName: "mdi-headphones",
          type: "audio",
        },
        {
          name: "Video",
          postText: "#79828C",
          iconName: "mdi-video-vintage",
          type: "video",
        },
      ],
    };
  },

  methods: {
    newPost() {
      console.log("new post button clicked");
    },
  },
};
</script>

<style scoped>
.new-post-container,
.post-type-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.new-post {
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  width: 540px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.post-button {
  transition: all 0.2s;
  border-radius: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.new-post-icon::before {
  font-weight: 700;
}

.button-text {
  color: #000;
  margin: 0;
  font-weight: 500;
  margin-top: 5px;
}

.post-button::after {
  content: "";
  width: 0;
  height: 2px;
  background-color: var(--v-secondary-base);
  display: block;
  margin: auto;
  transition: width 0.2s cubic-bezier(0.5, 0, 1, 0.5);
}

.post-button:hover::after {
  width: 100%;
}

.post-button:hover .new-post-icon {
  animation: wiggle 1s infinite;
}

@keyframes wiggle {
  10% {
    transform: rotate(-5deg);
  }

  20% {
    transform: rotate(10deg);
  }

  30% {
    transform: rotate(-15deg);
  }

  40% {
    transform: rotate(5deg);
  }

  50% {
    transform: rotate(0deg);
  }
}
</style>
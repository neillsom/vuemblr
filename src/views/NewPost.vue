<template>
  <v-container>
    <div class="new-post-container">
      <v-card class="new-post">
        <v-dialog light v-model="dialog" width="540">
          <template v-slot:activator="{ on, attrs }">
            <div
              v-for="type in postTypes"
              :key="type.id"
              class="post-type-container"
            >
              <div
                class="post-button"
                @click="newPost"
                v-bind="attrs"
                v-on="on"
              >
                <div class="icon-container">
                  <v-icon
                    class="new-post-icon"
                    size="50px"
                    :color="type.iconColor"
                  >
                    {{ type.iconName }}
                  </v-icon>
                </div>
                <p class="button-text">{{ type.name }}</p>
              </div>
            </div>
          </template>
          <v-card>
            <v-card-title class="headline grey lighten-2">
              card title
            </v-card-title>
            <v-card-text> card text here </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
      dialog: false,
      postTypes: [
        {
          id: 1,
          name: "Text",
          iconColor: "#4A4545",
          iconName: "mdi-format-letter-case",
        },
        { id: 2, name: "Photo", iconColor: "#CB684C", iconName: "mdi-camera" },
        {
          id: 3,
          name: "Quote",
          iconColor: "#E6A34C",
          iconName: "mdi-format-quote-open",
        },
        {
          id: 4,
          name: "Link",
          iconColor: "#72BA8F",
          iconName: "mdi-link-variant",
        },
        {
          id: 5,
          name: "Audio",
          iconColor: "#A580BE",
          iconName: "mdi-headphones",
        },
        {
          id: 6,
          name: "Video",
          iconColor: "#79828C",
          iconName: "mdi-video-vintage",
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
  margin-bottom: 20px;
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
    transform: translateX(-1px);
  }

  20% {
    transform: translateX(2px);
  }

  30% {
    transform: translateX(-3px);
  }

  40% {
    transform: translateX(1px);
  }

  50% {
    transform: translateX(0);
  }
}
</style>
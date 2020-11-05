<template>
  <v-container>
    <div class="newpost-form">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          light
          v-model="title"
          counter
          :rules="titleRules"
          label="Title"
          required
        ></v-text-field>
        <!--  -->
        <!--  -->
        <v-text-field
          light
          v-model="bodyText"
          counter
          :rules="bodyRules"
          label="Body Text"
          required
        ></v-text-field>
        <v-text-field
          light
          v-model="imageUrl"
          :rules="imageUrlRules"
          label="Image URL"
        ></v-text-field>

        <v-btn
          depressed
          :disabled="!submit"
          color="success"
          class="mr-4"
          @click="submit"
        >
          Submit

          <!-- <v-icon> mdi-chevron-down </v-icon> -->
        </v-btn>
      </v-form>
    </div>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      valid: true,
      title: "",
      bodyText: "",
      imageUrl: "",
      // titleRules: [
      //   (v) => !!v || "title is required",
      //   (v) =>
      //     (v && v.length <= 10) || "title must be less than 100 characters",
      // ],
    };
  },

  methods: {
    submit() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style scoped>
.newpost-form {
  margin-top: 20px;
  padding: 20px;
  background: white;
  border-radius: 4px;
}
</style>
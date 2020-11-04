<template>
  <v-container>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="title" label="Title" required>
            </v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="bodyText" label="Body text" required>
            </v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="imageUrl" label="Image URL"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
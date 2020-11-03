<template>
  <v-container>
    <form>
      <v-text-field label="Name" required></v-text-field>
      <v-text-field label="E-mail" required></v-text-field>
      <v-select label="Item" :items="[1, 2, 3]" required></v-select>
      <v-checkbox label="Do you agree?" required></v-checkbox>
      <v-btn depressed color="success">submit</v-btn>
    </form>
  </v-container>
</template>

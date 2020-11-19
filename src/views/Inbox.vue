<template>
  <v-container>
    <template>
  <v-card>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Look into srcset for images</v-list-item-title>
        <v-list-item-subtitle>Large images should not be loaded unless screen resolution is high enough</v-list-item-subtitle>
        <v-list-item-subtitle>Prevents longer load times</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Infinite scroll</v-list-item-title>
        <v-list-item-subtitle>Research how to load only appropriate amount of posts on first render.</v-list-item-subtitle>
        <v-list-item-subtitle><a href="http://https://vuetifyjs.com/en/directives/intersect/">Vuetify Intersection observer</a></v-list-item-subtitle>
        <v-list-item-subtitle><a href="http://https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API">MDN Intersection Observer API</a></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Clean up CSS</v-list-item-title>
        <v-list-item-subtitle>Lots of placeholder css, need to refactor before publishing</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Research image open action</v-list-item-title>
        <v-list-item-subtitle>tumblr's&nbsp;<code>glass-container</code>&nbsp;looks interesting</v-list-item-subtitle>


      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>
    
  </v-container>
</template>

<script>
import "../data/posts.json";
export default {
  data() {
    return {
      
    };
  },
};
</script>

<style>
.icon-container {
  background: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
</style>
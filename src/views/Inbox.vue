<template>
  <v-container>
    <h1>Inbox</h1>
    <v-row>
      <v-col>
        <div class="icon-container">
          <v-icon color="info" size="150px" id="icon">mdi-emoticon</v-icon>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
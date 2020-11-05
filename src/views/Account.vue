<template>
  <v-container>
    <v-card light class="preferences-card">
      <v-card-title primary-title>
        <h1>Account Preferences</h1>
        <!-- <div>
          <h3 class="headline mb-0">Preferences</h3>
          <div>description</div>
        </div> -->
      </v-card-title>
      <div>Email address</div>
      <v-row>
        <v-col>
          <v-text-field light placeholder="Placeholder" outlined></v-text-field
        ></v-col>
      </v-row>

      <div>Password</div>
      <v-row>
        <v-col
          ><v-text-field
            light
            placeholder="Current Password"
            outlined
          ></v-text-field
        ></v-col>

        <v-col
          ><v-text-field
            light
            placeholder="New Password"
            outlined
          ></v-text-field
        ></v-col>
        <v-col
          ><v-text-field
            light
            placeholder="Confirm Password"
            outlined
          ></v-text-field
        ></v-col>
      </v-row>
      <v-card-actions>
        <v-btn depressed color="secondary">Save changes</v-btn>
      </v-card-actions>
    </v-card>

    <!--  -->
  </v-container>
</template>

<script>
export default {};
</script>

<style>
div.preferences-card {
  padding: 0 20px 20px 20px;
  /* background: white; */
  /* border-radius: 4px; */
}
</style>
<template>
  <v-container style="margin-top: 50px">
    <v-row>
      <v-col lg="6">
        <h2 class="intro-text">Welcome to our vuetify app</h2>
        <p class="description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque veniam
          minima delectus harum explicabo laboriosam et, facilis adipisci
          exercitationem vero. Distinctio sapiente atque optio alias neque velit
          et, tempora sequi.
        </p>
        <v-btn color="success" rounded>Get Started</v-btn>
        <v-btn color="indigo" rounded class="white--text">
          <v-icon>mdi-play-circle</v-icon>Watch Video
        </v-btn>
      </v-col>
      <v-col lg="6">
        <img width="100%" src="./../assets/front.png" alt="" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>


<style>
h2.intro-text {
  font-size: 60px;
  font-weight: bold;
  font-family: cursive;
}
p.description {
  font-size: 19px;
  font-family: cursive;
  margin: 32px 0px;
}
</style>
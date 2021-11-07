<template>
  <v-app>
    <Navbar />
    <Home />
    <About />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "../src/components/Navbar.vue";
import Home from "../src/views/Home.vue";
import About from "../src/views/About.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    About,
  },
  data: () => ({}),
};
</script>

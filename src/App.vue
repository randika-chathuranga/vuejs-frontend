<template>
  <v-app>
    <Navbar />
    <Home />
    <About />
    <Portfolio />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "../src/components/Navbar.vue";
import Home from "../src/views/Home.vue";
import About from "../src/views/About.vue";
import Portfolio from "../src/views/Portfolio.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    About,
    Portfolio,
  },
  data: () => ({}),
};
</script>

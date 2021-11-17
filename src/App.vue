<template>
  <v-app>
    <Navbar />
    <Home />
    <About />
    <Portfolio />
    <Project />
    <Gallery />
    <Contact />
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
import Project from "../src/views/Project.vue";
import Gallery from "../src/views/Gallery.vue";
import Contact from "../src/views/Contact.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    About,
    Portfolio,
    Project,
    Gallery,
    Contact,
  },
  data: () => ({}),
};
</script>

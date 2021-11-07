<template>
  <v-app-bar style="padding: 0px 90px" flat app color="white" light>
    <v-toolbar-title>Vuetify App</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-list class="d-flex align center">
      <v-list-item v-for="menu in menus" :key="menu.title" :to="menu.route">
        <v-list-item-title>{{ menu.title }}</v-list-item-title>
      </v-list-item>
      <v-btn>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn outlined color="success">Get Started</v-btn>
    </v-list>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",

  data: () => ({
    menus: [
      { title: "Home", route: "/" },
      { title: "AboutUs", route: "/about" },
      { title: "Portfolio", route: "/portfolio" },
      { title: "Project", route: "/project" },
      { title: "Gallery", route: "/gallery" },
      { title: "Contact", route: "/contact" },
    ],
  }),
};
</script>

<style>
.v-toolbar__title {
  font-size: 30px;
  color: mediumblue;
  font-family: -webkit-body;
}
</style>
<template>
  <v-container class="mt-10">
    <v-row justify="center">
      <v-col lg="12" class="text-center">
        <v-subheader class="display-2 justify-center">Portfolio</v-subheader>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius vero
          itaque ad tempora magnam necessitatibus aperiam odit sapiente, numquam
          fugit ut iste cupiditate quod, illo accusantium consequuntur corporis
          officia! Consectetur.
        </p>
      </v-col>
      <v-col lg="12">
        <div class="text-center">
          <v-chip
            @click="activePortfolio = 'webapp'"
            :color="activePortfolio === 'webapp' ? 'success' : ''"
            class="mx-5"
            >Web app</v-chip
          >
          <v-chip
            @click="activePortfolio = 'mobileapp'"
            :color="activePortfolio === 'mobileapp' ? 'success' : ''"
            class="mx-5"
            >Mobile app</v-chip
          >
          <v-chip
            @click="activePortfolio = 'desktopapp'"
            :color="activePortfolio === 'desktopapp' ? 'success' : ''"
            class="mx-5"
            >Desktop app</v-chip
          >
        </div>
      </v-col>
      <slot v-if="activePortfolio === 'webapp'">
        <v-col lg="3" v-for="webitem in webitems" :key="webitem.title">
          <v-card>
            <v-img
              :src="webitem.img"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>{{ webitem.title }}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </slot>
      <slot v-if="activePortfolio === 'mobileapp'">
        <v-col lg="3" v-for="mobileitem in mobileitems" :key="mobileitem.title">
          <v-card>
            <v-img
              :src="mobileitem.img"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>{{ mobileitem.title }}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </slot>
      <slot v-if="activePortfolio === 'desktopapp'">
        <v-col
          lg="3"
          v-for="desktopitem in desktopitems"
          :key="desktopitem.title"
        >
          <v-card>
            <v-img
              :src="desktopitem.img"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>{{ desktopitem.title }}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </slot>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: "Portfolio",

  data() {
    return {
      activePortfolio: "webapp",

      webitems: [
        {
          title: "Web App1",
          img: "https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          title: "Web App2",
          img: "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          title: "Web App3",
          img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          title: "Web App4",
          img: "https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          title: "Web App5",
          img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          title: "Web App6",
          img: "https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          title: "Web App7",
          img: "https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      ],

      mobileitems: [
        {
          title: "mobile App1",
          img: "https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          title: "mobile App2",
          img: "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          title: "mobile App3",
          img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          title: "mobile App4",
          img: "https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          title: "mobile App5",
          img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          title: "mobile App6",
          img: "https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          title: "mobile App7",
          img: "https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      ],

      desktopitems: [
        {
          title: "desktop App1",
          img: "https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          title: "desktop App2",
          img: "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          title: "desktop App3",
          img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          title: "desktop App4",
          img: "https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          title: "desktop App5",
          img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          title: "desktop App6",
          img: "https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          title: "desktop App7",
          img: "https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      ],
    };
  },
};
</script>
<template>
  <v-container class="mt-10">
    <v-row justify="center">
      <v-col lg="12" class="text-center">
        <v-subheader class="display-2 justify-center">Projects</v-subheader>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius vero
          itaque ad tempora magnam necessitatibus aperiam odit sapiente, numquam
          fugit ut iste cupiditate quod, illo accusantium consequuntur corporis
          officia! Consectetur.
        </p>
      </v-col>
      <v-col lg="4" v-for="project in 3" :key="project">
        <v-card class="mx-auto my-12" max-width="374">
          <v-img
            height="250"
            src="https://images.pexels.com/photos/38547/office-freelancer-computer-business-38547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          ></v-img>

          <v-card-title>Web Development</v-card-title>

          <v-card-text>
            <div>
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn color="success" rounded>View Details</v-btn>
            <v-spacer></v-spacer>
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {};
</script>
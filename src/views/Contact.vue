<template>
  <v-container class="mt-10">
    <v-row justify="center">
      <v-col lg="12" class="text-center">
        <v-subheader class="display-2 justify-center">Contact Us</v-subheader>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius vero
          itaque ad tempora magnam necessitatibus aperiam odit sapiente, numquam
          fugit ut iste cupiditate quod, illo accusantium consequuntur corporis
          officia! Consectetur.
        </p>
      </v-col>
      <v-col lg="6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4047271.2999762455!2d78.46169489521603!3d7.851731513542368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2slk!4v1637159532126!5m2!1sen!2slk"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </v-col>
      <v-col lg="6">
        <v-form ref="form">
          <v-text-field
            v-model="contactInfo.name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="contactInfo.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-textarea label="Message" v-model="contactInfo.message">
          </v-textarea>

          <v-btn color="success" class="mr-4"> Send </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      contactInfo: {},
    };
  },
};
</script>
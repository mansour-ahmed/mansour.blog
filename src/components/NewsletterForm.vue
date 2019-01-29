<template>
  <div>
    <v-card class="form-container pa-2 elv-1" max-width="500">
      <v-container>
        <div class="text-xs-center">
          <h1>Hello there 👋</h1>
          <p>
            Get
            <strong>personally</strong> selected weekly favourite links to your email. 👌
          </p>
          <p>#WebDev #Craftmanship
            <br>#Productivity #Entrepreneurship
          </p>
        </div>
        <v-layout column>
          <v-form
            v-model="valid"
            action="https://ahmedmansour.us7.list-manage.com/subscribe/post?u=c0188f6ed9bd9585764367b2b&id=937f45c9bf"
            method="post"
            target="_blank"
            name="mc-embedded-subscribe-form"
            novalidate
          >
            <v-flex xs12>
              <v-text-field
                v-model="name"
                :rules="nameRules"
                name="FNAME"
                label="Your name"
                required
                id="mce-FNAME"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                name="EMAIL"
                label="Your e-mail"
                id="mce-EMAIL"
                required
              ></v-text-field>
            </v-flex>
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input type="text" name="b_c0188f6ed9bd9585764367b2b_937f45c9bf" tabindex="-1" value>
            </div>
            <v-btn
              type="submit"
              :disabled="!valid"
              depressed
              color="primary"
              name="subscribe"
            >Subscribe me now</v-btn>
            <h5
              class="text-grey"
            >* I follow a simple principle - I will treat you the way I would like to be treated.</h5>
          </v-form>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
// import * as mailgun from "mailgun-js";
export default {
  name: "NewsletterForm",
  data: () => ({
    valid: false,
    name: "",
    nameRules: [
      v => !!v || "Who you are my friend?",
      v =>
        v.length <= 40 ||
        "You entered a very long name, are you sure this right?"
    ],
    email: "",
    emailRules: [
      v => !!v || "Your email is needed.",
      v =>
        /.+@.+/.test(v) ||
        "Something seems wrong with the email, can you have a look?"
    ]
  })
};
</script>

<style lang="scss" scoped>
</style>
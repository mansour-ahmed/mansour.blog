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
          <p>#JS #Accessibility #Productivity
            <br>#PersonalFinance #Entrepreneurship
          </p>
        </div>
        <form
          action="https://ahmedmansour.us7.list-manage.com/subscribe/post?u=c0188f6ed9bd9585764367b2b&amp;id=937f45c9bf"
          method="post"
        >
          <v-form v-model="valid">
            <v-layout column>
              <v-flex xs12>
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  name="FNAME"
                  label="Your name"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  name="EMAIL"
                  label="Your e-mail"
                  required
                ></v-text-field>
              </v-flex>
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input
                  type="text"
                  name="b_c0188f6ed9bd9585764367b2b_937f45c9bf"
                  tabindex="-1"
                  value
                >
              </div>
              <v-btn type="submit" :disabled="!valid" depressed color="primary">Subscribe me now</v-btn>
              <h5>* strict NO-SPAM policy</h5>
              <h5>* 1-click unsubscribe</h5>
            </v-layout>
          </v-form>
        </form>
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
@import "~/assets/styles/colors.scss";
@import "~/assets/styles/common.scss";

h5 {
  color: lighten($black, 30%);
}
</style>
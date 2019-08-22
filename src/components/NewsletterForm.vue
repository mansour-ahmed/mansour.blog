<template>
  <div class="content-box">
    <v-container>
      <div class="text-xs-center">
        <h1>Hello there 👋</h1>
        <p>
          Join hundreds of people and get
          <span class="highlight">exclusive updates</span> from me directly to your email. 👌
        </p>

        <p>
          #WebDev #JavaScript
          <br />#craftsmanship #Entrepreneurship
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
            <input type="text" name="b_c0188f6ed9bd9585764367b2b_937f45c9bf" tabindex="-1" value />
          </div>
          <v-btn
            type="submit"
            :disabled="!valid"
            depressed
            color="primary"
            name="subscribe"
          >Subscribe me now</v-btn>
        </v-form>
      </v-layout>
      <small>* NO SPAM EVER - I follow a simple principle - I will treat you the way I would like to be treated.</small>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "NewsletterForm",
  data: () => ({
    // @TODO refactor validation rules into an own function
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

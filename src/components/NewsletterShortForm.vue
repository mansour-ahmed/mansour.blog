<template>
  <div class="newsletter-container pb-4">
    <v-divider></v-divider>
    <div class="content-center">
      <h4 class="form-title">Stay Updated</h4>
      <!-- <p>#WebDev #JavaScript #Craftsmanship #Entrepreneurship</p> -->
      <p class="form-desc">Join hundreds of people and get <span class="highlight">exclusive updates</span> from me directly to your email.</p>
      <v-form
        v-model="valid"
        action="https://ahmedmansour.us7.list-manage.com/subscribe/post?u=c0188f6ed9bd9585764367b2b&amp;id=937f45c9bf"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
      >
        <v-layout wrap d-flex>
          <v-flex xs12 md6>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              name="EMAIL"
              label="Your e-mail"
              required
            ></v-text-field>
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input type="text" name="b_c0188f6ed9bd9585764367b2b_937f45c9bf" tabindex="-1" value />
            </div>
          </v-flex>
          <v-flex xs12 offset-sm1 md6>
            <v-btn type="submit" :disabled="!valid" depressed color="primary">Get Updates From Ahmed</v-btn>
          </v-flex>
        </v-layout>
      </v-form>
      <small class="small">* No Spam EVER.</small>
    </div>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  name: "NewsletterShortForm",
  data() {
    return {
      valid: false,
      email: "",
      emailRules: [
        v => !!v || "Your email is needed.",
        v =>
          /.+@.+/.test(v) ||
          "Something seems wrong with the email, can you have a look?"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
 hr {
   margin-bottom: 0;
 }
 .form-title {
   margin-top: 1rem;
 }
 .form-desc {
   margin-bottom: 0.5rem;
 }
 .small {
   margin-bottom: .5rem;
   display:block;
 }
</style>

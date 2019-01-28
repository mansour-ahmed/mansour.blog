<template>
  <div class="newsletter-container pb-4">
    <v-divider></v-divider>
    <div class="content-center">
      <h4>Free newsletter</h4>
      <p>I mainly share things related to entrepreneurship, web development, personal finance and productivity tips. I still have a lot to learn, but I'm happy to share what I've learned along the way. If you are into these topics, then put your email address below and click "Get Updates From Ahmed"</p>
      <form
        action="https://ahmedmansour.us7.list-manage.com/subscribe/post?u=c0188f6ed9bd9585764367b2b&amp;id=937f45c9bf"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
      >
        <v-form v-model="valid">
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
                <input
                  type="text"
                  name="b_c0188f6ed9bd9585764367b2b_937f45c9bf"
                  tabindex="-1"
                  value
                >
              </div>
            </v-flex>
            <v-flex xs12 offset-xs1 md6>
              <v-btn
                type="submit"
                :disabled="!valid"
                depressed
                color="primary"
              >Get Updates From Ahmed</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </form>
    </div>
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
.content-center {
  padding-left: 3rem;
  padding-right: 3rem;
}
</style>
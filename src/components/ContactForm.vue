<template>
  <div>
    <v-card class="form-container pa-2 elv-1" max-width="500">
      <v-container>
        <h1 class="text-xs-center">Say Hello 👋</h1>
        <p>I appreciate that you would like to get in touch with me.</p>
        <p>Some of the things I can help you with...</p>
        <ul>
          <li>Conference Speaking 🎤</li>
          <li>Workshops/Trainings 👨‍🏫</li>
          <li>Project Work 🏋️</li>
        </ul>
        <v-form v-model="valid">
          <v-layout column>
            <v-flex xs12>
              <v-text-field
                name="name"
                v-model="name"
                :rules="nameRules"
                label="Your name"
                required
              ></v-text-field>
            </v-flex>

            <v-flex xs12>
              <v-text-field
                name="email"
                v-model="email"
                :rules="emailRules"
                label="Your e-mail"
                required
              ></v-text-field>
            </v-flex>

            <v-flex xs12>
              <v-select
                :items="items"
                v-model="purpose"
                name="purpose"
                label="How can I help you?"
                required
              ></v-select>
            </v-flex>

            <v-flex xs12>
              <v-textarea name="description" label="Tell me more!" v-model="description" required></v-textarea>
            </v-flex>
            <v-flex xs12></v-flex>
          </v-layout>
          <v-btn
            depressed
            color="primary"
            :disabled="!valid || !description || !purpose"
            @click="submit"
          >Send to Ahmed</v-btn>
        </v-form>
        <span v-show="responseMsg">{{ responseMsg }}</span>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      valid: false,
      responseMsg: undefined,
      name: "",
      purpose: "Speaking",
      description: "",
      items: ["Event Speaking", "Training", "Consultation", "Question"],
      nameRules: [
        v => !!v || "Please tell us who you are my friend!",
        v => v.length <= 40 || "The name is quite long, are you sure its right?"
      ],
      email: "",
      emailRules: [
        v => !!v || "We need your email to contact you, easily!",
        v =>
          /.+@.+/.test(v) ||
          "Something seems wrong with the email, can you have a look?"
      ]
    };
  },
  methods: {
    submit() {
      const name = this.name;
      const email = this.email;
      const purpose = this.purpose;
      const description = this.description;

      const data = {
        from: email,
        subject: `Contact Request - ${name}`,
        body: `Purpose: ${purpose}, Description: ${description}`
      };

      this.axios
        .post(
          `https://us-central1-wired-cogency-227516.cloudfunctions.net/sendEmail`,
          data
        )
        .then(res => {
          this.responseMsg =
            "Your message went through, I will get in touch with you as soon as I can!";
        })
        .catch(err => {
          this.responseMsg =
            "Ops, something went wrong. Could you try agian later?";
        });
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .v-list__tile--link {
  border-bottom: none;
}
</style>
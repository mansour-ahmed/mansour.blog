<template>
  <div>
    <v-dialog v-model="dialogState" max-width="500">
      <NewsletterForm/>
    </v-dialog>
  </div>
</template>

<script>
import NewsletterForm from "~/components/NewsletterForm";

export default {
  components: { NewsletterForm },
  props: ["dialog", "delay"],
  name: "NewsletterPopup",
  mounted() {
    setTimeout(() => {
      this.dialogState = true;
    }, this.delayValue);
  },
  data() {
    return {
      dialogState: this.$props.dialog,
      delayValue: this.$props.delay
    };
  }
};
</script>


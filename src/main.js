// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuetify from "vuetify";
import DefaultLayout from "~/layouts/Default.vue";
import axios from "axios";
import VueAxios from "vue-axios";

import "normalize.css/normalize.css";
import "highlight.js/styles/github.css";
import '~/assets/styles/main.styl';

// import "vuetify/dist/vuetify.min.css";
// import "vue-material-design-icons/styles.css";

export default function(Vue, { router, head, isClient }) {
  head.meta.push({
    name: "viewport",
    content:
      "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"
  });
  head.meta.push({
    name: "robots",
    content: "index, follow"
  });
  head.meta.push({
    name: "twitter:site",
    content: "@ahmedmansour03"
  });
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Lora|Open+Sans:400,600,700"
  });
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Material+Icons"
  });

  // Set default layout as a global component
  Vue.use(Vuetify, {
    theme: {
      primary: "#2179ff",
      secondary: "#ffffff",
      accent: "#fcac28",
      error: "#b71c1c"
    }
  });

  Vue.use(VueAxios, axios);

  Vue.component("Layout", DefaultLayout);
}

import Vuetify from "vuetify";
import DefaultLayout from "~/layouts/Default.vue";
import axios from "axios";
import VueAnalytics from "vue-analytics";
import VueAxios from "vue-axios";
import "highlight.js/styles/github.css";
import "normalize.css/normalize.css";
import "~/assets/styles/main.styl";
import "~/assets/styles/main.scss";

export default function(Vue, { router, head, isClient, isServer, options }) {
  head.meta.push({
    name: "viewport",
    content:
      "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"
  });
  head.meta.push({
    name: "robots",
    content: "index, follow"
  });

  // Search Engine verifications
  head.meta.push({
    name: "google-site-verification",
    content: "x0ppGw5l7mwuAoqBbJrl3yvdyFcYe4JLLODPr0L-okU"
  });
  head.meta.push({
    name: "msvalidate.01",
    content: "75C06C7BC01625D580C4997D97C7137F"
  });

  // Open Graph Meta Data
  head.meta.push({
    key: "og:type",
    property: "og:type",
    content: "website"
  });
  head.meta.push({
    key: "og:locale",
    property: "og:locale",
    content: "en_US"
  });

  // Twitter Meta Data
  head.meta.push({
    key: "twitter:site",
    name: "twitter:site",
    content: "@AhmedMansour03"
  });

  // @TODO remove these
  // Styles
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Lora|Open+Sans:400,600,700"
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Material+Icons"
  });

  // Global imports

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

  // Analytics
  const baseOptions = {
    disabled: isServer,
    debug: {
      sendHitTask: process.env.NODE_ENV === "production"
    },
    router
  };

  Vue.use(VueAnalytics, { ...baseOptions, ...options });
}

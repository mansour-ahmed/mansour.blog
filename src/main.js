import Vuetify from 'vuetify';
import axios from 'axios';
import VueAnalytics from 'vue-analytics';
import VueAxios from 'vue-axios';

import DefaultLayout from '~/layouts/Default.vue';

// Styles
import 'vuetify/dist/vuetify.min.css';
import '~/assets/style/index.scss';

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient, isServer, options }) {
  head.meta.push({
    name: 'viewport',
    content:
      'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui'
  });
  head.meta.push({
    name: 'robots',
    content: 'index, follow'
  });

  // Search Engine verifications
  head.meta.push({
    name: 'google-site-verification',
    content: 'Qm8urYczZ93GuoMUmv71a5xS4d12Xesk6ksc9E7my_o'
  });
  head.meta.push({
    name: 'msvalidate.01',
    content: '75C06C7BC01625D580C4997D97C7137F'
  });

  // Open Graph Meta Data
  head.meta.push({
    key: 'og:type',
    property: 'og:type',
    content: 'website'
  });
  head.meta.push({
    key: 'og:locale',
    property: 'og:locale',
    content: 'en_US'
  });

  // Twitter Meta Data
  head.meta.push({
    key: 'twitter:site',
    name: 'twitter:site',
    content: '@AhmedMansour03'
  });

  // @TODO remove these
  // Styles

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Material+Icons'
  });

  Vue.use(Vuetify);

  Vue.use(VueAxios, axios);

  // Import default layout so we don't need to import it to every page
  Vue.component('Layout', DefaultLayout);

  // Analytics
  const baseOptions = {
    id: 'UA-74640828-2',
    disabled: isServer,
    debug: {
      sendHitTask: process.env.NODE_ENV === 'production'
    },
    router
  };

  Vue.use(VueAnalytics, { ...baseOptions, ...options });
}

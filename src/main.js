import Vue from 'vue';
import VueMq from 'vue-mq';

import App from './App.vue';
import store from './store';
import router from './router';
import VueApollo from 'vue-apollo';
import VueGtag from 'vue-gtag';
// import { ApolloClient, InMemoryCache } from '@apollo/client';
import apollo from '../graphql/apollo';
import VTooltip from 'v-tooltip';

Vue.use(VueGtag, {
  config: {
    id: 'G-LFP6FR91CY',
  },
});

import * as filters from '@/utils/helpers';
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]); // eslint-disable-line
});

Vue.prototype.$apollo = apollo;

Vue.use(VueApollo);
Vue.use(VTooltip);

// const apolloProvider = new VueApollo({
//   defaultClient: apolloClient,
// });

Vue.config.productionTip = false;
Vue.use(VueMq, {
  breakpoints: {
    mobile: 840,
    tablet: 1270,
    desktop: Infinity,
  },
});

new Vue({
  // apolloProvider,
  store,
  router,
  render: h => h(App),
}).$mount('#app');

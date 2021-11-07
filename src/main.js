import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Css Styles
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/font-awesome.min.css'
import '../src/assets/css/themify-icons.css'
import '../src/assets/css/elegant-icons.css'
import '../src/assets/css/owl.carousel.min.css'
import '../src/assets/css/nice-select.css'
import '../src/assets/css/jquery-ui.min.css'
import '../src/assets/css/slicknav.min.css'
import '../src/assets/css/style.css'

import VueCurrencyFilter from 'vue-currency-filter'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);

Vue.use(VueCurrencyFilter,
{
  symbol : 'Rp.',
  thousandsSeparator: '.',
  fractionCount: 0,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true,
  avoidEmptyDecimals: undefined,
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

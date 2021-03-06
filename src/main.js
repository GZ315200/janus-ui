import Vue from 'vue'
import App from './App'
import AppRouters from './common/routers/router.index.js'

// [ext] console provider inject
import ConsoleProvider from './common/services/console.provider.js'

// [ext] http/axios inject
import HttpPlugIn from './common/plugins/http.js'

// [ext] api inject
import ApiProvider from './common/services/api.provider.js'

// [ext] helper inject
import HelperProvider from './common/services/helper.provider.js'

// [ext] store inject
import StoreProvider from './common/services/store.provider.js'

// [ext] element-ui inject
import ElementUI from 'element-ui'
import './assets/css/g.scss';
// import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-chalk/display.css' // [ext] support element reactive css

// [ext] extent element-ui validate inject
import Validator from './common/plugins/validator.js'

// [ext] theme provider inject
// import ThemeProvider from './common/services/theme.provider.js'

// [ext] echarts
import Echart from 'echarts'

// [ext] utils
import formatDate from './common/services/util.js'
import request from "./api";

Vue.prototype.$console = ConsoleProvider
// Vue.prototype.$theme = ThemeProvider
Vue.prototype.$http = HttpPlugIn
Vue.prototype.$api = ApiProvider
Vue.prototype.$helper = HelperProvider
Vue.use(ElementUI)
Vue.prototype.$validator = Validator
Vue.prototype.$echarts = Echart
Vue.prototype.$formatDate = formatDate
Vue.config.productionTip = false

Vue.prototype.$axios = request;

new Vue({
  router: AppRouters,
  store: StoreProvider,
  render: h => h(App),
}).$mount('#app');

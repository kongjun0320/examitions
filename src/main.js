import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import echarts from 'echarts'
import { Autocomplete, Button, Radio, Table, TableColumn, Pagination, Select, Option, Input, Loading } from 'element-ui'

Vue.config.productionTip = false

Vue.component(Autocomplete.name, Autocomplete)
Vue.component(Button.name, Button)
Vue.component(Radio.name, Radio)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Pagination.name, Pagination)
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.use(Loading)

Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

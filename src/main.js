import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './api/mock'
import {
  Button,
  Container,
  Aside,
  Header,
  Main,
  Menu,
  Col,
  Row,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Card,
  Table,
  TableColumn,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Button);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Col);
Vue.use(Row);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Col);
Vue.use(Row);
Vue.use(Card);
Vue.use(Table);
Vue.use(TableColumn);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
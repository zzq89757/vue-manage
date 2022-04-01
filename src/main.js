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
  Input,
  Pagination,
  Dialog,
  DatePicker,
  Select,
  Option,
}
from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Cookies from 'js-cookie'
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
Vue.use(Input);
Vue.use(Dialog);
Vue.use(DatePicker);
Vue.use(Pagination);
Vue.use(Select);
Vue.use(Option);

Vue.config.productionTip = false

//使用全局导航守卫 
router.beforeEach(
  (to,from,next)=>{
    //若无token且当前页面不为登录页，则跳转至登录页
    //若使用vuex的getters 跳转会有问题
    if(!Cookies.get('token') && to.path!="/login"){
      next({name:"login"})
    }
    next()
  }
)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

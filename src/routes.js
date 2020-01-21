import VueRouter from "vue-router"
// сюда импортируем страници которые будем подключать 
import About from './pages/About'
import Offers from './pages/Offers'
import Blog from './pages/Blog'
import Tours from './pages/Tours'
import Contacts from './pages/Contacts'


export default new VueRouter({
  routes: [
    {
      path: '', ///about
      component: About,
      // component: тут подлючаем данные страницы 
    },
    {
      path: '/offers',
      component: Offers,
    },
    {
      path: '/blog',
      component: Blog,
    },
    {
      path: '/tours',
      component: Tours,
    },
    {
      path: '/contacts',
      component: Contacts,
    }
  ],
  mode: 'history'
})
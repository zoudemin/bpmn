import Vue from 'vue'
 
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    routes: [{
        path: '/',
        redirect: '/basic'
    },
    {
        path: '/basic',
        component: () =>
            import ('./../components/basic')
    },
    {
        path: '/provider',
        component: () =>
            import ('./../components/provider')
    },
    {
        path: '/panel',
        component: () =>
            import ('./../components/panel')
    },
    {
        path: '/axios',
        component: () =>
            import ('./../components/axios')
    },
    {
        path: '/save',
        component: () =>
            import ('./../components/save')
    },
    {
        path: '/event',
        component: () =>
            import ('./../components/event')
    }
],
      mode: "history"
  })
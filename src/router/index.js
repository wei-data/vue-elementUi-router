import VueRouter from 'vue-router'
import LogIn from '@/components/LogIn.vue'
import Home from '@/components/Home.vue'
import Content from '@/components/Home/Content.vue'
import LibraryPage from '@/components/Library/LibraryPage.vue'
import ContentList from '@/components/Library/ContentList.vue'
import CarouselMap from '@/components/Library/CarouselMap.vue'
import Column from '@/components/Library/Column.vue'
import Statement from '@/components/Statement/Statement.vue'
import Table from '@/components/Wu/Table.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/LogIn'
    },
    {
      name: 'logIn',
      path: '/LogIn',
      component: LogIn,
      mate: {
        isAuth: false
      }
    },
    {
      name: 'home',
      path: '/Home',
      component: Home,
      children: [{
        path: '',
        redirect: 'content'
      }, {
        name: 'content',
        path: 'Content',
        component: Content
      }, {
        path: 'LibraryPage',
        component: LibraryPage,
        children: [{
          path: '',
          redirect: 'Column'
        }, {
          path: 'ContentList',
          component: ContentList
        }, {
          path: 'CarouselMap',
          component: CarouselMap
        }, {
          path: 'Column',
          component: Column
        }]
      }, {
        path: 'Statement',
        component: Statement
      }, {
        path: 'Table',
        component: Table
      }
      ]
    }]
})

router.beforeEach((to, from, next) => {
  // console.log(to, from)
  if (to.meta.isAuth) {
    if (localStorage.getItem('token') === '你好乡里别') {
      next()
    } else {
      alert('名字不对')
    }
  } else {
    next()
  }
})

export default router

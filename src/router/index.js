import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HowMany from '@/components/HowMany'
import NumberTrivia from '@/components/NumberTrivia'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/howmany',
        name: 'howmany',
        component: HowMany
      },
      {
        path: '/numbertrivia',
        name: 'numbertrivia',
        component: NumberTrivia
      }
    ]
})
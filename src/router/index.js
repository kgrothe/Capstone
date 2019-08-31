import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Options from '@/components/Options'
import HowMany from '@/components/HowMany'
import NumberTrivia from '@/components/NumberTrivia'
import APOD from '@/components/APOD'
import Images from '@/components/Images'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/options',
        name: 'options',
        component: Options
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
      },
      {
        path: '/apod',
        name: 'apod',
        component: APOD
      },
      {
        path: '/images',
        name: 'images',
        component: Images
      },
      
    ]
})
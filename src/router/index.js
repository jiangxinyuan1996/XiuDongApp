import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Raise from '@/views/Raise'
import Center from '@/views/Center'
import City from '@/views/City'
import raisedetail from '@/views/raisedetail'
import List from '@/views/detail/list'
import Search from '@/views/detail/search'

import Goods from '@/views/Goods'
import Goodstheme from '@/views/good/goodstheme'
import GoodsDetail from '@/views/good/detail'

import Login from '@/views/login/login'

import Order from '@/views/Order'
import Homelist from '@/views/login/homelist'
import Goodslist from '@/views/login/goodslist'
import Raiselist from '@/views/login/raiselist'
import Actors from '@/views/login/actors'
import Address from '@/views/login/address'
import Coupon from '@/views/login/coupon'

import twoDetail from '@/views/detail/detail'

import Perform from '@/views/detail/Perform'
import Activity from '@/views/detail/active'

import Brand from '@/views/site/brand'
import Site from '@/views/site/site'
import Artist from '@/views/site/artist'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login/address',
    component: Address
  },
  {
    path: '/login/coupon',
    component: Coupon
  },
  {
    path: '/login/actors',
    component: Actors
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/order',
    component: Order,
    children: [{
      path: 'homelist',
      component: Homelist
    },
    {
      path: 'goodslist',
      component: Goodslist
    },
    {
      path: 'raiselist',
      component: Raiselist
    }
    ]
  },
  {
    path: '/goods',
    component: Goods
  },

  {
    path: '/goods/detail/:myid',
    component: GoodsDetail
  },
  {
    path: '/goods/theme/:myid',
    component: Goodstheme
  },

  {
    path: '/home/detail/detail/:myid',
    component: twoDetail,
    children: [{
      path: 'perform',
      component: Perform
    }
    ]

  },

  {
    path: '/',
    component: Home
  },
  {
    path: '/activity/:activityid',
    component: Activity
  },
  {
    path: '/raise',
    component: Raise
  },
  {
    path: '/raisedetail/:id',
    component: raisedetail
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/brand/:id/:myname',
    name: 'brand',
    component: Brand
  },
  {
    path: '/site/:id/:myname',
    name: 'site',
    component: Site
  },
  {
    path: '/artist/:id/:myname',
    name: 'performer',
    component: Artist
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/list/:mykey',
    name: 'list',
    component: List
  },
  {
    path: '*',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router

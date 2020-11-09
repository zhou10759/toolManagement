import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/home/index'),
      meta: { title: '首页', icon: 'el-icon-monitor' }
    }]
  },
  {
    path: '/personalInfo',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'PersonalInfo',
        component: () => import('@/views/personalInfo/personalInfo'),
        meta: { title: '个人信息', icon: 'el-icon-user' }
      }
    ]
  },
  {
    path: '/tool',
    component: Layout,
    alwaysShow: true,
    name: 'Tool',
    meta: { title: '工具集合', icon: 'el-icon-data-line' },
    children: [
      {
        path: 'smartRecommend',
        name: 'SmartRecommend',
        component: () => import('@/views/tool/smartRecommend'),
        meta: { title: '智能推荐', icon: 'el-icon-c-scale-to-original' }
      }
    ]
  },

  {
    path: '/costCnter',
    component: Layout,
    name: 'CostCnter',
    meta: {
      title: '费用中心',
      icon: 'nested'
    },
    children: [
      {
        path: 'integral',
        component: () => import('@/views/costCnter/integral'), // Parent router-view
        name: 'Integral',
        meta: { title: '积分充值' }
      },
      {
        path: 'vouchers',
        component: () => import('@/views/costCnter/vouchers'),
        name: 'Vouchers',
        meta: { title: '兑换券管理' }
      }, {
        path: 'historyBill',
        component: () => import('@/views/costCnter/historyBill'),
        name: 'HistoryBill',
        meta: { title: '历史账单' }
      },
      {
        path: 'vouchers-detail/:id',
        name: 'Vouchers-detail',
        component: () => import('@/views/costCnter/vouchers-detail'),
        meta: { title: '兑换劵详情'}
      }
    ]
  },
  {
    path: '/kefu',
    component: Layout,
    hidden: true, // 不在侧边栏线上
    children: [{
      path: 'center',
      name: 'Center',
      component: () => import('@/views/kefu/center'),
      meta: { title: '客服中心'}
    }]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

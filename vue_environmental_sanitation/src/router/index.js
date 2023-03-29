import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/',
      component: resolve => require(['../pages/Login.vue'],resolve)
    },
    // {
      // path: '/home',
      // component: resolve => require(['../components/Home.vue'],resolve),
      // children: [
        {
          path: '/sixbtn',
          component: resolve => require(['../pages/SixBtn.vue'],resolve)
        },
        {
          path: '/home',
          component: resolve => require(['../components/Home.vue'],resolve),
          children: [
            {
              // 地图
              path: '/map',
              component: resolve => require(['../pages/MapPage.vue'],resolve)
            },
            {
              // 车辆管理
              path: '/vehicle',
              component: resolve => require(['../pages/VehiclePage.vue'],resolve)
            },
            {
              // 人员管理
              path: '/worker',
              component: resolve => require(['../pages/WorkerPage.vue'],resolve)
            },
            // {
              // 首页
            //   path: '/info',
            //   component: resolve => require(['../pages/InfoPage.vue'],resolve)
            // },
            {
              // 设备管理
              path: '/device',
              component: resolve => require(['../pages/Device.vue'],resolve)
            },
            {
              // 考核标准
              path: '/assessment',
              component: resolve => require(['../pages/Assessment.vue'],resolve)
            },
            {
              // 量化标准
              path: '/quantification',
              component: resolve => require(['../pages/Quantification.vue'],resolve)
            }
          ]
        },
        // {
        //   path: '/info',
        //   component: resolve => require(['../pages/InfoPage.vue'],resolve)
        // },
        // {
        //   path: '/worker',
        //   component: resolve => require(['../pages/WorkerPage.vue'],resolve)
        // },
        // {
        //   path: '/vehicle',
        //   component: resolve => require(['../pages/VehiclePage.vue'],resolve)
        // },
        // {
        //   path: '/map',
        //   component: resolve => require(['../pages/MapPage.vue'],resolve)
        // }
      // ]
    // },
  ]
})

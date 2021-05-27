let routesList = [
  {
    path: '/Home',
    icon: 'el-icon-s-home',
    name: 'Home',
    title: '首页',
    // children: [
    //   {
    //     path: '/Home',
    //     icon: 'el-icon-s-home',
    //     name: 'Home',
    //     title: '首页'
    //   },
    //   {
    //     path: '/About',
    //     icon: 'el-icon-s-custom',
    //     name: 'About',
    //     title: '关于我们'
    //   },
    //   {
    //     path: '/List',
    //     icon: 'el-icon-s-order',
    //     name: 'List',
    //     title: '列表'
    //   },
    //   {
    //     path: '/Form',
    //     icon: 'el-icon-s-order',
    //     name: 'Form',
    //     title: '表单'
    //   }
    // ]
  },
  {
    path: '/OrderManagement',
    icon: 'el-icon-s-order',
    name: 'OrderManagement',
    title: '订单管理',
    children: [
      {
        path: '/SalesQuotation',
        icon: ' ',
        name: 'SalesQuotation',
        title: '销售报价'
      },
      {
        path: '/SalesOrderContract',
        icon: ' ',
        name: 'SalesOrderContract',
        title: '销售订单合同'
      },
      {
        path: '/customerReceipt',
        icon: ' ',
        name: 'customerReceipt',
        title: '客户回款单'
      }
    ]
  },
  {
    path: '/InventoryManagement',
    icon: 'el-icon-s-order',
    name: 'InventoryManagement',
    title: '库存管理',
    children: [
      {
        path: '/ProductDelivery',
        icon: ' ',
        name: 'ProductDelivery',
        title: '产品出库'
      },
      {
        path: '/StockIn',
        icon: ' ',
        name: 'StockIn',
        title: '产品入库'
      }
    ]
  }
]

export default routesList
// export let route2 = [
//   {
//     path: '/Home',
//     icon: 'el-icon-s-home',
//     name: 'Home',
//     title: '首页',
//     children: [
//       {
//         path: '/Home',
//         icon: 'el-icon-s-home',
//         name: 'Home',
//         title: '首页',
//       },
//       {
//         path: '/About',
//         icon: 'el-icon-s-custom',
//         name: 'About',
//         title: '关于我们',
//       },
//       {
//         path: '/List',
//         icon: 'el-icon-s-order',
//         name: 'List',
//         title: '列表',
//       },
//       {
//         path: '/Form',
//         icon: 'el-icon-s-order',
//         name: 'Form',
//         title: '表单',
//       }
//     ]
//   }
// ]

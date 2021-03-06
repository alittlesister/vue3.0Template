import Index from '../views/Index.vue'
const routes = [
  {
    path: '/',
    redirect:'/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    meta: {
      title: '首页'
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/List',
    name: 'List',
    component: () => import('../views/List.vue')
  },
  {
    path: '/Form',
    name: 'Form',
    component: () => import('../views/Form.vue')
  },
  {
    path: '/SalesQuotation',
    name: 'SalesQuotation',
    meta: {
      title: '销售报价'
    },
    component: () => import('../views/OrderManagement/SalesQuotation.vue')
  },
  {
    path: '/AddQuotation',
    name: 'AddQuotation',
    meta: {
      title: '新增销售报价'
    },
    component: () => import('../views/OrderManagement/AddQuotation.vue')
  },
  {
    path: '/SalesOrderContract',
    name: 'SalesOrderContract',
    meta: {
      title: '销售订单合同'
    },
    component: () => import('../views/OrderManagement/SalesOrderContract.vue')
  },
  {
    path: '/SalesContractEdit',
    name: 'SalesContractEdit',
    meta: {
      title: '编辑销售订单合同'
    },
    component: () => import('../views/OrderManagement/SalesContractEdit.vue')
  },
  {
    path: '/customerReceipt',
    name: 'customerReceipt',
    meta: {
      title: '客户回款单'
    },
    component: () => import('../views/OrderManagement/customerReceipt.vue')
  },
  {
    path: '/ReceiptEdit',
    name: 'ReceiptEdit',
    meta: {
      title: '编辑客户回款单'
    },
    component: () => import('../views/OrderManagement/ReceiptEdit.vue')
  },
  {
    path: '/ProductDelivery',
    name: 'ProductDelivery',
    meta: {
      title: '产品出库'
    },
    component: () => import('../views/InventoryManagement/ProductDelivery.vue')
  },
  {
    path: '/StockIn',
    name: 'StockIn',
    meta: {
      title: '产品入库'
    },
    component: () => import('../views/InventoryManagement/StockIn.vue')
  },
  {
    path: '/StockDetails',
    name: 'StockDetails',
    meta: {
      title: '产品入库明细单'
    },
    component: () => import('../views/InventoryManagement/StockDetails.vue')
  },
  {
    path: '/DeliveryDetails',
    name: 'DeliveryDetails',
    meta: {
      title: '产品出库明细单'
    },
    component: () => import('../views/InventoryManagement/DeliveryDetails.vue')
  },
]
export default routes

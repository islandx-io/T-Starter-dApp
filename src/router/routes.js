const routes = [
  {
    path: "/",
    redirect: "/telos",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "/:chain", component: () => import("pages/Index.vue") }]
  },
  {
    path: "/:chain",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "/", component: () => import("pages/Index.vue") }]
  },
  {
    path: "/:chain/wallet/:accountName",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name: "wallet", component: () => import("pages/Wallet.vue") }
    ]
  },
  {
    path: "/:chain/pools",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", name:'allpools', component: () => import("pages/Pools.vue") }]
  },
  {
    path: "/:chain/pools/:id",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "pooldetails",
        component: () => import("pages/Pool.vue")
      },
      {
        path: "join",
        name: "joinpool",
        component: () => import("pages/Join.vue")
      }
    ]
  },
  {
    path: "/:chain/createpool",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", name:'createpool', component: () => import("pages/CreatePool.vue") }]
  },
  {
    path: "/:chain/updatepool/:id",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "updatepool",
        component: () => import("pages/UpdatePool.vue")
      }
    ]
  },
  {
    path: "/:chain/receive",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", name:"receive", component: () => import("pages/ReceiveTokens.vue") }]
  },
  {
    path: "/:chain/send",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", name: "send", component: () => import("pages/SendTokens.vue") }]
  },
  // {
  //   path: "/account/:accountName",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/Account.vue") }]
  // },
  // {
  //   path: "/transfer",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/Transfer.vue") }]
  // },
  // {
  //   path: "/streaming",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/Streaming.vue") }]
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;

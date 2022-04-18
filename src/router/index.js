//整個路由的配置檔
import Vue from "vue";
import VueRouter from "vue-router";
//官方的元件

import Home from "@/components/HelloWorld";
import Page from "@/components/pages/page";
import Page2 from "@/components/pages/page2";

import child from "@/components/pages/child";
import child2 from "@/components/pages/child2";
import child3 from "@/components/pages/child3";

import Menu from "@/components/pages/menu";

//＠小老鼠就是src的路徑
// 自訂的分頁元件

Vue.use(VueRouter);

export default new VueRouter({
  //源自：Router 构造配置，網址：https://zhenyong.github.io/vue-router/api/options.html
  //當開啟此模式網址部分將不需要＃，但要注意當沒有＃的時候代表他所使用的是後端伺服器的路由，他不是只用前端的路由，因此當使用此模式時必須要有前後端的搭配，現在能使用是因為webpack他有支援此模式，但不推薦打開
  //   mode: "history",
  linkActiveClass: "active", //只是將class上的默认值: "router-link-active"改成自己想要的名稱
  routes: [
    {
      name: "首頁", //元件呈現的名稱
      path: "/index", //對應的虛擬路徑
      component: Home //對應的元件
    },
    {
      //   name: "分頁", //若此分頁存在會引發錯誤他和name: "卡片 1",為相同路徑path: ""
      path: "/page", //對應的虛擬路徑
      //   component: Page, //component可載入單個對應的元件
      components: {
        //components可以載入多個元件
        default: Page, //會對應到一般router-view
        menu: Menu //會對應到有自定義名稱的router-view
      },
      children: [
        {
          name: "卡片 1",
          path: "", //沒寫代表一進入/page底下預設就會顯示第一張卡片
          component: child
        },
        {
          name: "卡片 2",
          path: "child2",
          component: child2
        },
        {
          name: "卡片 3",
          //path: "child3/:id", //params.id示範
          path: "child3",
          component: child3
        }
      ]
    },
    {
      name: "分頁二", //元件呈現的名稱
      path: "/page2", //對應的虛擬路徑
      component: Page2 //對應的元件
    }
  ]
});

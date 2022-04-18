<template>
  <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <!-- 切換分頁有兩種方法一種是用to="/page"來切換，第二種是將to變成動態抓取name的名子:to="{name:'首頁'}" -->
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'首頁'}">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/page">Page</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'分頁二'}">Page2</router-link>
            </li>
          </ul>
        </div>
      </nav>
    <!-- <img src="./assets/logo.png"> -->
    <!-- 加上name區分就可以渲染在不同的標籤上面 ，同一個路徑載入兩個頁面元件-->
    <router-view name="menu"></router-view>
    <div class="container">
      <router-view></router-view>
    </div>
    <!-- router-view就是要呈現元件內容的地方 -->
    <!-- <h1>因為另一個元件style標籤有設定scoped所以顏色不會被影響
    </h1> -->
<!-- <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created(){
    //從https://randomuser.me/網站隨機抓取api做測試
    this.$http.get('https://randomuser.me/api/')
    .then((response) =>{
      console.log(response.data)
    })
  }
}
</script>

<style lang='scss'>
@import '~bootstrap/scss/bootstrap';
// 以下可以測試sass有沒有錯誤，記得<style lang='scss'>標籤也要改＝＝＝＝＝
// $color: black;
// body {
//   background-color: $color;
// }
//===============
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>

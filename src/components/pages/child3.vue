<template>
  <div>
      <img :src="picture" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{gender}}</h5>
        <p class="card-text">{{email}}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      gender:'',
      email:'',
      picture:'',
    }
  },
  created(){
    //params.id示範
    // const id = this.$route.params.id
    // // 這個$route已經被掛載在vue上面所以我們可以直接從route上面讀取他的方法
    // //參考官網使用方法：https://randomuser.me/documentation
    // //語法https://randomuser.me/api/?seed=foobar
    // // Seeds的用法是官網提供固定載入同一筆資料的用法
    // //動態路由的載入方式，可以用這個來固定ajax載入的資料
    // this.$http.get(`https://randomuser.me/api/?seed=${id}`)
    // .then((response) =>{
    //   console.log(response)
    // })
    //====================================
    const vm = this;
    this.$http.get('https://randomuser.me/api/')
      .then((response) =>{
        console.log(response.data.results[0].picture.medium)
        console.log(response.data.results[0].email)
        console.log(response.data.results[0].gender)
        vm.user=response.data.results[0];

        this.gender= vm.user.gender;
        this.email= vm.user.email;
        this.picture = vm.user.picture.large;
    })
  }
}
</script>
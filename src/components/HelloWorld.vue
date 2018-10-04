<template>
  <div class="hello">
    <h1>HelloWorld</h1>
    <h3>{{$route.params.worldmsg}}</h3>
    <h2>{{msg}}</h2>
    <hr>
    <h2>我是axois传过来的数据</h2>
    <button @click="getData">发送请求</button>
    <ul>
      <li v-for="item in items">
        {{item.title}}
      </li>
    </ul>
    <hr>
    下面关于vuex 有关的操作
    <hr>
    <outter/>
    <hr>
    <parent/>
  </div>
</template>

<script>
  import axios from 'axios'
  import  Vue from 'vue'
  import  qs from 'qs'
  Vue.prototype.$http = axios;
  import  outter from  './outter'
  import  parent from  './parent'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        items: [],
      }
    },
    components:{
      parent,outter
    },
    methods:{
      getData:function () {
        var self = this;
        this.$http.get('https://cnodejs.org/api/v1/topics',
            {params:{page:1, limit:10}}
        )
            .then(function (res) {
              self.items = res.data.data
              console.log(res.data.data)
            })
            .catch(function (err) {
              console.log(err)
            })

      }
    }
  }
</script>

<style scoped>
  h1 {
    color: darkturquoise;
  }

  li {
    list-style: none;
  }
</style>

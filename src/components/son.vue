<template>
  <div>
    <span>我是子组件</span>--{{msg}}
    <br>
    <hr>
    <button @click="toFather">向父组件传递数据</button>
    <br>
    <div>我是子组件拿到的全局 state --{{getNum}}</div>
    <button @click="addone">点击增加</button>
    <hr>
    <button @click="deone">点击减一</button>
    <button @click="deoneaction">点击减一action</button>


  </div>
</template>

<script>

  export default {
    name: "son",
    props:{
      msg:{
        type:String,
        default:''
      }
    },
    data:function(){
      return {toFatherMsg:'我是你的 son'}
    },
    methods:{
      toFather:function(){
        this.$emit('handle',"我是子组件中的数据")
        console.log(2222)
      },
      addone(){
        return this.$store.commit('add')
      },
      deone(){
        return this.$store.commit('de')
      },
      deoneaction(){
        return this.$store.dispatch('deOne')
      }
    },
    computed:{
      getNum(){
        return this.$store.state.num
      }
    }

  }
</script>

<style scoped>
  *{
    margin: 5px;
  }
 div{
   background-color: bisque;
   border: 2px solid gray;
   padding: 5px;
 }
</style>
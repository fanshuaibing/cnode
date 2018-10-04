<template>
  <div>
    <span>我是子组件</span>--{{msg}}
    <br>
    <hr>
    <button @click="toFather">向父组件传递数据</button>
    <br>
    <div>我是子组件拿到的全局 state --{{getNum}}</div>
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

</style>
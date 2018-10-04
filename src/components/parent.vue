<template>
  <div>
    <span>我是父组件</span>--{{fromSon}}
    <div>我是父组件拿到的全局状态 state --{{getNum}}</div>
    <hr>
    <son :msg="toSonMsg" @handle="getMsgFromSon"></son>
    <hr>

  </div>
</template>

<script>
  import son from './son'
  export default {
    name: "parent",
    data:function () {
      return{
        toSonMsg:'我是你的父亲',
        fromSon:''
      }
    },
    components:{
      son
    },
    methods: {
      getMsgFromSon(value) {

        console.log(value);
        return this.fromSon = value


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

</style>
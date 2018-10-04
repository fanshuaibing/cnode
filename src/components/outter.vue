<template>
  <div>
    <span>我是outter拿到的全局状态 state --{{getNum}}</span>
    <br>
    <button @click="deoneaction">out组件操作全局状态</button>
  </div>
</template>

<script>


  export default {
    name: "outter",
    computed:{
      getNum(){
        return this.$store.state.num
      }
    },
    methods:{
      deoneaction(){
        return this.$store.dispatch('deOne')
      }
    }
  }
</script>

<style scoped>
div{
  background: darkturquoise;
  margin: 5px;
  border: 2px solid cornflowerblue;
  padding: 2px;
}
</style>
<template>
  <div>
    <span>我是outter拿到的全局状态 state --{{getNum}}</span>
  </div>
</template>

<script>


  export default {
    name: "outter",
    computed:{
      getNum(){
        return this.$store.state.num
      }
    }
  }
</script>

<style scoped>

</style>
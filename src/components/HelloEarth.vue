<template>
  <div class="hello">
    <h1>HelloEarth</h1>
    <h3>{{$route.params.earthmsg}}</h3>

  </div>
</template>

<script>
export default {
  name: 'HelloEarth',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color: darkgray;
}
  *{
    margin: 10px;
  }
</style>

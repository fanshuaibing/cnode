import   Vue from 'vue';
import  Router from 'vue-router';

import  HelloWorld from '../components/HelloWorld'
import  HelloEarth from '../components/HelloEarth'
import  list from '../components/list'
import son from  '../components/son'
import parent from  '../components/parent'



Vue.use(Router)

export default new Router({
  routes:[
    {
      name:'helloworld',
      path:'/helloworld/:worldmsg',
      component:HelloWorld
    },
    {
      name:'helloearth',
      path:'/helloearth/:earthmsg',
      component:HelloEarth
    },
    {
      name:"list",
      path:'/list',
      component:list
    }
    ]
})
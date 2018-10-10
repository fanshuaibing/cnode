<template>
<div class="UserInfo">
  <!--在数据未返回的时候，显示这个正在加载的gif-->
  <div class="loading" v-if="isLoading">
    <img src="../assets/loading.gif" >
  </div>

  <div class="userInfomation" v-else>
    <!--头部信息-->
      <div class='home'>主页</div>
      <div class="inner">
        <div class="userImg">
          <img :src="userinfo.avatar_url" >
        </div>
        <div class="username">
          <a>{{userinfo.loginname}}</a>
        </div>
      </div>
      <div class="create_at">
         <div>{{userinfo.score}}积分</div>
         <div>注册时间：{{userinfo.create_at | formatDate}}</div>
      </div>
    <!--回复的主题-->
    <div class="replies">
      <p>回复的主题</p>
      <ul>
        <li v-for="item in replylimitby5" >
          <router-link :to="{
          name:'post_content',
          params:{
            id:item.id
          }
          }">
            {{item.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <!--个人创建的主题-->
    <div class="topics">
      <p>创建的主题</p>
      <ul>
        <li v-for="item in topcilimitby5">
          <router-link :to="{
          name:'post_content',
          params:{
            id:item.id
          }
          }">
            {{item.title}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "UserInfo",
      data(){
          return {
            isLoading: true,
            userinfo:{}
          }
      },
      methods:{
          getData(){
              this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
                .then(res=>{
                  this.isLoading = false; //加载成功，去除动画
                  this.userinfo = res.data.data;
                })
                .catch(function (err) {
                  console.log(err)
                })
          }
      },
      computed:{
        topcilimitby5(){
          if(this.userinfo.recent_topics){
            return this.userinfo.recent_topics.slice(0,5);
          }
        },
        replylimitby5(){
          if(this.userinfo.recent_replies){
            return this.userinfo.recent_replies.slice(0,5);
          }
        }
      },
      beforeMount(){
        this.isLoading = true;//加载成功之前显示加载动画
        this.getData();//在页面加载之前获取数据
      }
    }
</script>

<style scoped>
  .home{
    background-color: #cfcfcf;
    font-size: 18px;
    line-height: 2;
    padding-left: 4px;
  }
  .userInfomation {
    background: white;
    width: 75%;
    margin: 10px auto;
  }
  .userInfomation section {
    padding: 12px;
  }
  .inner{
    display: inline-block;
  }
  .username, .userImg{
    display: inline-block;
    vertical-align: middle;
    margin: 6px;
    font-size: 18px;
  }
  .userInfomation img {
    width: 50px;
    height: 50px;
  }
  .userInfomation li {
    list-style:none;
  }
  .create_at{
    font-size: 16px;
  }
  .create_at>div{
    padding: 4px;
  }
  .userInfomation .replies,
  .userInfomation .topics {
    font-size: 0.72rem;
    border-top: 10px #DDDDDD solid;
  }
  .userInfomation > div > p {
    padding: 12px 0 12px 12px;
    background-color: rgba(212, 205, 205, 0.17);
    font-size: 0.75rem;
    margin: 0;
  }

  .userInfomation > div >ul > li {
    padding: 4px 0 4px 12px;
    white-space: nowrap;
    font-size: 0.72rem;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
    vertical-align: middle;
  }
  .userInfomation > div >ul > li > a {
    color: #094E99;
    text-decoration: none;
    font-size: 16px;
  }





</style>

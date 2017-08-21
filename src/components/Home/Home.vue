<template>
  <div class="home">
    <div class="header">
      <div class="btn">
        <span class="iconfont icon-all"></span>
        <span><input type="text" class="search"  placeholder="搜索"></span>
        <span class="iconfont icon-add"></span>
        <span class="iconfont icon-xiaoxizhongxin"></span>
      </div>
      <!-- 切换 -->
      <div class="tab">
        <mu-tabs :value="activeTab" @change="handleTabChange">
          <mu-tab value="tuijian" title="推 荐"/>
          <mu-tab value="guanzhu" title="关 注"/>
        </mu-tabs>
      </div>
      <!-- 切换 -->
    </div>
    <!-- 切换的内容 -->
    <div class="tabContent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'tuijian'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
      // 将选项卡切换id 设为路由路径切换
      this.$router.push({ path: '/Home/' + val })
    }
  }
}
</script>

<style scoped>
.home .header{
  width: 100%;
  height: 0.9rem;
  /*line-height: */
  position: fixed;
  top: 0;
  z-index: 2;
  align-items:center;
  border-bottom: 0.014rem solid #ddd;
  /*font-size: 3rem;*/
}
.search{
  font-size: 0.1rem;
  margin: 0 0.18rem 0 0.18rem;
  width: 60%;
  height: 0.33rem;
  text-align: center;
  border:0.014rem solid #ddd;
  background-color: rgba(163,163,163,0.2);
}
.btn span{
  /*margin-right: 0.8rem;*/
}
.home .btn{
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  line-height:0.3rem;
  align-items:center;
  height: 0.3rem;
}
/*选项卡*/
.home .tab{
  line-height:0.5rem;
  align-items:center;
  height: 0.5rem;
}
.iconfont{
  font-size: 0.25rem;
}
.home a :after{
  color: #000;
}
/*tab显示的内容*/
.tabContent{
  /*position: absolute;*/
  margin-left: 0.15rem;
  margin-right: 0.15rem;
  margin-top: 1.15rem;
}
/*.tabcontennt::-webkit-scrollbar {
  display: none;
}*/
.imgSize{
  width:100%;
  height:auto;
}
/*选项卡*/
.mu-tab-link{
  color:rgba(163,163,163,0.9);
  width: 30px;
  height: 0.4rem;
  font-size: 0.18rem;
}
.mu-tabs{
  background-color: #fff;
  color: #000;
}
.mu-tab-active{
  color: #000;
}
.mu-circle-ripple, .mu-ripple-wrapper{
  height: 100%;
  width: 100%;
}
/*GridList*/
.gridlist-demo-container{
  margin-top: 0.2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 0.2rem;
}

.gridlist-inline-demo{
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
/*今日热图*/
.todayShow{
  width: 70%;
  height: 0.3rem;
  border: 1px solid #ddd;
  margin: auto;
}
</style>

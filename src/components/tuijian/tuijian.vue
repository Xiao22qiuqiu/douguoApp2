<template>
  <div class="tuijian">
  	<div class="carousel">
      <mt-swipe :auto="4000" style="width:100%;height:190px;background-color:orange;">
        <mt-swipe-item ><router-link to="/" ><img src="../../assets/homeImg/foodShow.jpg" alt="" style="width:100%;height:auto;"></router-link></mt-swipe-item>
        <mt-swipe-item ><router-link to="/" ><img src="../../assets/homeImg/foodShow2.jpg" alt="" style="width:100%;height:auto;"></router-link></mt-swipe-item>
        <mt-swipe-item ><router-link to="/" ><img src="../../assets/homeImg/foodShow3.jpg" alt="" style="width:100%;height:auto;"></router-link></mt-swipe-item>
        <mt-swipe-item ><router-link to="/" ><img src="../../assets/homeImg/foodShow4.jpg" alt="" style="width:100%;height:auto;"></router-link></mt-swipe-item>
        <mt-swipe-item ><router-link to="/" ><img src="../../assets/homeImg/foodShow5.jpg" alt="" style="width:100%;height:auto;"></router-link></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="todayShow">今日午餐</div>
    <div class="gridlist-demo-container">
      <mu-grid-list class="gridlist-inline-demo">
        <mu-grid-tile v-for="(tile, index) in list" :key="index">
          <img :src="tile.image">
          <span slot="title">{{tile.title}}</span>
          <span slot="subTitle">by <b>{{tile.author}}</b></span>
        </mu-grid-tile>
      </mu-grid-list>
    </div>
    <div>
      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: ''
    }
  },
  created () {
    // GET /someUrl
    this.$http.get('../../static/Json/homeJson/homeList.json').then(response => {
    // get body data
      this.list = response.body.list
      console.log(this.list)
    }, response => {
  // error callback
    })
  }
}
</script>

<style scoped>
.tuijian .carousel{
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
}
/*GridList*/
.mu-grid-list{
  height: 1rem;
}
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
  line-height: 0.3rem;
  border: 1px solid #ddd;
  margin: auto;
}
</style>
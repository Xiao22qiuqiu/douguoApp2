<template>
	<div class="carousel">
    <mt-swipe :auto="4000" style="width:100%;height:190px;background-color:orange;">
      <mt-swipe-item ><router-link to="/" ><img src="../../assets/homeImg/foodShow.jpg" alt="" style="width:100%;height:auto;"></router-link></mt-swipe-item>
      <mt-swipe-item ><router-link to="/" ><img src="../../assets/homeImg/foodShow2.jpg" alt="" style="width:100%;height:auto;"></router-link></mt-swipe-item>
      <mt-swipe-item ><router-link to="/" ><img src="../../assets/homeImg/foodShow3.jpg" alt="" style="width:100%;height:auto;"></router-link></mt-swipe-item>
      <mt-swipe-item ><router-link to="/" ><img src="../../assets/homeImg/foodShow4.jpg" alt="" style="width:100%;height:auto;"></router-link></mt-swipe-item>
      <mt-swipe-item ><router-link to="/" ><img src="../../assets/homeImg/foodShow5.jpg" alt="" style="width:100%;height:auto;"></router-link></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.carousel{
  margin-top: 0.2rem;
}

</style>
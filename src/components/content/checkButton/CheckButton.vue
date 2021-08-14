<template>
  <div class="check-button" >
    <div class="icon-selector" :class="{check : isChecked}">
       <img src="~assets/img/cart/tick.svg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props:{
      isChecked:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style scoped>
 .icon-selector{
   position: relative;
   margin: 0;
   width: 18px;
   height: 18px;
   border-radius: 45%;
   border: 2px solid #aaa;
   cursor: pointer;
 }

  .check{
    background-color: #ff8198;
  }
</style>

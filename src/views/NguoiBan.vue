<template>
  <div class="about">
    <HeaderSale />
    <Menu />
    <router-view/>
    
  </div>
</template>
<script>
import HeaderSale from '@/components/sale/HeaderSale.vue'
import Menu from '@/components/sale/Menu.vue'
// import Manager from '@/components/sale/Manager.vue'
export default {
  name:'about',
  components:{
    HeaderSale,
    Menu
  }
}
</script>
<style>

</style>

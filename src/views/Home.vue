<template>
  <div class="home">
    <Header/>
   <div class="container">
      <Nav />
      <Cate />
      <Slide />
      <ListProd />
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
import Cate from '@/components/Category.vue'
import Slide from '@/components/Slide.vue'
import ListProd from '@/components/ListProd.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Nav,
    Cate,
    Slide,
    ListProd
  }
}
</script>
<style>
.home {
    width: 100%;
    height: 100%;
    background-attachment: fixed;
    background-color: #f1f1f1;
}
</style>

<template>
    <div>
      <div>
      <Header />
    </div>
    <div class="container">
      <Nav />
      <Category />
      Tin tuc moi nhat
    </div>
    </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Category from "@/components/Category.vue";
export default {
  components: {
    Header,
    Nav,
    Category,
  },
};
</script>
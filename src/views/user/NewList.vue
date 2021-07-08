<template>
  <div class="newlist">
      <Header class="header" />
    <div class="container">
      <Nav />
      <Category />
      <div id="slideshow">
        <div class="slide-wrapper">
          <div class="slide">
              <!-- https://images.pexels.com/photos/2382325/pexels-photo-2382325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 -->
            <div class="text">Nem chua Thanh Hóa</div>
            <img width="800px"  height="500px"
              src="@/assets/nemchua.png"
            />
          </div>
          <div class="slide">
            <!-- "https://images.pexels.com/photos/3578393/pexels-photo-3578393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" -->
              <div class="text">Bánh cáy Thái Bình</div>
            <img
               width="800px"
              src="@/assets/banhcay.png"
              height="500px"
            />
          
          </div>
          <div class="slide">
            <!-- "https://images.pexels.com/photos/4484184/pexels-photo-4484184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" -->
             <div class="text">Bánh đậu xanh Hải Dương</div>
            <img  height="500px"   width="800px"
              src="@/assets/banhdauxanh.png"
            />
          </div>
        </div>
      </div>
       <Footer class="footerNewList"/>
    </div>    
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Category from "@/components/Category.vue";
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Nav,
    Category,
    Footer
  },
};
</script>
<style>
.newlist .header{
    position: sticky;
    top:0;
    z-index: 10;
}
.container .footerNewList{
  background-color:#f1f1f1 ;
  margin-top: 30px;
}
#slideshow {
  font-family: Roboto;
  overflow: hidden;
  height: 510px;
  width: 928px;
  margin: 0 auto;
  /* background-color:#f1f1f1 ; */
}
.slide-wrapper {
  width: 2912px;
  -webkit-animation: slide 14s ease infinite;
}
.slide {
  float: left;
  height: 510px;
  width: 828px;
}
 .slide .text{
  font-family: Roboto;
  font-size: 20px;
  font-weight: 900;
  padding-top: 10px;
}
@-webkit-keyframes slide {
  20% {
    margin-left: 0px;
  }
  30% {
    margin-left: -728px;
  }
  50% {
    margin-left: -728px;
  }
  60% {
    margin-left: -1456px;
  }
  80% {
    margin-left: -1456px;
  }
}
.footer{
  background-color: #fff;
}
</style>

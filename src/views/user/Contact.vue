<template>
  <div>
    <Header />
   <div class="container">
      <Nav />
   </div>
    <section id="aa-catg-head-banner">
      <div class="aa-catg-head-banner-area">
        <div class="container">
          <div class="aa-catg-head-banner-content">
            <ol class="breadcrumb">
              <li><a href="/">Trang chủ</a></li>
              <li style="color:#fff">Thông tin liên hệ</li>
            </ol>
             <h2>Liên hệ</h2>
          </div>
        </div>
      </div>
    </section>
    <!-- / catg header banner section -->
    <!-- start contact section -->
    <section id="aa-contact">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="aa-contact-area">
              <div class="aa-contact-top">
                <h2>Chúng tôi đang chờ để hỗ trợ bạn..</h2>
                <p>
                  Nếu bạn nó bất cứ thắc mắc hay ý kiến gì cứ tìm đến chúng tôi.
                </p>
              </div>

              <!-- Contact address -->
              <div class="aa-contact-address">
                <div class="row">
                  <div class="col-md-7">
                    <div class="aa-contact-map">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14896.883936380778!2d105.77321113575206!3d21.02384210535439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab557dc72393%3A0x37eda577a3b652a0!2sGHTK%20Building!5e0!3m2!1svi!2s!4v1625400359413!5m2!1svi!2s" width="100%" height="450px" style="" allowfullscreen="" loading="lazy"></iframe>
                      
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="aa-contact-address-right">
                      <address>
                        <h4>Giao hàng tiết kiệm</h4>
                        <p>Liên hệ cho chúng tôi bất cứ khi nào bạn cần.</p>
                        <p>
                          <span class="fa fa-home"></span>Số 8 Phạm Hùng, Nam Từ Niêm, Hà Nội
                        </p>
                        <p><span class="fa fa-phone"></span>0123456789</p>
                        <p>
                          <span class="fa fa-envelope"></span>Email:
                          ghtk@ghtk.com
                        </p>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Nav from '@/components/Nav.vue'
export default {
  components: {
    Header,
    Nav
  },
};
</script>
<style>
body{
  font-family: Roboto;
}

.container h2{
  font-family: Roboto;
}
.container li a{
  text-decoration: none;
  padding-top: 30px;
  color: black;  
}
</style>

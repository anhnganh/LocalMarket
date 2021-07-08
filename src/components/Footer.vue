<template>

       <div class="footer">
        <div class="row">
        <div class="col-md-11">
          <div class="aa-footer-top-area">
            <div class="row">
              <div class="col-md-4 col-sm-6">
                <div class="aa-footer-widget">
                  <a href="/"><img src="@/assets/localmarket.png" alt="logo img" height="160px" width="160px"></a> 
                  <ul class="aa-footer-nav">

                    <li><p style="color:#888; text-align: justify; width: 95%">Là nơi chuyên buôn bán tất cả các mặt hàng về nông sản chất lượng. Chúng tôi luôn đặt tiêu chí về chất lượng và uy tín lên hàng đầu.</p></li>
                    <!-- <li><img src="@/assets/localmarket.png" alt="logo img" width="40%"></li> -->
                  </ul>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="aa-footer-widget">
                  <div class="aa-footer-widget">
                    <h3>HỖ TRỢ KHÁCH HÀNG</h3>
                    <ul class="aa-footer-nav">
                      <li><a href="${pageContext.request.contextPath}/order">Hướng dẫn đặt hàng</a></li>
                      <li><a href="${pageContext.request.contextPath}/payment">Hướng dẫn thanh toán</a></li>
                      <li><a href="${pageContext.request.contextPath}/security">Chính sách bảo mật thông tin</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="aa-footer-widget">
                  <div class="aa-footer-widget">
                    <h3>LIÊN HỆ</h3>
                    <address>
                      <p> P.Mễ  Trì - Q.Nam Từ Liêm - TP Hà Nội</p>
                      <p><span class="fa fa-phone"></span>0988888888</p>
                      <p><span class="fa fa-envelope"></span>ghtk@gmail.com</p>
                    </address>
                    <div class="aa-footer-social">
                      <a href="#"><span class="fab fa-facebook"></span></a>
                      <a href="#"><span class="fab fa-youtube"></span></a>
                      <a href="#"><span class="fab fa-instagram"></span></a>
                      <a href="#"><span class="fab fa-skype"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>

    <!-- footer-bottom -->
      
</template>
<script>
export default {};
</script>
<style >

.footer{
    margin-top: 10px;
    background-color: #fff;
    height: auto;
}

.row .col-md-4 .aa-footer-widget {
    margin-top: 10px;
    font-family: Roboto;
}
.row .col-md-4 .aa-footer-widget .aa-footer-nav li{
    list-style-type: none;
    padding-top: 10px;
}

</style>

<template>
  <div class="login">
    <b-row>
      <b-col md="6">
        <div class="title"> LOCAL MARKET</div>
           <img id="cart-logo" src="@/assets/cart_big.png" alt="app-logo">
          <img id="logo" src="@/assets/logo.png" alt="app-logo">
          <div class="line"></div>
      </b-col>
      <b-col md="6"> 
         <div class="login-form">
            <p>
                ĐĂNG NHẬP
            </p>
            <div class="login-lg">
                <a href="#" class="zalo-login">
                    <img src="@/assets/zalo.png" class="icon" alt="zalo-icon" id="zalo-icon"></a>
                <a href="#" class="facebook-login">
                    <img src="@/assets/facebook.png" class="icon" alt="facebook-icon" id="facebook-icon">
                </a>
            </div>

        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {};
</script>
<style>
.login {
   background-color: #157d3f; 
   height: 100%;
}

</style>

<template>
  <div class="login">
    <b-row>
      <b-col md="6" class="left">
        <div class="title">LOCAL MARKET</div>
        <img id="cart-logo" src="@/assets/cart_big.png" alt="app-logo" />
        <img id="logo" src="@/assets/logo.png" alt="app-logo" />
        <div class="line"></div>
      </b-col>
      <b-col md="6">
        <div class="login-form">
          <p>
            ĐĂNG NHẬP
          </p>
          <div class="login-lg">
            <a href="#" class="zalo-login">
              <img src="@/assets/zalo.png" class="icon" alt="zalo-icon" id="zalo-icon"/>
            </a>  

            <a href="#" @click="loginGithub" class="facebook-login">
              <img
                src="@/assets/facebook.png"
                class="icon"
                alt="facebook-icon"
                id="facebook-icon"
              />
            </a>
          </div>
        </div>
      </b-col>
    </b-row> 

  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  
  computed:{
    ...mapGetters({
        loggedIn: 'user/loggedIn'
    })
  },
  
  methods:{
    ...mapActions({
      loginGithubAction: 'user/loginGithub'
    }),
    loginGithub(){
      this.loginGithubAction().then((resp)=>{
        if(resp.data.url){
          window.location.href = resp.data.url
        }
      })
    }
  },
  created () {
    console.log(this.$store.state);
  }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Salsa&display=swap');
.login{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #157d3f;
  /* background-attachment: fixed; */
}
.login .row .title{
     width: fit-content;
    font-size: 60px;
    color: #fff;
    margin-left: 200px;
    margin-top: 110px;
    font-family: 'Salsa', cursive;
    height: fit-content;  
}

.login .row #cart-logo{
    position: absolute;
    width: 430px;
    height: 320px;
    left: 250px;
    top: 290px;
}
.login .row #logo{
  position: absolute;
    width: 200px;
    height: 200px;
    left: 300px;
    top: 200px;
  
}
.login .row .login-form{
    position: absolute;
    width: 450px;
    height: 450px;
    right: 200px;
    top: calc(50% - 225px);
    background: #ffffff;
    border: 2px solid #157d3f;
    box-sizing: border-box;
    border-radius: 15px;
    z-index: 1;
    box-shadow: 14px 14px 14px 14px rgba(0, 0, 0, 0.25);
}

.login .row .login-form p:first-child{
  padding-top: 80px;
    font-family: 'Open Sans', sans-serif;

    font-weight: bold;
    font-size: 35px;
    text-align: center;
    color: #333333;
    z-index: 2;
} 
.login .row .login-form .icon {
    position: absolute;
    width: 80px;
    height: 80px;

    border-radius: 10px;
    z-index: 2;
}

.login .row .login-form #facebook-icon {
    left: 230px;
    border: 3px solid #3c5a99;
    box-sizing: border-box;
    z-index: 1;
    box-shadow: 2px 2px 2px #bbb;
}

.login .row .login-form  #zalo-icon {
    border: 3px solid #0180c7;
    box-sizing: border-box;
    left: 80px;
    z-index: 1;
    box-shadow: 2px 2px 2px #bbb;
}
.login .row .login-form #facebook-icon:hover{
    box-shadow: 4px 4px 4px #bbb;
}
.login .row .login-form #zalo-icon:hover{
    box-shadow: 4px 4px 4px #bbb;
}
.login .row .login-form  .login-lg{
    position: absolute;
    bottom: 55%;
    left: 8%;
} 

/* #cart-logo {
    position: absolute;
    width: 430px;
    height: 320px;
    left: 290px;
    top: 260px;
}
.line{
    position: absolute;
   
    left: 200px;
    top: 590px;
    width: 460px;
    height: 12px;
    background-color: #fff;
    border-radius: 5px;
    
}

#logo {
    position: absolute;
    width: 200px;
    height: 200px;
    left: 300px;
    top: 200px;
  
}

.login-form {
    position: absolute;
    width: 450px;
    height: 450px;
    right: 200px;
    top: 150px;
    background: #ffffff;
    border: 2px solid #157d3f;
    box-sizing: border-box;
    border-radius: 15px;
    z-index: 1;
}

.login-form p:first-child {
  
    padding-top: 80px;
    font-family: 'Open Sans', sans-serif;

    font-weight: bold;
    font-size: 35px;
    text-align: center;
    color: #333333;
    z-index: 2;
}
.icon {
    position: absolute;
    width: 80px;
    height: 80px;

    border-radius: 10px;
    z-index: 2;
}

#facebook-icon {
    left: 230px;
    border: 3px solid #3c5a99;
    box-sizing: border-box;
    z-index: 1;
    box-shadow: 2px 2px 2px #bbb;
}

#zalo-icon {
    border: 3px solid #0180c7;
    box-sizing: border-box;
    left: 80px;
    z-index: 1;
    box-shadow: 2px 2px 2px #bbb;
}

.login-lg{
    position: absolute;
    bottom: 45%;
    left: 8%;
} */
</style>

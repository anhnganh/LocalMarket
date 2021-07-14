<template>
  <div id="header">
    <div class="container">
      <div class="header-left">
        <span class="menu-hidden"><img src="../assets/menu.png" alt=""/></span>
        <span class="logo"
          ><router-link to="/abc"
            ><img src="../assets/localmarket.png" alt=""/></router-link
        ></span>
        <span class="btn-banhang"
          ><router-link to="/nguoiban">Bán hàng</router-link></span
        >
      </div>
      <div class="header-center">
        <div class="search-bar">
          <input
            type="text"
            name=""
            id=""
            placeholder="Tìm kiếm sản phẩm, gian hàng..."
          />
          <button><img src="../assets/search.png" alt="" /></button>
        </div>
      </div>
      <div class="header-right">
        <div class="icon-cart">
          <router-link to="#"
            ><img src="../assets/cart.png" alt=""
          /></router-link>
        </div>
        <div class="icon-notification">
          <router-link to="#"
            ><img src="../assets/bell.png" alt=""
          /></router-link>
        </div>
        <div class="header-user">
          <router-link to="#">
            <span class="icon-user"
              ><router-link to="#">
                <img src="../assets/user.png" alt="" />
                
              </router-link>
            </span>
            <b-dropdown id="dropdown-1">
              <!-- <template #button-content>
                <b-icon icon="person-fill" aria-hidden="true"></b-icon>
              </template> -->
              <b-dropdown-item>Trang ca nhan</b-dropdown-item>
              <b-dropdown-item>Lich su mua hang</b-dropdown-item>
              <b-dropdown-item @click="logout">
                <b-icon icon="power" aria-hidden="true"></b-icon>
                Dang xuat</b-dropdown-item>
            </b-dropdown>
            <span class="username">username</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- <div id="header">
    <div class="logo">
      <img src="../assets/localmarket.png" style="width:150px" alt="" />
    </div>
    <div class="banHang">
      <router-link to="/nguoiban">Bán hàng</router-link>
    </div>
    <div class="search">
      <b-input-group class="form">
        <b-form-input
          class="input"
          type="text"
          placeholder="Tìm kiếm sản phẩm, gian hàng..."
        ></b-form-input>
        <b-input-group-append class="button1">
          <b-button class="button"><b-icon icon="search"/></b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
    <div class="cart" style="font-size: 1rem;">
      <img src="../assets/cart.png" width="30px" />
    </div>
    <div class="notification">
      <div style="font-size: 2.6rem;">
        <img src="../assets/bell.png" width="30px" />
      </div>
    </div>
    <div class="user1">
      <b-button-group>
        c
      </b-button-group>
      <div class="username">username</div>
    </div>
  </div> -->
</template>
<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  methods:{
    ...mapActions({
      logoutUser: 'user/logoutUser',
    }),
    logout(){
      this.logoutUser()
        .then(()=>{
            this.$router.push({name: 'Login'});
        })
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

#header .container {
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 100%;
  background-color: #157d3f;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
.header-left {
  display: flex;
  flex: 1;
}
.logo {
  display: flex;
}
.logo img {
  width: 150px;
  height: auto;
}
.menu-hidden {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.menu-hidden img {
  width: 30px;
  height: 30px;
}
.btn-banhang {
  display: flex;
  align-items: center;
  padding-left: 40px;
}
.btn-banhang a {
  text-decoration: none;
  background-color: #ea7f29;
  border: 2px solid #fff;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  padding: 5px 10px;
}
.btn-banhang a:hover {
  box-shadow: 2px 2px 2px #999;
  color: #fff;
}
.header-center {
  display: flex;
  flex: 1;
  width: 100%;
}
.search-bar {
  display: inline-flex;
  justify-content: center;
}
.search-bar input {
  width: 450px;
  height: 40px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  outline: none;
  border: 0;
  padding-left: 20px;
  font-size: 16px;
  box-shadow: 1px 1px 1px #aaa inset;
}
.search-bar::placeholder {
  color: #bbb;
}
.search-bar button {
  width: 60px;
  height: 40px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  box-sizing: border-box;
  background-color: #157d3f;
  border: 2px solid #fff;
}
.search-bar button img {
  width: 25px;
  height: auto;
}

div .header-right {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
}
.header-user a {
  font-size: 16px;
  color: #fff;
  text-decoration: none;
}
.header-user a:hover {
  text-decoration: none;
  color: #fff;
}
.header-user .username {
  padding-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: normal;
}
.header-user button{
  width: 30px;
  height: 30px;
  background: #157d3f;
  border: 0;
}
.icon-cart img,
.icon-notification img {
  margin-left: 40px;
  width: 30px;
  height: auto;
}


.icon-user img {
  margin-left: 40px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.icon-user svg{
  padding: 0;
  width: 30px;
  height: 30px;
}

@media (min-width: 768px) {
  .menu-hidden {
    display: none;
  }
}
@media (min-width: 1000px) and (max-width: 1200px) {
  .icon-notification {
    display: none;
  }
  .search-bar input {
    width: 350px;
  }
  .btn-banhang {
    padding-left: 10px;
  }
}
@media (min-width: 768px) and (max-width: 1000px) {
  .icon-notification {
    display: none;
  }
  .icon-cart {
    display: none;
  }
  .btn-banhang {
    display: none;
  }
  .search-bar input {
    width: 250px;
  }
}
@media (max-width: 768px) {
  .logo img {
    width: 100px;
    height: auto;
    margin-right: 20px;
  }
  .icon-notification {
    display: none;
  }
  .icon-cart {
    display: none;
  }
  .btn-banhang {
    display: none;
  }
  .header-user {
    display: none;
  }
  .search-bar input {
    width: 250px;
  }
  .menu-hidden {
    display: inline-flex;
  }
}

/* #header {
  padding-left: 212px;
  background-color: #157d3f;
  height: 100px;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
 }
.logo {
  position: absolute;
  float: left;
  margin-left: 10px;
  margin-top: 14px;
}
.banHang {
  position: absolute;
  margin-left: 220px;
  margin-top: 33px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  border: 3px solid #ffffff;
  background: #ea7f29;
  width: 105px;
  height: 40px;
  text-align: center;
  padding-top: 7px;
  /* border-radius: 10%;
} */
/* .banHang a {
  text-decoration: none;
  color: #ffffff;
  
}
.banHang a:hover{
    color:#157d3f ;
}
.search {
  position: absolute;
  margin-left: 400px;
  margin-top: 30px;
}

.search .form .input {
  width: 450px;
  height: 40px;
  border: 2px solid #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  font-size: 18px;
  padding-left: 21px;
}

.input-group .btn {
  height: 40px;
  width: 70px;
  background: #157d3f;
  border-radius: 0px 30px 30px 0px;
  border: 2px solid #ffffff;
}
.cart {
  color: #fff;
  position: absolute;
  margin-left: 990px;
  margin-top: 35px;
  font-size: 15px;
  padding-left: 3px;
  border-radius: 100%;
  width: 42px;
  height: 42px;
}
.notification {
  position: absolute;
  margin-left: 1110px;
  margin-top: 15px;
}
.user1 {
  margin-left: 1220px;
  padding-top: 25px;
}
.user1 .btn-secondary {
  background-color: #ffffff;
  color: #000;
}
.user1 .btn {
  border-radius: 100%;
  width: 43px;
  height: 43px;
  border-color: #ffffff;
  background-color: #f8f8f8;
}
.user1 .dropdown-toggle::after {
  display: none;
}
.user1 .b-icon.bi {
  color: rgb(0, 0, 0);
}

.user1 .btn-group {
  margin-left: 6px;
}
.user1 .btn-group .btn-group-vertical {
  margin-left: 0px;
}
.user1 .username {
  color: #fff;
}  */
</style>

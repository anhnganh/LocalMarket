<template>
  <div id="header">
    <div class="logo">
      <img src="../assets/localmarket.png" style="width:150px" alt="" />
    </div>
    <div class="banHang">
      <router-link to="/nguoiban">Bán hàng</router-link>
    </div>
    <div class="search">
      <!-- <input type="text" placeholder="Tìm kiếm sản phẩm, gian hàng..." />  -->
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
        <b-dropdown id="dropdown-1">
          <template #button-content>
            <b-icon icon="person-fill" aria-hidden="true"></b-icon>
          </template>
          <b-dropdown-item>Trang ca nhan</b-dropdown-item>
          <b-dropdown-item>Lich su mua hang</b-dropdown-item>
          <b-dropdown-item>
            <b-icon icon="power" aria-hidden="true"></b-icon>
            Dang xuat</b-dropdown-item
          >
        </b-dropdown>
      </b-button-group>
      <div class="username">username</div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
<style>
#header {
  padding-left: 212px;
  background-color: #157d3f;
  height: 100px;
  width: 100%;
  font-family: Roboto;
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
  /* border-radius: 10%; */
}
.banHang a {
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
  /* border: 1px solid #FFFFFF; */
  /* background-color: #FFFFFF; */
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
}
</style>

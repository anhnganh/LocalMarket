<template>
  <div>
    <b-row class="header">
      <b-col md="4">
        <div><img src="@/assets/localmarket.png" alt="" /></div>
        <div class="text">KÊNH NGƯỜI BÁN</div>
      </b-col>
      <b-col md="3"></b-col>
      <b-col md="3"></b-col>
      <b-col md="2">
  
       <div class="user">
      <b-button-group>
        <b-dropdown id="dropdown-1">
          <template #button-content>
            <b-icon icon="person-fill" aria-hidden="true"></b-icon>
          </template>
          <b-dropdown-item>Trang cá nhân</b-dropdown-item>
          <b-dropdown-item>
            <b-icon icon="power" aria-hidden="true"></b-icon>
            Đăng xuất</b-dropdown-item
          >
        </b-dropdown>
      </b-button-group>
      <div class="username">username</div>
    </div>
        <div class="bell"><img src="@/assets/bell.png" alt=""></div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {};
</script>
<style>
.header {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  height: 90px;
  background-color: #157d3f;
  
}

.row .col-md-4 img {
  height: 45px;
  margin-left: 30px;
  margin-top: 19px;
}
.row .col-md-4 div {
  float: left;
}
.row .col-md-4 .text {
  color: #fff;
  margin-left: 50px;
  margin-top: 36px;
}

.row .col-md-2 img {
  margin-top: 25px;
  border-radius: 100%;
  height: 36px;
  float: left;
   margin-right: 10px;
}
.row .col-md-2 div {
  color: #fff;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  /* padding-top: 20px; */
}
.row .col-md-2 .user{
    padding-top: 24px;
    float: left;
    margin-right: 30px;
}
.row .col-md-2 .user .btn-secondary {
  background-color: #ffffff;
  color: #000;
}
.row .col-md-2 .user .btn {
  border-radius: 100%;
  width: 43px;
  height: 43px;
  border-color: #ffffff;
  background-color: #f8f8f8;
}
.row .col-md-2 .user .dropdown-toggle::after {
  display: none;
}
.user .b-icon.bi {
  color: rgb(0, 0, 0);
}

.user .btn-group {
  margin-left: 6px;
}
.user .btn-group .btn-group-vertical {
  margin-left: 0px;
}
.user .username {
  color: #fff;
}
/* .row .col-md-2 .bell{
   
} */
</style>

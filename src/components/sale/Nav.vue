<template>
    <div class="navbar-seller">
      <div class="menu-item">
        <a href="/nguoiban">
          <span><img src="@/assets/quanlydonhang.png" alt="icon"/></span>
          <span class="title-item">Quản lý đơn hàng</span>
        </a>
      </div>
      <div class="menu-item">
        <a href="/managershop">
          <span><img src="@/assets/quanlyshop.png" alt="icon"/></span>
          <span class="title-item">Quản lý gian hàng</span>
        </a>
      </div>
      <div class="menu-item">
        <a href="/ProductManager">
          <span><img src="@/assets/quanlysanpham.png" alt="icon"/></span>
          <span class="title-item">Quản lý sản phẩm</span>
        </a>
      </div>
      <div class="menu-item">
        <a href="/revenueManager">
          <span><img src="@/assets/doanhthu.png" alt="icon"/></span>
          <span class="title-item">Thống kê doanh thu</span>
        </a>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
body {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
}
.navbar-seller {
  position: fixed;
  left: 0;
  top: 90px;
  width: 15%;
  height: 100%;
  bottom: 0;
  background-color: #fff;
  padding-top: 0px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  float: left;
}
.menu-item {
  width: 100%;
  height: 50px;
  padding-left: 20px;
  box-sizing: border-box;
  line-height: 50px;
  border-bottom: 1px solid #ddd;
}
.menu-item a {
  text-decoration: none;
}
.menu-item:first-child {
  border-top: 1px solid #ddd;
}
.menu-item:hover {
  background-color: #ddd;
}
.menu-item:focus {
  background-color: #157d3f;
  color: #fff;
}
.menu-item a img {
  width: 30px;
  height: 30px;
  padding-right: 10px;
}
.title-item {
  color: #333;
}
</style>
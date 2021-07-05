<template>
  <div class="manager">
    <div class="navbar-seller">
      <div class="menu-item">
        <a href="#">
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
        <a href="#">
          <span><img src="@/assets/quanlysanpham.png" alt="icon"/></span>
          <span class="title-item">Quản lý sản phẩm</span>
        </a>
      </div>
      <div class="menu-item">
        <a href="#">
          <span><img src="@/assets/doanhthu.png" alt="icon"/></span>
          <span class="title-item">Thống kê doanh thu</span>
        </a>
      </div>
    </div>

    
    <div class="content-seller">
      <div class="content-title">
        <ul>
          <li>
            <span id="all" class="choose"><a href="#">Tất cả</a></span>
          </li>
          <li>
            <span id="wait-confirm"><a href="#">Chờ xác nhận</a></span>
          </li>
          <li>
            <span id="wait-ship"><a href="#">Chờ giao</a></span>
          </li>
          <li>
            <span id="order-done"><a href="#">Đã hoàn thành</a></span>
          </li>
          <li>
            <span id="dele-order"><a href="#">Đã hủy</a></span>
          </li>
        </ul>
      </div>

      <div class="gray"></div>
      <div class="action-seller">
        <span class="search-page-user">
          <b-form inline>
            <div>
              <b-form-input
                id="inline-form-input-name"
                class="mb-8 mr-sm-2 mb-sm-0"
                placeholder="Tìm kiếm sản phẩm"
              ></b-form-input>
            </div>
            <b-button variant="primary"
              ><b-icon icon="search"></b-icon
            ></b-button>
          </b-form>
        </span>
        <span class="search-date green">
          <span style="padding-right: 10px; color: #333;">Ngày đặt hàng: </span>
          <input type="date" name="" id="" />
          <button style="margin-left: 10px;">Lọc</button>
        </span>
      </div>

      <div
        style="height: 50px; font-size: 20px; font-weight: bold; line-height: 50px; padding-top: 10px; box-sizing: border-box;"
      >
        Đơn hàng
      </div>

      <!-- table -->

      <div class="table-detail" id="table-all">
        <div class="thongke">
          <table>
            <tr>
              <td>Số đơn chờ xác nhận</td>
              <td>12</td>
            </tr>
            <tr>
              <td>Số đơn chờ giao</td>
              <td>14</td>
            </tr>
            <tr>
              <td>Số đơn đã giao</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Số đơn đã hủy</td>
              <td>13</td>
            </tr>
          </table>
        </div>

        
        <table>
          <thead>
            <tr>
              <td style="width: 40%;">Sản phẩm</td>
              <td style="width: 20%;">Tổng đơn</td>
              <td style="width: 25%;">Thời gian đặt</td>
              <td>Trạng thái</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="product">
                <span><img src="@/assets/khanlen.jpg" alt=""/></span>
                <span class="info-product">
                  <strong>Tên sản phẩm</strong>
                  <div style="font-size: 12px;">50.000 đ/sp</div>
                </span>
              </td>
              <td class="total-detail">
                SL: <strong>3</strong> <br />
                <strong style="color: #EA7F29;">150.000</strong> đ
              </td>
              <td class="order-date">
                <strong>19:32</strong> <br />
                21/12/2021
              </td>
              <td class="status waiting">
                <span>Chờ xác nhận</span>
              </td>
            <tr>
              <td class="product">
                <span><img src="@/assets/khanlen.jpg" alt=""/></span>
                <span class="info-product">
                  <strong>Tên sản phẩm</strong>
                  <div style="font-size: 12px;">50.000 đ/sp</div>
                </span>
              </td>
              <td class="total-detail">
                SL: <strong>3</strong> <br />
                <strong style="color: #EA7F29;">150.000</strong> đ
              </td>
              <td class="order-date">
                <strong>19:32</strong> <br />
                21/12/2021
              </td>
              <td class="status waiting">
                <span>Chờ xác nhận</span>
              </td>
            </tr>
            <tr>
              <td class="product">
                <span><img src="@/assets/khanlen.jpg" alt=""/></span>
                <span class="info-product">
                  <strong>Tên sản phẩm</strong>
                  <div style="font-size: 12px;">50.000 đ/sp</div>
                </span>
              </td>
              <td class="total-detail">
                SL: <strong>3</strong> <br />
                <strong style="color: #EA7F29;">150.000</strong> đ
              </td>
              <td class="order-date">
                <strong>19:32</strong> <br />
                21/12/2021
              </td>
              <td class="status chogiao">
                <span>Chờ giao</span>
              </td>
            </tr>
            <tr>
              <td class="product">
                <span><img src="@/assets/khanlen.jpg" alt=""/></span>
                <span class="info-product">
                  <strong>Tên sản phẩm</strong>
                  <div style="font-size: 12px;">50.000 đ/sp</div>
                </span>
              </td>
              <td class="total-detail">
                SL: <strong>3</strong> <br />
                <strong style="color: #EA7F29;">150.000</strong> đ
              </td>
              <td class="order-date">
                <strong>19:32</strong> <br />
                21/12/2021
              </td>
              <td class="status complete">
                <span style="padding-left: 5px;">Hoàn thành</span>
              </td>
            </tr>
            <tr>
              <td class="product">
                <span><img src="@/assets/khanlen.jpg" alt=""/></span>
                <span class="info-product">
                  <strong>Tên sản phẩm</strong>
                  <div style="font-size: 12px;">50.000 đ/sp</div>
                </span>
              </td>
              <td class="total-detail">
                SL: <strong>3</strong> <br />
                <strong style="color: #EA7F29;">150.000</strong> đ
              </td>
              <td class="order-date">
                <strong>19:32</strong> <br />
                21/12/2021
              </td>
              <td class="status delete">
                <span>Đã hủy</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  mounted(){
    $(document).ready(function() {
    
    $('#table-wait-confirm').hide();
    $('#table-wait-ship').hide();
    $('#table-order-done').hide();
    $('#table-dele-order').hide();

    $('#all').click(function(){
        $('#table-wait-confirm').hide();
        $('#table-wait-ship').hide();
        $('#table-order-done').hide();
        $('#table-dele-order').hide();
        $('#table-all').show();
    });

    $('#wait-confirm').click(function(){
        $('#table-wait-confirm').show();
        $('#table-wait-ship').hide();
        $('#table-order-done').hide();
        $('#table-dele-order').hide();
        $('#table-all').hide();
    });
    $('#wait-ship').click(function(){
        $('#table-wait-confirm').hide();
        $('#table-wait-ship').show();
        $('#table-order-done').hide();
        $('#table-dele-order').hide();
        $('#table-all').hide();
    });
    $('#order-done').click(function(){
        $('#table-wait-confirm').hide();
        $('#table-wait-ship').hide();
        $('#table-order-done').show();
        $('#table-dele-order').hide();
        $('#table-all').hide();
    });
    $('#dele-order').click(function(){
        $('#table-wait-confirm').hide();
        $('#table-wait-ship').hide();
        $('#table-order-done').hide();
        $('#table-dele-order').show();
        $('#table-all').hide();
    });
 });
  }
};
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
  width: 250px;
  bottom: 0;
  background-color: #fff;
  padding-top: 70px;
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
/* end nav menu  */

/* start content-seller */
.content-seller {
  position: absolute;
  box-sizing: border-box;
  top: 90px;
  left: 300px;
  width: calc(100% - 350px);
  height: calc(100% - 90px);
  background-color: #fff;
  padding-left: 30px;
  padding-right: 30px;
}
.content-title {
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #ddd;
}
ul {
  padding-left: 20px;
}
ul li {
  list-style: none;
  display: inline-block;
  /* margin-right: 40px; */
  padding-top: 20px;
  list-style-type: none;
}

ul li a {
  padding-left: 40px;
  padding-right: 40px;
}
li .choose a {
  color: #157d3f;
  border-bottom: 3px solid #157d3f;
  padding-bottom: 6px;
  font-weight: bold;
}
li a {
  text-decoration: none;
  color: #333;
}
li a:hover {
  color: #157d3f;
}
.action-seller {
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  padding: 15px 40px 0px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

/* search sản phẩm */

.action-seller form div {
  float: left;
  margin-right: 10px;
}
.action-seller form .btn-primary {
  background-color: #157d3f;
}


/* thong ke */
.thongke{
    padding-top: 20px;
    padding-bottom: 20px;
    width: 50%;
   
}
.thongke tr{
    height: 30px;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
   
}
.thongke tr td{
    padding-left: 20px;
}
.thongke tr td:last-child{
    font-weight: bold;
}
.thongke tr:first-child{
    border-top: 1px solid #ddd;
}


/* table detail  */
.table-detail {
    position: static;
    box-sizing: border-box;
    width: 100%;
    height: calc(100% - 150px);
    background-color: #fff;
    padding-left: 30px;
    padding-right: 30px;
    overflow-y: scroll;
}
.table-detail table{
    width: 100%;
    height: auto;
    box-sizing: border-box;
}
table thead{
    height: 50px;
    border-bottom: 1px solid #ddd;


}
thead td{
    text-align: center;
    box-sizing: border-box;
    padding-top: 20px;
}
thead td:first-child{
    text-align: left;
    padding-left: 80px;
}
tbody tr{
    height: 120px;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;

}
table img{
    width: 90px;
    height: 70px;
}
tbody .product{
    display: inline-flex;
    padding: 30px 20px;
}
tbody .info-product{
    padding-left: 25px;
    padding-top: 20px;
}
tbody .total-detail, tbody .order-date, tbody .status{
    text-align: center;
}
tbody .action{
    text-align: right;
}
.status{
  
    font-weight: bold;
}
.complete{
    color: #01904a;
}
.waiting{
    color: #f29c08;
}
.chogiao{
    color: #2165a4;
}
.delete{
    color: #f4474b;
}
</style>

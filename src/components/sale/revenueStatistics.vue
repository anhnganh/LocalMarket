<template>
  <div class="revenue-content">
    <div class="col-lg-6 revenue-details">
      <div class="page-title">
        <h2>Chi tiết</h2>
      </div>

      <!-- tim kiem san pham -->
      <div class="table-option">
        <div class="input-search">
          <div class="input-group mb-1">
            <input
              id="search-by-name"
              type="text"
              class="form-control"
              placeholder="Tìm kiếm đơn hàng"
            />
            <div class="input-group-append">
              <b-input-group-append class="button1">
                <b-button class="button"><b-icon icon="search"/></b-button>
              </b-input-group-append>
            </div>
          </div>
        </div>
        <!-- pick time interval -->
        <b-button-group>
          <b-dropdown id="dropdown-1">
            <template #button-content>
              <b-icon icon="calendar-event" aria-hidden="true"></b-icon>
              Tuần này
            </template>
            <b-dropdown-item>Tháng này</b-dropdown-item>
            <b-dropdown-item>
              Chọn ngày
            </b-dropdown-item>
          </b-dropdown>
        </b-button-group>

        <!-- appear when user click chon ngay and dissapear when user click to another option    -->
        <span class="search-date green">
          <input
            style="height: 2rem;
                margin-left: 10px;"
            type="date"
            name=""
            id=""
          />
          <button style="margin-left: 10px;">Lọc</button>
        </span>
      </div>

      <div class="table-detail">
        <div
          style="width: fit-content;
          height: fit-content;
          font-size: 1.5rem;
          padding-top: .5rem;
          padding-left: .5rem;"
        >
          Tổng thu: 1.000.000.000 VNĐ
        </div>
        <table>
          <thead>
            <tr>
              <td style="width: 35%; text-align: left; padding-left:20px;">
                Tên sản phẩm
              </td>
              <td style="width: 15%;">Đơn giá</td>
              <td style="width: 18%;">Đã bán</td>
              <td style="width: 15%">Thành tiền</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="product">
                <span><img src="img/banhngai.jpg" alt=""/></span>
                <span class="info-product">
                  <strong>Tên sản phẩm</strong>
                </span>
              </td>
              <td>
                40.000 đ
              </td>
              <td>
                <div class="quantity">
                  <div class="sl">1</div>
                </div>
                <!-- <div style="padding-top: 10px;">Có sẵn: <strong style="color:#EA7F29">45</strong> gói</div> -->
              </td>
              <td><strong style="color: #EA7F29;">40.000</strong> đ</td>
            </tr>
            <tr>
              <td class="product">
                <span><img src="img/banhngai.jpg" alt=""/></span>
                <span class="info-product">
                  <strong>Tên sản phẩm</strong>
                </span>
              </td>
              <td>
                40.000 đ
              </td>
              <td>
                <div class="quantity">
                  <div class="sl">1</div>
                </div>
                <!-- <div style="padding-top: 10px;">Có sẵn: <strong style="color:#EA7F29">45</strong> gói</div> -->
              </td>
              <td><strong style="color: #EA7F29;">40.000</strong> đ</td>
            </tr>
            <tr>
              <td class="product">
                <span><img src="img/banhngai.jpg" alt=""/></span>
                <span class="info-product">
                  <strong>Tên sản phẩm</strong>
                </span>
              </td>
              <td>
                40.000 đ
              </td>
              <td>
                <div class="quantity">
                  <div class="sl">1</div>
                </div>
                <!-- <div style="padding-top: 10px;">Có sẵn: <strong style="color:#EA7F29">45</strong> gói</div> -->
              </td>
              <td><strong style="color: #EA7F29;">40.000</strong> đ</td>
            </tr>
            <tr>
              <td class="product">
                <span><img src="img/banhngai.jpg" alt=""/></span>
                <span class="info-product">
                  <strong>Tên sản phẩm</strong>
                </span>
              </td>
              <td>
                40.000 đ
              </td>
              <td>
                <div class="quantity">
                  <div class="sl">1</div>
                </div>
                <!-- <div style="padding-top: 10px;">Có sẵn: <strong style="color:#EA7F29">45</strong> gói</div> -->
              </td>
              <td><strong style="color: #EA7F29;">40.000</strong> đ</td>
            </tr>
            <tr>
              <td class="product">
                <span><img src="img/banhngai.jpg" alt=""/></span>
                <span class="info-product">
                  <strong>Tên sản phẩm</strong>
                </span>
              </td>
              <td>
                40.000 đ
              </td>
              <td>
                <div class="quantity">
                  <div class="sl">1</div>
                </div>
                <!-- <div style="padding-top: 10px;">Có sẵn: <strong style="color:#EA7F29">45</strong> gói</div> -->
              </td>
              <td><strong style="color: #EA7F29;">40.000</strong> đ</td>
            </tr>
            <tr>
              <td class="product">
                <span><img src="img/banhngai.jpg" alt=""/></span>
                <span class="info-product">
                  <strong>Tên sản phẩm</strong>
                </span>
              </td>
              <td>
                40.000 đ
              </td>
              <td>
                <div class="quantity">
                  <div class="sl">1</div>
                </div>
                <!-- <div style="padding-top: 10px;">Có sẵn: <strong style="color:#EA7F29">45</strong> gói</div> -->
              </td>
              <td><strong style="color: #EA7F29;">40.000</strong> đ</td>
            </tr>
            <tr>
              <td class="product">
                <span><img src="img/banhngai.jpg" alt=""/></span>
                <span class="info-product">
                  <strong>Tên sản phẩm</strong>
                </span>
              </td>
              <td>
                40.000 đ
              </td>
              <td>
                <div class="quantity">
                  <div class="sl">1</div>
                </div>
                <!-- <div style="padding-top: 10px;">Có sẵn: <strong style="color:#EA7F29">45</strong> gói</div> -->
              </td>
              <td><strong style="color: #EA7F29;">40.000</strong> đ</td>
            </tr>
            <tr>
              <td class="product">
                <span><img src="img/banhngai.jpg" alt=""/></span>
                <span class="info-product">
                  <strong>Tên sản phẩm</strong>
                </span>
              </td>
              <td>
                40.000 đ
              </td>
              <td>
                <div class="quantity">
                  <div class="sl">1</div>
                </div>
                <!-- <div style="padding-top: 10px;">Có sẵn: <strong style="color:#EA7F29">45</strong> gói</div> -->
              </td>
              <td><strong style="color: #EA7F29;">40.000</strong> đ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
html {
  font-size: 16px;
}
.revenue-details {
  margin-right: 0px;
  height: 40rem;
  background-color: #fff;
}
.table-option {
  margin-left: 1rem;
  margin-top: 1rem;
  margin-right: 2rem;
}
.btn:hover {
  background-color: #ea7f29;
  border: 1px solid #f1f1f1;
}

.page-title {
  padding-left: 1rem;
  padding-top: 1rem;
  width: fit-content;
}
.input-search {
  width: 25rem;
  float: right;
}
.cart-content {
  position: static;
  margin-top: 15px;
  width: 100%;
  height: calc(100% -70px);
  background-color: #fff;
  font-size: 16px;
  /* overflow-y: auto; */
}
.line {
  width: 100%;
  height: 15px;
  background-color: #f1f1f1;
}
body {
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background-color: #f1f1f1;
  font-family: "Open Sans", sans-serif;
}
::-webkit-scrollbar {
  width: 6px;
  background-color: #ddd;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb {
  background-color: #666;
  border-radius: 5px;
}
.table-detail {
  position: static;
  box-sizing: border-box;
  width: 100%;
  height: calc(100% - 150px);
  background-color: #fff;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 16;
  overflow-y: scroll;
}

.table-detail table {
  width: 100%;
  height: auto;
  box-sizing: border-box;
}
table thead {
  height: 50px;
  border-bottom: 1px solid #ddd;
}
thead td {
  text-align: center;
  box-sizing: border-box;
  padding-top: 20px;
}

tbody tr {
  height: 120px;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
}
tbody td {
  text-align: center;
}
tbody td:first-child {
  text-align: center;
}
tbody td:last-child {
  text-align: right;
  padding-right: 20px;
}

table img {
  width: 90px;
  height: 60px;
}
tbody .product {
  display: inline-flex;
  padding: 30px 20px;
}
/* table tbody */
tbody .info-product {
  padding-left: 25px;
  text-align: left;
}
tbody .total-detail,
tbody .order-date,
tbody .status {
  text-align: center;
}
tbody .action {
  text-align: right;
}
.quantity {
  display: inline-flex;
  color: #666;
}
.quantity button {
  width: 30px;
  height: 30px;
  border: 2px solid #ccc;
  background-color: #fff;
  font-size: 18px;
}
.quantity button:hover {
  background-color: #eee;
  color: #333;
}
.quantity .sl {
  width: 40px;
  text-align: center;
  line-height: 26px;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  background-color: #fff;
  font-size: 16px;
}

#search-by-name:focus {
  border: 1px solid #f1f1f1;
  box-shadow: 0 0 3px #f1f1f1;
  outline-offset: 0px;
  outline: none;
}
</style>

<template>
  <div>
    <div class="header">
      <Header />
    </div>
  <div class="container">
    <div class="page-title">
      <p>Giỏ hàng</p>
    </div>
    <div class="cart-content">
      <div class="table-detail">
        <table>
          <thead>
            <tr>
              <td style="width: 5%"><input type="checkbox" /></td>
              <td style="width: 35%; text-align: left; padding-left:20px;">
                Tên sản phẩm
              </td>
              <td style="width: 15%;">Đơn giá</td>
              <td style="width: 18%;">Số lượng</td>
              <td style="width: 15%">Thành tiền</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td class="product">
                <span><img src="@/assets/banhngai.jpg" alt=""/></span>
                <span class="info-product">
                  <strong>Tên sản phẩm</strong>
                  <div style="font-size: 14px; padding-top: 5px;">
                    kho: <strong>34</strong>
                  </div>
                </span>
              </td>
              <td>
                40.000 đ
              </td>
              <td>
                <div class="quantity">
                  <button>+</button>
                  <div class="sl">1</div>
                  <button>&#8722;</button><br />
                </div>
                <!-- <div style="padding-top: 10px;">Có sẵn: <strong style="color:#EA7F29">45</strong> gói</div> -->
              </td>
              <td><strong style="color: #EA7F29;">40.000</strong> đ</td>
              <td>
                <div class="red">
                  <button style=" height: 30px; padding: 0 10px;  border:0;">
                    xóa
                  </button>
                </div>
                <div class="green">
                  <button style=" height: 30px; margin-top: 10px; border:0;">
                    Mua ngay
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td class="product">
                <span><img src="@/assets/banhngai.jpg" alt=""/></span>
                <span class="info-product">
                  <strong>Tên sản phẩm</strong>
                  <div style="font-size: 14px; padding-top: 5px;">
                    kho: <strong>34</strong>
                  </div>
                </span>
              </td>
              <td>
                40.000 đ
              </td>
              <td>
                <div class="quantity">
                  <button>+</button>
                  <div class="sl">1</div>
                  <button>&#8722;</button><br />
                </div>
                <!-- <div style="padding-top: 10px;">Có sẵn: <strong style="color:#EA7F29">45</strong> gói</div> -->
              </td>
              <td><strong style="color: #EA7F29;">40.000</strong> đ</td>
              <td>
                <div class="red">
                  <button style=" height: 30px; padding: 0 10px;  border:0;">
                    xóa
                  </button>
                </div>
                <div class="green">
                  <button style=" height: 30px; margin-top: 10px; border:0;">
                    Mua ngay
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td class="product">
                <span><img src="@/assets/banhngai.jpg" alt=""/></span>
                <span class="info-product">
                  <strong>Tên sản phẩm</strong>
                  <div style="font-size: 14px; padding-top: 5px;">
                    kho: <strong>34</strong>
                  </div>
                </span>
              </td>
              <td>
                40.000 đ
              </td>
              <td>
                <div class="quantity">
                  <button>+</button>
                  <div class="sl">1</div>
                  <button>&#8722;</button><br />
                </div>
                <!-- <div style="padding-top: 10px;">Có sẵn: <strong style="color:#EA7F29">45</strong> gói</div> -->
              </td>
              <td><strong style="color: #EA7F29;">40.000</strong> đ</td>
              <td>
                <div class="red">
                  <button style=" height: 30px; padding: 0 10px;  border:0;">
                    xóa
                  </button>
                </div>
                <div class="green">
                  <button style=" height: 30px; margin-top: 10px; border:0;">
                    Mua ngay
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td class="product">
                <span><img src="@/assets/banhngai.jpg" alt=""/></span>
                <span class="info-product">
                  <strong>Tên sản phẩm</strong>
                  <div style="font-size: 14px; padding-top: 5px;">
                    kho: <strong>34</strong>
                  </div>
                </span>
              </td>
              <td>
                40.000 đ
              </td>
              <td>
                <div class="quantity">
                  <button>+</button>
                  <div class="sl">1</div>
                  <button>&#8722;</button><br />
                </div>
                <!-- <div style="padding-top: 10px;">Có sẵn: <strong style="color:#EA7F29">45</strong> gói</div> -->
              </td>
              <td><strong style="color: #EA7F29;">40.000</strong> đ</td>
              <td>
                <div class="red">
                  <button style=" height: 30px; padding: 0 10px;  border:0;">
                    xóa
                  </button>
                </div>
                <div class="green">
                  <button style=" height: 30px; margin-top: 10px; border:0;">
                    Mua ngay
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td class="product">
                <span><img src="@/assets/banhngai.jpg" alt=""/></span>
                <span class="info-product">
                  <strong>Tên sản phẩm</strong>
                  <div style="font-size: 14px; padding-top: 5px;">
                    kho: <strong>34</strong>
                  </div>
                </span>
              </td>
              <td>
                40.000 đ
              </td>
              <td>
                <div class="quantity">
                  <button>+</button>
                  <div class="sl">1</div>
                  <button>&#8722;</button><br />
                </div>
                <!-- <div style="padding-top: 10px;">Có sẵn: <strong style="color:#EA7F29">45</strong> gói</div> -->
              </td>
              <td><strong style="color: #EA7F29;">40.000</strong> đ</td>
              <td>
                <div class="red">
                  <button style=" height: 30px; padding: 0 10px;  border:0;">
                    xóa
                  </button>
                </div>
                <div class="green">
                  <button style=" height: 30px; margin-top: 10px; border:0;">
                    Mua ngay
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td class="product">
                <span><img src="@/assets/banhngai.jpg" alt=""/></span>
                <span class="info-product">
                  <strong>Tên sản phẩm</strong>
                  <div style="font-size: 14px; padding-top: 5px;">
                    kho: <strong>34</strong>
                  </div>
                </span>
              </td>
              <td>
                40.000 đ
              </td>
              <td>
                <div class="quantity">
                  <button>+</button>
                  <div class="sl">1</div>
                  <button>&#8722;</button><br />
                </div>
                <!-- <div style="padding-top: 10px;">Có sẵn: <strong style="color:#EA7F29">45</strong> gói</div> -->
              </td>
              <td><strong style="color: #EA7F29;">40.000</strong> đ</td>
              <td>
                <div class="red">
                  <button style=" height: 30px; padding: 0 10px;  border:0;">
                    xóa
                  </button>
                </div>
                <div class="green">
                  <button style=" height: 30px; margin-top: 10px; border:0;">
                    Mua ngay
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="line"></div>
      <div class="action-cart">
        <div class="delete all-red"><button>Xóa tất cả</button></div>
        <div class="order all-green">
          <span
            >Tổng hóa đơn:
            <strong style="color:#EA7F29">900.000</strong> đ</span
          >
          <button>Mua hàng</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import "@/assets/css/tableDetail.css";
import "@/assets/css/button.css";

export default {
  components:{
    Header
  }

};
</script>
<style scoped>
/* shopping cart css  */
.header{
   position: -webkit-sticky;
    position: sticky;
    top:0;
    z-index: 10;
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

.page-title {
  height: 50px;
  width: 100%;
  line-height: 50px;
  font-size: 20px;
  background-color: #fff;
  padding-left: 20px;
}
.container {
  position: static;
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
.action-cart {
  padding-top: 25px;
  height: 80px;
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
}
.action-cart .delete {
  display: flex;
  padding-left: 50px;
}
.action-cart .order {
  display: flex;
  padding-right: 50px;
}
.action-cart .order span {
  font-size: 18px;
  line-height: 30px;
  padding-right: 20px;
}

/* end shopping cart css  */
</style>

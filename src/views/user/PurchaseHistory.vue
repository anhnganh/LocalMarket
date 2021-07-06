<template>
  <div>
    <div class="Header">
      <Header />
    </div>
    <div class="content-body">
      <div class="search-box">
        <form class="search-form">
          <input
            class="form-control"
            placeholder="Tìm kiếm shop, sản phẩm,..."
            type="text"
          />
          <button class="btn btn-link search-btn">
            <i class="glyphicon glyphicon-search"></i>
          </button>
        </form>
      </div>

      <div class="list-cart">
        <div class="cart-item">
          <div class="cart-header">
            <div class="item-header-left">
              <span class="shop-name">Tên shop</span>
              <button class="shop-btn">Xem shop</button>
            </div>
            <div class="item-header-right">
              Đã giao: <span class="ship-date">01/02/2021</span>
            </div>
          </div>

          <div class="line"></div>

          <div class="cart-info">
            <div class="product-ava">
              <img src="img/ava.png" alt="" width="100px" height="100px" />
            </div>
            <div class="cart-detail">
              <div class="p-name">Tên sản phẩm</div>
              <div class="p-quantity">x<span>3</span></div>
              <div class="p-price"><span>50.000</span> đ/sp</div>
            </div>
            <div class="cart-total">
              <div class="total">
                Tổng số tiền: <span class="total-num">150.000</span> đ
              </div>
              <button class="reorder-btn">Mua lại</button>
            </div>
          </div>

          <div class="line"></div>
        </div>
        <div class="cart-item">
          <div class="cart-header">
            <div class="item-header-left">
              <span class="shop-name">Tên shop</span>
              <button class="shop-btn">Xem shop</button>
            </div>
            <div class="item-header-right">
              Đã giao: <span class="ship-date">01/02/2021</span>
            </div>
          </div>

          <div class="line"></div>

          <div class="cart-info">
            <div class="product-ava">
              <img src="img/ava.png" alt="" width="100px" height="100px" />
            </div>
            <div class="cart-detail">
              <div class="p-name">Tên sản phẩm</div>
              <div class="p-quantity">x<span>3</span></div>
              <div class="p-price"><span>50.000</span> đ/sp</div>
            </div>
            <div class="cart-total">
              <div class="total">
                Tổng số tiền: <span class="total-num">150.000</span> đ
              </div>
              <button class="reorder-btn">Mua lại</button>
            </div>
          </div>

          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
<style scoped>
.Header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;
}
.content-body {
  width: 100%;
  padding: 0 3%;
}

/* Search box */
.search-box {
  width: 60%;
  height: 40px;
  border-radius: 3px;
  padding: 4px 55px 4px 15px;
  margin: 15px auto;
  position: relative;
  background: #DDDDDD;
  border: 1px solid #ddd;
  -webkit-transition: all 200ms ease-in-out;
  -moz-transition: all 200ms ease-in-out;
  transition: all 200ms ease-in-out;
}
.search-box.hovered, .search-box:hover, .search-box:active {
  border: 1px solid #aaa;
}
.search-box input[type=text] {
  border: none;
  box-shadow: none;
  display: inline-block;
  padding: 0;
  background: transparent;
}
.search-box input[type=text]:hover, .search-box input[type=text]:focus, .search-box input[type=text]:active {
  box-shadow: none;
}
.search-box .search-btn {
  position: absolute;
  right: 0px;
  top: 0px;
  color: #aaa;
  border-radius: 3px;
  font-size: 21px;
  padding: 5px 10px 1px;
  -webkit-transition: all 200ms ease-in-out;
  -moz-transition: all 200ms ease-in-out;
  transition: all 200ms ease-in-out;
}
.search-box .search-btn:hover {
  color: #fff;
  background-color: #157D3F;
}
/* Search box -- End */

/* List cart */
.list-cart {
  margin-top: 30px;
}

.cart-item {
  margin-bottom: 40px;
}

.cart-item .cart-header, .cart-item .cart-info {
  padding: 0 20px;
  width: 100%;
  display: flex;
}

.cart-header {
  margin: 2px 0;
}

.item-header-left {
  width: 50%;
}

.item-header-left .shop-name {
  font-weight: bolder;
  margin-right: 30px;
}

.item-header-left .shop-btn {
  font-size: 12px;
  border-radius: 4px;
  padding: 3px 5px;
}

.cart-item button {
  background-color: #FFFFFF;
  color: #157D3F;
  border: 1px #157D3F solid;
}

.cart-item button:hover {
  background-color: #157D3F;
  color: #FFFFFF;
  border: 1px #FFFFFF solid;
}

.item-header-right {
  width: 50%;
  text-align: right;
  padding-top: 6px;
}

.cart-info {
  margin: 10px 0;

}

.product-ava {
  margin-right: 3%;
}

.cart-detail {
  padding-top: 10px;
}

.cart-detail > * {
  margin-bottom: 15px;
}

.p-name {
  font-weight: bolder;
  font-size: 17px;
}

.cart-total {
  padding-top: 10px;
  margin-left: auto; 
  margin-right: 0;
  position: relative;
}

.total-num {
  color: rgb(252, 185, 0);
}

.reorder-btn {
  position: absolute;
  right: 0;
  bottom: 0px;
  height: 30px;
  padding: 0 20px;
  border-radius: 5px;
}
</style>

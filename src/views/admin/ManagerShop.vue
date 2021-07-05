<template>
  <div class="managershop">
    <div class="header">
      <HeaderSale />
    </div>
    <div class="list">
      <b-row>
        <b-col class="navMenu">
          <Nav class="Nav" />
        </b-col>
        <b-col md="10">
          <div class="title">DANH MỤC CỦA SHOP</div>
          <div class="add">
            <b-button @click="show2 = !show2">
              <b-icon icon="plus"></b-icon>
              Thêm Shop
            </b-button>

            <div class="addShop" id="idmodal" v-show="show2">
              <b-form inline>
                <div @click="show2 = !show2">
                  <span class="close">&times;</span>
                </div>
                <div class="title">Thêm danh mục</div>
                <label class="sr-only" for="inline-form-input-name"
                  >Tên danh mục</label
                >
                <b-form-input
                  id="inline-form-input-name"
                  class="mb-2 mr-sm-2 mb-sm-0"
                ></b-form-input>

                <label class="sr-only" for="inline-form-input-username"
                  >Images</label
                >
                <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                  <b-form-input id="inline-form-input-username"></b-form-input>
                </b-input-group>
                <label class="sr-only" for="inline-form-input-username"
                  >Tiêu đề</label
                >
                <b-form-input id="inline-form-input-username"></b-form-input>
                <div class="save">
                  <b-button variant="primary">Thêm mới</b-button>
                </div>
              </b-form>
            </div>

            <div class="listShop">
              <table border="1">
                <thead>
                  <tr class="title1">
                    <td style="width: 25%; font-size:16px">Tên danh mục</td>
                    <td style="width: 15%;">Sản phẩm</td>
                    <td style="width: 20%;">Hiện thị</td>
                    <td style="width: 20%">Thao tác</td>
                  </tr>
                </thead>
                <tbody>
                  <tr class="infoShop">
                    <td class="shop" style="width:25%">
                      <span><img src="@/assets/khanlen.jpg" alt=""/></span>
                      <span class="info-shop">
                        <strong>Đồ gia dụng</strong>
                      </span>
                    </td>
                    <td style="width: 20%">20</td>
                    <td class="display">
                      <label class="switch">
                        <input type="checkbox" checked />
                        <span class="slider round"></span>
                      </label>
                    </td>
                    <td>
                      <a href="#" class="addProd">Thêm sản phẩm</a>
                      <a href="#" class="delete">Xóa</a>
                    </td>
                  </tr>
                  <tr class="infoShop">
                    <td class="shop" style="width:25%">
                      <span><img src="@/assets/khanlen.jpg" alt=""/></span>
                      <span class="info-shop">
                        <strong>Đồ gia dụng</strong>
                      </span>
                    </td>
                    <td style="width: 20%">20</td>
                    <td class="display">
                      <label class="switch">
                        <input type="checkbox" checked />
                        <span class="slider round"></span>
                      </label>
                    </td>
                    <td>
                      <a href="#" class="addProd">Thêm sản phẩm</a>
                      <a href="#" class="delete">Xóa</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
    <router-view />
  </div>
</template>
<script>
import HeaderSale from "@/components/sale/HeaderSale.vue";
import Nav from "@/components/sale/Nav.vue";
export default {
  components: {
    HeaderSale,
    Nav,
  },
  data() {
    return {
      show2: false,
    };
  },
  methods: {},
};
</script>
<style scoped>
.managershop {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
}
.managershop .list .title {
  font-weight: bolder;
  line-height: 20px;
  font-size: 20px;
  /* font-weight: 400; */
  font-family: Roboto;
  margin-top: 25px;
}

.managershop .list .add button {
  font-family: Roboto;
  margin-top: 10px;
  background-color: #157d3f;
  margin-left: 65%;
}
.managershop .list .add .addShop form {
  margin-top: 10px;
  width: 50%;
}
.managershop .list .add .addShop form input {
  margin-top: 10px;
  margin-bottom: 10px;
}
.managershop .list .add .addShop form .sr-only {
  margin-top: 10px;
}
.managershop .list .add .addShop form .save {
  /* float: left; */
  margin-left: 50%;
}
.managershop .list .add .addShop {
  /* display: none; */
  position: fixed; /* Location of the box */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  z-index: 2;
}
.managershop .list .add .addShop form {
  background-color: #fefefe;
  margin-left: 5%;
  padding: 20px;
  border: 1px solid #888;
  width: 70%;
}
.managershop .list .add .addShop form .close {
  margin-left: 90%;
  width: 5%;
  font-size: 28px;
  font-weight: bold;
}
.managershop .list .add .addShop form .close:hover {
  color: #157d3f;
}
.managershop .list .add .addShop form .close:focus {
  color: #000;
  cursor: pointer;
}
.managershop .list .add .listShop {
  margin-top: 30px;
}
.managershop .list .add .listShop .title1 {
  margin-top: 20px;
  height: 45px;
  background-color: #f6f6f6;
  text-align: center;
}
.managershop .list .add .listShop .shop img {
  width: 18%;
  margin-right: 10px;
  margin-block-start: 10px;
}
.managershop .list .add .listShop .infoShop {
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
}
.managershop .list .add .listShop .infoShop .display .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.managershop .list .add .listShop .infoShop .display .switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.managershop .list .add .listShop .infoShop .addProd {
  margin-right: 20px;
}
/* .managershop .list .navMenu {
  /* background-color: aqua; */

.managershop .list .navMenu .Nav {
  margin-top: 70px;
}
</style>

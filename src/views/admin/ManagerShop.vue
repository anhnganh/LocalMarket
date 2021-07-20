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
          <!-- <div class="title">DANH MỤC CỦA SHOP</div> -->
          <!-- <div class="add">
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
          </div> -->
          <div class="schedule">
            <div class="content-title">
                <ul>
                    <li><span id="all" ><a href="#">Hồ sơ shop</a></span></li>
                    <li><span id="wait-confirm" class="choose"><a href="#">Lên lịch</a></span></li>
                </ul>
            </div>
            <div class="all-green btn-create-schedule"><button> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg> Tạo lịch</button></div>
            <div class="create-schedule" hidden>
                <div class="frost"></div>
                <div class="box-create-schedule">
                    <div class="all-red btn-close-schedule"><button>X</button></div>
                    <h4 style="font-weight: bold; padding-top: 10px; padding-bottom:10px;">Tạo lịch bán hàng</h4>
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="nameproduct">Tiêu đề (*)</label>
                                <input type="text" class="form-control" id="nameproduct" name="nameproduct" placeholder="Tên lịch" require>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="start-sell">Thời gian bắt đầu bán (*)</label>
                                <input type="datetime-local" class="form-control" id="start-sell">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="description">Mô tả (*)</label>
                                <textarea class="form-control" id="description" rows="5" name="description" require></textarea>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="end-sell">Thời gian kết thúc bán (*)</label>
                                    <input type="datetime-local" class="form-control" id="end-sell">
                                </div>
                                <div class="form-group">
                                    <label for="time-ship">Thời gian ship (*)</label>
                                    <input type="datetime-local" class="form-control" id="time-ship">
                                </div>
                            </div>
                        </div>
                        
                        <div class="all-green" style="text-align: center; margin-top:10px;"><button type="submit">Lưu lại</button></div>
                    </form>
                </div>
            </div>
            <div class="table-schedule">
                <table>
                    <thead>
                        <tr>
                            <td style="width: 10%;">Tên lịch</td>
                            <td style="width: 20%;">Mô tả</td>
                            <td style="width: 18%;">Thời gian kết thúc</td>
                            <td style="width: 18%;">Thời gian kết thúc</td>
                            <td style="width: 18%;">Thời gian ship</td>
                            <td>Thao tác</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <span><strong>Thứ 2</strong></span>
                            </td>
                            <td>
                                <p>abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc</p>
                            </td>
                            <td>
                                <span>07:00 29/12/2029</span>
                            </td>
                            <td>
                                <span>12:00 29/12/2029</span>
                            </td>
                            <td>
                                <span>12:00 29/12/2029</span>
                            </td>
                            <td>
                                <span class="all-green"><button title="Đóng">Đang mở</button></span>
                                <span class="all-red"><button>Xóa</button></span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span><strong>Thứ 2</strong></span>
                            </td>
                            <td>
                                <p>abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc</p>
                            </td>
                            <td>
                                <span>07:00 29/12/2029</span>
                            </td>
                            <td>
                                <span>12:00 29/12/2029</span>
                            </td>
                            <td>
                                <span>12:00 29/12/2029</span>
                            </td>
                            <td>
                                <span class="all-green"><button title="Mở" style="background-color: #EA7F29;">Đóng</button></span>
                                <span class="all-red"><button>Xóa</button></span>
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
a{
  color: #333;
  text-decoration: none;
}
/* ::-webkit-scrollbar {
    width: 8px;
    background-color: #ddd;
    border-radius: 5px;
} 
::-webkit-scrollbar-thumb {
    background-color: #666;
    border-radius: 5px;
} */
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
/* create schedule */
.btn-create-schedule{
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: right;
    padding-right: 30px;
}
.create-schedule{
    z-index: 3;
}
.frost{
    background-color: rgba(1, 1, 1, 0.6);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.box-create-schedule{
    position: fixed;
    width: 800px;
    height: 500px;
    top: calc(50% - 250px);
    left: calc(50% - 400px);
    background-color: #fff;
    padding: 10px 30px;
    border-radius: 10px;
}
.btn-close-schedule{
    margin-top: 15px;
    margin-right: 15px;
    text-align: right;
}
/* .table-schedule{
    position: absolute;
    box-sizing: border-box;
    top: 220px;
    left: 250px;
    right: 0;
    bottom: 0;
    background-color: #fff;
    padding-left: 30px;
    padding-right: 30px;
    overflow-y: scroll;
    font-size: 14px;
} */
.table-schedule tbody td{
    text-align: center;
    padding: 20px 10px;
}
.table-schedule tbody td p{
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis; 
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
}
.table-schedule tbody td:last-child{
    float: right;
}
.content-title{
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #ddd;
    display: inline-flex;
    justify-content: space-between;
}

ul{
    padding-left: 20px;
}
ul li{
    list-style: none;
    display: inline-block;
    /* margin-right: 40px; */
    padding-top: 20px;
}
ul li a{
    padding-left: 40px;
    padding-right: 40px;
}
li .choose a{
    color: #157D3F;
    border-bottom: 3px solid #157D3F;
    padding-bottom: 6px;
    font-weight: bold;
}

/* end create schedule */
</style>

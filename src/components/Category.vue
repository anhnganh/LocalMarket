<template>
  <div id="categorys">
    <div class="list-category">
      <div class="row">
        <div class="col-xl-2 col-md-3">
          <div class="item-category">
            <a href="">
              <div class="image-category" style="background-image: url('http://tapchicongthuong.vn/images/20/11/8/gia-sieu-thi4.jpg');"></div>
              <div class="title-category">rau củ quả </div>
            </a>
          </div>
        </div>
        <div class="col-xl-2 col-md-3">
          <div class="item-category">
            <a href="">
              <div class="image-category" style="background-image: url('http://tapchicongthuong.vn/images/20/11/8/gia-sieu-thi4.jpg');"></div>
              <div class="title-category">rau củ quả </div>
            </a>
          </div>
        </div>
        <div class="col-xl-2 col-md-3">
          <div class="item-category">
            <a href="">
              <div class="image-category" style="background-image: url('http://tapchicongthuong.vn/images/20/11/8/gia-sieu-thi4.jpg');"></div>
              <div class="title-category">rau củ quả </div>
            </a>
          </div>
        </div>
        <div class="col-xl-2 col-md-3">
          <div class="item-category">
            <a href="">
              <div class="image-category" style="background-image: url('http://tapchicongthuong.vn/images/20/11/8/gia-sieu-thi4.jpg');"></div>
              <div class="title-category">rau củ quả </div>
            </a>
          </div>
        </div>
        <div class="col-xl-2 col-md-3">
          <div class="item-category">
            <a href="">
              <div class="image-category" style="background-image: url('http://tapchicongthuong.vn/images/20/11/8/gia-sieu-thi4.jpg');"></div>
              <div class="title-category">rau củ quả </div>
            </a>
          </div>
        </div>
        <div class="col-xl-2 col-md-3">
          <div class="item-category">
            <a href="">
              <div class="image-category" style="background-image: url('http://tapchicongthuong.vn/images/20/11/8/gia-sieu-thi4.jpg');"></div>
              <div class="title-category">rau củ quả </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="">
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="12" md="12">
            <div class="listCate">
              <b-button variant="outline-primary">
                <img
                  width="102px"
                  height="65px"
                  src="../assets/face.png"
                  alt=""
                />
                <div class="title">Rau củ</div>
              </b-button>
              <b-button variant="outline-primary">
                <img
                  width="102px"
                  height="65px"
                  src="../assets/dacsan.png"
                  alt=""
                />
                <div>Đặc sản</div>
              </b-button>
              <b-button variant="outline-primary">
                <img
                  width="102px"
                  height="65px"
                  src="../assets/sach.png"
                  alt=""
                />
                <div>Sách & truyện</div>
              </b-button>
              <b-button variant="outline-primary">
                <img
                  width="102px"
                  height="65px"
                  src="../assets/cay.png"
                  alt=""
                />
                <div>Cây xanh</div>
              </b-button>
              <b-button variant="outline-primary">
                <img
                  width="102px"
                  height="65px"
                  src="../assets/toy.png"
                  alt=""
                />
                <div>Đồ chơi</div>
              </b-button>
              <b-button variant="outline-primary">
                <img
                  width="102px"
                  height="65"
                  src="../assets/quanao.png"
                  alt=""
                />
                <div>Quần áo</div>
              </b-button>
              <b-button variant="outline-primary">
                <img
                  width="102px"
                  height="65px"
                  src="../assets/giay.png"
                  alt=""
                />
                <div>Giày dép</div>
              </b-button>
              <b-button variant="outline-primary">
                <img
                  width="102px"
                  height="65"
                  src="../assets/dodientu.png"
                  alt=""
                />
                <div>Đồ điện tử</div>
              </b-button>
              <b-button variant="outline-primary">
                <img
                  width="102px"
                  height="65px"
                  src="../assets/dogiadung.png"
                  alt=""
                />
                <div>Đồ gia dụng</div>
              </b-button>
            </div>
          </b-col>
        </b-row>
        
      </b-container>
    </div> -->
  </div>
</template>
<script>
export default {};
</script>
<style >

.categorys{
  
}
.list-category{
  height: 200px;
  /* background-color: #fff; */
}
.col-md-3{
  padding: 30px 50px;
}
.item-category{
  height: 150px;
  /* width: 100%; */
  margin: 0 20px;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #157D3F;
  box-shadow: 2px 2px 2px #aaa;
  background-color: #fff;
}
.item-category a{
  text-decoration: none;
  text-align: center;
  color: #222;
}
.item-category a:hover{
  color: #222;
}
.image-category{
  width: 100%;
  height: 70px;
  background-image: none;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  box-sizing: border-box;
  border-radius: 5px;
}
.title-category{
  height: 50px;
  align-content: center;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding-top: 10px;
}
/* .row {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
}
.row .col-12 {
  background-color: #fff;
  margin-right: 15px;
  margin-top: 1px;
}
.row .col-12 .btn-outline-primary {
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 5px;
}
.row .listCate {
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
}
.row .listCate .btn {
  background-color: #fff;
  color: black;
  width: 122px;
  height: 110px;
  margin-right: 18px;
  margin-top: 4px;
}
.row .listCate .btn img {
  margin-right: 0px;
  display: flex;
  justify-content: center;
} */

</style>

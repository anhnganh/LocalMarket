<template>
  <div class="">
    <div class="header">
      <Header />
    </div>
    <div class="container">
      <div class="prod_detail">
        <b-row>
          <b-col md="12" class="head-title">
            <span class="today">Hôm nay > &nbsp;</span> 
            <span>Tên sản phẩm </span>
          </b-col>
        </b-row>

        
        <b-row>
           <!-- <b-col md="12" class="product"> -->
            <b-col md="6" class="img-product">
              <div class="img-main">
                <img src="@/assets/banhngai.jpg" alt="image product main" />
              </div>
              <div class="img-slide">
                <div class="slide">
                  <img src="@/assets/ngai.jpg" alt="anh1" />
                </div>
                <div class="slide">
                  <img src="@/assets/ngai.jpg" alt="anh2" />
                </div>
                <div class="slide">
                  <img src="@/assets/ngai.jpg" alt="anh3" />
                </div>
                <div class="slide">
                  <img src="@/assets/ngai.jpg" alt="anh4" />
                </div>
              </div>


              <div class="info-shop">
                <span>
                  <a href="#"
                    ><img src="@/assets/avatar.jpg" alt="img-user"
                  /></a>
                </span>
                <span class="title">Tên shop</span>
                <button style="margin-right:55px">
                  Xem thêm shop&ensp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-caret-down-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                    />
                  </svg>
                </button>
              </div>
            </b-col>
            <b-col md="6" class="info-product">
              <div class="title">Tên sản phẩm</div>
              <div class="line-text"></div>
              <div class="price">Giá: <strong>40.000</strong> vnđ/gói</div>
              <div class="description">
                Lần đầu tiên một nhóm thiên văn học phát hiện hai trường hợp hố
                đen nuốt chửng sao neutron đặc riêng biệt trong vũ trụ. Sóng hấp
                dẫn tạo ra từ hai sự kiện này tới Trái Đất vào tháng 1/2020, cho
                phép giới nghiên cứu truy ra nguồn gốc của những gợn sóng lăn
                tăn trong không gian - thời gian ở các thiên hà xa xôi cách Trái
                Đất 900 triệu và một tỷ năm ánh sáng. Lần đầu tiên một nhóm
                thiên văn học phát hiện hai trường hợp hố đen nuốt chửng sao
                neutron đặc riêng biệt trong vũ trụ. Sóng hấp dẫn tạo ra từ hai
                sự kiện này tới Trái Đất vào tháng 1/2020, cho phép giới nghiên
                cứu truy ra nguồn gốc của những gợn sóng lăn tăn trong không
                gian - thời gian ở các thiên hà xa xôi cách Trái Đất 900 triệu
                và một tỷ năm ánh sáng.
              </div>
              <div class="quantity">
                <button>+</button>
                <div class="sl">1</div>
                <button>&#8722;</button>
                <div>Có sẵn: <strong style="color:#EA7F29">45</strong> gói</div>
              </div>
              <div class="action">
                <span class="green"><button>Thêm vào giỏ hàng</button></span>
                <span class="all-green" style="padding-left: 20px;"
                  ><button>Mua ngay</button></span>
              </div>
            </b-col>
          <!-- </b-col> -->
        </b-row>

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
<style>
/* .header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;
} */
.prod_detail {
  margin-top: 10px;
  /* background-color: #9e9797; */
  color: #333;
  font-family: Roboto;
  font-size: 16px;
}

.prod_detail .row .head-title span{
  float: left;
}
.prod_detail .row .col-md-12 .product {
  width: 100%;
  height: 100%;
  margin-top: 10px;
  background-color: #fff;
  padding-bottom: 30px;
}
.prod_detail .row .head-title{
    margin-top: 10px;
    height: 50px;
    width: 100%;
    background-color: #fff;
    font-size: 18px;
    line-height: 50px;
    padding-left: 20px;
}
.prod_detail .row .head-title span{
    text-transform: uppercase;
}
.prod_detail .row  .img-product{
    padding-left: 40px;
    background-color: #fff;
}
.prod_detail .row  .img-product, .info-product{
    padding-top: 30px;
}
.prod_detail .row  .img-product .info-product{
    padding-right: 40px;
}
.prod_detail .row  .img-product .img-main img{
    width: 558px;
    height: 300px;
    position: relative;

}
.prod_detail .row  .img-product  .img-slide{
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-right: 35px;
}
.prod_detail .row .img-product .img-slide .slide img{
    width: 120px;
    height: 70px;
    display: flex;
}
.prod_detail .row  .img-product .info-shop{
    margin-top: 15px;
}
.prod_detail .row  .img-product .info-shop span a img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
 
} 

.prod_detail .row  .img-product  .info-shop .title{
    padding-left: 15px;
    font-size: 18px;
    margin-top: 20px;

}
.prod_detail .row  .img-product  .info-shop button:last-child, .info-shop button:last-child svg{
    color: #157D3F;
    font-size: 16px;
    float: right;
    margin-right: 8px;
}
.prod_detail .row  .img-product .info-shop button{
  margin-right: 56px;
  border-color: #eee;
  height: 30px;
}
.prod_detail .row  .img-product  .info-shop button:last-child svg{
    margin-top: 3px;
}
.prod_detail .row  .info-product{
  background-color: #fff;
}
.prod_detail .row  .info-product .title{
    font-size: 22px;
    font-weight: bold;
}

.prod_detail .row  .info-product .line-text{
    margin-top: 10px;
    height: 3px;
    width: 100px;
    background-color: #333;
}
.prod_detail .row  .info-product .price{
    margin-top: 15px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
}
.prod_detail .row  .info-product .price strong{
  color: orange;
}
.prod_detail .row  .info-product .description{
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis; 
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    display: -webkit-box;
}
.prod_detail .row  .info-product .quantity{
    display: inline-flex;
    color: #666;
    margin-top: 15px;
}
 .prod_detail .row  .info-product .quantity{
    display: inline-flex;
    color: #666;
    margin-top: 15px;
}
 .prod_detail .row  .info-product .quantity button{
    width: 35px;
    height: 35px;
    border: 2px solid #ccc;
    background-color: #fff;
    font-size: 18px;
}
.prod_detail .row  .info-product  .quantity button:hover{
    background-color: #eee;
    color: #333;
}
.prod_detail .row  .info-product  .quantity .sl{
    width: 50px;
    text-align: center;
    line-height: 31px;
    border-top: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
    background-color: #fff;
    font-size: 18px;
}
.prod_detail .row  .info-product  .quantity div:last-child{
    color: #111;
    padding-left: 20px;
    line-height: 35px;
}
.prod_detail .row .info-product .action{
    margin-top: 26px;
}
.prod_detail .row .info-product .action  button{
  color: #157D3F;
  height: 40px;
  border-radius: 10px;
  border-color: #157D3F;
  font-size: 18px;
}
.prod_detail .row .info-product .action .all-green button{
  color: #fff;
  background-color: #157D3F;
}
 </style>

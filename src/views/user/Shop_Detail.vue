<template>
  <div>
    <Header />
    <div class="container">
      <div class="infoShop">
        <b-row>
          <b-col md="4" class="imgShop">
            <div><img src="@/assets/localmarket.png" alt="" /></div>
            <div class="nameShop">Tên shop mall</div>
          </b-col>
          <b-col md="4" class="infoQuali">
            <b-row>
              <b-col>
                <div><img src="@/assets/product.png" alt="" /></div>
                <div class="quali">Sản phẩm: 60</div>
              </b-col>
              <div class=""></div>
              <b-col>
                <div><b-icon icon="chat-dots"></b-icon></div>
                Tỉ lệ sản phẩm:100%
              </b-col>
            </b-row>
          </b-col>
          <b-col md="4" class="them">
            <b-icon icon="emoji-laughing"></b-icon>
            Tham gia: 16 tháng trước
          </b-col>
        </b-row>
      </div>

      <hr />
      <div>

        <b-card no-body>
          <b-tabs card>
            <b-tab title="Dạo" active>
              <b-card-text>
                <div>Thông tin shop</div>
                <div>Giao hàng trong ngày</div>
                <div>Sản phẩm chất lượng</div>
                <div>Đảm bảo uy tín</div>

              </b-card-text>
            </b-tab>
            <b-tab title="Tất cả sản phẩm" class="totalProduct">
              <b-card-text>
                <b-row>
                  <b-col md="3">
                    <li>
                      <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 19rem;"
                        class="mb-3"
                      >
                        <b-card-text>
                          Banh ngai Lang Son
                        </b-card-text>

                        <b-button variant="primary">Add Cart</b-button>
                        <b-text class="price">250.000đ</b-text>
                      </b-card>
                    </li>
                  </b-col>
                  <b-col md="3">
                    <li>
                      <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 19rem;"
                        class="mb-3"
                      >
                        <b-card-text>
                          Banh ngai Lang Son
                        </b-card-text>

                        <b-button variant="primary">Add Cart</b-button>
                        <b-text class="price">250.000đ</b-text>
                      </b-card>
                    </li>
                  </b-col>
                  <b-col md="3">
                    <li>
                      <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 19rem;"
                        class="mb-3"
                      >
                        <b-card-text>
                          Banh ngai Lang Son
                        </b-card-text>

                        <b-button variant="primary">Add Cart</b-button>
                        <b-text class="price">250.000đ</b-text>
                      </b-card>
                    </li>
                  </b-col>
                  <b-col md="3">
                    <li>
                      <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 19rem;"
                        class="mb-3"
                      >
                        <b-card-text>
                          Banh ngai Lang Son
                        </b-card-text>

                        <b-button variant="primary">Add Cart</b-button>
                        <b-text class="price">250.000đ</b-text>
                      </b-card>
                    </li>
                  </b-col>
                  <b-col md="3">
                    <li>
                      <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 19rem;"
                        class="mb-3"
                      >
                        <b-card-text>
                          Banh ngai Lang Son
                        </b-card-text>

                        <b-button variant="primary">Add Cart</b-button>
                        <b-text class="price">250.000đ</b-text>
                      </b-card>
                    </li>
                  </b-col>
                  <b-col md="3">
                    <li>
                      <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 19rem;"
                        class="mb-3"
                      >
                        <b-card-text>
                          Banh ngai Lang Son
                        </b-card-text>

                        <b-button variant="primary">Add Cart</b-button>
                        <b-text class="price">250.000đ</b-text>
                      </b-card>
                    </li>
                  </b-col>
                  <b-col md="3">
                    <li>
                      <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 19rem;"
                        class="mb-3"
                      >
                        <b-card-text>
                          Banh ngai Lang Son
                        </b-card-text>

                        <b-button variant="primary">Add Cart</b-button>
                        <b-text class="price">250.000đ</b-text>
                      </b-card>
                    </li>
                  </b-col>
                  <b-col md="3">
                    <li>
                      <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 19rem;"
                        class="mb-3"
                      >
                        <b-card-text>
                          Banh ngai Lang Son
                        </b-card-text>

                        <b-button variant="primary">Add Cart</b-button>
                        <b-text class="price">250.000đ</b-text>
                      </b-card>
                    </li>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-tab>
            <b-tab title="Sản phẩm hôm nay">
              <b-card-text>
                  <b-row>
                       <b-col md="3">
                    <li>
                      <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 19rem;"
                        class="mb-3"
                      >
                        <b-card-text>
                          Banh ngai Lang Son
                        </b-card-text>

                        <b-button variant="primary">Add Cart</b-button>
                        <b-text class="price">250.000đ</b-text>
                      </b-card>
                    </li>
                  </b-col>
                   <b-col md="3">
                    <li>
                      <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 19rem;"
                        class="mb-3"
                      >
                        <b-card-text>
                          Banh ngai Lang Son
                        </b-card-text>

                        <b-button variant="primary">Add Cart</b-button>
                        <b-text class="price">250.000đ</b-text>
                      </b-card>
                    </li>
                  </b-col>
                   <b-col md="3">
                    <li>
                      <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 19rem;"
                        class="mb-3"
                      >
                        <b-card-text>
                          Banh ngai Lang Son
                        </b-card-text>

                        <b-button variant="primary">Add Cart</b-button>
                        <b-text class="price">250.000đ</b-text>
                      </b-card>
                    </li>
                  </b-col>
                   <b-col md="3">
                    <li>
                      <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 19rem;"
                        class="mb-3"
                      >
                        <b-card-text>
                          Banh ngai Lang Son
                        </b-card-text>

                        <b-button variant="primary">Add Cart</b-button>
                        <b-text class="price">250.000đ</b-text>
                      </b-card>
                    </li>
                  </b-col>
                  </b-row>
              </b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
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
.infoShop {
  margin-top: 10px;
  font-family: Roboto;
}
.infoShop .row .imgShop {
  background-color: #2f3252;
  height: 120px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
}
.infoShop .row .imgShop img {
  border-radius: 100%;
  height: 80px;
  width: 100px;
  border: #fff solid 2px;
}
.infoShop .row .col-md-4 .nameShop {
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin-top: 50px;
  margin-left: 10px;
  float: left;
}
.infoShop .row .infoQuali img {
  width: 25px;
  height: 25px;
}
.infoShop .row .infoQuali .quali {
  margin-top: 21px;
  margin-left: 5px;
  margin-bottom: 10px;
}
.b-icon.bi {
  margin-left: 33px;
  margin-right: 10px;
}
.infoShop .row .them {
  margin-top: 20px;
}
 .row .col-md-3 li{
    list-style-type: none;
     color: #000000;
      margin-top: 10px;
}
.row .col-md-3 li .card{
       height: auto;
       box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 }
.row .col-md-3 li .card p{
      font-size: 20px;
}
  .row .col-md-3 li .card .btn{
       background-color: #397e40;
         margin-right: 80px;
    color: #fff;
    height: 45px;
    width: 100px;
    border-radius: 20px;
    margin-bottom: 10px;
    font-size: 16px;
    font-family: Roboto;
  }
    .row .col-md-3 li .card button:hover{
        background-color: orange;
  font-family: 300;
    }
     .row .col-md-3 .price{
          color: #ee9751;
  font-size: 18px;
     }
</style>

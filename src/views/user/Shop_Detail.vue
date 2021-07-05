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
              </b-card-text>
            </b-tab>
            <b-tab title="Tất cả sản phẩm">
              <b-card-text>Tab contents 2</b-card-text>
            </b-tab>
            <b-tab title="Sản phẩm hôm nay">
              <b-card-text>Tab contents 2</b-card-text>
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
</style>

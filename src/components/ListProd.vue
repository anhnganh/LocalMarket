<template>
  <div>
    <div class="listProd">
      <b-link class="title" href="#foo">THỰC PHẨM</b-link>
      <div><hr style="width:9%;text-align:left; height:3px" /></div>
      <div class="prod">
        <b-link>
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

                  <b-button href="#" variant="primary">Add Cart</b-button>
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
                    Banh dau xanh Hai Duong
                  </b-card-text>
                  <b-button href="#" variant="primary">Add Cart</b-button>
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
                    Banh dau xanh Hai Duong
                  </b-card-text>
                  <b-button href="#" variant="primary">Add Cart</b-button>
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
                >
                  <b-card-text>
                    Banh dau xanh Hai Duong
                  </b-card-text>
                  <b-button href="#" variant="primary">Add Cart</b-button>
                  <b-text class="price">250.000đ</b-text>
                </b-card>
              </li>
            </b-col>
          </b-row>
          <b-row v-show="show">
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
                    Banh dau xanh Hai Duong
                  </b-card-text>
                  <b-button href="#" variant="primary">Add Cart</b-button>
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
                    Banh dau xanh Hai Duong
                  </b-card-text>
                  <b-button href="#" variant="primary">Add Cart</b-button>
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
                    Banh dau xanh Hai Duong
                  </b-card-text>
                  <b-button href="#" variant="primary">Add Cart</b-button>
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
                    Banh dau xanh Hai Duong
                  </b-card-text>
                  <b-button href="#" variant="primary">Add Cart</b-button>
                  <b-text class="price">250.000đ</b-text>
                </b-card>
              </li>
            </b-col>
          </b-row>

          <div class="more">
            <b-row>
              <b-col>
                <b-button @click="show = !show">
                  <b-icon icon="caret-down-fill"></b-icon> xem thêm
                </b-button>
              </b-col>
            </b-row>
          </div>
        </b-link>
      </div>
    </div>






    <div class="listDoDung">
      <b-link class="title" href="#foo">ĐỒ DÙNG</b-link>
      <hr style="width:9%;text-align:left; height:3px; pa" />
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
                Banh dau xanh Hai Duong
              </b-card-text>
              <b-button href="#" variant="primary">Add Cart</b-button>
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
                Banh dau xanh Hai Duong
              </b-card-text>
              <b-button href="#" variant="primary">Add Cart</b-button>
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
                Banh dau xanh Hai Duong
              </b-card-text>
              <b-button href="#" variant="primary">Add Cart</b-button>
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
                Banh dau xanh Hai Duong
              </b-card-text>
              <b-button href="#" variant="primary">Add Cart</b-button>
              <b-text class="price">250.000đ</b-text>
            </b-card>
          </li>
        </b-col>
      </b-row>
      <b-row v-show="show1">
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
                Banh dau xanh Hai Duong
              </b-card-text>
              <b-button href="#" variant="primary">Add Cart</b-button>
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
                Banh dau xanh Hai Duong
              </b-card-text>
              <b-button href="#" variant="primary">Add Cart</b-button>
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
                Banh dau xanh Hai Duong
              </b-card-text>
              <b-button href="#" variant="primary">Add Cart</b-button>
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
                Banh dau xanh Hai Duong
              </b-card-text>
              <b-button href="#" variant="primary">Add Cart</b-button>
              <b-text class="price">250.000đ</b-text>
            </b-card>
          </li>
        </b-col>
      </b-row>
       <div class="more">
            <b-row>
              <b-col md="12">
                <b-button @click="show1 = !show1">
                  <b-icon icon="caret-down-fill"></b-icon> xem thêm
                </b-button>
              </b-col>
            </b-row>
          </div>
    </div>
    <div class="suggestions">
      <b-link class="title" href="#foo">GỢI Ý</b-link>
      <hr style="width:4%;text-align:left; height:3px" />
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
                Banh dau xanh Hai Duong
              </b-card-text>
              <b-button href="#" variant="primary">Add Cart</b-button>
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
                Banh dau xanh Hai Duong
              </b-card-text>
              <b-button href="#" variant="primary">Add Cart</b-button>
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
                Banh dau xanh Hai Duong
              </b-card-text>
              <b-button href="#" variant="primary">Add Cart</b-button>
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
                Banh dau xanh Hai Duong
              </b-card-text>
              <b-button href="#" variant="primary">Add Cart</b-button>
              <b-text class="price">250.000đ</b-text>
            </b-card>
          </li>
        </b-col>
      </b-row>
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
                Banh dau xanh Hai Duong
              </b-card-text>
              <b-button href="#" variant="primary">Add Cart</b-button>
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
                Banh dau xanh Hai Duong
              </b-card-text>
              <b-button href="#" variant="primary">Add Cart</b-button>
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
                Banh dau xanh Hai Duong
              </b-card-text>
              <b-button href="#" variant="primary">Add Cart</b-button>
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
                Banh dau xanh Hai Duong
              </b-card-text>
              <b-button href="#" variant="primary">Add Cart</b-button>
              <b-text class="price">250.000đ</b-text>
            </b-card>
          </li>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      show1: false,
    };
  },
};
</script>
<style>
body {
  background-color: #f1f1f1;
}
.listProd {
  margin-top: 30px;
  /* display: flex;
  flex-wrap: wrap;
  flex-direction: row; */
}
.listProd .title {
  color: #000000;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
}
.listProd li {
  color: #000000;
  /* margin-right: 28px; */
  float: left;
  list-style-type: none;
  margin-top: 10px;
}

.listProd li .card {
  height: 285px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.listProd li .card p {
  font-size: 20px;
}
.listProd li .card .btn {
  background-color: #397e40;
  margin-right: 94px;
}

.listProd li .card a:hover {
  background-color: orange;
  font-family: 300;
}

.listProd button {
  background-color: #ffffff;
  margin-top: 20px;
  width: 100%;
  text-align: center;
  color: #2a6b32;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  line-height: 21px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.listProd .price {
  color: #ee9751;
  font-size: 18px;
}
.listDoDung {
  margin-top: 20px;
}

.listDoDung .title {
  color: #000000;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
}
.listDoDung li {
  color: #000000;
  margin-right: 12px;
  float: left;
  list-style-type: none;
  width: 312.01px;
  margin-top: 10px;
}
.listDoDung li .card {
  height: 285px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.listDoDung li .card p {
  font-size: 20px;
}
.listDoDung li .card .btn {
  background-color: #397e40;
  margin-right: 95px;
}

.listDoDung li .card a:hover {
  background-color: orange;
}
.listDoDung .price {
  color: #ee9751;
  font-size: 18px;
}
.listDoDung button {
  background-color: #ffffff;
  margin-top: 20px;
  width: 100%;
  text-align: center;
  color: #2a6b32;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  line-height: 21px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.suggestions {
  margin-top: 20px;
  /* margin-left: 10px; */
}

.suggestions .title {
  color: #000000;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
}

.suggestions li {
  color: #000000;
  margin-right: 12px;
  float: left;
  list-style-type: none;
  width: 312px;
  margin-top: 20px;
}
.suggestions li .card {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.suggestions li .card p {
  font-size: 20px;
}
.suggestions li .card .btn {
  background-color: #397e40;
  margin-right: 95px;
}
.suggestions .price {
  color: #ee9751;
  font-size: 18px;
}
.suggestions li .card a:hover {
  background-color: orange;
}
</style>

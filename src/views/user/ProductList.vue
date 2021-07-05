<template>
  <div>
    <div>
      <Header />
    </div>
    <div class="container">
      <Nav />
      <Category />
      <div class="listProd">
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
                    Banh dau xanh Hai Duong
                  </b-card-text>
                  <b-button  variant="primary">Add Cart</b-button>
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
                  <b-button  variant="primary">Add Cart</b-button>
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
                  <b-button  variant="primary">Add Cart</b-button>
                  <b-text class="price">250.000đ</b-text>
                </b-card>
              </li>
            </b-col>
          </b-row>
          <b-row >
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
                  <b-button  variant="primary">Add Cart</b-button>
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
                    Banh dau xanh Hai Duong
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
                    Banh dau xanh Hai Duong
                  </b-card-text>
                  <b-button  variant="primary">Add Cart</b-button>
                  <b-text class="price">250.000đ</b-text>
                </b-card>
              </li>
            </b-col>
          </b-row>
        </b-link>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Category from "@/components/Category.vue";
export default {
  components: {
    Header,
    Nav,
    Category,
  },
};
</script>
<style>
body {
  background-color: #f1f1f1;
}
.listProd {
  margin-top: 30px;
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
  height: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.listProd li .card p {
  font-size: 20px;
}
.listProd li .card .btn {
    background-color: #397e40;
    color: #fff;
    height: 45px;
    width: 100px;
    border-radius: 20px;
    margin-bottom: 10px;
    font-size: 16px;
    font-family: Roboto;
}

.listProd li .card button:hover {
  background-color: orange;
  font-family: 300;
}

.listProd .price {
  color: #ee9751;
  font-size: 18px;
}
</style>

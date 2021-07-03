<template>
  <div id="nav">
    <b-nav pills>
      <b-nav-item>HÔM NAY</b-nav-item>
      <b-nav-item>GIAN HÀNG</b-nav-item>
      <b-nav-item>TIN TỨC</b-nav-item>
      <b-nav-item>LIÊN HỆ</b-nav-item>
    </b-nav>
  </div>
</template>
<script>
export default {
  name: "nav",
  data() {
    return {};
  },
};
</script>
<style>
#nav {
  margin-top: 3px;
  background-color: #397e40;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

#nav .nav-link {
  flex: 0 auto;
    height: auto;
  /* width: 150px;
  height: 50px; */
  padding-top: 15px;
  text-align: center;
  color: #ffffff;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
}
#nav a:hover {
  background-color: orange;
}
</style>

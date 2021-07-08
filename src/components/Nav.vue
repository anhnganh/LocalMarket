<template>
  <div id="nav1">
    <b-nav>
      <b-nav-item to="/">HÔM NAY</b-nav-item>
      <b-nav-item>GIAN HÀNG</b-nav-item>
      <b-nav-item to="/newlist">TIN TỨC</b-nav-item>
      <b-nav-item to="/contact" >LIÊN HỆ</b-nav-item>
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
<style >
#nav1 {
  /* height: 50px; */
  margin-top: 5px;
  background-color: #397e40;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

#nav1 .nav-link {
  flex: 0 auto;

   height: 50px; 
  /* width: 150px;
  height: 50px; */
  /* padding-bottom: 40px; */
  text-align: center;
  color: #ffffff;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  padding-top:15px;
  padding-bottom: 35px;
}
#nav1 a:hover {
  background-color: orange;
}
</style>

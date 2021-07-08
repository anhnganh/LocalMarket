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
  name: 'nav1',
  data() {
    return {};
  },
};
</script>
<style >
#nav1 {

  top: 100px;
  height: 50px;
  margin-top: 5px;
  background-color:#157D3F;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-transform: uppercase;
}

#nav1 .nav-link {
  flex: 0 auto;
  height: 50px; 
  text-align: center;
  color: #ffffff;
  
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  padding-top:15px;
  padding-bottom: 35px;
}
#nav1 a:hover {
  background-color: #EA7F29;
}
</style>

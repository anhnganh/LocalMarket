<template>
  <div id="nav1">
    <b-nav>
      <b-nav-item to="/">hôm nay</b-nav-item>
      <b-nav-item>gian hàng</b-nav-item>
      <b-nav-item>tin tức</b-nav-item>
      <b-nav-item to="/contact" >liên hệ</b-nav-item>
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

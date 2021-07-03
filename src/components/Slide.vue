<template>
  <div>
    <b-row>
      <b-col md="7">
        <div>
          <b-carousel
            id="carousel-no-animation"
            style="text-shadow: 0px 0px 2px #000"
            no-animation
            indicators
            img-width="1024"
            img-height="480"
          >
            <b-carousel-slide
              caption="First slide"
              img-src="https://picsum.photos/1024/480/?image=10"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Second Slide"
              img-src="https://picsum.photos/1024/480/?image=12"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Third Slide"
              img-src="https://picsum.photos/1024/480/?image=22"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Fourth Slide"
              img-src="https://picsum.photos/1024/480/?image=23"
            ></b-carousel-slide>
          </b-carousel>
        </div>
      </b-col>
      <b-col md="5">
          Ảnh quảng cáo
       <!-- <img src="../assets/localmarket.png" alt=""> -->
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
    
}
</script>
<style>
.row .col-md-7{
    margin-top: 20px;
}
.row .col-md-7 .carousel .carousel-inner .carousel-item  .img-fluid{
    height: 300px;
}

.row .col-md-5{
    margin-top: 20px;
    background-color: aqua;
    width: 40.666667%;
}
</style>
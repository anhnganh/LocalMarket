<template>
  <div>
    <b-row>
      <b-col md="12">
        <div class="slide">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            no-animation
            indicators
            style="text-shadow: 1px 1px 2px #333;"
            
          >
            <b-carousel-slide
              caption="local market"
              img-src="http://www.mekonglodge.com/DataUpload/Activities/219173179.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="local market"
              img-src="https://www.westernfairdistrict.com/sites/default/files/styles/banner/public/wfd2131_themarketlaunch-webbanner-red_2.png?itok=oVJCnoCI"
            ></b-carousel-slide>
          </b-carousel>
        </div>
      </b-col>
      
    </b-row>
  </div>
</template>
<script>
export default {
   
}
</script>
<style>
.row .col-md-12{
    margin-top: 10px;
}
.carousel-caption{
  font-size: 50px;
  z-index: 1;
}
.row .col-md-12 .carousel .carousel-inner .carousel-item  .img-fluid{
    height: 400px;
    width: auto;
}

@media (max-width: 1000px) {
  .row .col-md-12 .carousel .carousel-inner .carousel-item  .img-fluid{
    height: 300px;
  }
}
@media (max-width: 768px){
  .row .col-md-12 .carousel .carousel-inner .carousel-item  .img-fluid{
    height: 200px;
  }
}
/* .row .col-md-5{
    margin-top: 10px;
    background-color: aqua;
    width: 40.666667%;
} */
</style>
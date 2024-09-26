<template>
  <b-container fluid class="p-4 bg-light min-vh-100">
    <b-row class="justify-content-center mb-4">
      <b-col md="10" lg="10">
        <b-card class="shadow-lg rounded">
          <b-card-body>
            <h1 class="text-center mb-4 font-weight-bold">Welcome to Our Music Collection</h1>

            <!-- Carousel -->
            <b-carousel
              id="myCarousel"
              controls
              indicators
              background="#000"
              class="bg-dark"
            >
              <b-carousel-slide
                v-for="(slide, index) in slides"
                :key="index"
                :img-src="slide.cover"
                :caption="slide.title"
                :text="`Artist: ${slide.artist}`"
              >
              </b-carousel-slide>
            </b-carousel>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      slides: [
        {
          title: 'No Quarter',
          artist: 'Led Zeppelin',
          cover: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Led_Zeppelin_-_Houses_of_the_Holy.jpg'
        },
        {
          title: 'Good Times Bad Times',
          artist: 'Led Zeppelin',
          cover: 'https://upload.wikimedia.org/wikipedia/en/e/ef/Led_Zeppelin_-_Led_Zeppelin_%281969%29_front_cover.png'
        },
        {
          title: 'Stadium Arcadium',
          artist: 'Red Hot Chili Peppers',
          cover: 'https://upload.wikimedia.org/wikipedia/en/e/e6/Stadiumarcadium.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* .min-vh-100 {
  min-height: 100vh;
} */

.bg-light {
  background-color: #f8f9fa !important;
}

.shadow-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.font-weight-bold {
  font-weight: 700;
}

.b-carousel-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}
.carousel-inner {
  max-height: 450px !important;
}
#myCarousel .item{
  height: 300px;
}
#myCarousel .item img{
  height: 450px;
  width: 500px;
}
</style>

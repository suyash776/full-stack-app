<template>
  <b-container fluid class="p-4 bg-light min-vh-100">
    <b-row class="justify-content-center mb-4">
      <b-col md="10" lg="8">
        <b-card class="shadow-lg rounded">
          <b-card-body>
            <h1 class="text-center mb-4 font-weight-bold">Welcome to Our Music Collection</h1>

            <!-- Carousel -->
            <b-carousel
              id="carousel"
              controls
              indicators
              background="#000"
              img-height="400"
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
          title: 'Song Title 1',
          artist: 'Artist Name 1',
          cover: 'https://via.placeholder.com/800x400?text=Album+Cover+1' // Replace with actual image URL
        },
        {
          title: 'Song Title 2',
          artist: 'Artist Name 2',
          cover: 'https://via.placeholder.com/800x400?text=Album+Cover+2' // Replace with actual image URL
        },
        {
          title: 'Song Title 3',
          artist: 'Artist Name 3',
          cover: 'https://via.placeholder.com/800x400?text=Album+Cover+3' // Replace with actual image URL
        }
      ]
    }
  }
}
</script>

<style scoped>
.min-vh-100 {
  min-height: 100vh;
}

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
</style>

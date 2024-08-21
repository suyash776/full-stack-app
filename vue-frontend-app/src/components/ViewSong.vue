<template>
  <b-container fluid class="p-4 bg-light min-vh-100">
    <b-row class="justify-content-center">
      <b-col md="10" lg="10" xl="10">
        <b-card class="shadow-lg rounded">
          <b-card-body>
            <h1 class="text-center mb-4 font-weight-bold">Song Details</h1>
            <b-row>
              <!-- Left Section: Album Image and Details -->
              <b-col md="4">
                <b-card class="mb-4">
                  <b-card-img
                    :src="song.albumImageUrl"
                    alt="Album Image"
                    class="img-fluid rounded"
                  ></b-card-img>
                  <b-card-body>
                    <h4 class="card-title">{{ song.title }}</h4>
                    <h5 class="card-subtitle mb-2 text-muted">{{ song.artist }}</h5>
                    <p class="card-text"><strong>Genre:</strong> {{ song.genre }}</p>
                    <p class="card-text"><strong>Album:</strong> {{ song.album }}</p>
                    <p class="card-text"><strong>YouTube ID:</strong> {{ song.youtubeId }}</p>
                  </b-card-body>
                </b-card>
              </b-col>

              <!-- Right Section: Lyrics and Tabs -->
              <b-col md="8">
                <b-card>
                  <b-card-body>
                    <h5 class="card-title">YouTube:</h5>

                    <b-embed
                      type="iframe"
                      aspect="16by9"
                      :src="song.youtubeId"
                      allowfullscreen
                    ></b-embed>

                    <h5 class="card-title">Lyrics</h5>
                    <b-form-textarea
                      :value="song.lyrics"
                      rows="10"
                      readonly
                      class="mb-3"
                    ></b-form-textarea>

                    <h5 class="card-title">Tabs</h5>
                    <b-form-textarea
                      :value="song.tabs"
                      rows="10"
                      readonly
                    ></b-form-textarea>
                  </b-card-body>
                </b-card>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SongsService from '../services/SongsService'

export default {
  data () {
    return {
      song: {
        'title': 'No Quarter',
        'artist': 'Led Zeppelin',
        'genre': 'Progressive rock, Psychedelic rock, Blues rock',
        'album': 'Houses of the Holy',
        'albumImageUrl': 'https://upload.wikimedia.org/wikipedia/en/9/9f/Led_Zeppelin_-_Houses_of_the_Holy.jpg',
        'youtubeId': 'https://www.youtube.com/watch?v=_BZLM2j8p5E&ab_channel=LedZeppelin-Topic',
        'lyrics': '',
        'tab': ''

      }
    }
  },
  async mounted () {
    console.log(this.$store.state)

    const songId = this.$store.state.route.params.id
    console.log(songId)

    let response = await SongsService.getSong(songId)
    console.log(response.data)
    this.song = response.data
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

.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>

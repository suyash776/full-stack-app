<template>
  <b-container fluid class="p-4 bg-light min-vh-100">
    <b-row class="justify-content-center mb-4">
      <b-col md="10" lg="10" xl="10">
        <b-card class="shadow-lg rounded">
          <b-card-body>
            <h1 class="text-center mb-4 font-weight-bold">Create Song</h1>
            <b-form @submit.prevent="createSong" ref="songForm">
              <b-row>
                <!-- Left Section: Song Metadata -->
                <b-col md="6">
                  <b-form-group
                    label="Title"
                    label-for="title"
                    :state="getValidationState('title')"
                    invalid-feedback="Title is required."
                  >
                    <b-form-input
                      id="title"
                      v-model="song.title"
                      type="text"
                      placeholder="Enter song title"
                      :state="getValidationState('title')"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Artist"
                    label-for="artist"
                    :state="getValidationState('artist')"
                    invalid-feedback="Artist is required."
                  >
                    <b-form-input
                      id="artist"
                      v-model="song.artist"
                      type="text"
                      placeholder="Enter artist name"
                      :state="getValidationState('artist')"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Genre"
                    label-for="genre"
                    :state="getValidationState('genre')"
                    invalid-feedback="Genre is required."
                  >
                    <b-form-input
                      id="genre"
                      v-model="song.genre"
                      type="text"
                      placeholder="Enter genre"
                      :state="getValidationState('genre')"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Album"
                    label-for="album"
                    :state="getValidationState('album')"
                    invalid-feedback="Album is required."
                  >
                    <b-form-input
                      id="album"
                      v-model="song.album"
                      type="text"
                      placeholder="Enter album name"
                      :state="getValidationState('album')"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Album Image URL"
                    label-for="albumImageUrl"
                    :state="getValidationState('albumImageUrl')"
                    invalid-feedback="Album image URL is required."
                  >
                    <b-form-input
                      id="albumImageUrl"
                      v-model="song.albumImageUrl"
                      type="url"
                      placeholder="Enter album image URL"
                      :state="getValidationState('albumImageUrl')"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="YouTube ID"
                    label-for="youtubeId"
                  >
                    <b-form-input
                      id="youtubeId"
                      v-model="song.youtubeId"
                      type="text"
                      placeholder="Enter YouTube ID"
                    ></b-form-input>
                  </b-form-group>
                </b-col>

                <!-- Right Section: Lyrics and Tabs -->
                <b-col md="6">
                  <b-form-group
                    label="Lyrics"
                    label-for="lyrics"
                    :state="getValidationState('lyrics')"
                    invalid-feedback="Lyrics are required."
                  >
                    <b-form-textarea
                      id="lyrics"
                      v-model="song.lyrics"
                      placeholder="Enter lyrics"
                      rows="10"
                      :state="getValidationState('lyrics')"
                    ></b-form-textarea>
                  </b-form-group>

                  <b-form-group
                    label="Tabs"
                    label-for="tabs"
                  >
                    <b-form-textarea
                      id="tabs"
                      v-model="song.tabs"
                      placeholder="Enter tabs"
                      rows="10"
                    ></b-form-textarea>
                  </b-form-group>

                  <b-button @click="createSong"  type="createSong" variant="primary" block class="btn-lg">
                    Save Song
                  </b-button>
                </b-col>
              </b-row>
            </b-form>
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
        title: '',
        artist: '',
        genre: '',
        album: '',
        albumImageUrl: '',
        youtubeId: '',
        lyrics: '',
        tabs: ''
      },
      validationErrors: {}
    }
  },
  methods: {
    validateForm () {
      const errors = {}
      // Check for required fields
      if (!this.song.title) errors.title = 'Title is required.'
      if (!this.song.artist) errors.artist = 'Artist is required.'
      if (!this.song.genre) errors.genre = 'Genre is required.'
      if (!this.song.album) errors.album = 'Album is required.'
      if (!this.song.albumImageUrl) errors.albumImageUrl = 'Album image URL is required.'
      if (!this.song.lyrics) errors.lyrics = 'Lyrics are required.'
      return errors
    },
    getValidationState (field) {
      return this.validationErrors[field] ? false : null
    },
    async createSong () {
      try {
        this.validationErrors = this.validateForm()
        if (Object.keys(this.validationErrors).length === 0) {
          console.log('Song data:', this.song)
          const response = await SongsService.create(this.song)
          console.log(response)

          this.$bvToast.toast(`Successfully created song ${this.song.title}`, {
            title: `Song Creation Success`,
            variant: 'success',
            solid: true,
            autoHideDelay: 5000
          })
          this.song = {
            title: '',
            artist: '',
            genre: '',
            album: '',
            albumImageUrl: '',
            youtubeId: '',
            lyrics: '',
            tabs: ''
          }
          this.validationErrors = {}
        }
      } catch (err) {
        console.log(err)

        this.$bvToast.toast('Song Creation Failed', {
          title: `Song Creation Error`,
          variant: 'danger',
          solid: true,
          autoHideDelay: 5000
        })
      }
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

.b-form-textarea {
  resize: vertical;
}
</style>

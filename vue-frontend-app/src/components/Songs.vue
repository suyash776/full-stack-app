<template>
  <b-container fluid class="p-4 bg-light min-vh-100">
    <b-row class="justify-content-center mb-4">
      <b-col md="8" lg="8" xl="8">
        <b-card class="shadow-sm rounded">
          <b-card-body>
            <h1 class="text-center mb-4 font-weight-bold">Featured Songs</h1>
            <b-form @submit.prevent="handleSubmit">
              <b-form-group class="mb-4">
                <b-form-input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search for a song..."
                  aria-label="Search"
                ></b-form-input>
              </b-form-group>
            </b-form>
            <b-list-group>
              <b-list-group-item
                v-for="song in filteredSongs"
                :key="song.id"
                class="d-flex align-items-center"
              >
                <SongTile :song="song"></SongTile>
              </b-list-group-item>
            </b-list-group>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="justify-content-center mb-4">
      <b-col md="8" lg="8" xl="8">

      <b-button to="/songs/create" variant="primary" block class="btn-lg">
                  Create New Song
      </b-button>
    </b-col>
    </b-row>
  </b-container>
</template>

<script>

import SongsService from '../services/SongsService'
import SongTile from './SongTile.vue'

export default {
  components: {
    SongTile
  },
  data () {
    return {
      searchQuery: '',
      songs: [
        {
          id: 1,
          title: 'Song Title 1',
          artist: 'Artist Name 1',
          album: 'Album Name 1',
          albumImageUrl: 'https://via.placeholder.com/60' // Replace with actual albumImageUrl image URL
        },
        {
          id: 2,
          title: 'Song Title 2',
          artist: 'Artist Name 2',
          album: 'Album Name 2',
          albumImageUrl: 'https://via.placeholder.com/60' // Replace with actual albumImageUrl image URL
        },
        {
          id: 3,
          title: 'Song Title 3',
          artist: 'Artist Name 3',
          album: 'Album Name 3',
          albumImageUrl: 'https://via.placeholder.com/60' // Replace with actual albumImageUrl image URL
        }
      ]
    }
  },
  computed: {
    filteredSongs () {
      const query = this.searchQuery.toLowerCase()
      return this.songs.filter(song =>
        song.title.toLowerCase().includes(query) ||
        song.artist.toLowerCase().includes(query) ||
        song.album.toLowerCase().includes(query)
      )
    }
  },
  methods: {
    handleSubmit () {
      // Prevent form submission
    }
  },
  async mounted () {
    let response = await SongsService.getAllSongs()
    console.log(response.data)
    this.songs = response.data
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

.b-card-body {
  padding: 2rem;
}

.font-weight-bold {
  font-weight: 700;
}

.btn-lg {
  font-size: 1.25rem;
  padding: 0.75rem 1.25rem;
}
</style>

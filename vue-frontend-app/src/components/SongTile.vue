<template>
<b-card class="mb-3 shadow-sm" @click="navigateToSong" style="cursor: pointer;">
    <b-row no-gutters>
      <!-- Image Section -->
      <b-col md="4" class="d-flex align-items-center">
        <b-card-img :src="song.albumImageUrl" alt="Album Image" class="img-fluid rounded-left" />
      </b-col>

      <!-- Text Section -->
      <b-col md="8">
        <b-card-body>
          <h5 class="card-title">{{ song.title }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ song.artist }}</h6>
          <p class="card-text">{{ song.genre }}</p>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>

export default {
  name: 'SongTile',

  props: [
    'song'
  ],
  methods: {
    navigateToSong () {
      // Navigate to the song details page
      console.log(this.song.id)

      this.$router.push({ name: 'songs-view', params: { id: this.song.id } })
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

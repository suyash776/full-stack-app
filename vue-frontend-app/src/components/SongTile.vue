<template>
  <div>
    <h5 class="mb-1">{{ song.title }}</h5>
    <p class="mb-1 text-muted">Artist: {{ song.artist }}</p>
    <p class="mb-1 text-muted">Album: {{ song.album }}</p>
  </div>
</template>

<script>

export default {
  name: 'SongTile',

  props: [
    'song'
  ]
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

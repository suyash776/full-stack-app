import Api from '@/services/Api'

export default {
  getAllSongs () {
    return Api().get('songs')
  },
  getSong (songId) {
    return Api().get(`songs/${songId}`)
  },
  create (song) {
    return Api().post('songs', song)
  }
}

const { Song } = require('../models')

module.exports = {
  async getall (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 20
      })
      res.send(songs)
    } catch (err) {
      console.log('Error trying to fetch songs')

      res.status(400).send({
        error: err
      })
    }
  },
  async create (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      console.log(err)

      res.status(400).send({
        error: 'Error trying to create songs'
      })
    }
  }
}

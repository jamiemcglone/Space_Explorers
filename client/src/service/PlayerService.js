const baseURL = 'http://localhost:9000/api/players/'

 const PlayerService = {
  getPlayers() {
    return fetch(baseURL)
    .then(res => res.json())
  },

}

export default PlayerService
import axios from 'axios'
import qs from 'qs'

export const searchSong = async (songName) => {
  const tokenHeaders = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    auth: {
      username: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
      password: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
    }
  }
  const data = {
    grant_type: 'client_credentials'
  }
  const tokenResponse = await axios.post(
    `https://accounts.spotify.com/api/token`,
    qs.stringify(data),
    tokenHeaders
  )

  const { access_token } = tokenResponse.data
  console.log(access_token)
  const headers = {
    headers: { Authorization: 'Bearer ' + access_token }
  }

  const response = await axios.get(
    `${process.env.REACT_APP_SPOTIFY_API_URL}?q=${songName}&type=track&limit=5`,
    headers
  )
  console.log(response, 'serviço')
  return response.data.tracks
}

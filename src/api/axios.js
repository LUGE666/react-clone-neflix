import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  // headers: 'application/x-www-form-urlencoded',
})

// instance.get('/foo-bar')
//'https://api.themoviedb.org/3//trending/all/week?api_key=e2c257c85a8112d608d471c9924f951d&language=en-US'

export default instance

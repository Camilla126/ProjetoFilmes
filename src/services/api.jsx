
import axios from "axios";

// https://api.themoviedb.org/3/movie/now_playing?api_key=6588f59db426156c81ccab94f485a40c&language=pt-BR
//

const api = axios.create({

      baseURL: 'https://api.themoviedb.org/3/'
});
  
export default api;
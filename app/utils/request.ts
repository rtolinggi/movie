const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// images
export const baseImageUrl = "https://image.tmdb.org/t/p/w500/";

const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en_EN`,
  fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213&language=en-EN`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en_EN`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en_EN&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en_EN&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en_EN&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en_EN&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en_EN&with_genres=99`,
};

export default requests;

const axios = require("axios").default;
const { REACT_APP_API_KEY } = process.env;

export async function getPopular() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${REACT_APP_API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieTrailer(movieId: number) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${REACT_APP_API_KEY}&language=en-US`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

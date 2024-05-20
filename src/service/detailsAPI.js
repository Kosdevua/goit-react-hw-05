
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const API_KEY = "21cdedd710ee7098e1f7c7f5d59f8230";
const urlTrending = "movie";

const options = {
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWNkZWRkNzEwZWU3MDk4ZTFmN2M3ZjVkNTlmODIzMCIsInN1YiI6IjY2NDEzNjJjMzRjN2E2ZjAzOTU5YjkxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jeCuN5Jf-sBgY4Tqw0b33V4TbVXRiZ0nqGG5J5D25rI",
  },
  params: { safesearch: "true", api_key: API_KEY },
};

const fetchCastById = async (movieId) => {
  const { data } = await axios.get(`${urlTrending}/${movieId}`, options);
  return data;
};

export default fetchCastById;


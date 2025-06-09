const OMDB_BASE_URL = import.meta.env.VITE_OMDB_BASE_URL;
const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const searchMovies = async (query) => {
  const response = await fetch(
    `${OMDB_BASE_URL}/?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  if (data.Response === "True") {
    return data.Search;
  } else {
    return [];
  }
};

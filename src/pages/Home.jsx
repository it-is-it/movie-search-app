import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import FavoritesList from "../components/FavoritesList";
import { useState, useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { favorites, addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`
      );
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error || "No results found");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (movie) => {
    if (isFavorite(movie.imdbID)) {
      removeFavorite(movie.imdbID);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎬 Movie Search & Favorites</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {movies.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Search Results</h2>
          <MovieList
            movies={movies}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </div>
      )}
      <FavoritesList favorites={favorites} onToggleFavorite={toggleFavorite} />
    </div>
  );
}

export default Home;

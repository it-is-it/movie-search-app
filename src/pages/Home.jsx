import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import FavoritesList from "../components/FavoritesList";
import Spinner from "../components/Spinner";
import { useState, useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

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

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎬 Movie Search & Favorites</h1>
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setShowFavoritesOnly(false)}
          className={`px-4 py-2 rounded ${
            !showFavoritesOnly ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Search Results
        </button>
        <button
          onClick={() => setShowFavoritesOnly(true)}
          className={`px-4 py-2 rounded ${
            showFavoritesOnly ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Favorites
        </button>
      </div>
      {!showFavoritesOnly && (
        <>
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            onSearchSubmit={handleSearchSubmit}
          />
          {loading && <Spinner />}
          {error && <p className="text-red-500">{error}</p>}
          {movies.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Search Results</h2>
              <MovieList movies={movies} />
            </div>
          )}
        </>
      )}
      {showFavoritesOnly && <FavoritesList />}
    </div>
  );
}

export default Home;

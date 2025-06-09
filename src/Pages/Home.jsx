import React, { useState, useContext } from "react";
import MovieCard from "../Components/MovieCard";
import "../Components/css/Home.css";
import { searchMovies } from "../services/api";
import Spinner from "../Components/Spinner";
import Error from "../Components/Error";
import { FavoritesContext } from "../Context/FavoritesContext";

const Home = () => {
  const { favorites } = useContext(FavoritesContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setError("Please enter a search term");
      return;
    }
    if (loading) return;
    setError(null);
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      if (searchResults.length > 0) {
        setMovies(searchResults);
        setError(null);
      } else {
        setMovies([]);
        setError("No movies found");
      }
    } catch (err) {
      console.log(err);
      setError("Failed to search movie...");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {loading && <Spinner />}
      {error && !loading && <Error message={error} />}
      {!loading && !error && (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      )}
      {favorites.length > 0 && (
        <div className="favorites-section mt-16">
          <h2>Your Favorites</h2>
          <div className="movies-grid">
            {favorites.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

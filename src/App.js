import { useState } from "react";
import {
  Search,
  Heart,
  HeartOff,
  Film,
  AlertCircle,
  Loader2,
} from "lucide-react";

// Note: You'll need to replace 'YOUR_API_KEY' with your actual OMDb API key
const API_KEY = "YOUR_API_KEY";
const API_URL = "https://www.omdbapi.com/";

// SearchBar Component
const SearchBar = ({ onSearch, loading }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="mb-8">
      <div className="flex gap-2 max-w-md mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search for movies..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={loading}
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={loading || !query.trim()}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Searching...
            </>
          ) : (
            "Search"
          )}
        </button>
      </div>
    </div>
  );
};

// MovieCard Component
const MovieCard = ({ movie, isFavorite, onToggleFavorite }) => {
  const posterUrl = movie.Poster !== "N/A" ? movie.Poster : null;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="aspect-w-2 aspect-h-3 bg-gray-200 flex items-center justify-center">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={movie.Title}
            className="w-full h-64 object-cover"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-64 text-gray-400">
            <Film className="w-12 h-12 mb-2" />
            <span className="text-sm">No Poster Available</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-2">
          {movie.Title}
        </h3>
        <p className="text-gray-600 mb-3">{movie.Year}</p>
        <button
          onClick={() => onToggleFavorite(movie)}
          className={`w-full px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors ${
            isFavorite
              ? "bg-red-100 text-red-700 hover:bg-red-200"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {isFavorite ? (
            <>
              <HeartOff className="w-4 h-4" />
              Remove from Favorites
            </>
          ) : (
            <>
              <Heart className="w-4 h-4" />
              Add to Favorites
            </>
          )}
        </button>
      </div>
    </div>
  );
};

// MovieList Component
const MovieList = ({ movies, favorites, onToggleFavorite, title }) => {
  const isFavorite = (movie) =>
    favorites.some((fav) => fav.imdbID === movie.imdbID);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {movies.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No movies to display</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isFavorite={isFavorite(movie)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// FavoritesList Component
const FavoritesList = ({ favorites, onToggleFavorite }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Heart className="w-6 h-6 text-red-500" />
        My Favorites ({favorites.length})
      </h2>
      {favorites.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <Heart className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <p className="text-lg">No favorites yet</p>
          <p className="text-sm">
            Search for movies and add them to your favorites!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Error Message Component
const ErrorMessage = ({ error }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
      <div className="flex items-center gap-2 text-red-700">
        <AlertCircle className="w-5 h-5" />
        <span className="font-medium">Error</span>
      </div>
      <p className="text-red-600 mt-1">{error}</p>
    </div>
  );
};

// Main App Component
const MovieSearchApp = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Search movies function
  const searchMovies = async (query) => {
    setLoading(true);
    setError(null);
    setSearchQuery(query);

    try {
      const response = await fetch(
        `${API_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search || []);
      } else {
        setError(data.Error || "No movies found");
        setMovies([]);
      }
    } catch (err) {
      setError("Network error. Please check your connection and API key.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  // Toggle favorite function
  const toggleFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some(
        (fav) => fav.imdbID === movie.imdbID
      );

      if (isAlreadyFavorite) {
        // Remove from favorites
        return prevFavorites.filter((fav) => fav.imdbID !== movie.imdbID);
      } else {
        // Add to favorites
        return [...prevFavorites, movie];
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
            <Film className="w-10 h-10 text-blue-600" />
            Movie Search & Favorites
          </h1>
          <p className="text-gray-600">
            Discover movies and build your favorites collection
          </p>
        </header>

        {/* API Key Notice */}
        {API_KEY === "YOUR_API_KEY" && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 text-yellow-700">
              <AlertCircle className="w-5 h-5" />
              <span className="font-medium">API Key Required</span>
            </div>
            <p className="text-yellow-600 mt-1">
              Please replace 'YOUR_API_KEY' with your actual OMDb API key to use
              this app. Get your free API key at{" "}
              <a
                href="http://www.omdbapi.com/apikey.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                omdbapi.com
              </a>
            </p>
          </div>
        )}

        {/* Search Bar */}
        <SearchBar onSearch={searchMovies} loading={loading} />

        {/* View Toggle */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setShowFavoritesOnly(false)}
              className={`px-4 py-2 rounded-md transition-colors ${
                !showFavoritesOnly
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Search Results
            </button>
            <button
              onClick={() => setShowFavoritesOnly(true)}
              className={`px-4 py-2 rounded-md transition-colors ${
                showFavoritesOnly
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Favorites Only
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && <ErrorMessage error={error} />}

        {/* Content */}
        {showFavoritesOnly ? (
          <FavoritesList
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        ) : (
          <>
            {/* Search Results */}
            {searchQuery && (
              <MovieList
                movies={movies}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                title={`Search Results for "${searchQuery}"`}
              />
            )}

            {/* Favorites List */}
            <FavoritesList
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          </>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
            <p className="text-gray-600">Searching for movies...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieSearchApp;

import "../Components/css/Favorites.css";
import { useContext } from "react";
import MovieCard from "../Components/MovieCard";
import { FavoritesContext } from "../Context/FavoritesContext";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  if (favorites) {
    return (
      <div>
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favourite movie yet</h2>
      <p>Start adding movies to your favorites and they will appear here !</p>
    </div>
  );
};

export default Favorites;

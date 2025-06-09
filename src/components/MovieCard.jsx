import "./css/MovieCard.css";
import { useContext, useState } from "react";
import { FavoritesContext } from "../Context/FavoritesContext";
import Spinner from "./Spinner";

const MovieCard = ({ movie }) => {
  const [imgLoading, setImgLoading] = useState(true);
  const { isFavorite, addFavorite, removeFavorite } =
    useContext(FavoritesContext);
  const favorite = isFavorite(movie.imdbID);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFavorite(movie.imdbID);
    else addFavorite(movie);
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        {imgLoading && <Spinner />}
        <img
          src={movie.Poster}
          alt={movie.Title}
          onLoad={() => setImgLoading(false)}
          onError={() => setImgLoading(false)}
        />
      </div>
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
      <button
        className={`favorite-btn${favorite ? " active" : ""}`}
        onClick={onFavoriteClick}
      >
        {favorite ? "Remove from Favourites❤️" : "Add to Favourites🤍"}
      </button>
    </div>
  );
};

export default MovieCard;

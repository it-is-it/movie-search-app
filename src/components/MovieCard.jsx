import { useState } from "react";
import Spinner from "./Spinner";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const MovieCard = ({ movie }) => {
  const [imgLoading, setImgLoading] = useState(true);
  const { toggleFavorite, favorites } = useContext(FavoritesContext);
  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  return (
    <div className="w-64 border rounded p-4 flex flex-col items-center">
      <div className="w-full h-64 mb-2 flex justify-center items-center overflow-hidden">
        {imgLoading && <Spinner />}
        <img
          src={movie.Poster}
          alt={movie.Title}
          onLoad={() => setImgLoading(false)}
          onError={() => setImgLoading(false)}
          className={`object-cover w-full h-full ${
            imgLoading ? "hidden" : "block"
          }`}
        />
      </div>
      <h3 className="text-lg font-bold h-16 overflow-wrap break-words text-center align-middle justify-center items-center flex">
        {movie.Title}
      </h3>
      <p className="text-sm text-gray-600">{movie.Year}</p>
      <button
        onClick={() => toggleFavorite(movie)}
        className={`mt-2 px-4 py-1 rounded w-full cursor-pointer ${
          isFavorite ? "bg-red-500 text-white" : "bg-blue-500 text-white"
        }`}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default MovieCard;

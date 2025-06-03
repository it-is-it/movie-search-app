import MovieCard from "./MovieCard";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const FavoritesList = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Favorites</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorites added.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;

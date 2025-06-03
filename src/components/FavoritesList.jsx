import React from "react";
import MovieCard from "./MovieCard";

const FavoritesList = ({ favorites, onToggleFavorite }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Favorites</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorites added.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

export default FavoritesList;

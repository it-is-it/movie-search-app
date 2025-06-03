import React from "react";

const MovieCard = ({ movie, isFavorite, onToggleFavorite }) => {
  return (
    <div className="border rounded shadow-md p-4 flex flex-col items-center">
      <img src={movie.Poster} alt={movie.Title} className="w-40 h-auto mb-2" />
      <h3 className="text-lg font-bold">{movie.Title}</h3>
      <p className="text-sm text-gray-600">{movie.Year}</p>
      <button
        onClick={() => onToggleFavorite(movie)}
        className={`mt-2 px-4 py-1 rounded ${
          isFavorite ? "bg-red-500 text-white" : "bg-blue-500 text-white"
        }`}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default MovieCard;

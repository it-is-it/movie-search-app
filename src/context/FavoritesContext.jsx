import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.imdbID === movie.imdbID) ? prev : [...prev, movie]
    );
  };

  const removeFavorite = (imdbID) => {
    setFavorites((prev) => prev.filter((fav) => fav.imdbID !== imdbID));
  };

  const isFavorite = (imdbID) => favorites.some((fav) => fav.imdbID === imdbID);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

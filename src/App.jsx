import { useState } from "react";
import { FavoritesProvider } from "./context/FavoritesContext";
import Home from "./pages/Home";

const App = () => {
  return (
    <FavoritesProvider>
      <Home />
    </FavoritesProvider>
  );
};

export default App;

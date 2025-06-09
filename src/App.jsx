import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorites from "./Pages/Favorites";
import NavBar from "./Components/NavBar";
import "./Components/css/App.css";
import { FavoritesProvider } from "./Context/FavoritesContext";

const App = () => {
  return (
    <FavoritesProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </main>
    </FavoritesProvider>
  );
};
export default App;

# Movie Search & Favorites 🎬

A React & Vite app for searching movies via the OMDb API and managing your favorite titles. Built with Tailwind CSS and React Router.

---

## Demo

[Live demo](https://movie-search-app-ishwor.netlify.app/)


---

## Features

- 🎞️ Search movies by title
- ❤️ Add or remove favorites with a click
- 💾 Favorites persisted in localStorage
- 📦 Component-driven architecture
- 📱 Responsive design with Tailwind CSS

---

## Tech Stack

- **React** 18+ (hooks & context)
- **Vite** for dev & build
- **React Router DOM** for client routing
- **Tailwind CSS** for utility-first styling
- **OMDb API** (via `searchMovies` service)

---

## Project Structure

```
Movie_Website-main/
├── public/
│   └── index.html            # HTML entry point
├── src/
│   ├── Components/           # Reusable UI components
│   │   ├── MovieCard.jsx     # Movie card & favorite button
│   │   ├── NavBar.jsx        # Navigation bar
│   │   ├── Spinner.jsx       # Loading indicator
│   │   ├── Error.jsx         # Error message
│   │   └── css/              # Component-specific styles
│   ├── Context/              # React context for favorites
│   │   └── FavoritesContext.jsx
│   ├── Pages/                # Route-level pages
│   │   ├── Home.jsx          # Search & results
│   │   └── Favorites.jsx     # Favorites list
│   ├── services/             # API integration
│   │   └── api.js            # `searchMovies` service
│   ├── index.css             # Tailwind & global styles
│   └── main.jsx              # App entry & router
├── package.json              # Dependencies & scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind setup
└── README.md                 # Project overview
```

---

## Installation & Running

1. Clone the repo:

   ```bash
   git clone https://github.com/it-is-it/movie-search-app.git
   cd movie-search-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:

   ```bash
   npm run dev
   ```

4. Open browser at `http://localhost:5173`

---

## Usage

- Navigate to **Home** to search movies.
- Click the heart icon to add/remove favorites.
- Visit **Favorites** via navbar to view saved list.

---

## Notes

- Assumptions: Used OMDb API with manual title search.
- Challenges: Handling API error state and localStorage sync.
- Bonus Features: Toggle to view favorites only.

## Author

Ishwor Timalsina

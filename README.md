# Movie Search & Favorites App 🎬

A modern React application that allows users to search for movies using the OMDb API and manage their personal favorites collection. Built with React functional components, hooks, and Tailwind CSS for a clean, responsive user experience.

## ✨ Features

### 🔍 Movie Search

- **Real-time search** with the OMDb API
- **Loading spinner** during API calls
- **Error handling** for network issues and empty results
- **Responsive movie cards** displaying poster, title, and release year
- **Fallback display** for movies without available posters

### ⭐ Favorites Management

- **Add/Remove movies** to/from favorites with intuitive heart icons
- **Duplicate prevention** - can't add the same movie twice
- **Persistent favorites** using localStorage (browser storage)
- **Favorites counter** showing total saved movies
- **Dedicated favorites view** for easy browsing

### 🎨 User Experience

- **Toggle views** between search results and favorites-only
- **Responsive grid layout** that adapts to all screen sizes
- **Smooth animations** and hover effects
- **Clean, modern design** with consistent styling
- **Keyboard support** - press Enter to search

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- OMDb API key (free registration required)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd movie-search-favorites-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Get your OMDb API key**

   - Visit [OMDb API](http://www.omdbapi.com/apikey.aspx)
   - Sign up for a free account
   - Copy your API key

4. **Configure the API key**

   - Open the main component file
   - Replace `'YOUR_API_KEY'` with your actual OMDb API key:

   ```javascript
   const API_KEY = "your-actual-api-key-here";
   ```

5. **Start the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

6. **Open your browser**
   - Navigate to `http://localhost:3000`
   - Start searching for movies!

## 🏗️ Project Structure

```
src/
├── components/
│   ├── SearchBar.js          # Search input and submit functionality
│   ├── MovieCard.js          # Individual movie display component
│   ├── MovieList.js          # Grid layout for movie collections
│   ├── FavoritesList.js      # Dedicated favorites display
│   └── ErrorMessage.js       # Error handling component
├── App.js                    # Main application component
├── index.js                  # React DOM rendering
└── styles/                   # Additional CSS (if needed)
```

## 🔧 Technical Details

### Built With

- **React 18+** - Modern React with functional components
- **React Hooks** - useState, useEffect for state management
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **OMDb API** - Movie database for search functionality

### Key Components

#### SearchBar

- Manages search query state
- Handles form submission and Enter key events
- Shows loading state during API calls
- Validates input before making requests

#### MovieCard

- Displays movie poster, title, and year
- Handles favorite toggle functionality
- Responsive design with hover effects
- Fallback UI for missing posters

#### MovieList & FavoritesList

- Responsive grid layouts
- Empty state handling
- Reusable movie card rendering
- Loading and error state management

### State Management

The app uses React's built-in state management with the following key states:

- `searchQuery` - Current search term
- `movies` - Array of search results
- `favorites` - Array of favorited movies
- `loading` - Loading state for API calls
- `error` - Error messages for user feedback
- `showFavoritesOnly` - View toggle state

### Data Persistence

Favorites are automatically saved to browser localStorage and restored when the app loads, ensuring your movie collection persists between sessions.

## 🎯 Usage

1. **Search for Movies**

   - Enter a movie title in the search bar
   - Press Enter or click the Search button
   - Browse through the results

2. **Manage Favorites**

   - Click the heart icon on any movie card to add it to favorites
   - Click the filled heart icon to remove from favorites
   - Use the "Favorites Only" toggle to view just your saved movies

3. **View Options**
   - Toggle between "Search Results" and "Favorites Only" views
   - See your favorites count in the header
   - Browse your collection anytime

## 🌟 Features Showcase

### Responsive Design

- **Mobile-first** approach with breakpoints for all devices
- **Grid layouts** that adapt: 1 column (mobile) → 4 columns (desktop)
- **Touch-friendly** buttons and interactions

### Error Handling

- **Network errors** - Clear messaging for connection issues
- **API errors** - Handles rate limits and invalid responses
- **No results** - Friendly messages when searches return empty
- **Invalid API key** - Helpful setup instructions

### Performance Optimizations

- **Duplicate prevention** - Efficient favorite checking
- **Minimal re-renders** - Optimized state updates
- **Image loading** - Graceful fallbacks for missing posters
- **API efficiency** - Proper query encoding and error handling

## 🚦 API Rate Limits

The free OMDb API tier includes:

- **1,000 requests per day**
- **Rate limiting** may apply for rapid requests

For production use, consider upgrading to a paid plan for higher limits.

## 🔒 Environment Variables (Production)

For production deployment, store your API key securely:

```bash
# .env file
REACT_APP_OMDB_API_KEY=your-api-key-here
```

Then update the code:

```javascript
const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OMDb API](http://www.omdbapi.com/) for providing movie data
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Lucide](https://lucide.dev/) for the beautiful icons
- [React](https://reactjs.org/) team for the amazing framework

## 📞 Support

If you encounter any issues or have questions:

1. Check the API key configuration
2. Verify your internet connection
3. Review browser console for error messages
4. Check OMDb API status and rate limits

---

**Happy movie hunting! 🍿**

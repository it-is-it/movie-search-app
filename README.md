# Movie Search & Favorites App 🎬

A React-based movie search and favorites system built using **Ant Design** for UI components and styled with **Tailwind CSS**. Developed as part of the **Front-End Developer Assessment** by Leo Club of Kathmandu Marigold under the CareerBridge Internship/Mentorship Campaign.

## 🔗 Live Demo

[Click here to view the live app](https://movie-search-app.vercel.app/)

---

## ✨ Features

- 📋 Display a list of all movies in a responsive table
- 🟢 Color-coded movie types (Admin User / System User)
- 🔍 View user details in a read-only form
- ✏️ Edit and update user details
- ➕ Create new users with validation
- ❌ Delete existing users with confirmation popups
- 🚦 Route-based navigation for Create / View / Edit pages
- ✅ Form validation for required fields

---

## 🛠️ Tech Stack

- **Frontend Framework:** React
- **Styling:** Tailwind CSS

---

## 🧑‍💻 User Schema

Each movie profile includes:

| Field      | Type   | Description                                |
| ---------- | ------ | ------------------------------------------ |
| `id`       | Number | Auto-generated unique ID                   |
| `title`    | String | Movie's title                              |
| `year`     | String | Movie's year                               |
| `director` | String | Movie's director                           |
| `genre`    | Enum   | Action / Comedy / Drama / Horror / Romance |

---

## 📂 Pages & Routes

| Route             | Description                       |
| ----------------- | --------------------------------- |
| `/`               | Movie list with table and actions |
| `/movie/create`   | Form to create a new movie        |
| `/movie/view/:id` | Read-only movie details           |
| `/movie/edit/:id` | Editable movie details and update |

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18 (preferably latest LTS)
- npm or yarn

### Installation

```bash
git clone https://github.com/it-is-it/movie-search-app.git
cd movie-search-app
npm install
npm start
```

---

## 📁 Project Structure (Sample)

```
movie-search-app/
├── public/
│   ├── screenshots/
│   └── index.html
├── src/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── pages/
│   ├── App.js
│   └── index.js
├── tailwind.config.js / bootstrap.css
├── package.json
└── README.md
```

### 👨‍💻 Developed by: Ishwor Timalsina

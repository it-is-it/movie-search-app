import React from "react";

const SearchBar = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
  return (
    <form onSubmit={onSearchSubmit} className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search movies..."
        className="p-2 border border-gray-300 rounded w-full"
      />
    </form>
  );
};

export default SearchBar;

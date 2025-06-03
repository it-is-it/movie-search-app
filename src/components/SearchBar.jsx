import { SearchOutlined } from "@ant-design/icons";

const SearchBar = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
  return (
    <form
      onSubmit={onSearchSubmit}
      className="mb-4 d-flex justify-content-center align-items-center"
    >
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search movies..."
        className="p-2 border border-gray-300 rounded w-1/2 mr-2"
      />
      <button type="submit" className="p-2 w-12 bg-blue-500 text-white rounded">
        <SearchOutlined className="text-white" />
      </button>
    </form>
  );
};

export default SearchBar;

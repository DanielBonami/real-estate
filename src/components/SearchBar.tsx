const SearchBar = () => {
    return (
      <div className="w-full flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search properties..."
          className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>
    );
  };
  
  export default SearchBar;  
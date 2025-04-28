import React, { useState } from "react";
import { LuSearch, LuX } from "react-icons/lu";

export default function SearchBar({ onClose }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchTerm);
    // For demonstration, we'll just close the search bar
    onClose();
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="flex items-center">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2 pl-10 pr-4 border-b-2 border-secondary bg-transparent focus:outline-none text-neutral-white"
            autoFocus
          />
          <LuSearch
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-neutral-light"
            size={20}
          />
        </div>
        <button
          type="submit"
          className="ml-2 rounded-xl px-4 py-2 font-montserrat hover:bg-rose hover:text-white transition-all duration-300 "
        >
          Search
        </button>
        <button
          type="button"
          onClick={onClose}
          className="ml-2 text-neutral-white hover:text-secondary transition-colors"
        >
          <LuX size={20} />
        </button>
      </form>
    </div>
  );
}

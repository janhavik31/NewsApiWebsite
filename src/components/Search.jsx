import React, { useState } from "react";

function Search({ setSearchValue }) {
  const [inputValue, setInputValue] = useState(""); 

  const handleInputChange = (event) => {
    setInputValue(event.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setSearchValue(inputValue.trim()); // Call setSearchValue with the trimmed input value
  };

  return (
    <form
      onSubmit={handleSubmit} // Call handleSubmit when the form is submitted
      className="max-w-[1240px] mx-auto rounded-xl bg-[#4d4a4a] shadow-lg p-8 text-gray-800 relative overflow-hidden my-7"
    >
      <div className="relative mt-1">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange} // Call handleInputChange when input changes
          className=" text-lg w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
          placeholder="Search with one word eg.'anime' &  Wait a sec😊"
          aria-label="Search"
        />

        <button
          type="submit" // Submit the form when button is clicked
          className="block w-7 h-7 text-center text-2xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors font-[poppins] mx-4"
        >
          <i className="mdi mdi-magnify"></i>
        </button>
      </div>
      <div className="absolute top-0 left-0 w-full h-2 flex">
        <div className="h-2 bg-blue-500 flex-1"></div>
        <div className="h-2 bg-red-500 flex-1"></div>
        <div className="h-2 bg-yellow-500 flex-1"></div>
        <div className="h-2 bg-blue-500 flex-1"></div>
        <div className="h-2 bg-green-500 flex-1"></div>
        <div className="h-2 bg-red-500 flex-1"></div>
      </div>
    </form>
  );
}

export default Search;

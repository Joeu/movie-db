import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (): void => {
    console.log("run search with: " + inputValue);
    setInputValue("");
  };

  return (
    <div className="container">
      <input
        id="search-input"
        type="text"
        onChange={handleChange}
        value={inputValue}
      />
      <span className="container__icon" onClick={handleSearch}>
        <AiOutlineSearch color="gray" size={24} />
      </span>
    </div>
  );
};

export default SearchBar;

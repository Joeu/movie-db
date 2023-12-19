import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (): void => {
    if (inputValue) {
      navigate(`/results?query=${inputValue}`);
      setInputValue("");
    }
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

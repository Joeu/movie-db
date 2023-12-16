import React from "react";
import NavMenu from "../../components/NavMenu";
import SearchBar from "../../components/Searchbar";

const Header: React.FC = () => {
  return (
    <header>
      <NavMenu></NavMenu>
      <SearchBar></SearchBar>
    </header>
  );
};

export default Header;

import React from "react";
import NavMenu from "../../components/NavMenu";
import SearchBar from "../../components/Searchbar";

const Header: React.FC = () => {
  return (
    <header>
      <section>
        <NavMenu></NavMenu>
        <SearchBar></SearchBar>
      </section>
    </header>
  );
};

export default Header;

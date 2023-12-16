import React from "react";
import { Link } from "react-router-dom";

const NavMenu: React.FC = () => (
  <nav>
    {["Home", "WhatchList"].map((item, idx) => (
      <Link key={idx} to={item.toLowerCase()}>
        {item}
      </Link>
    ))}
  </nav>
);

export default NavMenu;

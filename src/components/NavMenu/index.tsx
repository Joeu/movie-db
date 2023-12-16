import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavMenu: React.FC = () => {
  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <nav>
      {["Home", "WhatchList"].map((item, idx) => (
        <Link
          key={idx}
          to={item.toLowerCase()}
          className={
            currentLocation === "/" + item.toLocaleLowerCase() ? "selected" : ""
          }
        >
          {item}
        </Link>
      ))}
    </nav>
  );
};

export default NavMenu;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { usePreferences } from "../../hooks/usePreferences";

const NavMenu: React.FC = () => {
  const location = useLocation();
  const ctx = usePreferences();
  const currentLocation = location.pathname;

  const handleToggleTheme = () => {
    ctx.toggleTheme();
  };

  return (
    <nav>
      {["Home", "WatchList"].map((item, idx) => (
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
      <button onClick={handleToggleTheme}>Change Theme</button>
    </nav>
  );
};

export default NavMenu;

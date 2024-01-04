import React from "react";
import { usePreferences } from "../../hooks/usePreferences";

const Footer: React.FC = () => {
  const ctx = usePreferences();

  const handleToggleTheme = () => {
    ctx.toggleTheme();
  };
  return (
    <footer>
      {" "}
      <button onClick={handleToggleTheme}>Change Theme</button>
    </footer>
  );
};

export default Footer;

import { createContext, useEffect, useState } from "react";

export const PreferencesContext = createContext({});

export const PreferencesProvider = (props: any) => {
  const [currentTheme, setCurrentTheme] = useState("dark");

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      currentTheme === "dark" ? "light" : "dark"
    );
  }, [currentTheme]);

  return (
    <PreferencesContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {props.children}
    </PreferencesContext.Provider>
  );
};

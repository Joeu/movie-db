import { createContext, useState } from "react";

export const PreferencesContext = createContext({});

export const PreferencesProvider = (props: any) => {
  const [currentTheme, setCurrentTheme] = useState("dark");

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <PreferencesContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {props.children}
    </PreferencesContext.Provider>
  );
};

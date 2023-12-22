import { useContext } from "react";
import { PreferencesContext } from "../contexts/PreferencesContext";

export const usePreferences = () => {
  const context: any = useContext(PreferencesContext);
  if (!context) {
    throw new Error("useDate must be used within a DateProvider");
  }
  return context;
};

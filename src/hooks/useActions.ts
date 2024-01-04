import { useContext } from "react";
import { ActionsContext } from "../contexts/ActionsContext";

export const useActions: any = () => {
  const context = useContext(ActionsContext);

  if (!context) {
    throw new Error("useActions must be used within a ActionsProvider");
  }

  return context;
};

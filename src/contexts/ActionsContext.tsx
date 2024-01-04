import { ReactNode, createContext, useEffect, useState } from "react";
import { ActionType } from "../types";
import { useLocation } from "react-router-dom";

export const ActionsContext = createContext({});

type ActionLocation = "general" | "watchlist" | "watched";

const actionMapping = (location: ActionLocation): ActionType[] | [] => {
  switch (location) {
    case "general":
      return ["watchlist"];
    case "watched":
      return [];
    case "watchlist":
      return ["remove", "watched"];
  }
};

export const ActionsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const location = useLocation();

  const [currentActions, setCurrentActions] =
    useState<ActionLocation>("general");

  const mappedActions = actionMapping(currentActions);

  useEffect(() => {
    if (
      location.pathname.includes("/home") ||
      location.pathname.includes("/movies")
    ) {
      setCurrentActions("general");
    }
  }, [location.pathname]);

  return (
    <ActionsContext.Provider value={{ mappedActions, setCurrentActions }}>
      {children}
    </ActionsContext.Provider>
  );
};

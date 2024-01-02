import { useContext } from "react";
import { NotificationsContext } from "../contexts/NotificationsContext";

const useSnackbar: any = () => {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a NotificationsProvider");
  }
  return context;
};

export default useSnackbar;

import { useState } from "react";
import Snackbar from "../components/Snackbar";

const useSnackbar = () => {
  const [snackbar, setSnackbar] = useState<React.ReactNode | null>(null);

  const handleClose = (e: any) => {
    e.stopPropagation();
    setSnackbar(null);
  };

  const showSnackbar = (type: "error" | "info", message: string) => {
    setSnackbar(
      <Snackbar type={type} message={message} onClose={handleClose} />
    );
  };

  return { snackbar, showSnackbar };
};

export default useSnackbar;

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

type SnackbarProps = {
  message: string;
  type: "error" | "info";
  onClose: (e: any) => void;
};

const Snackbar: React.FC<SnackbarProps> = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return ReactDOM.createPortal(
    <>
      {visible && (
        <div className="snackbar">
          <span>{message}</span>
          <button onClick={onClose}>Close</button>
        </div>
      )}
    </>,
    document.getElementById("main-content")!
  );
};

export default Snackbar;

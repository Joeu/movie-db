import { createContext, useState, useRef } from "react";
import Snackbar, { SnackbarMethods } from "../components/Snackbar";

export const NotificationsContext = createContext({});

export const NotificationsProvider = (props: any) => {
  const [content, setContent] = useState(null);
  const snackbarRef = useRef<SnackbarMethods>(null);

  const showNotification = (content: any) => {
    setContent(content);
    snackbarRef.current?.show();
  };

  const value = {
    content,
    showNotification,
  };

  return (
    <NotificationsContext.Provider value={value}>
      {props.children}
      <Snackbar ref={snackbarRef} content={content} />
    </NotificationsContext.Provider>
  );
};

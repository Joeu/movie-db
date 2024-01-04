import { createContext, useState, useRef, ReactNode } from "react";
import Snackbar, { SnackbarMethods } from "../components/Snackbar";

export const NotificationsContext = createContext({});

export const NotificationsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [content, setContent] = useState<string | null>(null);
  const snackbarRef = useRef<SnackbarMethods>(null);

  const showNotification = (content: string | null) => {
    setContent(content);
    snackbarRef.current?.show();
  };

  const value = {
    content,
    setContent,
    showNotification,
  };

  return (
    <NotificationsContext.Provider value={value}>
      {children}
      <Snackbar ref={snackbarRef} content={content} setContent={setContent} />
    </NotificationsContext.Provider>
  );
};

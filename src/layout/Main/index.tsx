import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/store";
import useSnackbar from "../../hooks/useSnackbar";

type MainProps = {
  children: React.ReactNode;
};

const Main = (props: MainProps) => {
  const { showNotification } = useSnackbar();

  const watchlistNotification = useSelector(
    (state: RootState) => state.watchlist.notification
  );

  useEffect(() => {
    showNotification(watchlistNotification);
  }, [showNotification, watchlistNotification]);

  return <main className="main-content">{props.children}</main>;
};

export default Main;

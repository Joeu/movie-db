import React, { forwardRef, useImperativeHandle, useState } from "react";
import { MdCheckCircle, MdClose, MdError } from "react-icons/md";
import { useDispatch } from "react-redux";
import { clearNotifications } from "../../reducers/slices/watchlist";

type SnackbarProps = {
  content: any;
  setContent: any;
};

export type SnackbarMethods = {
  show: () => void;
  hide: () => void;
};

const Snackbar: React.ForwardRefRenderFunction<
  SnackbarMethods,
  SnackbarProps
> = ({ content, setContent }, ref): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => {
    setIsVisible(false);
    setContent(null);
    dispatch(clearNotifications());
  };

  useImperativeHandle(ref, () => ({
    show: () => setIsVisible(true),
    hide: () => setIsVisible(false),
  }));

  return (
    <>
      {isVisible && (
        <div
          className={`snackbar ${isVisible ? "visible" : ""} ${content?.type} `}
        >
          <>
            <div className="message">
              {content?.type === "success" && <MdCheckCircle size={36} />}
              {content?.type === "error" && <MdError size={36} />}
              <span>{content?.message}</span>
            </div>
            <MdClose
              className="snackbar__close-btn"
              size={20}
              onClick={handleClose}
            />
          </>
        </div>
      )}
    </>
  );
};

export default forwardRef(Snackbar);

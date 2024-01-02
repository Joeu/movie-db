import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { MdCheckCircle, MdClose, MdError } from "react-icons/md";

type SnackbarProps = {
  content: any;
};

export type SnackbarMethods = {
  show: () => void;
  hide: () => void;
};

const Snackbar: React.ForwardRefRenderFunction<
  SnackbarMethods,
  SnackbarProps
> = ({ content }, ref): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsVisible(false);
  //   }, 3000);

  //   return () => clearTimeout(timeout);
  // });

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
              onClick={() => setIsVisible(false)}
            />
          </>
        </div>
      )}
    </>
  );
};

export default forwardRef(Snackbar);

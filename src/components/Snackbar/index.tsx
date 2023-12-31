import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { MdCheckCircle, MdError } from "react-icons/md";

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
  const { message, type } = content;

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
        <div className={`snackbar ${type}`}>
          <>
            <div className="message">
              {type === "success" && <MdCheckCircle size={36} />}
              {type === "error" && <MdError size={36} />}
              <span>{message}</span>
            </div>
            <button onClick={() => setIsVisible(false)}>X</button>
          </>
        </div>
      )}
    </>
  );
};

export default forwardRef(Snackbar);

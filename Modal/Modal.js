import {
  cloneElement,
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { createPortal } from "react-dom";

function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) handler();
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return ref;
}

const modalStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  borderRadius: "9px",
  boxShadow: "0 2.4rem 3.2rem rgba(0, 0, 0, 0.12)",
  padding: "3.2rem 4rem",
  transition: "all 0.5s",
};

const overlayStyles = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100vh",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(4px)",
  zIndex: "1000",
  transition: "all 0.5s",
};

const closeButtonStyles = {
  background: "none",
  border: "none",
  padding: "0.4rem",
  borderRadius: "5px",
  transform: "translateX(0.8rem)",
  transition: "all 0.2s",
  position: "absolute",
  top: "1.2rem",
  right: "1.9rem",
};

// const closeButtonHover = {
//   backgroundColor: "#f3f4f6",
// };

const svgStyles = {
  width: "2.4rem",
  height: "2.4rem",
  color: "#6b7280",
};

/* Sometimes we need both
    fill: '#6b7280',
    stroke: '#6b7280',
*/

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { close, openName } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (openName !== name) return null;

  return createPortal(
    <div style={overlayStyles}>
      <div style={modalStyles} ref={ref}>
        <button style={closeButtonStyles} onClick={close}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={svgStyles}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;

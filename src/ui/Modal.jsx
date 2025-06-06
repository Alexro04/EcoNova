import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";
import { LiaTimesSolid } from "react-icons/lia";

import useOutsideClick from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${(props) =>
    props.type === "carousel" &&
    css`
      background-color: var(--color-grey-100);
    `}
  ${(props) =>
    props.type !== "carousel" &&
    css`
      background-color: var(--color-grey-0);
      padding: 3.2rem 4rem;
    `}
 
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [selectedWindow, setSelectedWindow] = useState("");

  const closeWindow = () => setSelectedWindow("");
  const openWindow = setSelectedWindow;

  return (
    <ModalContext.Provider value={{ selectedWindow, closeWindow, openWindow }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { openWindow } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => openWindow(opens) });
}

function Window({ children, name, type }) {
  const { selectedWindow, closeWindow } = useContext(ModalContext);
  const ref = useOutsideClick(closeWindow);

  return (
    selectedWindow === name &&
    createPortal(
      <Overlay>
        <StyledModal ref={ref} type={type}>
          <Button onClick={closeWindow}>
            <LiaTimesSolid />
          </Button>
          {cloneElement(children, {
            onCloseWindow: closeWindow,
          })}
        </StyledModal>
      </Overlay>,
      document.body,
      "modal-window"
    )
  );
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;

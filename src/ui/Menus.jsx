import { createContext, useContext, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import styled from "styled-components";

import useOutsideClick from "../hooks/useOutsideClick";

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

// const StyledList = styled.ul`
//   position: fixed;

//   background-color: var(--color-grey-0);
//   box-shadow: var(--shadow-md);
//   border-radius: var(--border-radius-md);

//   right: ${(props) => props.position.x}px;
//   top: ${(props) => props.position.y}px;
// `;

const StyledList = styled.ul`
  position: absolute;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: -32px;
  top: 38px;
  z-index: 100;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const MenuContext = createContext();
function Menus({ children }) {
  const [currentOpen, setCurrentOpen] = useState("");
  const open = setCurrentOpen;
  const close = () => setCurrentOpen("");

  return (
    <MenuContext.Provider
      value={{
        currentOpen,
        open,
        close,
      }}>
      {children}
    </MenuContext.Provider>
  );
}

function Menu({ children }) {
  return <StyledMenu>{children}</StyledMenu>;
}

function Toogle({ id }) {
  const { currentOpen, open, close } = useContext(MenuContext);

  function handleClick() {
    currentOpen === "" || currentOpen != id ? open(id) : close();
  }

  return (
    <StyledToggle onClick={handleClick}>
      <HiDotsVertical />
    </StyledToggle>
  );
}

function List({ children, id }) {
  const { currentOpen, close } = useContext(MenuContext);
  const ref = useOutsideClick(close, false);

  return currentOpen === id && <StyledList ref={ref}>{children}</StyledList>;
}

function Button({ children, onClick }) {
  const { close } = useContext(MenuContext);

  function handleClick() {
    close();
    onClick();
  }
  return (
    <li>
      <StyledButton onClick={handleClick}>{children}</StyledButton>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toogle = Toogle;
Menus.List = List;
Menus.Button = Button;

export default Menus;

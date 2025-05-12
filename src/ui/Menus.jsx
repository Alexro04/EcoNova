import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
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

const StyledList = styled.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
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
  const [position, setPosition] = useState(null);
  const open = setCurrentOpen;
  const close = () => setCurrentOpen("");

  function updatePosition(el) {
    const rect = el?.closest("button").getBoundingClientRect();
    const position = {
      x: window.outerWidth - rect?.width - rect?.x - 24,
      y: rect?.height + rect?.y + 8,
    };
    setPosition(position);
    return position;
  }

  return (
    <MenuContext.Provider
      value={{
        currentOpen,
        open,
        close,
        position,
        updatePosition,
      }}>
      {children}
    </MenuContext.Provider>
  );
}

function Menu({ children }) {
  return <StyledMenu>{children}</StyledMenu>;
}

function Toogle({ id }) {
  const { currentOpen, open, close, updatePosition } = useContext(MenuContext);
  function handleClick(e) {
    updatePosition(e.target);
    currentOpen === "" || currentOpen != id ? open(id) : close();
  }

  return (
    <StyledToggle onClick={handleClick}>
      <HiDotsVertical />
    </StyledToggle>
  );
}

function List({ children, id }) {
  const { currentOpen, close, position, updatePosition } =
    useContext(MenuContext);
  const ref = useOutsideClick(close);

  const handleScroll = useCallback(() => {
    const position = updatePosition(ref.current);
    console.log(position);
  }, [updatePosition, ref]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    currentOpen === id &&
    createPortal(
      <StyledList position={position} ref={ref}>
        {children}
      </StyledList>,
      document.body,
      "cabin-menu"
    )
  );
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

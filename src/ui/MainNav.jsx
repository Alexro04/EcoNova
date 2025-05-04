import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineUsers,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineCog6Tooth,
  HiOutlineCalendarDateRange,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Link = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-grey-600);
    padding: 1.2rem 2.4rem;
    font-size: 1.6rem;
    border-radius: 8px;
  }

  &:hover,
  &:active,
  &.active {
    background-color: var(--color-grey-100);
    cursor: pointer;
    font-weight: 600;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-600);
  }

  &:active svg,
  &:hover svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <NavList>
      <Link to="/dashboard">
        <HiOutlineHome />
        <span>Home</span>
      </Link>
      <Link to="/cabins">
        <HiOutlineHomeModern />
        <span>Cabins</span>
      </Link>
      <Link to="bookings">
        <HiOutlineCalendarDateRange />
        <span>Bookings</span>
      </Link>
      <Link to="users">
        <HiOutlineUsers />
        <span>Users</span>
      </Link>
      <Link to="settings">
        <HiOutlineCog6Tooth />
        <span>Settings</span>
      </Link>
    </NavList>
  );
}

export default MainNav;

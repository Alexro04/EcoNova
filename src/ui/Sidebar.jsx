import {
  HiOutlineUsers,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineCog6Tooth,
  HiOutlineCalendarDateRange,
} from "react-icons/hi2";
import styled from "styled-components";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  padding: 32px 10px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  margin-top: 24px;
`;

const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: var(--color-grey-100);
  padding: 10px;
  font-size: 18px;
  border-radius: 8px;

  &:hover {
    background-color: var(--color-grey-200);
    cursor: pointer;
  }
  &.active {
    background-color: var(--color-grey-200);
    font-weight: 600;
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <Nav>
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
      </Nav>
    </StyledSidebar>
  );
}

export default Sidebar;

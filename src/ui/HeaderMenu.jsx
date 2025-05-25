import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser, HiUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../features/authentication/LogoutButton";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.6rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledMenu>
      <li>
        <UserAvatar />
      </li>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <LogoutButton />
      </li>
    </StyledMenu>
  );
}

export default HeaderMenu;

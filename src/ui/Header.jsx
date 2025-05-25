import styled from "styled-components";
import LogoutButton from "../features/authentication/LogoutButton";
import HeaderMenu from "./HeaderMenu";

const StyledHeading = styled.header`
  background-color: var(--color-grey-0);
  padding: 8px 24px;
`;

function Header() {
  return (
    <StyledHeading>
      <HeaderMenu />
    </StyledHeading>
  );
}

export default Header;

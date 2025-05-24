import styled from "styled-components";
import LogoutButton from "../features/authentication/LogoutButton";

const StyledHeading = styled.header`
  background-color: var(--color-grey-0);
`;

function Header() {
  return (
    <StyledHeading>
      <LogoutButton />
    </StyledHeading>
  );
}

export default Header;

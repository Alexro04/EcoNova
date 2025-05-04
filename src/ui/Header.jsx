import styled from "styled-components";

const StyledHeading = styled.header`
  background-color: var(--color-grey-0);
`;

function Header() {
  return (
    <StyledHeading>
      <h1>This is the real life</h1>
    </StyledHeading>
  );
}

export default Header;

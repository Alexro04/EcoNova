import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  padding: 2.8rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <nav>
        <MainNav />
      </nav>
    </StyledSidebar>
  );
}

export default Sidebar;

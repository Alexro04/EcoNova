import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Heading from "./Heading";
import Sidebar from "./Sidebar";

const Main = styled.main`
  background-color: var(--color-grey-50);
`;

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Heading />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;

import styled from "styled-components";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

import { useMoveBack } from "../hooks/useMoveBack";
import Empty from "../ui/Empty";
import Button from "../ui/Button";

const StyledPageNotFound = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4.8rem;
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Empty type="page" onClick={moveBack}>
        <p as="h3">Oops! We could'nt find this Page.</p>
        <Button size="large" variation="primary" onClick={moveBack}>
          <MdOutlineArrowBackIosNew /> Go Back
        </Button>
      </Empty>
    </StyledPageNotFound>
  );
}

export default PageNotFound;

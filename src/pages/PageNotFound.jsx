import styled from "styled-components";

import { useMoveBack } from "../hooks/useMoveBack";
import Empty from "../ui/Empty";
import Button from "../ui/Button";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Empty resource="Page" onClick={moveBack}>
        <Heading as="h3">Oops! We could'nt find this Page.</Heading>
        <Button size="large" variation="primary" onClick={moveBack}>
          <MdOutlineArrowBackIosNew /> Go Back
        </Button>
      </Empty>
    </StyledPageNotFound>
  );
}

export default PageNotFound;

import styled from "styled-components";
import Button from "./Button";
import { HiOutlineHome } from "react-icons/hi2";
import Heading from "./Heading";

const StyledEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 8rem;
    line-height: 6rem;
    margin-bottom: 2.5rem;
  }
  div {
    display: flex;
    flex-direction: column;

    button {
      margin-top: 12px;
      width: fit-content;
      display: flex;
      align-items: center;
      gap: 8px;
      border-radius: 8px;
    }
  }
`;

const Img = styled.img`
  width: 46rem;
  height: 46rem;
`;

function Empty({ resource, onClick }) {
  return (
    <StyledEmpty>
      <Img src="not-found.png" alt="Not Found" />
      <div>
        <h1>404 Error!</h1>
        <Heading as="h3">Oops! We could'nt find this {resource}</Heading>
        <Button size="medium" variation="primary" onClick={onClick}>
          <HiOutlineHome /> Return to home Page
        </Button>
      </div>
    </StyledEmpty>
  );
}

export default Empty;

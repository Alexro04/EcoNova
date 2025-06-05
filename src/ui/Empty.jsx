import styled, { css } from "styled-components";

const StyledEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.type === "page" &&
    css`
    h1 {
      font-size: 8rem;
      line-height: 6rem;
      margin-bottom: 2.5rem;
    }
    div {
      display: flex;
      flex-direction: column;
    `}

  button {
    margin-top: 12px;
    display: flex;
    align-items: center;
    gap: 4px;
    width: fit-content;
  }
`;

const Box = styled.div`
  /* box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

const Img = styled.img`
  width: 46rem;
  height: 46rem;
`;

function Empty({ children, type }) {
  return (
    <StyledEmpty>
      {type === "page" && <Img src="not-found.png" alt="Not Found" />}
      <Box>
        <h1>404 Error!</h1>
        {children}
      </Box>
    </StyledEmpty>
  );
}

export default Empty;

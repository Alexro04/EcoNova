import styled from "styled-components";
import Button from "./Button";
import GlobalStyle from "../styles/GlobalStyles";
import { HiHome, HiOutlineHome } from "react-icons/hi2";

const StyledErrorFallback = styled.main`
  height: 100dvh;
  background-color: var(--color-grey-50);
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Error = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    font-family: "Sono";
    margin-bottom: 3.2rem;
    color: var(--color-grey-500);
  }

  button {
    margin: auto;
    margin-top: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    width: fit-content;
    border-radius: 5px;
  }
`;

const Img = styled.img`
  height: 32rem;
`;

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <GlobalStyle />
      <StyledErrorFallback>
        <Img src="error-bot.png" />
        <Error>
          <h1>Ooops! An Error Occurred</h1>
          <p>{error.message}</p>
          <Button variation="primary" size="large" onClick={resetErrorBoundary}>
            <HiHome />
            Return Home
          </Button>
        </Error>
      </StyledErrorFallback>
    </>
  );
}

export default ErrorFallback;

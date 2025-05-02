import styled, { css } from "styled-components";

const Line = styled.div`
  display: flex;
  ${(props) =>
    props.type === "vertical" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
  ${(props) =>
    props.type === "horizontal" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

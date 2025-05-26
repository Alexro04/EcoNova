import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-weight: 800;
      font-size: 3rem;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-weight: 800;
      font-size: 2.8rem;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-weight: 600;
      font-size: 2.4rem;
    `}
    color: var(--color-grey-700)
`;

export default Heading;

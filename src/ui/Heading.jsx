import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-weight: 800;
      font-size: 3rem;
    `}
`;

export default Heading;

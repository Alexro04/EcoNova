import styled, { css } from "styled-components";

const sizes = {
  small: css`
    padding: 3px 1px;
    font-size: 1rem;
  `,
  medium: css`
    padding: 6px 2px;
    font-size: 2rem;
  `,
  large: css`
    padding: 8px 4px;
    font-size: 3rem;
  `,
};

const types = {
  primary: css``,
  secondary: css``,
  danger: css``,
};

const Button = styled.button`
  ${(props) => sizes[props.size]}
  ${(props) => types[props.type]}
  border: 1px solid var(--color-grey-200);
  background-color: var(--color-grey-0);
`;

Button.defaultProps = {
  size: "large",
};

export default Button;

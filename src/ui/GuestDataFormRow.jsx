import styled from "styled-components";
import Input from "./Input";
import { Children } from "react";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
`;

const Icon = styled.span`
  position: absolute;
  top: 40px;
  left: 10px;

  & svg {
    height: 24px;
    width: 24px;
    color: var(--color-brand-500);
  }
`;

const Error = styled.span`
  margin-left: 18px;
  font-size: 14px;
  color: var(--color-red-700);
`;

function GuestDataFormRow({ label, error, children, icon }) {
  return (
    <StyledFormRow>
      <span>
        <label id={children.props?.id}>{label}</label>
        {error && <Error>*{error}</Error>}
      </span>
      {children}
      <Icon>{icon}</Icon>
    </StyledFormRow>
  );
}

export default GuestDataFormRow;

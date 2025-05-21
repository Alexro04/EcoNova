import styled from "styled-components";

const StyledFormRowVertical = styled.div`
  display: grid;
  align-items: center;
  gap: 12px;
  padding: 12px 0px;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRowVertical({ children, label, error }) {
  return (
    <StyledFormRowVertical>
      <Label htmlFor={children.props.id}>{label}</Label>
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRowVertical>
  );
}

export default FormRowVertical;

import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmAction = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmAction({
  children,
  onConfirm,
  disabled,
  onCloseWindow,
  action,
}) {
  return (
    <StyledConfirmAction>
      {children}
      <div>
        <Button
          variation="secondary"
          size="medium"
          disabled={disabled}
          onClick={onCloseWindow}>
          Cancel
        </Button>
        <Button
          variation="danger"
          size="medium"
          disabled={disabled}
          onClick={onConfirm}>
          {action}
        </Button>
      </div>
    </StyledConfirmAction>
  );
}

export default ConfirmAction;

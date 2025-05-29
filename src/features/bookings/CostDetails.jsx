import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";

const StyledCostDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const CostRow = styled.div`
  font-size: 14px;
  font-style: italic;
  display: flex;
  justify-content: space-between;

  &:last-child {
    border-top: 1px solid var(--color-grey-300);
    padding-top: 8px;
    font-weight: 800;
  }
`;

function CostDetails({
  selectedCabin,
  includesBreakfast,
  bookingCost,
  totalCost,
  unitBreakfastPrice,
  breakfastPrice,
}) {
  return (
    <StyledCostDetails>
      <CostRow>
        <span>
          Booking Cost ({formatCurrency(selectedCabin.price)} per Night):
        </span>
        <span>{formatCurrency(bookingCost)}</span>
      </CostRow>
      <CostRow>
        <span>
          Extra Cost ({formatCurrency(unitBreakfastPrice)} per person for a
          night):
        </span>
        <span>
          {includesBreakfast ? (
            formatCurrency(breakfastPrice)
          ) : (
            <span>&mdash;</span>
          )}
        </span>
      </CostRow>
      <CostRow>
        <span>Total Cost:</span>
        <span>{formatCurrency(totalCost)}</span>
      </CostRow>
    </StyledCostDetails>
  );
}

export default CostDetails;

import styled from "styled-components";
import Input from "../../ui/Input";
import Checkbox from "../../ui/Checkbox";

const Select = styled.select`
  padding: 6px 12px;
  background-color: var(--color-grey-0);
`;

const SelectCabin = styled.div`
  display: grid;
  grid-template-columns: 18rem 1fr;
  align-items: center;
`;

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  & div {
    display: grid;
    gap: 8px;
    align-items: center;
  }
`;

const StyledBookForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
`;

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2rem 4rem;
`;

function BookCabinForm({
  selectedCabinId,
  setSelectedCabinId,
  cabins,
  numGuests,
  setNumGuests,
  numNights,
  includesBreakfast,
  setIncludesBreakfast,
}) {
  return (
    <StyledBookForm>
      <SelectCabin>
        <span>Select A Cabin</span>
        <Select
          onChange={(e) => setSelectedCabinId(e.target.value)}
          value={selectedCabinId}>
          {cabins.map((cabin) => (
            <option key={cabin._id} value={cabin._id}>
              {cabin.name}
            </option>
          ))}
        </Select>
      </SelectCabin>
      <StyledRow>
        <div>
          <span>Number of Guests</span>
          <Input
            id="numGuests"
            value={numGuests}
            onChange={(e) => setNumGuests(Number(e.target.value))}
          />
        </div>
        <div>
          <span>Duration of Stay</span>
          <Input
            disabled={true}
            value={`${numNights} ${numNights > 1 ? "nights" : "night"}`}
          />
        </div>
      </StyledRow>
      <Box>
        <Checkbox
          checked={includesBreakfast}
          onChange={() => setIncludesBreakfast((includes) => !includes)}
          id="breakfast">
          Add Breakfast Cost
        </Checkbox>
      </Box>
    </StyledBookForm>
  );
}

export default BookCabinForm;

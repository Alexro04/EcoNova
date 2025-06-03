import styled from "styled-components";
import Input from "../../ui/Input";
import Checkbox from "../../ui/Checkbox";

const Select = styled.select`
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  padding: 8px 12px;
  background-color: var(--color-grey-0);
`;

const SelectCabin = styled.div`
  display: grid;
  grid-template-columns: 14rem 1fr;
  align-items: center;
`;

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;

  & div {
    display: grid;
    gap: 4px;
    align-items: center;
  }
  & div input {
    min-width: 18rem;
  }
`;

const StyledBookForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 1.5rem 3rem;
  font-size: 14px;
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
        <label id="select-cabin">Select A Cabin</label>
        <Select
          id="select-cabin"
          onChange={(e) => setSelectedCabinId(e.target.value)}
          value={selectedCabinId}>
          {cabins?.map((cabin) => (
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
          Add breakfast cost
        </Checkbox>
      </Box>
    </StyledBookForm>
  );
}

export default BookCabinForm;

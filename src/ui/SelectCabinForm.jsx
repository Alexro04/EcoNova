import { useState } from "react";
import { DateRange, DateRangePicker } from "react-date-range";
import styled from "styled-components";

const DetailsForm = styled.div`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: 1fr 1fr;
`;

function SelectCabinForm() {
  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <DetailsForm>
      <DateRangePicker
        editableDateInputs={true}
        onChange={(item) => setDateState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={dateState}
        direction="vertical"
        showMonthArrow={false}
        // minDate={new Date()}
        // maxDate={new Date() + 10}
      />
    </DetailsForm>
  );
}

export default SelectCabinForm;

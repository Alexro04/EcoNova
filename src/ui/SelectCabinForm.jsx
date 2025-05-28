import { useEffect, useMemo, useState } from "react";
import { DateRange } from "react-date-range";
import styled from "styled-components";

import useCabin from "../features/cabins/useCabin";
import Spinner from "./Spinner";
import useSetting from "../features/settings/useSettings";
import getDaysBetweenDates from "../utils/getDaysBetweenDates";
import CostDetails from "../features/bookings/CostDetails";
import BookCabinForm from "../features/bookings/BookCabinForm";
import { addDays } from "date-fns";

const DetailsForm = styled.div`
  display: grid;
  /* gap: 3.2rem; */
  grid-template-columns: 1.4fr 1fr;
`;

const DateRangeContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px;
`;

const StyledCabinDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 24px;
`;

function SelectCabinForm({ setBookingData }) {
  const { data, isPending } = useCabin();
  const cabins = data?.data;
  const { settings } = useSetting();

  const [selectedCabinId, setSelectedCabinId] = useState(
    cabins ? cabins[0]?._id : ""
  );
  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [includesBreakfast, setIncludesBreakfast] = useState(false);
  const [numGuests, setNumGuests] = useState(1);

  const numNights =
    getDaysBetweenDates(dateState[0].startDate, dateState[0].endDate) + 1;
  const selectedCabin =
    cabins?.find((cabin) => cabin._id === selectedCabinId) || cabins?.at(0);

  const breakfastPrice = includesBreakfast
    ? settings?.breakfastPrice * numNights * numGuests
    : 0;
  const bookingCost = selectedCabin?.price * numNights * numGuests;
  const totalCost = breakfastPrice + bookingCost;

  const bookingData = useMemo(() => {
    return {
      checkInDate: dateState[0].startDate,
      checkOutDate: addDays(dateState[0].endDate, 1),
      numGuests,
      bookingCost,
      extraCost: breakfastPrice,
      cabinId: selectedCabinId,
    };
  }, [dateState, numGuests, bookingCost, breakfastPrice, selectedCabinId]);

  useEffect(
    function () {
      setBookingData(bookingData);
    },
    [bookingData, setBookingData]
  );

  if (isPending) return <Spinner />;

  return (
    <DetailsForm>
      <StyledCabinDetails>
        <BookCabinForm
          cabins={cabins}
          selectedCabinId={selectedCabin}
          includesBreakfast={includesBreakfast}
          numGuests={numGuests}
          numNights={numNights}
          setNumGuests={setNumGuests}
          setSelectedCabinId={setSelectedCabinId}
          setIncludesBreakfast={setIncludesBreakfast}
        />
        <CostDetails
          selectedCabin={selectedCabin}
          includesBreakfast={includesBreakfast}
          unitBreakfastPrice={settings?.breakfastPrice}
          totalCost={totalCost}
          bookingCost={bookingCost}
          breakfastPrice={breakfastPrice}
        />
      </StyledCabinDetails>

      <DateRangeContainer>
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDateState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={dateState}
          direction="horizontal"
          showMonthArrow={true}
          minDate={new Date()}
          maxDate={
            addDays(
              dateState[0].startDate,
              settings?.maxNightsPerBooking - 1
            ) || new Date()
          }
          // maxNightsPerBooking
        />
      </DateRangeContainer>
    </DetailsForm>
  );
}

export default SelectCabinForm;

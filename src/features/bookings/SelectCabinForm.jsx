import { useEffect, useMemo, useState } from "react";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import styled from "styled-components";

import useCabin from "../cabins/useCabin";
import Spinner from "../../ui/Spinner";
import useSetting from "../settings/useSettings";
import CostDetails from "./CostDetails";
import BookCabinForm from "./BookCabinForm";
import getDaysBetweenDates from "../../utils/getDaysBetweenDates";

const DetailsForm = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
`;

const DateRangeContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 0 0 0;
`;

const StyledCabinDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 0 0 52px;
`;

function SelectCabinForm({ setBookingData }) {
  const { data, isPending } = useCabin();
  const cabins = data?.data;
  const { settings, isLoading } = useSetting();

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
      cabinId: selectedCabin?._id,
    };
  }, [dateState, numGuests, bookingCost, breakfastPrice, selectedCabin?._id]);

  useEffect(
    function () {
      setBookingData(bookingData);
    },
    [bookingData, setBookingData]
  );

  if (isPending || isLoading) return <Spinner />;

  return (
    <DetailsForm>
      <StyledCabinDetails>
        <BookCabinForm
          cabins={cabins}
          selectedCabinId={selectedCabinId}
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
          showMonthArrow={true}
          minDate={new Date()}
          maxDate={
            settings?.maxNightsPerBooking
              ? addDays(
                  dateState[0].startDate,
                  settings?.maxNightsPerBooking - 1
                ) || new Date()
              : undefined
          }
        />
      </DateRangeContainer>
    </DetailsForm>
  );
}

export default SelectCabinForm;

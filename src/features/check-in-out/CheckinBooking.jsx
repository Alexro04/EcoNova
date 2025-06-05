import styled from "styled-components";
import BookingDataBox from "../bookings/BookingDataBox";

import Line from "../../ui/Line";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Checkbox from "../../ui/Checkbox";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useEffect, useState } from "react";
import useBooking from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import useSetting from "../settings/useSettings";
import useCheckIn from "./useCheckIn";
import { getDaysBetweenDates } from "../../utils/helpers";

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [hasPaid, setHasPaid] = useState(false);
  const [includesBreakfast, setIncludesBreakfast] = useState(false);
  const moveBack = useMoveBack();

  const { booking, isPending } = useBooking();
  const { settings, isLoading: isLoadingSettings } = useSetting();
  const { checkin, isCheckingin } = useCheckIn();

  const {
    _id: id,
    numGuests,
    extraCost,
    checkInDate,
    checkOutDate,
    hasPaid: hasPaidBooking,
    status,
  } = booking || {};
  const numNights = getDaysBetweenDates(checkOutDate, checkInDate);
  const breakfastPrice = settings?.breakfastPrice * numNights * numGuests;

  useEffect(
    function () {
      if (hasPaidBooking) setHasPaid(hasPaidBooking);
      if (extraCost) setIncludesBreakfast(true);
    },
    [hasPaidBooking, extraCost]
  );

  function handleCheckin() {
    if (!hasPaid) return;
    if (includesBreakfast) {
      checkin({ bookingId: id, extras: { extraCost: breakfastPrice } });
    } else {
      checkin({ bookingId: id });
    }
  }

  if (isPending || isLoadingSettings) return <Spinner />;

  return (
    <>
      <Line type="horizontal">
        <Heading as="h1">Check in booking #{id}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Line>

      <BookingDataBox
        booking={booking}
        includesBreakfast={includesBreakfast}
        breakfastPrice={breakfastPrice}
      />

      <Box>
        <Checkbox
          checked={includesBreakfast}
          onChange={() => {
            setIncludesBreakfast((breakfast) => !breakfast);
            if (!includesBreakfast) setHasPaid(false);
          }}
          disabled={extraCost > 0}
          id="breakfast">
          Check this to include breakfast in this booking
        </Checkbox>
      </Box>

      <Box>
        <Checkbox
          checked={hasPaid}
          onChange={() => setHasPaid((paid) => !paid)}
          disabled={hasPaid}
          id="confirm-payment">
          Check This box to confirm <strong>complete payment</strong> for this
          booking
        </Checkbox>
      </Box>

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button
            variation="primary"
            size="medium"
            onClick={handleCheckin}
            disabled={!hasPaid || isCheckingin}>
            Check in booking #{id}
          </Button>
        )}

        <Button variation="secondary" size="medium" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;

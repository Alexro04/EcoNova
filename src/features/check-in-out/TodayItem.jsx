import styled from "styled-components";
import { Link } from "react-router-dom";

import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import CheckoutButton from "../check-in-out/CheckoutButton";
import { getCountryCode, getDaysBetweenDates } from "../../utils/helpers";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

function TodayItem({ booking }) {
  const {
    _id: id,
    guestId: { fullname, nationality },
    status,
    checkInDate,
    checkOutDate,
  } = booking;
  const numNights = getDaysBetweenDates(checkOutDate, checkInDate);

  const countryCode = getCountryCode(nationality);

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}
      <Flag
        src={`https://flagcdn.com/20x15/${
          countryCode === "unknown" ? "ng" : countryCode.toLowerCase()
        }.png`}
      />
      <Guest>{fullname}</Guest>
      <div>{numNights}</div>
      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/check-in/${id}`}>
          check in
        </Button>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;

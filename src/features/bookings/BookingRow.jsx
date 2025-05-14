import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingRow({
  booking: {
    _id: bookingId,
    createdAt,
    checkInDate,
    checkOutDate,
    bookingCost,
    guestId,
    cabinId,
    status = "unconfirmed",
  },
}) {
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <Table.Row>
      <Cabin>{cabinId?.name || "Test"}</Cabin>

      <Stacked>
        <span>{guestId.fullname}</span>
        <span>{guestId.email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(checkInDate))
            ? "Today"
            : formatDistanceFromNow(checkInDate)}{" "}
          &rarr; {6} night stay
        </span>
        <span>
          {format(new Date(checkInDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(checkOutDate), "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(bookingCost)}</Amount>
    </Table.Row>
  );
}

export default BookingRow;

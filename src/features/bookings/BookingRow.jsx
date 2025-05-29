import styled from "styled-components";
import { format, isToday } from "date-fns";
import { useNavigate } from "react-router-dom";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiOutlineTrash,
} from "react-icons/hi2";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import Menus from "../../ui/Menus";
import useCheckout from "../check-in-out/useCheckout";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useDeleteBooking from "./useDeleteBooking";
import getDaysBetweenDates from "../../utils/getDaysBetweenDates";

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
    checkInDate,
    checkOutDate,
    bookingCost,
    guestId,
    cabinId,
    status,
  },
}) {
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  const navigate = useNavigate();
  const { checkout, isCheckingout } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();

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
          &rarr; {getDaysBetweenDates(checkOutDate, checkInDate)} night stay
        </span>
        <span>
          {format(new Date(checkInDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(checkOutDate), "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(bookingCost)}</Amount>

      <Menus.Container>
        <Modal>
          <Menus.Menu>
            <Menus.Toogle id={bookingId} />
            <Menus.List id={bookingId}>
              <Menus.Button
                icon={<HiEye />}
                label="View Details"
                onClick={() => navigate(`/booking/${bookingId}`)}
              />
              {status === "unconfirmed" && (
                <Menus.Button
                  icon={<HiArrowDownOnSquare />}
                  label="Check in"
                  onClick={() => navigate(`/check-in/${bookingId}`)}
                />
              )}
              {status === "checked-in" && (
                <Menus.Button
                  icon={<HiArrowUpOnSquare />}
                  label="Check out"
                  disabled={isCheckingout}
                  onClick={() => checkout(bookingId)}
                />
              )}
              <Modal.Open opens="delete-booking">
                <Menus.Button icon={<HiOutlineTrash />} label="Delete" />
              </Modal.Open>
            </Menus.List>
          </Menus.Menu>
          <Modal.Window name="delete-booking">
            <ConfirmDelete
              resourceName="Booking"
              onConfirm={() => deleteBooking(bookingId)}
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal>
      </Menus.Container>
    </Table.Row>
  );
}

export default BookingRow;

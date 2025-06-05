import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useMoveBack } from "../../hooks/useMoveBack";
import BookingDataBox from "./BookingDataBox";
import Line from "../../ui/Line";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import useBooking from "./useBooking";
import Spinner from "../../ui/Spinner";
import CheckoutButton from "../check-in-out/CheckoutButton";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useDeleteBooking from "./useDeleteBooking";
import Empty from "../../ui/Empty";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isPending } = useBooking();
  const { _id: id, status } = booking || {};
  const navigate = useNavigate();
  const { deleteBooking, isDeleting } = useDeleteBooking();

  const moveBack = useMoveBack();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  if (isPending) return <Spinner />;

  if (!booking)
    return (
      <Empty resource="Booking" type="resource">
        <p>We could'nt find this Booking</p>
      </Empty>
    );
  return (
    <>
      <Line type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{id}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Line>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button
            variation="primary"
            size="medium"
            onClick={() => navigate(`/check-in/${id}`)}>
            Check in
          </Button>
        )}
        {status === "checked-in" && <CheckoutButton bookingId={id} />}

        <Modal>
          <Modal.Open opens="delete-booking">
            <Button variation="danger" size="medium">
              Delete
            </Button>
          </Modal.Open>
          <Modal.Window name="delete-booking">
            <ConfirmDelete
              resourceName="Booking"
              onConfirm={() => {
                deleteBooking(id);
                navigate("/bookings");
              }}
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;

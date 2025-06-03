import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Heading from "../ui/Heading";
import Line from "../ui/Line";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

function Bookings() {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate("/create-booking");
  }

  return (
    <>
      <Line type="horizontal">
        <Heading as="h1">Bookings</Heading>
        <BookingTableOperations />
      </Line>
      <BookingTable />
      <Button variation="primary" size="medium" onClick={handleClick}>
        Book a Cabin
      </Button>
    </>
  );
}

export default Bookings;

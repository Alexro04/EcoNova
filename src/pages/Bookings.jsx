import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Heading from "../ui/Heading";
import Line from "../ui/Line";

function Bookings() {
  return (
    <>
      <Line type="horizontal">
        <Heading as="h1">Bookings</Heading>
        <BookingTableOperations />
      </Line>
      <BookingTable />
    </>
  );
}

export default Bookings;

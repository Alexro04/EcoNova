import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency, getDaysBetweenDates } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const sales = bookings?.reduce(
    (acc, booking) => acc + booking.bookingCost,
    0
  );

  const occupancy = confirmedStays?.reduce(
    (acc, stay) =>
      getDaysBetweenDates(stay.checkOutDate, stay.checkInDate) + acc,
    0
  );
  const occupancyRate = (occupancy / (numDays * cabinCount)) * 100;

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        title="Bookings"
        value={bookings?.length}
        color="blue"
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        title="Sales"
        value={formatCurrency(sales)}
        color="green"
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        title="Check ins"
        value={confirmedStays?.length}
        color="indigo"
      />
      <Stat
        icon={<HiOutlineChartBar />}
        title="Occupancy rate"
        value={`${occupancyRate.toFixed(2)}%`}
        color="yellow"
      />
    </>
  );
}

export default Stats;

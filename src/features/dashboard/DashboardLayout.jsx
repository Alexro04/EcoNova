import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import useCabin from "../cabins/useCabin";
import Spinner from "../../ui/Spinner";
import DurationChart from "./DurationChart";
import SalesChart from "./SalesChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledLayout = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 36rem auto;
`;

function DashboardLayout() {
  const { bookings, isPending } = useRecentBookings();
  const {
    confirmedStays,
    numDays,
    isPending: isPendingStays,
  } = useRecentStays();
  const { cabins, isPending: isPendingCabins } = useCabin();

  if (isPending || isPendingCabins || isPendingStays) return <Spinner />;

  return (
    <StyledLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledLayout>
  );
}

export default DashboardLayout;

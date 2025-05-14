import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

export default function useBookings() {
  const { data: bookings, isPending } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  console.log({ bookings: bookings?.data, isPending });
  return { bookings: bookings?.data, isPending };
}

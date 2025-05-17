import { useParams } from "react-router-dom";
import { getBooking } from "../../services/apiBookings";
import { useQuery } from "@tanstack/react-query";

export default function useBooking() {
  const { bookingId } = useParams();

  const { data: booking, isPending } = useQuery({
    queryKey: ["booking"],
    queryFn: () => getBooking(bookingId),
  });

  return { booking: booking?.data, isPending };
}

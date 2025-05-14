import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export default function useBookings() {
  const [searchParams] = useSearchParams();

  // for API side filtering
  const sortBy = searchParams.get("sortBy") || "checkInDate";
  const sortOrder = searchParams.get("sortOrder") || "asc";
  const status = searchParams.get("status");

  const filter =
    !status || status === "all" ? null : { name: "status", value: status };

  const sort = { sortBy, sortOrder };

  const { data: bookings, isPending } = useQuery({
    queryKey: ["bookings", filter, sort],
    queryFn: () => getBookings({ filter, sort }),
  });

  return { bookings: bookings?.data, isPending };
}

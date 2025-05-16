import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_LIMIT } from "../../utils/constants";

export default function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // for API side filtering and sorting
  const sortBy = searchParams.get("sortBy") || "checkInDate";
  const sortOrder = searchParams.get("sortOrder") || "asc";
  const status = searchParams.get("status");

  //pagination
  const page = searchParams.get("page");

  const filter =
    !status || status === "all" ? null : { name: "status", value: status };

  const sort = { sortBy, sortOrder };

  const { data: bookings, isPending } = useQuery({
    queryKey: ["bookings", filter, sort, page],
    queryFn: () => getBookings({ filter, sort, page }),
  });

  const maxPage = Math.ceil(bookings?.count / PAGE_LIMIT);

  if (page < maxPage)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sort, page + 1],
      queryFn: () => getBookings({ filter, sort, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sort, page - 1],
      queryFn: () => getBookings({ filter, sort, page: page - 1 }),
    });

  return { bookings: bookings?.data, isPending, count: bookings?.count };
}

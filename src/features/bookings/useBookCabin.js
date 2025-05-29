import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBooking as createBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useBookCabin() {
  const queryClient = useQueryClient();
  const {
    mutate: createBooking,
    isPending,
    error,
  } = useMutation({
    mutationFn: (data) =>
      toast.promise(createBookingApi(data), {
        success: "Cabin Booked successfully",
        loading: "Booking cabin...",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: () => toast.error("An error occured while booking cabin"),
  });

  return { createBooking, isPending, error };
}

export default useBookCabin;

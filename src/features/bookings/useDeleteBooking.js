import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export default function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isPending: isDeleting } = useMutation({
    mutationFn: (bookingId) =>
      toast.promise(deleteBookingApi(bookingId), {
        success: `Booking #${bookingId} deleted successfully`,
        loading: `Deleting booking #${bookingId}...`,
        error: `Error deleting booking #${bookingId}`,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });

  return { deleteBooking, isDeleting };
}

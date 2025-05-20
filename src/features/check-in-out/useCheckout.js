import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useCheckout() {
  const queryClient = useQueryClient();
  const { mutate: checkout, isPending: isCheckingout } = useMutation({
    mutationFn: (bookingId) =>
      toast.promise(
        updateBooking(bookingId, {
          status: "checked-out",
        }),
        {
          success: "Guest checked out successfully",
          loading: "Checking guest out...",
          error: "Error checking out",
        }
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ active: true });
    },
  });
  return { checkout, isCheckingout };
}

export default useCheckout;

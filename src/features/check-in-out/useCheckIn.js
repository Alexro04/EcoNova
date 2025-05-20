import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useCheckIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isPending: isCheckingin } = useMutation({
    mutationFn: ({ bookingId, extras }) =>
      toast.promise(
        updateBooking(bookingId, {
          status: "checked-in",
          hasPaid: true,
          ...extras,
        }),
        {
          success: "Guest checked in successfully",
          loading: "Checking guest in...",
          error: "Error checking in",
        }
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ active: true });
      navigate(`/booking/${data.data._id}`);
    },
  });
  return { checkin, isCheckingin };
}

export default useCheckIn;

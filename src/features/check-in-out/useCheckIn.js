import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useCheckIn() {
  const queryClient = useQueryClient();
  const { mutate: checkin, isPending: isCheckingin } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      toast.promise(
        updateBooking(bookingId, {
          status: "checked-in",
          hasPaid: true,
          ...breakfast,
        })
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ active: true });
    },
  });
  return { checkin, isCheckingin };
}

export default useCheckIn;

import { useMutation } from "@tanstack/react-query";
import { createGuest as createGuestApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useCreateGuest() {
  const {
    mutate: createGuest,
    isPending,
    error,
  } = useMutation({
    mutationFn: (data) => createGuestApi(data),
    onError: () => toast.error("An error occured while creating guest"),
  });

  return { createGuest, isPending, error };
}

export default useCreateGuest;

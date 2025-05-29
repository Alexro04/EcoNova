import { useMutation } from "@tanstack/react-query";
import { createGuest as createGuestApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useCreateGuest() {
  const {
    mutate: createGuest,
    isPending,
    error,
  } = useMutation({
    mutationFn: (data) =>
      toast.promise(createGuestApi(data), {
        loading: "Uploading guest data...",
      }),
    onError: () => toast.error(`An error occured while uploading guest data`),
  });

  return { createGuest, isPending, error };
}

export default useCreateGuest;

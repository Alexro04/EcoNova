import toast from "react-hot-toast";
import { addCabin } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (data) =>
      toast.promise(() => addCabin(data), {
        success: "Cabin uploaded successfully",
        loading: "Uploading cabin...",
        error: "Cabin could not be uploaded",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
  });

  return { mutate, isPending };
}

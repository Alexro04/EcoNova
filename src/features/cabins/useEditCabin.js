import toast from "react-hot-toast";
import { editCabin } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEditCabin(cabinId) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (data) =>
      toast.promise(() => editCabin(data, cabinId), {
        success: "Cabin updated successfully",
        loading: "Updating cabin...",
        error: "Cabin could not be updated",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
  });

  return { mutate, isPending };
}

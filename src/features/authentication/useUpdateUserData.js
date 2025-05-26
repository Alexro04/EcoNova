import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserData } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useUpdateUserData() {
  const queryClient = useQueryClient();

  const { mutate: updateData, isPending } = useMutation({
    mutationFn: ({ update, userId }) =>
      toast.promise(() => updateUserData(update, userId), {
        success: "Data updated successfully",
        loading: "Updating data...",
        error: "Data could not be updated",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { updateData, isPending };
}

export default useUpdateUserData;

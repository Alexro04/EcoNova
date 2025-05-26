import { useMutation } from "@tanstack/react-query";
import { updateUserPassword } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useAuth } from "./useAuth";

function useUpdatePassword() {
  const {
    user_data: { id },
  } = useAuth();

  const { mutate: updatePassword, isPending } = useMutation({
    mutationFn: (update) =>
      toast.promise(() => updateUserPassword(update, id), {
        success: "Password updated successfully",
        loading: "Updating password...",
        error: "An error occured. Try again",
      }),
  });

  return { updatePassword, isPending };
}

export default useUpdatePassword;

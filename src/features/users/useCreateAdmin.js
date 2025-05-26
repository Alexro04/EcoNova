import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useCreateAdmin() {
  const queyClient = useQueryClient();
  const { mutate: createAdmin, isPending } = useMutation({
    mutationFn: (data) =>
      toast.promise(
        createUser({ ...data, role: "admin", password: "adminuser" }),
        {
          success: "Admin user registered successfully",
          loading: "Registering Admin...",
          error: "User could not be registered",
        }
      ),
    onSuccess: () => {
      queyClient.invalidateQueries({ queryKey: ["admins"] });
    },
  });

  return { createAdmin, isPending };
}

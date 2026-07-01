import api from "@/utils/axios.config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useUserState } from "../../zustand/user.state";
const { setUser, setIsLoggedIn, setToken, reset } = useUserState.getState();

const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const res = await api.post(`/user/login/`, payload);
  return res.data;
};
const register = async (payload: RegisterPayload): Promise<LoginResponse> => {
  const res = await api.post(`/user/register/`, payload);
  return res.data;
};
export const logout = async () => {
  reset(); // Reset user store
  localStorage.removeItem("user-state"); // Clear persisted user state
  window.location.reload(); // Optional: Refresh page to clear UI state
  toast.success("Logged out successfully!"); // Show logout success message
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      setToken(data.token);
      setUser(data.user);
      setIsLoggedIn(true);
      toast.success("Login successfully");
    },
    onError: (error: AxiosError<LoginError>) => {
      // Check if this is an Axios error with response data
      console.log(error);
      if (error.response) {
        const errorData = error.response.data;
        const errorMessage = errorData.non_field_errors || "Login failed";
        toast.error(errorMessage);
      } else {
        toast.error("Login Failed");
      }
    },
  });
};
export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: register,
    onSuccess: (response) => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success(`Logged in Successfully... ${response.user.first_name}`);
      setUser(response.user);
      setIsLoggedIn(true);
      setToken(response.token);
    },
    onError: (error: AxiosError<RegisterError>) => {
      if (error.response?.data) {
        const errorData = error.response.data;

        Object.values(errorData).forEach((messages) => {
          if (Array.isArray(messages)) {
            messages.forEach((message) => {
              toast.error(message);
            });
          }
        });
      } else {
        toast.error("Registration Failed!");
      }
    },
  });
};

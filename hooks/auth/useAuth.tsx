import api from "@/utils/axios.config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
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
  Cookies.set("auth_token", "");
  Cookies.set("user_role", "");
  localStorage.removeItem("user-state"); // Clear persisted user state
  // window.location.reload(); // Optional: Refresh page to clear UI state
  toast.success("Logged out successfully!"); // Show logout success message
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      setToken(data.token);
      Cookies.set("auth_token", data.token, {
        expires: 1,
        secure: true,
        // sameSite: "Strict",
      });
      Cookies.set("user_role", data.user.role, {
        expires: 1,
        secure: true,
        // sameSite: "Strict",
      });
      setUser(data.user);
      setIsLoggedIn(true);
      toast.success("Login successfully");
      router.refresh();
    },
    onError: (error: AxiosError<LoginError>) => {
      // Check if this is an Axios error with response data
      console.log(error);
      if (error.response) {
        const errorData = error.response.data;
        if (errorData.non_field_errors) {
          const errorMessage = errorData.non_field_errors;
          toast.error(errorMessage);
        }
        if (errorData.detail) {
          const errorMessage = errorData.detail;

          toast.error(errorMessage);
        }
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
      Cookies.set("auth_token", response.token, {
        expires: 7,
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("user_role", response.user.role, {
        expires: 7,
        secure: true,
      });
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

export const useGetUser = () => {
  const token = Cookies.get("auth_token");
  const response = useQuery<User>({
    queryKey: ["user-profile"],
    queryFn: async () => {
      const res = await api.get("/user/profile/");
      return res.data;
    },
    enabled: !!token,
  });
  useEffect(() => {
    if (response.data) {
      setUser(response.data);
    }
  }, [response.data]);

  return response;
};

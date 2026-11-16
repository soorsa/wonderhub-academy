import api from "@/utils/axios.config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
const createCategory = async (payload: CategoryPayload) => {
  const res = await api.post("/categories/", payload);
  return res.data;
};
const updateCategory = async (payload: CategoryPayload) => {
  const { slug, ...body } = payload;
  const res = await api.patch(`/categories/${slug}/`, body);
  return res.data;
};
const deleteCategory = async (slug: string) => {
  const res = await api.delete(`/categories/${slug}/`);
  return res.data;
};
const createTopic = async (payload: TopicPayload) => {
  const res = await api.post("/topics/", payload);
  return res.data;
};
const updateTopic = async (payload: TopicPayload) => {
  const { slug, ...body } = payload;
  const res = await api.patch(`/topics/${slug}/`, body);
  return res.data;
};
const deleteTopic = async (slug: string) => {
  const res = await api.delete(`/topics/${slug}/`);
  return res.data;
};

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
      queryClient.invalidateQueries({
        queryKey: ["topics"],
      });
      toast.success("Created category successfully");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      // Check if this is an Axios error with response data
      if (error.response) {
        const errorData = error.response.data;
        const errorMessage = errorData.detail || "Failed to create category";
        toast.error(errorMessage);
      } else {
        toast.error("Failed to create category");
      }
    },
  });
};
export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
      queryClient.invalidateQueries({
        queryKey: ["topics"],
      });
      toast.success("Updated category successfully");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      // Check if this is an Axios error with response data
      console.log(error);
      if (error.response) {
        const errorData = error.response.data;
        const errorMessage = errorData.detail || "Failed to update category";
        toast.error(errorMessage);
      } else {
        toast.error("Failed to update category");
      }
    },
  });
};
export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
      queryClient.invalidateQueries({
        queryKey: ["topics"],
      });
      toast.success("Deleted category successfully");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      // Check if this is an Axios error with response data
      console.log(error);
      if (error.response) {
        const errorData = error.response.data;
        const errorMessage = errorData.detail || "Failed to delete category";
        toast.error(errorMessage);
      } else {
        toast.error("Failed to delete category");
      }
    },
  });
};
export const useCreateTopic = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTopic,
    onSuccess: () => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
      queryClient.invalidateQueries({
        queryKey: ["topics"],
      });
      toast.success("Created topic successfully");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      // Check if this is an Axios error with response data
      console.log(error);
      if (error.response) {
        const errorData = error.response.data;
        const errorMessage = errorData.detail || "Failed to create topic";
        toast.error(errorMessage);
      } else {
        toast.error("Failed to create topic");
      }
    },
  });
};
export const useUpdateTopic = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTopic,
    onSuccess: () => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
      queryClient.invalidateQueries({
        queryKey: ["topics"],
      });
      toast.success("Updated topic successfully");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      // Check if this is an Axios error with response data
      console.log(error);
      if (error.response) {
        const errorData = error.response.data;
        const errorMessage = errorData.detail || "Failed to update topic";
        toast.error(errorMessage);
      } else {
        toast.error("Failed to update topic");
      }
    },
  });
};
export const useDeleteTopic = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTopic,
    onSuccess: () => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
      queryClient.invalidateQueries({
        queryKey: ["topics"],
      });
      toast.success("Deleted topic successfully");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      // Check if this is an Axios error with response data
      console.log(error);
      if (error.response) {
        const errorData = error.response.data;
        const errorMessage = errorData.detail || "Failed to delete topic";
        toast.error(errorMessage);
      } else {
        toast.error("Failed to delete topic");
      }
    },
  });
};

export const useCreateCourse = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: CoursePayload) => {
      const res = await api.post(`/courses/`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    },
    onSuccess: () => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
      // queryClient.invalidateQueries({
      //   queryKey: ["topics"],
      // });
      toast.success("Created course successfully");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      // Check if this is an Axios error with response data
      console.log(error);
      if (error.response) {
        const errorData = error.response.data;
        const errorMessage = errorData.detail || "Failed to create course";
        toast.error(errorMessage);
      } else {
        toast.error("Failed to create course");
      }
    },
  });
};

export const useEditCourse = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: CoursePayload) => {
      const { thumbnail, ...rest } = payload;
      const formattedPayload =
        typeof thumbnail !== "string" ? payload : { ...rest };
      const res = await api.patch(
        `/courses/${payload.slug}/`,
        formattedPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return res.data;
    },
    onSuccess: () => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
      // queryClient.invalidateQueries({
      //   queryKey: ["topics"],
      // });
      toast.success("Updated course successfully");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      // Check if this is an Axios error with response data
      console.log(error);
      if (error.response) {
        const errorData = error.response.data;
        const errorMessage = errorData.detail || "Failed to update course";
        toast.error(errorMessage);
      } else {
        toast.error("Failed to update course");
      }
    },
  });
};

export const useDeleteCourse = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (slug: string) => {
      const res = await api.delete(`/courses/${slug}/`);
      return res.data;
    },
    onSuccess: () => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
      queryClient.invalidateQueries({
        queryKey: ["topics"],
      });
      toast.success("Deleted course successfully");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      // Check if this is an Axios error with response data
      console.log(error);
      if (error.response) {
        const errorData = error.response.data;
        const errorMessage = errorData.detail || "Failed to delete course";
        toast.error(errorMessage);
      } else {
        toast.error("Failed to delete course");
      }
    },
  });
};

export const useCreateModule = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: ModulePayload) => {
      const res = await api.post(`/modules/`, payload);
      return res.data;
    },
    onSuccess: () => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["course-modules"],
      });
      queryClient.invalidateQueries({
        queryKey: ["modules"],
      });
      toast.success("Created module successfully");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      // Check if this is an Axios error with response data
      console.log(error);
      if (error.response) {
        const errorData = error.response.data;
        const errorMessage = errorData.detail || "Failed to create module";
        toast.error(errorMessage);
      } else {
        toast.error("Failed to create module");
      }
    },
  });
};
export const useCreateLesson = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: LessonPayload) => {
      const res = await api.post(`/lessons/`, payload);
      return res.data;
    },
    onSuccess: () => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["module-lessons"],
      });
      queryClient.invalidateQueries({
        queryKey: ["modules"],
      });
      queryClient.invalidateQueries({
        queryKey: ["lessons"],
      });
      toast.success("Created lesson successfully");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      // Check if this is an Axios error with response data
      console.log(error);
      if (error.response) {
        const errorData = error.response.data;
        const errorMessage = errorData.detail || "Failed to create lesson";
        toast.error(errorMessage);
      } else {
        toast.error("Failed to create lesson");
      }
    },
  });
};

export const useEditLesson = (slug: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: LessonPayload) => {
      const res = await api.patch(`/lessons/${slug}/`, payload);
      return res.data;
    },
    onSuccess: () => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["lessons"],
      });
      queryClient.invalidateQueries({
        queryKey: ["module-lessons"],
      });
      toast.success("Updated lessons successfully");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      // Check if this is an Axios error with response data
      console.log(error);
      if (error.response) {
        const errorData = error.response.data;
        const errorMessage = errorData.detail || "Failed to update lessons";
        toast.error(errorMessage);
      } else {
        toast.error("Failed to update lessons");
      }
    },
  });
};

export const useDeleteLesson = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (slug: string) => {
      const res = await api.delete(`/lesson/${slug}/`);
      return res.data;
    },
    onSuccess: () => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["lessons"],
      });
      queryClient.invalidateQueries({
        queryKey: ["topics"],
      });
      toast.success("Deleted lesson successfully");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      // Check if this is an Axios error with response data
      console.log(error);
      if (error.response) {
        const errorData = error.response.data;
        const errorMessage = errorData.detail || "Failed to delete lesson";
        toast.error(errorMessage);
      } else {
        toast.error("Failed to delete lesson");
      }
    },
  });
};
export const useDelete = (queries: string[]) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: DeletePayload) => {
      const res = await api.delete(`/${payload.api_path}/${payload.slug}/`);
      return res.data;
    },
    onSuccess: () => {
      // Refetch relevant data if needed
      queries.forEach((query) => {
        queryClient.invalidateQueries({
          queryKey: [query],
        });
      });
      toast.success("Deleted successfully");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      // Check if this is an Axios error with response data
      console.log(error);
      if (error.response) {
        const errorData = error.response.data;
        const errorMessage = errorData.detail || "Failed to delete";
        toast.error(errorMessage);
      } else {
        toast.error("Failed to delete");
      }
    },
  });
};

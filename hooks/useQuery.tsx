import api from "@/utils/axios.config";
import { useQuery } from "@tanstack/react-query";
import { ParamValue } from "next/dist/server/request/params";

export const useGetCategories = () => {
  return useQuery<PaginatedResponse<Category>>({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await api.get("/categories/");
      return res.data;
    },
  });
};
export const useGetAllTopics = () => {
  return useQuery<Topic[]>({
    queryKey: ["topics", "all"],
    queryFn: async () => {
      const res = await api.get(`/topics/?paginate=false`);
      return res.data;
    },
  });
};
export const useGetTopics = (params: Params) => {
  return useQuery<PaginatedResponse<Topic>>({
    queryKey: ["topics", params],
    queryFn: async () => {
      const res = await api.get(`/topics/`, { params });
      return res.data;
    },
  });
};

export const useGetCourses = <P extends Params>(params: P) => {
  return useQuery<ApiResponse<Course, P>>({
    // 1. Keep the params in the query key so React Query refetches when params change
    queryKey: ["courses", params],

    // 2. Pass params directly to axios from the outer scope
    queryFn: async () => {
      const res = await api.get("/courses/", { params });
      return res.data;
    },
  });
};
export const useGetCourseBySlug = (slug?: ParamValue) => {
  return useQuery<Course>({
    queryKey: ["course", slug],
    queryFn: async () => {
      const res = await api.get(`/courses/${slug}`);
      return res.data;
    },
    enabled: !!slug,
  });
};
export const useGetCourseModules = (slug?: ParamValue) => {
  return useQuery<Modules[]>({
    queryKey: ["course-modules", slug],
    queryFn: async () => {
      const res = await api.get(`/courses/${slug}/modules/`);
      return res.data;
    },
    enabled: !!slug,
  });
};
export const useGetModuleLessons = (slug?: ParamValue) => {
  return useQuery<Lesson[]>({
    queryKey: ["module-lessons", slug],
    queryFn: async () => {
      const res = await api.get(`/modules/${slug}/lessons/`);
      return res.data;
    },
    enabled: !!slug,
  });
};

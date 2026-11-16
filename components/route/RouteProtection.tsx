"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
const RouteProtection = () => {
  const token = Cookies.get("auth_token");
  const router = useRouter();
  if (token) {
    return router.push("/dashboard");
  }

  return null;
};

export default RouteProtection;

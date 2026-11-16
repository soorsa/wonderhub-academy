"use client";

import { useGetUser } from "@/hooks/auth/useAuth";
import { ReactNode } from "react";

export function AuthProvider({ children }: { children: ReactNode }) {
  useGetUser();

  return <>{children}</>;
}

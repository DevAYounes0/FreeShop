import { redirect, useRouter } from "next/navigation";
import React from "react";

export default function AuthGuard({ children }) {
  const isUser = false;
  if (!isUser) {
    redirect("/login");
  } else {
    return { children };
  }
}

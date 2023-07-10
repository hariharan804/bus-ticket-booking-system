"use client";

import Layout from "@/components/layout";
import { useStore } from "@/store/authStore";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isAuth } = useStore();
  const pathname = usePathname();
  useEffect(() => {
    if (!isAuth) {
      router.replace("/");
    }
  }, [pathname]);
  return <Layout>{children}</Layout>;
}

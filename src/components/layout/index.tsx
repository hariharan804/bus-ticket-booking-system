"use client";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Box } from "@mui/material";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box display={"flex"} flexDirection={"column"} sx={{ minHeight: "100vh" }}>
      <Header />
      <Box flexGrow={1}>{children}</Box>
      <Footer />
    </Box>
  );
}

export default Layout;

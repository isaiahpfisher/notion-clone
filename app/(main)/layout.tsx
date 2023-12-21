"use client";

import { Spinner } from "@/components/Spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import Navigation from "./_components/Navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner size={"lg"} />
      </div>
    );
  }

  if (!isLoading && !isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="flex h-full dark:bg-[#1F1F1F]">
      <Navigation />
      <main className="h-full  flex-1 overflow-y-auto">{children}</main>
    </div>
  );
};

export default MainLayout;

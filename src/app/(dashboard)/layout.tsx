import React from "react";
import DashboardHeader from "../ui/DashboardHeader";
import DashboardTabs from "../ui/DashboardTabs";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DashboardHeader />

      <div className="heropattern-topography-neutral-200">
        <div className="h-[60px]"></div>
        <div className="mx-auto grid h-full min-h-[calc(100vh_-_60px)] max-w-screen-2xl grid-rows-12 px-0 md:px-16 2xl:px-0">
          {/* Tabs */}
          <DashboardTabs />

          {/* Content */}
          <div className="row-span-11">{children}</div>
        </div>
      </div>
    </>
  );
}

import Header from "@/components/dashboard/Header";
import SideNavBar from "@/components/dashboard/SideNav";
import React from "react";
interface Prop {
  children: React.ReactNode;
}
const dashboardlayout: React.FC<Prop> = ({ children }) => {
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen">
      {/* Sidebar */}
      <aside className="hidden w-75 bg-adron-body text-adron-black md:flex flex-col">
        <SideNavBar />
      </aside>

      {/* Main Content */}
      <main className="pt-17.5 md:pt-0 flex-1 bg-adron-body overflow-y-auto md:mb-0 py-5 px-2 md:px-0 md:pr-4 scrollbar-hide">
        <Header pageTitle={"Home"} />
        {children}
      </main>
      {/* <div className="md:block fixed bottom-0 w-full">
        <MobileNavContainer />
      </div> */}
    </div>
  );
};

export default dashboardlayout;

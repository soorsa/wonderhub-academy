import Header from "@/components/admin/Header";
import SideNavBar from "@/components/admin/SideNavBar";
import React from "react";
interface Prop {
  children: React.ReactNode;
}
const adminlayout: React.FC<Prop> = ({ children }) => {
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen">
      <aside className="w-1/4 h-full px-5 bg-gray-800 text-white hidden sm:flex flex-col justify-center">
        <SideNavBar />
      </aside>
      <main className="p-2 space-y-4 w-full sm:w-3/4 overflow-auto scrollbar-hide ">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default adminlayout;

import Sidebar from "@/components/dashboard-sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4">{children}</div>
    </div>
  );
};

export default DashboardLayout;

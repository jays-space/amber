// COMPONENTS
import { MainContent } from "./MainContent";
import { Sidebar } from "./Sidebar";

const Layout = () => {
  return (
    <div className="min-w-full min-h-screen flex flex-row">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Layout;

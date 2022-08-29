// COMPONENTS
import { useState } from "react";
import { MainContent } from "./MainContent";
import { Sidebar } from "./Sidebar";

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <div className="min-w-full min-h-screen flex flex-row">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <MainContent />
    </div>
  );
};

export default Layout;

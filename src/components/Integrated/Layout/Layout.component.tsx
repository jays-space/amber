// COMPONENTS
import { useState } from "react";
import { MainContent } from "./MainContent";
import { Sidebar } from "./Sidebar";

/**
 *
 * @returns returns app layout (dashboard)
 */

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <div
      data-testid="dashboard"
      className="min-w-full min-h-screen flex flex-row"
    >
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <MainContent />
    </div>
  );
};

export default Layout;

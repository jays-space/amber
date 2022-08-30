import { Outlet } from "react-router-dom";

// Component that renders app pages
// Pages that are added as routes in the router will be rendered here => app.tsx
const Content = () => {
  return (
    <main className="h-content p-4 md:p-8 md:px-5 lg:px-10 xl:px-14 2xl:px-20">
      <Outlet />
    </main>
  );
};

export default Content;

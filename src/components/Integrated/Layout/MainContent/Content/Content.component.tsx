import { Outlet } from "react-router-dom";

// Component that renders app pages
// Pages that are added as routes in the router will be rendered here => app.tsx
const Content = () => {
  return (
    <main className="p-8">
      <Outlet />
    </main>
  );
};

export default Content;

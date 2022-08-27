import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <div className="p-8">
      <Outlet />
    </div>
  );
};

export default Content;

// COMPONENTS
import { Content } from "./Content";
import { Header } from "./Header";

const MainContent = () => {
  return (
    <div className="w-full bg-slate-100">
      <Header />
      <Content />
    </div>
  );
};

export default MainContent;

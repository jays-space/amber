// COMPONENTS
import { Content } from "./Content";
import { Header } from "./Header";

/**
 * 
 * @returns section containing header and main elements
 */

const MainContent = () => {
  return (
    <div data-testid="main-content" className="w-full bg-slate-100">
      <Header />
      <Content />
    </div>
  );
};

export default MainContent;

// COMPONENTS
import { Icon } from "../../Atomic/Icon";

const Spinner = () => {
  return (
    <div className="h-screen -my-32 flex justify-center items-center">
      <Icon name="spinner" className="animate-spin text-slate-700" />
    </div>
  );
};

export default Spinner;

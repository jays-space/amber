/**
 * @param label: title of the heading
 */

interface ITag {
  label: string;
}

const Tag = ({ label }: ITag) => {
  return (
    <div className="flex justify-center items-center mx-4 py-1 px-2 rounded-md text-sm text-slate-700 bg-neutral-300 capitalize">
      {label}
    </div>
  );
};

export default Tag;

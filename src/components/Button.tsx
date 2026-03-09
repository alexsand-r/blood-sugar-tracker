//..
type ButtonProps = {
  openForm: () => void;
};

export const Button = ({ openForm }: ButtonProps) => {
  return (
    <div className="mb-6">
      <div className="container">
        <div className="flex justify-center">
          <button
            type="button"
            onClick={openForm}
            className="text-slate-900 bg-emerald-300 hover:bg-emerald-400 font-medium rounded-lg text-sm px-4 py-2 cursor-pointer capitalize transition duration-300"
          >
            + add measurement
          </button>
        </div>
      </div>
    </div>
  );
};

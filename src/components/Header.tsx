//..
export const Header = () => {
  return (
    <>
      <div className="bg-[#e5f3f3] mb-6">
        <div className="container">
          <div className="pt-3 pb-3 flex items-center justify-center relative">
            <h1 className="text-lg sm:text-3xl text-center font-bold capitalize">
              blood sugar tracker
            </h1>

            <div className="absolute right-0">
              <label className="flex items-center justify-center rounded-full p-0.5 bg-emerald-300 cursor-pointer">
                <img
                  className="w-7 h-7 sm:w-9 sm:h-9 rounded-full"
                  src="/user.svg"
                  alt="avatar"
                />

                <input type="file" accept="image/*" className="hidden" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// text-3xl

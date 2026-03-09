//..

export const Indicators = () => {
  return (
    <>
      <div className="mb-6">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div className="bg-teal-600 p-4 rounded-lg">
              <h2 className="capitalize text-white text-center font-bold mb-10">
                Today's average
              </h2>
              <p className="text-white text-center">
                {" "}
                <span className="text-3xl mr-2 font-bold"> 6.1 </span>
                mmol/L
              </p>
            </div>
            <div className="bg-[#afe6d1] p-4 rounded-lg">
              <h2 className="capitalize text-center font-bold mb-10 text-[#103047]">
                last raeding
              </h2>
              <p className="text-center text-[#103047]">
                {" "}
                <span className="text-3xl mr-2 font-bold"> 6.1 </span>
                mmol/L
              </p>
            </div>
            <div className="bg-[#fadb9b] p-4 rounded-lg">
              <h2 className="capitalize text-center font-bold mb-10 text-[#103047]">
                raedings today
              </h2>
              <p className="text-center text-[#103047]">
                {" "}
                <span className="text-3xl mr-2 font-bold"> 1 </span>
                Entries
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

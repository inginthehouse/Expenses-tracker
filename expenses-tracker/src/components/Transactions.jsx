// import { ArrowDown } from "lucide-react";
function Transaction() {
  return (
    <>
      <div className="px-16 space-y-12">
        {/* header */}
        <div className="text-gray-800 space-y-2 max-w-1/2 mx-auto">
          <h1 className="text-4xl font-semibold">Hello, Username</h1>
          <p className="text-lg">View and control your finance here!</p>
        </div>
        {/* summary */}
        <div className="flex gap-6 items-start max-w-1/2 mx-auto">
          {/* Current Balance Card */}
          <div className="bg-[#77C8E7]/21 rounded-3xl p-8 flex-1 shadow-lg">
            <h2 className="text-md font-normal mb-4 text-gray-800">
              Current Balance
            </h2>
            <div className="text-3xl font-bold mb-4 text-gray-900">
              ฿8,200.81
            </div>
            <div className="flex items-center gap-2 text-red-500">
              <div className="w-6 h-6 p-1 rounded-full border-2 border-red-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="size-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium">12% from last month</span>
            </div>
          </div>

          {/* Total Income Card */}
          <div className="bg-[#63AA5A]/21 rounded-3xl p-8 flex-1 shadow-lg">
            <h2 className="text-md font-normal mb-4 text-gray-800">
              Current Balance
            </h2>
            <div className="text-3xl font-bold mb-4 text-gray-900">
              ฿8,200.81
            </div>
            <div className="flex items-center gap-2 text-red-500">
              <div className="w-6 h-6 p-1 rounded-full border-2 border-red-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="size-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium">12% from last month</span>
            </div>
          </div>
        </div>
        {/* transaction list */}
        <ul className="list px-8 py-4 bg-white/95 rounded-box shadow-md text-gray-600 max-w-1/2 mx-auto">
          <li className="p-4 pb-2 text-[18px] tracking-wide font-bold">
            Today
          </li>

          <li className="list-row">
            <div className="avatar avatar-placeholder">
              <div className="bg-neutral text-white w-12 rounded-full">
                <span className="text-md">D</span>
              </div>
            </div>
            <div>
              <p className="font-bold text-[16px]">Category</p>
              <div className="text-sm font-semibold opacity-70">
                time - note
              </div>
            </div>
            <p className="font-bold text-[16px]">-326.00</p>
          </li>
          <li className="list-row">
            <div className="avatar avatar-placeholder">
              <div className="bg-amber-300 text-white w-12 rounded-full">
                <span className="text-md">D</span>
              </div>
            </div>
            <div>
              <p className="font-bold text-[16px]">Category</p>
              <div className="text-sm  font-semibold opacity-70">
                time - note
              </div>
            </div>
            <p className="font-bold text-[16px]">-326.00</p>
          </li>
          <li className="p-4 pb-2 text-[18px] tracking-wide font-bold">
            Monday, 23 March 2020
          </li>

          <li className="list-row">
            <div className="avatar avatar-placeholder">
              <div className="bg-neutral text-white w-12 rounded-full">
                <span className="text-md">D</span>
              </div>
            </div>
            <div>
              <p className="font-bold text-[16px]">Category</p>
              <div className="text-sm font-semibold opacity-70">
                time - note
              </div>
            </div>
            <p className="font-bold text-[16px]">-326.00</p>
          </li>
          <li className="list-row">
            <div className="avatar avatar-placeholder">
              <div className="bg-amber-300 text-white w-12 rounded-full">
                <span className="text-md">D</span>
              </div>
            </div>
            <div>
              <p className="font-bold text-[16px]">Category</p>
              <div className="text-sm  font-semibold opacity-70">
                time - note
              </div>
            </div>
            <p className="font-bold text-[16px]">-326.00</p>
          </li>
          <li className="list-row">
            <div className="avatar avatar-placeholder">
              <div className="bg-amber-300 text-white w-12 rounded-full">
                <span className="text-md">D</span>
              </div>
            </div>
            <div>
              <p className="font-bold text-[16px]">Category</p>
              <div className="text-sm  font-semibold opacity-70">
                time - note
              </div>
            </div>
            <p className="font-bold text-[16px]">-326.00</p>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Transaction;

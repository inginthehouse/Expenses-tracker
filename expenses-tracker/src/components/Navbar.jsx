import { NavLink } from "react-router";

 function Navbar() {
    return (
      <>
        <div className="navbar bg-[#84994F] shadow-sm px-16">
          <div className="flex-1">
            <NavLink className="text-2xl font-bold text-[#F5EFE6]" to="/">daisyUI</NavLink>
          </div>
          <div className="flex-1/7 space-x-6">
            <NavLink className="text-md font-semibold text-[#F5EFE6]" to="/dashboard">Dashboard</NavLink>
            <NavLink className="text-md font-semibold text-[#F5EFE6]" to="/transaction">Transactions</NavLink>
            <a className="text-md font-semibold text-[#F5EFE6]">FAQs</a>
          </div>
          <div className="flex gap-3">
            <NavLink to="/login" className="text-md font-semibold text-[#F5EFE6] border-2 border-[#F5EFE6] py-1 px-4 rounded-sm cursor-pointer">
              Log In
            </NavLink>
            <NavLink to="/register" className="text-md font-semibold text-[#84994F] bg-[#F5EFE6] border-2 border-[#F5EFE6] py-1 px-4 rounded-sm cursor-pointer">
              Sign Up
            </NavLink>
          </div>
          {/* <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="cursor-pointer avatar flex items-center gap-3">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
                <p className="text-md font-semibold text-[#F5EFE6]">username</p>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-[#84994F] rounded-box z-1 mt-3.5 w-54 p-2 shadow">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </>
    );
}

export default Navbar
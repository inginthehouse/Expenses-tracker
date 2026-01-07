import { NavLink } from "react-router";
function Register() {
  return (
    <>
      <div>
        <div className="flex p-16 rounded-2xl shadow-2xl justify-center gap-16 bg-gray-100 max-w-2/3 mx-auto">
          {/* left side */}
          <div className="flex-1 max-w-3/5 bg-[#FFE797] h-100"></div>
          {/* right side */}
          <div className="max-w-3/5 flex-1 text-gray-800 border-gray-800 space-y-3">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-md">
              Create a new account?{" "}
              <span className="text-blue-500 underline-offset-2 underline cursor-pointer">
                <NavLink to="/register">Sign up </NavLink>
              </span>
            </p>
            <form className="space-y-4">
              {/* email */}
              <div className="flex flex-col w-full space-y-1">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Type here"
                  className="input bg-transparent input-neutral w-full"
                />
              </div>
              {/* password */}
              <div className="flex flex-col w-full space-y-1">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Type here"
                  className="input bg-transparent input-neutral w-full"
                />
              </div>
              <button
                className="bg-[#84994F] border-2 border-[#84994F] text-[#F5EFE6] font-bold py-2 px-8 w-full text-md 
            hover:shadow-md transition duration-300 ease-in-out cursor-pointer">
                Log in
              </button>
            </form>
          </div>
        </div>
        {/* right side */}
        <div></div>
      </div>
    </>
  );
}

export default Register;

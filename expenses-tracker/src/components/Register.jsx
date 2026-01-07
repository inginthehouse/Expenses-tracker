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
            <h1 className="text-3xl font-bold">Create an Account</h1>
            <p className="text-md">
              Already have an account?{" "}
              <span className="text-blue-500 underline-offset-2 underline">
                <NavLink to="/login">Log in</NavLink>
              </span>
            </p>
            <form className="space-y-4">
              {/* fn ln not display when log in */}
              <div className="text-md flex gap-6">
                {/* fn */}
                <div className="flex flex-col w-1/2 space-y-1">
                  <label htmlFor="firstname">Firstname</label>
                  <input
                    id="firstname"
                    type="text"
                    placeholder="Type here"
                    className="input bg-transparent input-neutral"
                  />
                </div>
                {/* ln */}
                <div className="flex flex-col w-1/2 space-y-1">
                  <label htmlFor="lastname">Lastname</label>
                  <input
                    id="lastname"
                    type="text"
                    placeholder="Type here"
                    className="input bg-transparent input-neutral"
                  />
                </div>
              </div>
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
              {/* confirm password */}
              <div className="flex flex-col w-full space-y-1">
                <label htmlFor="password">Confirm Password</label>
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
                Create account {/* Log in */}
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

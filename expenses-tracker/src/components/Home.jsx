function Home() {
  return (
    <>
      <div className="space-y-18">
        {/* main content */}
        <div className="flex px-16 py-5 justify-center gap-32">
          {/* left side */}
          <div className="max-w-2/5 flex-1 text-gray-900 space-y-8">
            <h1 className="text-6xl font-bold">
              Track Your Expenses Easily With Us
            </h1>
            <p className="text-md text-gray-900">
              nisi ullamcorper felis, consectetur cursus urna. sed lacus odio
              lacus, elit convallis. Lorem Praesent maximus est. gravida tempor
              dui. Vestibulum viverra nisi libero, ex tincidunt sodales.
              tincidunt placerat nec efficitur. dolor lorem. ac{" "}
            </p>
            <button
              className="bg-[#B45253] border-2 border-[#B45253] text-[#F5EFE6] font-bold py-3 px-8 text-md 
            hover:shadow-md hover:bg-transparent hover:text-[#B45253] transition duration-300 ease-in-out cursor-pointer">
              Get Start
            </button>
          </div>
          {/* right side */}
          <div className="flex-1 max-w-2/5 bg-gray-300 h-100 overflow-hidden shadow-lg">
            <img src="../../src/assets/homepage-pic.jpg" alt="hompage-picture" className="min-h-full"/>
          </div>
        </div>
        {/* sub content */}
        <div className="px-16 space-y-16">
          {/* text content */}
          <div className="text-gray-900 text-center space-y-3">
            <h3 className="text-3xl font-bold">
              We Provide The Best Features For You
            </h3>
            <p className="max-w-1/2 mx-auto">
              porta consectetur convallis. dignissim, in tincidunt porta Cras
              tortor. faucibus ex Vestibulum In vel Ut Ut libero, felis,porta
              consectetur convallis. dignissim.
            </p>
          </div>
          {/* card display */}
          <div className="flex gap-12 justify-center opacity-90">
            <div className="card bg-[#84994F] w-84 shadow-sm/20 text-gray-900 p-3">
              <div className="card-body">
                <h2 className="card-title">
                  <div className="avatar avatar-placeholder">
                    <div className="bg-[#F5EFE6] text-[#F5EFE6] w-10 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#101828"
                        className="size-7">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p>Card title!</p>
                </h2>
                <p>
                  placerat sodales. non. maximus ipsum viverra sed Donec Donec
                  non, tempor ex porta Cras tortor. Donec vitae vel Sed felis,
                </p>
              </div>
            </div>
            <div className="card bg-[#FCB53B] w-84 shadow-sm/20 text-gray-900 p-3">
              <div className="card-body">
                <h2 className="card-title">
                  <div className="avatar avatar-placeholder">
                    <div className="bg-[#F5EFE6] text-white w-10 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#101828"
                        className="size-7">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                        />
                      </svg>
                    </div>
                  </div>
                  <p>Card title!</p>
                </h2>
                <p>
                  placerat sodales. non. maximus ipsum viverra sed Donec Donec
                  non, tempor ex porta Cras tortor. Donec vitae vel Sed felis,
                </p>
              </div>
            </div>
            <div className="card bg-[#5A9CB5] w-84 shadow-sm/20 text-gray-900 p-3">
              <div className="card-body">
                <h2 className="card-title">
                  <div className="avatar avatar-placeholder">
                    <div className="bg-[#F5EFE6] text-white w-10 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#101828"
                        className="size-7">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p>Card title!</p>
                </h2>
                <p>
                  placerat sodales. non. maximus ipsum viverra sed Donec Donec
                  non, tempor ex porta Cras tortor. Donec vitae vel Sed felis,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

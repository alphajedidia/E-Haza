function Login() {
  return (
    <section
      className="flex justify-center h-screen gradient-form bg-neutral-200"
      style={{
        background: 'linear-gradient(110deg, #2178c0, #1b52c0, #1b388d )',
      }}
    >
            <div
              className="container flex flex-wrap items-center justify-center w-full m-6 my-auto xl:w-10/12 2xl:w-9/12 md:m-8 sm:m-12"
            >
              <div 
                className="w-full rounded-lg shadow-lg lg:flex lg:flex-wrap md:w-5/6 "
                style={{ background: 'rgba(191, 215, 237, 1)',color: '#003B73' }}  
                >
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-2 md:p-6 xl:my-8 2xl:my-12">
                    <div className="py-4 mb-0 rounded-t ">
                      <div className="mb-3 text-center">
                        <h6 className="text-sm font-bold text-blueGray-500">
                          Sign in with
                        </h6>
                      </div>
                      <div className="text-center ">
                        <button
                          className="inline-flex items-center px-2 py-2 mb-1 mr-2 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-white rounded shadow outline-none sm:px-4 active:bg-blueGray-50 text-blueGray-700 hover:shadow-md focus:outline-none"
                          type="button"
                        >
                          <img
                            alt="..."
                            className="w-5 mr-1"
                            src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"
                          />
                          Github
                        </button>
                        <button
                          className="inline-flex items-center px-2 py-2 mb-1 mr-1 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-white rounded shadow outline-none sm:px-4 active:bg-blueGray-50 text-blueGray-700 hover:shadow-md focus:outline-none"
                          type="button"
                        >
                          <img
                            alt="..."
                            className="w-5 mr-1"
                            src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                          />
                          Google{' '}
                        </button>
                      </div>
                      <div className="flex items-center justify-center mx-8 mt-4">
                        <span
                          className="w-full border"
                          style={{ borderColor: '#003B73' }}
                        ></span>
                        <span className="px-4">Or</span>
                        <span
                          className="w-full border "
                          style={{ borderColor: '#003B73' }}
                        ></span>
                      </div>
                    </div>
                    <form>
                      <div className="relative mb-1">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="mb-6 "
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 pt-2 pb-2 mt-2 bg-transparent border rounded outline-none "
                          style={{ borderColor: 'rgba(0, 59, 115, 0.4)' }}
                          name=""
                          id=""
                        />
                      </div>

                      <div className="relative mb-1">
                        <label htmlFor="exampleFormControlInput1" className="">
                          Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 pt-2 pb-2 mt-2 bg-transparent border rounded outline-none "
                          style={{ borderColor: 'rgba(0, 59, 115, 0.4)' }}
                          name=""
                          id=""
                        />
                      </div>
                      <div className="flex items-center justify-between my-4">
                        <div className="flex items-center">
                          <input
                            id="remember_me"
                            type="checkbox"
                            className="border border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                          />
                          <label
                            htmlFor="remember_me"
                            className="block ml-2 text-xs leading-5 sm:text-sm"
                          >
                            {' '}
                            Remember me{' '}
                          </label>
                        </div>
                        <a href="#" className="text-xs underline sm:text-sm">
                          {' '}
                          Forgot your password?{' '}
                        </a>
                      </div>
                      <div className="pt-1 pb-1 mb-12 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          style={{
                            background:
                              'linear-gradient(120deg, #2178c0, #1b52c0, #1b388d )',
                          }}
                        >
                          Sign in
                        </button>
                      </div>

                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2 text-xs sm:text-sm">Don't have an account?</p>
                        <button
                          type="button"
                          className="border-danger text-danger hover:border-danger-600 focus:border-danger-600 focus:text-danger-600 active:border-danger-700 active:text-danger-700 inline-block rounded border-2 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          style={{ borderColor: '#003B73' }}
                        >
                          Sign up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  className="hidden rounded-b-lg lg:flex lg:items-center lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      'linear-gradient(180deg, #2178c0, #1b52c0, #1b388d, #000329)',
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-5 md:p-10">
                    <h4 className="mb-6 text-5xl font-semibold text-center">E-Haza</h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
    </section>
  );
}

export default Login;

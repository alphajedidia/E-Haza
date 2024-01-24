function Login() {

    return (
      <section className="flex justify-center h-screen gradient-form bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div
          className="flex flex-wrap items-center justify-center h-full text-neutral-800 dark:text-neutral-200">
          <div className="w-full xl:w-8/12 ">
            <div
              className="block bg-white rounded-lg shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-8">
                  <div className="px-6 py-6 mb-0 rounded-t ">
                  <div className="mb-3 text-center">
                    <h6 className="text-sm font-bold text-blueGray-500">
                      Sign in with
                    </h6>
                  </div>
                  <div className="text-center btn-wrapper">
                    <button className="inline-flex items-center px-4 py-2 mb-1 mr-2 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-white rounded shadow outline-none active:bg-blueGray-50 text-blueGray-700 focus:outline-none hover:shadow-md text-slate-800" type="button">
                      <img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"/>Github</button>
                    <button className="inline-flex items-center px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-white rounded shadow outline-none active:bg-blueGray-50 text-blueGray-700 focus:outline-none hover:shadow-md text-slate-800" type="button">
                      <img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"/>Google </button>

                  </div>
                  <div className="flex items-center justify-center mt-4">
                    <span className="w-full border"></span>
                    <span className="px-4">Or</span>
                    <span className="w-full border "></span>
                  </div>
                  </div>
                    <form>
                      <div className="relative mb-1" >
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="mb-6 "
                          >Username
                        </label>
                        <input type="email"
                        className="w-full px-4 pt-2 pb-2 mt-2 bg-transparent border rounded outline-none out text-slate-300"
                        name="" id="" />
                      </div>

                      <div className="relative mb-1" >
                        <label
                          htmlFor="exampleFormControlInput1"
                          className=""
                          >Password
                        </label>
                        <input type="password"
                        className="w-full px-4 pt-2 pb-2 mt-2 bg-transparent border rounded outline-none out text-slate-300"
                        name="" id="" />
                        
                      </div>
                      <div className="flex items-center justify-between my-4">
                        <div className="flex items-center">
                          <input id="remember_me" type="checkbox" className="border border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
                          <label htmlFor="remember_me" className="block ml-2 text-sm leading-5 "> Remember me </label>
                        </div>
                        <a href="#" className="text-sm underline"> Forgot your password? </a>
                      </div>
                      <div className="pt-1 pb-1 mb-12 text-center">
              
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          style={{
                            background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                          }}>
                          Sign in
                        </button>

                        
                      </div>

                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          data-te-ripple-init
                          data-te-ripple-color="light">
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                  }}>
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex
                      ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
  
  export default Login
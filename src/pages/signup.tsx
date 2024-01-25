
function Signup(){

    return(
        <section className="flex justify-center h-screen gradient-form bg-neutral-200 dark:bg-slate-900" style={{background : "#003B73"}} >
      <div className="container h-full p-10">
        <div
          className="flex flex-wrap items-center justify-center h-full " style={{color : "#003B73"}}>
          <div className="w-full xl:w-8/12 ">
            <div
              className="block rounded-lg shadow-lg " style={{background : "rgba(191, 215, 237, 1)"}}>
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-8">
                  <div className="py-6 mb-0 rounded-t ">
                  <div className="mb-3 text-center">
                    <h6 className="text-sm font-bold text-blueGray-500">
                      Sign up with
                    </h6>
                  </div>
                  <div className="text-center btn-wrapper">
                    <button className="inline-flex items-center px-4 py-2 mb-1 mr-2 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-white rounded shadow outline-none active:bg-blueGray-50 text-blueGray-700 focus:outline-none hover:shadow-md " type="button">
                      <img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"/>Github</button>
                    <button className="inline-flex items-center px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-white rounded shadow outline-none active:bg-blueGray-50 text-blueGray-700 focus:outline-none hover:shadow-md " type="button">
                      <img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"/>Google </button>

                  </div>
                  <div className="flex items-center justify-center mt-4">
                    <span className="w-full border" style={{borderColor : "#003B73"}}></span>
                    <span className="px-4">Or </span>
                    <span className="w-full border " style={{borderColor : "#003B73"}}></span>
                  </div>
                  </div>
                    <form>
                      <div className="relative mb-1" >
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="mb-6 "
                          >First name
                        </label>
                        <input type="text"
                        className="w-full px-4 pt-2 pb-2 mt-2 bg-transparent border rounded outline-none " style={{borderColor : "rgba(0, 59, 115, 0.4)"}}
                        name="" id="" />
                      </div>
                      <div className="relative mb-1" >
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="mb-6 "
                          >Last name
                        </label>
                        <input type="text"
                        className="w-full px-4 pt-2 pb-2 mt-2 bg-transparent border rounded outline-none " style={{borderColor : "rgba(0, 59, 115, 0.4)"}}
                        name="" id="" />
                      </div>
                      <div className="relative mb-1" >
                        <label
                          htmlFor="exampleFormControlInput1"
                          className=""
                          >Password
                        </label>
                        <input type="password"
                        className="w-full px-4 pt-2 pb-2 mt-2 bg-transparent border rounded outline-none " style={{borderColor : "rgba(0, 59, 115, 0.4)"}}
                        name="" id="" />
                        
                      </div>
                      <div className="relative mb-4" >
                        <label
                          htmlFor="exampleFormControlInput1"
                          className=""
                          >Confirm password
                        </label>
                        <input type="password"
                        className="w-full px-4 pt-2 pb-2 mt-2 bg-transparent border rounded outline-none " style={{borderColor : "rgba(0, 59, 115, 0.4)"}}
                        name="" id="" />
                        
                      </div>
                      
                      <div className="pt-1 pb-1 mb-12 text-center">
              
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          style={{
                            background: 'linear-gradient(to right, #2178c0, #1b52c0, #1b388d )',
                          }}>
                          Sign up
                        </button>

                        
                      </div>

                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Already have an account?</p>
                        <button
                          type="button"
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10" style={{borderColor : "#003B73"}}
                          >
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background: 'linear-gradient(to right, #2178c0, #1b52c0, #1b388d, #000329)',
                  }}>
                  <div className="px-4 py-6 text-white md:mx-5 md:p-10">
                    <h4 className="mb-6 text-5xl font-semibold">
                      E-Haza
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
export default Signup
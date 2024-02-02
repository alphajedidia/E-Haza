import LoginBox from "../Box/LoginBox";

function SignUpLayout() {
  return(
    <section
    className="flex justify-center h-screen gradient-form bg-neutral-200"
    style={{
      background: 'linear-gradient(120deg, #2178c0, #1b52c0, #1b388d )',
    }}
  >
    <div className="container flex flex-wrap items-center justify-center w-full m-6 my-auto sm:m-12 md:m-8 xl:w-10/12 2xl:w-9/12">
      <LoginBox isLogin = {false}/>
    </div>
  </section>
  )
}
export default SignUpLayout;

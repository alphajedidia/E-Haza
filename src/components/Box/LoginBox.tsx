import LoginForm from "../form/LoginForm";
import E_Haza from "../welcomeLogo/E_Haza";



function LoginBox({ isLogin }: { isLogin: boolean }) {
  let action = isLogin ? "Sign in" : "Sign Up";
  let secondAction = isLogin ? "Sign Up" : "Sign in";
  let description = isLogin ? "Don't have an account?" : "Already have an account?";
  return (
    <div
      className="w-full rounded-lg shadow-lg md:w-5/6 lg:flex lg:flex-wrap "
      style={{ background: 'rgba(191, 215, 237, 1)', color: '#003B73' }}
    >
      <LoginForm primaryAction={action} secondaryAction={secondAction} secondaryActionDescription={description}/>
      <E_Haza title="test" illustration= "dfds" description="test"/>   
    </div>
  );
}
export default LoginBox;

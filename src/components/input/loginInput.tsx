import { InputField } from './input_field';
import { PasswordInput } from './password.input';
import LoginOption from '../form/loginOption';

type functionOnChange = {
  test: () => void;
  test1: () => void;
};
function LoginInput({ test, test1 }: functionOnChange) {
  return (
    <>
      <InputField
        label="Username"
        name="username"
        type="text"
        style="outline-none  rounded-md"
        placeholder=" "
        onChanged={test}
      />
      <PasswordInput
        label="Password"
        name="password"
        style="outline-none  rounded-md"
        placeholder=" "
        isShown={false}
        onChanged={test1}
      />
      <LoginOption />
    </>
  );
}

export default LoginInput;

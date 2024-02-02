import { InputField } from './input_field';
import { PasswordInput } from './password.input';

type functionOnChange = {
    test: () => void;
    test1: () => void;
    test2 : ()=> void;
  };
function SignUpInput({test, test1, test2} : functionOnChange) {
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
      <PasswordInput
        label="Confirm password"
        name="Confirm password"
        style="outline-none  rounded-md mb-4"
        placeholder=" "
        isShown={false}
        onChanged={test2}
      />
    </>
  );
}
export default SignUpInput;

import LoginInput from '../input/loginInput';
import SignUpInput from '../input/signipInput';

type Login = {
  primaryAction: string;
  secondaryAction: string;
  secondaryActionDescription: string;
};

function LoginForm({
  primaryAction,
  secondaryAction,
  secondaryActionDescription,
}: Login) {
  const test = () => {
    console.log('LoginUsername');
  };
  const test1 = () => {
    console.log('LoginPassword');
  };
  const test2 = () => {
    console.log('SignUpUsername');
  };
  const test3 = () => {
    console.log('SignUpPassword');
  };
  const test4 = () => {
    console.log('SignUpRePassword');
  };
  return (
    <div className="px-4 md:px-0 lg:w-6/12">
      <div className="md:mx-2 md:p-6 xl:my-8 2xl:my-12">
        <div className="py-4 mb-0 rounded-t ">
          <div className="mb-3 text-center">
            <h6 className="text-sm font-bold text-blueGray-500">
              {primaryAction} with
            </h6>
          </div>
          <div className="text-center ">
            <button
              className="inline-flex items-center px-2 py-2 mb-1 mr-2 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-white rounded shadow outline-none active:bg-blueGray-50 text-blueGray-700 hover:shadow-md focus:outline-none sm:px-4"
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
              className="inline-flex items-center px-2 py-2 mb-1 mr-1 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-white rounded shadow outline-none active:bg-blueGray-50 text-blueGray-700 hover:shadow-md focus:outline-none sm:px-4"
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
              className="w-full border"
              style={{ borderColor: '#003B73' }}
            ></span>
          </div>
        </div>
        <form>
          {primaryAction === 'Sign in' ? (
            <LoginInput test={test} test1={test1} />
          ) : (
            <SignUpInput test={test2} test1={test3} test2={test4} />
          )}
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
              {primaryAction}
            </button>
          </div>

          <div className="flex items-center justify-between pb-6">
            <p className="mb-0 mr-2 text-xs sm:text-sm">
              {secondaryActionDescription}
            </p>
            <button
              type="button"
              className="border-danger text-danger hover:border-danger-600 focus:border-danger-600 focus:text-danger-600 active:border-danger-700 active:text-danger-700 inline-block rounded border-2 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              style={{ borderColor: '#003B73' }}
            >
              {secondaryAction}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LoginForm;

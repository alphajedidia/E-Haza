function LoginOption (){

    return (
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
    )
}
export default LoginOption;
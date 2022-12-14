export const Register = () => {
  return (
    <div class="w-full overflow-scroll h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center">
      <div class="bg-white py-6 px-10 sm:max-w-md w-full rounded-3xl">
        <div class="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
          Log In
        </div>
        <div class="">
          <div>
            <input
              type="email"
              class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8"
              placeholder="Email Address "
            />
          </div>
          {/*<div>
            <input
              type="text"
              class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
              placeholder="Country "
            />
          </div>
          <div>
            <input
              type="phone"
              class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
              placeholder="Phone "
            />
          </div>*/}
          <div class="">
            <input
              type="password"
              class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
              placeholder="Password "
            />
          </div>
          <div class="flex">
            <input type="checkbox" class="border-sky-400 " value="" />
            <div class="px-3 text-gray-500">
              I accept the <a href="">Terms & Conditions</a>
            </div>
          </div>
          <div class="flex justify-center my-6">
            <button class=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold ">
              Login
            </button>
          </div>
          <div class="flex justify-center ">
            <p class="text-gray-500">Don't have an account? </p>
            <a href="login" class="text-sky-600 pl-2">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

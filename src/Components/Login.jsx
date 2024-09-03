import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaRegUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="max-w-sm mx-auto">
      <form className="max-w-sm mx-auto">
        <div className="grid grid-flow-row gap-3 w-full">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <FaRegUser />
            </div>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <FaLock />
            </div>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div className="flex items-start my-5 ">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm"
        >
          LogIn
        </button>
      </form>

      <div className="grid grid-flow-row gap-5 mt-5">
        <div className="flex flex-row justify-center items-center gap-2">
          <button
            type="button"
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
          >
            <FaGithub className="w-4 h-4 me-2" />GitHub
          </button>

          <button
            type="button"
            className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
          >
            <FaGoogle className="w-4 h-4 me-2" />Google
          </button>
        </div>
        <p className="py-2 text-center font-semibold text-green-700 hover:text-red-700">
          If you are not register{" "}
          <Link
            to="/register"
            className="underline underline-offset-2 hover:text-xl"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

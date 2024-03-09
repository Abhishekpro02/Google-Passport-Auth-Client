import { FaGithub, FaGoogle, FaUnlockAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const SignUpPage = () => {
  const handleLoginWithGoogle = () => {
    window.open(`/api/auth/google`, "_self");
  };
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <div className="w-full bg-glass rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold md:text-2xl text-center">
            Create Account
          </h1>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-blue-500 via-green-400 to-yellow-400 hover:from-red-500 hover:via-pink-500 hover:to-purple-500 focus:ring-4
                focus:ring-blue-500 font-medium rounded-lg flex gap-2 p-2 items-center w-full 
                text-center justify-center"
            onClick={handleLoginWithGoogle}
          >
            <FaGoogle className="w-5 h-5" />
            Sign up with Google
          </button>

          <p className="text-gray-300 text-center">
            By signing up, you will unlock all the features of the app.
            <span>
              <FaUnlockAlt className="w-4 h-4 inline mx-2" />
            </span>
          </p>
          <p className="text-sm font-light text-gray-500 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-primary-600 hover:underline text-green-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

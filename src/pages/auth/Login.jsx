import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const data = { email, password };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://basatha-khaki.vercel.app/api/v1/auth/login",
        data
      );
      const token = response.data.token;
      Cookies.set("token", token, { expires: 7 });
      console.log("Login successful!", response.data);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-[#8B7500]">
      {" "}
      {/* ذهبي داكن */}
      <div className="max-w-lg mx-auto p-10 bg-white rounded-lg shadow-md">
        {" "}
        {/* زيادة حجم النموذج */}
        <div className="text-center mb-12">
          <h1 className="text-4xl mr-5 font-extrabold text-gray-800 drop-shadow-lg transition duration-300">
            Welcome Back!
          </h1>
          <p className="text-gray-600">Please login to continue.</p>
        </div>
        <form onSubmit={handleLogin} className="mt-4">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className=" flex justify-center items-center w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            {isLoading ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "sign in "
            )}
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link
            to="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            If you don't have an account,{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;

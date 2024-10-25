import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthContext';
import axiosInstance from '../../lib/axiosInstance';
import Loading from '../../components/LoadingCircularProgress';

const Login = () => {
  const navigate = useNavigate();

  // for authorization
  const { handleLogin } = useContext(AuthContext);

  // for form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnActive, setBtnActive] = useState(true);

  const handleSubmit = async e => {
    e.preventDefault();
    setBtnActive(false);

    try {
      const response = await axiosInstance.post('auth/login', {
        email,
        password,
      });

      handleLogin(response.data);

      toast.success('Login successful!');
      navigate('/');
    } catch (error) {
      toast.error(`${error.response.data.errors[0].msg}`);
      console.error('', error.response.data.errors[0].msg);
    } finally {
      setBtnActive(true);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-[#8B7500]">
      <div className="max-w-lg mx-auto p-10 bg-white rounded-lg shadow-md">
        <div className="text-center mb-12">
          <h1 className="text-4xl mr-5 font-extrabold text-gray-800 drop-shadow-lg transition duration-300">
            Welcome Back!
          </h1>
          <p className="text-gray-600">Please login to continue.</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
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
              onChange={e => setEmail(e.target.value)}
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
              onChange={e => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700
            disabled:text-white/60 disabled:bg-blue-600/60"
          >
            {btnActive ? 'Login' : <Loading size={25} />}
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link
            to="/auth/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            If you don&apos;t have an account,{' '}
            <Link to="/auth/signup" className="text-blue-600 hover:underline">
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

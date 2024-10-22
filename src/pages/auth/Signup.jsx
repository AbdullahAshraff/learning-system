import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Cookies from 'js-cookie';
import axiosInstance from '../../lib/axiosInstance';
import { AuthContext } from '../../contexts/AuthContext';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const { handleLogin } = useContext(AuthContext); // for authorization

  const handleSignup = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!'); // رسالة خطأ عند عدم تطابق كلمتي المرور
      return;
    }
    try {
      const response = await axiosInstance.post('auth/signup', {
        name,
        email,
        password,
        passwordConfirm: confirmPassword,
      });

      handleLogin(response.data);

      toast.success('Account created successfully!');
      navigate('/');
    } catch (error) {
      toast.error(
        `Registration failed: ${
          error.response ? error.response.data.message : error.message
        }`
      );
      console.error(
        'Registration failed:',
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-[#8B7500]">
      <div className="max-w-lg mx-auto p-10 bg-white rounded-lg shadow-md">
        <div className="text-center mb-12">
          <h1 className="text-4xl mr-5 font-extrabold text-gray-800 drop-shadow-lg transition duration-300">
            Join Us Today!
          </h1>
          <p className="text-gray-600">Please signup to continue.</p>
        </div>
        <form onSubmit={handleSignup} className="mt-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
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
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signup;

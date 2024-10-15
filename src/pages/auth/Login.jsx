import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-hot-toast'; // استيراد مكتبة React Hot Toast

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://basatha-khaki.vercel.app/api/v1/auth/login', { email, password });
      const token = response.data.token;
      Cookies.set('token', token, { expires: 7 });
      toast.success('Login successful!'); // إظهار رسالة نجاح
      navigate('/'); 
    } catch (error) {
      toast.error(`Login failed: ${error.response ? error.response.data.message : error.message}`); // إظهار رسالة خطأ
      console.error('Login failed:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-[#8B7500]"> {/* ذهبي داكن */}
      <div className="max-w-lg mx-auto p-10 bg-white rounded-lg shadow-md"> {/* زيادة حجم النموذج */}
        <div className="text-center mb-12">
          <h1 className="text-4xl mr-5 font-extrabold text-gray-800 drop-shadow-lg transition duration-300">
            Welcome Back!
          </h1>
          <p className="text-gray-600">
            Please login to continue.
          </p>
        </div>
        <form onSubmit={handleLogin} className="mt-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot Password?</Link>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            If you don't have an account, <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;

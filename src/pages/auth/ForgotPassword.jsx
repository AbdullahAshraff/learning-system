import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { toast } from 'react-hot-toast'; // استيراد React Hot Toast
import axiosInstance from '../../lib/axiosInstance';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); 

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('auth/forgotpassword', { email });
      toast.success('Password reset link sent!'); // عرض رسالة نجاح
      navigate('/auth/login'); 
    } catch (error) {
      toast.error(`Failed to send reset link: ${error.response ? error.response.data.message : error.message}`); // عرض رسالة خطأ
      console.error('Failed to send reset link:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-[#8B7500]"> {/* ذهبي داكن */}
      <div className="max-w-lg mx-auto p-10 bg-white rounded-lg shadow-md"> {/* تكبير حجم النموذج */}
        <div className="text-center mb-12">
          <h1 className="text-4xl mr-5 font-extrabold text-gray-800 drop-shadow-lg transition duration-300">
            Forgot Password
          </h1>
          <p className="text-gray-600">
            Please enter your email to receive a reset link.
          </p>
        </div>
        <form onSubmit={handleForgotPassword} className="mt-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-3 rounded-md bg-blue-600 text-white hover:opacity-80 transition duration-300"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;

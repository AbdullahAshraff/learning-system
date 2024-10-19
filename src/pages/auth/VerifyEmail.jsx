import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'; // إضافة مكتبة الإشعارات
import axiosInstance from '../../lib/axiosInstance';

const VerifyEmail = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const navigate = useNavigate(); // استخدم useNavigate للتوجيه

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('auth/verifyResetCode', { verificationCode });
      toast.success('Verification successful!'); // رسالة نجاح
      navigate('/auth/reset-password'); // الانتقال إلى صفحة إعادة تعيين كلمة المرور بعد التحقق الناجح
    } catch (error) {
      toast.error(`Verification failed: ${error.response ? error.response.data.message : error.message}`); // رسالة خطأ
      console.error('Verification failed:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#DEB041] via-[#998443] to-[#0f0f0f] animate-gradient-xy">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="text-center mb-12">
          <h1 className="text-4xl mr-5 font-extrabold text-gray-800 drop-shadow-lg transition duration-300">
            Verify Your Email
          </h1>
          <p className="text-gray-600">
            A verification code has been sent to your email. Please enter it below.
          </p>
        </div>
        <form onSubmit={handleVerifyCode} className="mt-4">
          <div className="mb-4">
            <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700">Verification Code</label>
            <input
              type="text"
              id="verificationCode"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-3 rounded-md bg-gradient-to-r from-[#DEB041] via-[#998443] to-[#0f0f0f] text-white hover:opacity-80 transition duration-300"
          >
            Verify Code
          </button>
        </form>
        <div className="mt-6 text-center">
          <a href="login" className="text-[#DEB041] hover:underline">Back to Login</a>
        </div>
      </div>
    </section>
  );
};

export default VerifyEmail;

import { useState } from 'react';
import { toast } from 'react-hot-toast'; // استيراد React Hot Toast
import axiosInstance from '../../lib/axiosInstance';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      toast.error('Passwords do not match!'); // رسالة خطأ عند عدم تطابق كلمات المرور
      return;
    }
    try {
      await axiosInstance.patch('auth/resetpassword', { password: newPassword });
      toast.success('Password reset successful!'); // رسالة نجاح عند تغيير كلمة المرور بنجاح
      // يمكنك إضافة إعادة التوجيه هنا إذا كنت تريد
    } catch (error) {
      toast.error(`Password reset failed: ${error.response ? error.response.data.message : error.message}`); // رسالة خطأ عند الفشل
      console.error('Password reset failed:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-[#8B7500]"> {/* ذهبي داكن مثل الصفحات الأخرى */}
      <div className="max-w-lg mx-auto p-10 bg-white rounded-lg shadow-md"> {/* نفس حجم النموذج مثل صفحة Forgot Password */}
        <div className="text-center mb-12">
          <h1 className="text-4xl mr-5 font-extrabold text-gray-800 drop-shadow-lg transition duration-300">
            Reset Password
          </h1>
          <p className="text-gray-600">
            Please enter your new password.
          </p>
        </div>
        <form onSubmit={handleResetPassword} className="mt-4">
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmNewPassword"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-3 rounded-md bg-gradient-to-r from-[#DEB041] via-[#998443] to-[#0f0f0f] text-white hover:opacity-80 transition duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;

// import React from 'react';
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer id='footer' className="bg-gradient-to-r from-[#998443] via-[#DEB041] to-[#0f0f0f] text-white py-12 px-4">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-28 pl-[300px]">
        
//         {/* About Section */}
//         <div className="space-y-4" data-aos="fade-right" data-aos-duration="1000">
//           <h3 className="text-2xl font-bold mb-2 text-white">About Us</h3>
//           <p className="text-sm text-gray-200">
//             We provide cutting-edge programming courses designed to empower individuals to thrive in today’s fast-paced tech world. From beginner to advanced, we tailor learning paths to suit your goals.
//           </p>
//         </div>

//         {/* Contact Info */}
//         <div className="space-y-4" data-aos="fade-up" data-aos-duration="1000">
//           <h3 className="text-2xl font-bold mb-2 text-white">Contact Information</h3>
//           <ul className="space-y-2 text-sm">
//             <li className="flex items-center space-x-2"><FaMapMarkerAlt /><span>Bani-Swief Egypt</span></li>
//             <li className="flex items-center space-x-2"><FaPhoneAlt /><span>+20 100 205 1752</span></li>
//             <li className="flex items-center space-x-2"><FaEnvelope /><span>Basatha@gmail.com</span></li>
//           </ul>
//         </div>

//         {/* Social Media */}
//         <div className="space-y-4 " data-aos="fade-up" data-aos-duration="1000">
//           <h3 className="text-2xl font-bold mb-2 text-white ">Follow Us</h3>
//           <div className="flex space-x-4">
//             <a href="#" className="hover:text-[#000] transition duration-300 transform hover:scale-125"><FaFacebookF size={24} /></a>
//             <a href="#" className="hover:text-[#000] transition duration-300 transform hover:scale-125"><FaTwitter size={24} /></a>
//             <a href="#" className="hover:text-[#000] transition duration-300 transform hover:scale-125"><FaLinkedinIn size={24} /></a>
//             <a href="#" className="hover:text-[#000] transition duration-300 transform hover:scale-125"><FaInstagram size={24} /></a>
//             <a href="#" className="hover:text-[#000] transition duration-300 transform hover:scale-125"><FaGithub size={24} /></a>
//           </div>
//         </div>

//       </div>

//       {/* Bottom Bar */}
//       <div className="mt-8 border-t border-gray-600 pt-6 text-center text-sm">
//         <p>&copy; 2024 Basatha. All rights reserved.</p>
//         <p className="mt-2">Built with ❤️ using Tailwind CSS</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;









































import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer' className="bg-gradient-to-r from-[#998443] via-[#DEB041] to-[#0f0f0f]  text-white py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 px-4 lg:px-0">
        
        {/* About Section */}
        <div className="space-y-6" data-aos="fade-right" data-aos-duration="1000">
          <h3 className="text-2xl font-bold mb-2 text-white">About Us</h3>
          <p className="text-sm text-[#E5E7EB] leading-relaxed">
            We provide cutting-edge programming courses designed to empower individuals to thrive in today’s fast-paced tech world. From beginner to advanced, we tailor learning paths to suit your goals.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-6" data-aos="fade-up" data-aos-duration="1000">
          <h3 className="text-2xl font-bold mb-2 text-white">Contact Information</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center space-x-2"><FaMapMarkerAlt /><span>Bani-Swief, Egypt</span></li>
            <li className="flex items-center space-x-2"><FaPhoneAlt /><span>+20 100 205 1752</span></li>
            <li className="flex items-center space-x-2"><FaEnvelope /><span>Basatha@gmail.com</span></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-6" data-aos="fade-up" data-aos-duration="1000">
         <h3 className="text-2xl font-bold mb-2 text-white">Follow Us</h3>
         <div className="flex space-x-4">
           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group hover:text-[#000] transition duration-300 transform">
             <FaFacebookF size={24} />
             <span className="sr-only">Facebook</span>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="group hover:text-[#000] transition duration-300 transform">
             <FaTwitter size={24} />
             <span className="sr-only">Twitter</span>
           </a>
           <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group hover:text-[#000] transition duration-300 transform">
             <FaLinkedinIn size={24} />
             <span className="sr-only">LinkedIn</span>
           </a>
           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group hover:text-[#000] transition duration-300 transform">
             <FaInstagram size={24} />
             <span className="sr-only">Instagram</span>
           </a>
           <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="group hover:text-[#000] transition duration-300 transform">
              <FaGithub size={24} />
             <span className="sr-only">GitHub</span>
           </a>
         </div>
       </div>

        <div className="space-y-6" data-aos="fade-up" data-aos-duration="1000">
          <img src="images/nlogo.png" className='w-[150px]'/>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-600 pt-6 text-center text-sm text-[#fff]">
        <p>&copy; 2024 Basatha. All rights reserved.</p>
        <p className="mt-2">Built with ❤️ using Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;

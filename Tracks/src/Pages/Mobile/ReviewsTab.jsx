import React from 'react';
import { FaStar } from 'react-icons/fa';
import Review1 from '../../assets/Beau-Carnes.png';
import Review2 from '../../assets/Gavin.jpg'; 
import Review3 from '../../assets/Mosh-Hamedani.jpeg'; 
import Review4 from '../../assets/Ahmed.png'; 
import Review5 from '../../assets/Daniel.png'; 
import Review6 from '../../assets/Dario.jpg'; 

const ReviewsTab = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 font-serif">Reviews</h2>
      <div className="grid grid-cols-1 gap-6">
        {/* First Review */}
        <div className="bg-white p-6 rounded-lg cursor-pointer"> 
          <h3 className="text-lg font-semibold text-[#0f0f0f]">I truly appreciate the invaluable insights and knowledge I gained from this course.</h3>
          <p className="text-gray-600 mt-2">Reviewed in Egypt on 20 April 2024</p>
          <div className="flex items-center mt-4">
            <img
              src={Review1}
              alt="John Cannon"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <p className="text-[#0f0f0f] font-semibold">John Cannon</p>
              <p className="text-yellow-500 text-sm">Expert Growth Hacker</p>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-gray-300" />
          </div>
        </div>

        {/* Second Review */}
        <div className="bg-white p-6 rounded-lg cursor-pointer"> 
          <h3 className="text-lg font-semibold text-[#0f0f0f]">Great insights and knowledge</h3>
          <p className="text-gray-600 mt-2">Reviewed in Egypt on 1 April 2024</p>
          <div className="flex items-center mt-4">
            <img
              src={Review2}
              alt="John Doe"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <p className="text-[#0f0f0f] font-semibold">John Doe</p>
              <p className="text-yellow-500 text-sm">Marketing Specialist</p>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </div>
        </div>

        {/* Third Review */}
        <div className="bg-white p-6 rounded-lg cursor-pointer"> 
          <h3 className="text-lg font-semibold text-[#0f0f0f]">Very helpful course</h3>
          <p className="text-gray-600 mt-2">Reviewed in Egypt on 15 April 2024</p>
          <div className="flex items-center mt-4">
            <img
              src={Review3}
              alt="Jane Smith"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <p className="text-[#0f0f0f] font-semibold">Jane Smith</p>
              <p className="text-yellow-500 text-sm">Digital Marketing Expert</p>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-gray-300" />
            <FaStar className="text-gray-300" />
          </div>
        </div>

        {/* Fourth Review */}
        <div className="bg-white p-6 rounded-lg cursor-pointer"> 
          <h3 className="text-lg font-semibold text-[#0f0f0f]">Incredible learning experience</h3>
          <p className="text-gray-600 mt-2">Reviewed in Egypt on 3 April 2024</p>
          <div className="flex items-center mt-4">
            <img
              src={Review4}
              alt="Alice Johnson"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <p className="text-[#0f0f0f] font-semibold">Alice Johnson</p>
              <p className="text-yellow-500 text-sm">Content Strategist</p>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </div>
        </div>

        {/* Fifth Review */}
        <div className="bg-white p-6 rounded-lg cursor-pointer"> 
          <h3 className="text-lg font-semibold text-[#0f0f0f]">Thank you very much</h3>
          <p className="text-gray-600 mt-2">Reviewed in Egypt on 29 April 2024</p>
          <div className="flex items-center mt-4">
            <img
              src={Review5}
              alt="Bob Brown"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <p className="text-[#0f0f0f] font-semibold">Bob Brown</p>
              <p className="text-yellow-500 text-sm">SEO Analyst</p>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-gray-300" />
            <FaStar className="text-gray-300" />
          </div>
        </div>

        {/* Sixth Review */}
        <div className="bg-white p-6 rounded-lg cursor-pointer"> 
          <h3 className="text-lg font-semibold text-[#0f0f0f]">Highly recommend this course.</h3>
          <p className="text-gray-600 mt-2">Reviewed in Egypt on 13 April 2024</p>
          <div className="flex items-center mt-4">
            <img
              src={Review6}
              alt="Sara Wilson"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <p className="text-[#0f0f0f] font-semibold">Dario Di Cillo</p>
              <p className="text-yellow-500 text-sm">Brand Manager</p>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsTab;
